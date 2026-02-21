export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  viewCount: string;
  unavailable: boolean;
}

interface YouTubeVideoSnippet {
  title: string;
  description: string;
  publishedAt: string;
  thumbnails: {
    medium?: { url: string };
    high?: { url: string };
  };
}

interface YouTubeVideoStatistics {
  viewCount: string;
}

interface YouTubeVideoItem {
  id: string;
  snippet: YouTubeVideoSnippet;
  statistics: YouTubeVideoStatistics;
}

interface YouTubeVideosResponse {
  items: YouTubeVideoItem[];
}

const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";
const BROWSE_API_URL = "https://www.youtube.com/youtubei/v1/browse";
const BROWSE_API_KEY = "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8"; // This is a public API key, no need to keep it secret.

export interface Playlist {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoCount: string;
}

export interface VideosPage {
  videos: Video[];
  nextPageToken: string | null;
  totalResults: number;
}

export interface PlaylistsPage {
  playlists: Playlist[];
  totalResults: number;
}

// --- Scraping: fetch all video IDs from channel tabs ---

export type ContentType = "videos" | "shorts" | "streams";

const TAB_CONFIG: Record<ContentType, { path: string; tabTitle: string }> = {
  videos: { path: "/videos", tabTitle: "Videos" },
  shorts: { path: "/shorts", tabTitle: "Shorts" },
  streams: { path: "/streams", tabTitle: "Live" },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
function extractVideoIds(items: any[]): string[] {
  const ids: string[] = [];
  for (const item of items) {
    const renderer =
      item?.richItemRenderer?.content?.videoRenderer ??
      item?.richItemRenderer?.content?.reelItemRenderer ??
      item?.richItemRenderer?.content?.shortsLockupViewModel;
    const videoId =
      renderer?.videoId ?? renderer?.onTap?.innertubeCommand?.reelWatchEndpoint?.videoId;
    if (videoId) {
      ids.push(videoId);
    }
  }
  return ids;
}

function extractContinuationToken(items: any[]): string | null {
  for (const item of items) {
    const token = item?.continuationItemRenderer?.continuationEndpoint?.continuationCommand?.token;
    if (token) return token;
  }
  return null;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

const INNERTUBE_CONTEXT = {
  client: {
    clientName: "WEB",
    clientVersion: "2.20240101.00.00",
    hl: "en",
    gl: "GB",
  },
};

const FETCH_HEADERS: Record<string, string> = {
  "User-Agent":
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  "Accept-Language": "en-GB,en;q=0.9",
  Cookie: "CONSENT=YES+1",
};

async function scrapeTabVideoIds(channelId: string, contentType: ContentType): Promise<string[]> {
  const { path, tabTitle } = TAB_CONFIG[contentType];

  const channelUrl = `https://www.youtube.com/channel/${channelId}${path}`;
  const pageRes = await fetch(channelUrl, { headers: FETCH_HEADERS });
  if (!pageRes.ok) {
    throw new Error(`Failed to fetch channel ${path} page: ${pageRes.status}`);
  }

  const html = await pageRes.text();
  const match = html.match(/var ytInitialData\s*=\s*({.+?});\s*<\/script>/s);
  if (!match) {
    throw new Error(`Could not find ytInitialData in channel ${path} page`);
  }

  const initialData = JSON.parse(match[1]);

  const tabs = initialData?.contents?.twoColumnBrowseResultsRenderer?.tabs ?? [];
  let targetTab = null;
  for (const tab of tabs) {
    const title = tab?.tabRenderer?.title;
    if (title === tabTitle) {
      targetTab = tab.tabRenderer;
      break;
    }
  }
  if (!targetTab) {
    console.warn(`[youtube] Could not find "${tabTitle}" tab, returning empty list`);
    return [];
  }

  const gridContents = targetTab?.content?.richGridRenderer?.contents ?? [];

  const allIds: string[] = extractVideoIds(gridContents);
  let continuationToken = extractContinuationToken(gridContents);

  while (continuationToken) {
    const browseRes = await fetch(`${BROWSE_API_URL}?key=${BROWSE_API_KEY}&prettyPrint=false`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...FETCH_HEADERS },
      body: JSON.stringify({
        context: INNERTUBE_CONTEXT,
        continuation: continuationToken,
      }),
    });

    if (!browseRes.ok) {
      console.warn(`[youtube] Browse API returned ${browseRes.status}, stopping pagination`);
      break;
    }

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const browseData: any = await browseRes.json();
    const actions: any[] = browseData?.onResponseReceivedActions ?? [];

    let items: any[] = [];
    for (const action of actions) {
      const appendItems = action?.appendContinuationItemsAction?.continuationItems;
      if (appendItems) {
        items = appendItems;
        break;
      }
    }
    /* eslint-enable @typescript-eslint/no-explicit-any */

    if (items.length === 0) break;

    allIds.push(...extractVideoIds(items));
    continuationToken = extractContinuationToken(items);
  }

  return allIds;
}

