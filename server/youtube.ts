export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  viewCount: string;
}

interface YouTubeSearchItem {
  id: { videoId: string };
}

interface YouTubeSearchResponse {
  items: YouTubeSearchItem[];
  nextPageToken?: string;
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

export interface VideosPage {
  videos: Video[];
  nextPageToken: string | null;
}

export async function fetchChannelVideos(
  apiKey: string,
  channelId: string,
  maxResults: number = 50,
  pageToken?: string,
): Promise<VideosPage> {
  // Step 1: Search for videos from the channel
  const searchUrl = new URL(`${YOUTUBE_API_BASE}/search`);
  searchUrl.searchParams.set("key", apiKey);
  searchUrl.searchParams.set("channelId", channelId);
  searchUrl.searchParams.set("part", "id");
  searchUrl.searchParams.set("order", "date");
  searchUrl.searchParams.set("type", "video");
  searchUrl.searchParams.set("maxResults", String(maxResults));
  if (pageToken) {
    searchUrl.searchParams.set("pageToken", pageToken);
  }

  const searchRes = await fetch(searchUrl.toString());
  if (!searchRes.ok) {
    throw new Error(`YouTube search API error: ${searchRes.status}`);
  }

  const searchData = (await searchRes.json()) as YouTubeSearchResponse;
  const videoIds = searchData.items.map((item) => item.id.videoId);

  if (videoIds.length === 0) {
    return { videos: [], nextPageToken: null };
  }

  // Step 2: Get video details (snippet + statistics)
  const videosUrl = new URL(`${YOUTUBE_API_BASE}/videos`);
  videosUrl.searchParams.set("key", apiKey);
  videosUrl.searchParams.set("id", videoIds.join(","));
  videosUrl.searchParams.set("part", "snippet,statistics");

  const videosRes = await fetch(videosUrl.toString());
  if (!videosRes.ok) {
    throw new Error(`YouTube videos API error: ${videosRes.status}`);
  }

  const videosData = (await videosRes.json()) as YouTubeVideosResponse;

  return {
    videos: videosData.items.map((item) => ({
      id: item.id,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnailUrl: item.snippet.thumbnails.high?.url ?? item.snippet.thumbnails.medium?.url ?? "",
      publishedAt: item.snippet.publishedAt,
      viewCount: item.statistics.viewCount,
    })),
    nextPageToken: searchData.nextPageToken ?? null,
  };
}