// --- Video details via YouTube Data API ---

async function fetchVideoDetails(apiKey: string, videoIds: string[]): Promise<Video[]> {
  if (videoIds.length === 0) return [];

  // Videos API accepts max 50 IDs per request
  const videosUrl = new URL(`${YOUTUBE_API_BASE}/videos`);
  videosUrl.searchParams.set("key", apiKey);
  videosUrl.searchParams.set("id", videoIds.join(","));
  videosUrl.searchParams.set("part", "snippet,statistics");

  const videosRes = await fetch(videosUrl.toString());
  if (!videosRes.ok) {
    throw new Error(`YouTube videos API error: ${videosRes.status}`);
  }

  const videosData = (await videosRes.json()) as YouTubeVideosResponse;

  const videoMap = new Map<string, YouTubeVideoItem>();
  for (const item of videosData.items) {
    videoMap.set(item.id, item);
  }

  const videos: Video[] = [];
  for (const id of videoIds) {
    const item = videoMap.get(id);
    if (item) {
      videos.push({
        id: item.id,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnailUrl:
          item.snippet.thumbnails.high?.url ?? item.snippet.thumbnails.medium?.url ?? "",
        publishedAt: item.snippet.publishedAt,
        viewCount: item.statistics.viewCount,
        unavailable: false,
      });
    } else {
      videos.push({
        id,
        title: "",
        description: "",
        thumbnailUrl: "",
        publishedAt: "",
        viewCount: "",
        unavailable: true,
      });
    }
  }

  return videos;
}

// --- Cached video ID lists + paginated fetching ---

const idCache = new Map<ContentType, { ids: string[]; timestamp: number }>();
const ID_CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

async function getVideoIds(channelId: string, contentType: ContentType): Promise<string[]> {
  const now = Date.now();
  const cached = idCache.get(contentType);
  if (cached && now - cached.timestamp < ID_CACHE_TTL_MS) {
    return cached.ids;
  }

  console.log(`[youtube] Scraping ${contentType} IDs from channel...`);
  const ids = await scrapeTabVideoIds(channelId, contentType);
  idCache.set(contentType, { ids, timestamp: now });
  console.log(`[youtube] Found ${ids.length} ${contentType} IDs`);
  return ids;
}

export async function fetchChannelVideos(
  apiKey: string,
  channelId: string,
  contentType: ContentType = "videos",
  pageSize: number = 50,
  pageToken?: string,
): Promise<VideosPage> {
  const allIds = await getVideoIds(channelId, contentType);
  const totalResults = allIds.length;

  // pageToken is the string index offset, e.g. "50", "100", etc.
  const offset = pageToken ? parseInt(pageToken, 10) : 0;
  const pageIds = allIds.slice(offset, offset + pageSize);

  if (pageIds.length === 0) {
    return { videos: [], nextPageToken: null, totalResults };
  }

  const videos = await fetchVideoDetails(apiKey, pageIds);

  const nextOffset = offset + pageSize;
  const nextPageToken = nextOffset < allIds.length ? String(nextOffset) : null;

  return { videos, nextPageToken, totalResults };
}

// --- Playlist scraping ---

/* eslint-disable @typescript-eslint/no-explicit-any */
function extractPlaylists(items: any[]): Playlist[] {
  const playlists: Playlist[] = [];
  for (const item of items) {
    const vm = item?.lockupViewModel;
    if (!vm) continue;

    const id = vm.contentId ?? "";
    const title = vm.metadata?.lockupMetadataViewModel?.title?.content ?? "";

    const thumbVm =
      vm.contentImage?.collectionThumbnailViewModel?.primaryThumbnail?.thumbnailViewModel;
    const sources = thumbVm?.image?.sources ?? [];
    const thumbnailUrl = sources.length > 0 ? sources[sources.length - 1].url : "";

    let videoCount = "";
    const overlays = thumbVm?.overlays ?? [];
    for (const ov of overlays) {
      const badges = ov?.thumbnailOverlayBadgeViewModel?.thumbnailBadges ?? [];
      for (const b of badges) {
        const text = b?.thumbnailBadgeViewModel?.text;
        if (text) videoCount = text;
      }
    }

    if (id) {
      playlists.push({ id, title, thumbnailUrl, videoCount });
    }
  }
  return playlists;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

let cachedPlaylists: { playlists: Playlist[]; timestamp: number } | null = null;

async function scrapeAllPlaylists(channelId: string): Promise<Playlist[]> {
  const channelUrl = `https://www.youtube.com/channel/${channelId}/playlists`;
  const pageRes = await fetch(channelUrl, { headers: FETCH_HEADERS });
  if (!pageRes.ok) {
    throw new Error(`Failed to fetch channel playlists page: ${pageRes.status}`);
  }

  const html = await pageRes.text();
  const match = html.match(/var ytInitialData\s*=\s*({.+?});\s*<\/script>/s);
  if (!match) {
    throw new Error("Could not find ytInitialData in channel playlists page");
  }

  const initialData = JSON.parse(match[1]);
  const tabs = initialData?.contents?.twoColumnBrowseResultsRenderer?.tabs ?? [];
  let playlistsTab = null;
  for (const tab of tabs) {
    if (tab?.tabRenderer?.title === "Playlists") {
      playlistsTab = tab.tabRenderer;
      break;
    }
  }
  if (!playlistsTab) {
    console.warn('[youtube] Could not find "Playlists" tab, returning empty list');
    return [];
  }

  const sections = playlistsTab?.content?.sectionListRenderer?.contents ?? [];
  const gridItems = sections[0]?.itemSectionRenderer?.contents?.[0]?.gridRenderer?.items ?? [];

  const allPlaylists: Playlist[] = extractPlaylists(gridItems);
  let continuationToken = extractContinuationToken(gridItems);

  while (continuationToken) {
    const browseRes = await fetch(`${BROWSE_API_URL}?key=${BROWSE_API_KEY}&prettyPrint=false`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...FETCH_HEADERS },
      body: JSON.stringify({
        context: INNERTUBE_CONTEXT,
        continuation: continuationToken,
      }),
    });

    if (!browseRes.ok) {
      console.warn(`[youtube] Browse API returned ${browseRes.status}, stopping pagination`);
      break;
    }

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const browseData: any = await browseRes.json();
    const actions: any[] = browseData?.onResponseReceivedActions ?? [];

    let items: any[] = [];
    for (const action of actions) {
      const appendItems = action?.appendContinuationItemsAction?.continuationItems;
      if (appendItems) {
        items = appendItems;
        break;
      }
    }
    /* eslint-enable @typescript-eslint/no-explicit-any */

    if (items.length === 0) break;

    allPlaylists.push(...extractPlaylists(items));
    continuationToken = extractContinuationToken(items);
  }

  return allPlaylists;
}

export async function fetchChannelPlaylists(channelId: string): Promise<PlaylistsPage> {
  const now = Date.now();
  if (cachedPlaylists && now - cachedPlaylists.timestamp < ID_CACHE_TTL_MS) {
    return {
      playlists: cachedPlaylists.playlists,
      totalResults: cachedPlaylists.playlists.length,
    };
  }

  console.log("[youtube] Scraping playlists from channel...");
  const playlists = await scrapeAllPlaylists(channelId);
  cachedPlaylists = { playlists, timestamp: now };
  console.log(`[youtube] Found ${playlists.length} playlists`);

  return { playlists, totalResults: playlists.length };
}
