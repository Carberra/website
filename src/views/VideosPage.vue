<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import VideoGrid from "@/components/VideoGrid.vue";
import type { Video } from "@/components/VideoGrid.vue";
import PlaylistGrid from "@/components/PlaylistGrid.vue";
import type { Playlist } from "@/components/PlaylistGrid.vue";

type ContentType = "videos" | "shorts" | "streams" | "playlists";

interface VideosResponse {
  videos: Video[];
  nextPageToken: string | null;
  totalResults: number;
}

interface PlaylistsResponse {
  playlists: Playlist[];
  totalResults: number;
}

const contentType = ref<ContentType>("videos");
const headingLabel = computed(() => {
  const labels: Record<ContentType, string> = {
    videos: "Videos",
    shorts: "Shorts",
    streams: "Streams",
    playlists: "Playlists",
  };
  return labels[contentType.value];
});
const videos = ref<Video[]>([]);
const playlists = ref<Playlist[]>([]);
const loading = ref<boolean>(true);
const loadingMore = ref<boolean>(false);
const error = ref<string | null>(null);
const nextPageToken = ref<string | null>(null);
const totalResults = ref<number>(0);
let busy = false;
const seenIds = new Set<string>();

async function fetchPage(pageToken?: string): Promise<void> {
  const params = new URLSearchParams();
  params.set("type", contentType.value);
  if (pageToken) params.set("pageToken", pageToken);
  const url = `/api/videos?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch videos (${res.status})`);
  }
  const data: VideosResponse = await res.json();
  const newVideos = data.videos.filter((v) => !seenIds.has(v.id));
  for (const v of newVideos) {
    seenIds.add(v.id);
  }
  videos.value.push(...newVideos);
  nextPageToken.value = data.nextPageToken;
  if (data.totalResults > 0) {
    totalResults.value = data.totalResults;
  }
}

async function fetchPlaylists(): Promise<void> {
  const res = await fetch("/api/playlists");
  if (!res.ok) {
    throw new Error(`Failed to fetch playlists (${res.status})`);
  }
  const data: PlaylistsResponse = await res.json();
  playlists.value = data.playlists;
  totalResults.value = data.totalResults;
}

async function switchType(type: ContentType): Promise<void> {
  if (type === contentType.value) return;
  contentType.value = type;
  videos.value = [];
  playlists.value = [];
  seenIds.clear();
  nextPageToken.value = null;
  totalResults.value = 0;
  error.value = null;
  busy = false;
  loading.value = true;

  try {
    if (type === "playlists") {
      await fetchPlaylists();
    } else {
      await fetchPage();
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : "An error occurred";
  }
  loading.value = false;
}

async function onScroll(): Promise<void> {
  if (busy || !nextPageToken.value || contentType.value === "playlists") return;

  const scrollBottom = window.innerHeight + window.scrollY;
  const docHeight = document.documentElement.scrollHeight;
  if (scrollBottom < docHeight - 400) return;

  busy = true;
  loadingMore.value = true;

  try {
    await fetchPage(nextPageToken.value);
  } catch (err) {
    error.value = err instanceof Error ? err.message : "An error occurred";
  } finally {
    loadingMore.value = false;
    busy = false;
  }
}

onMounted(async () => {
  try {
    await fetchPage();
  } catch (err) {
    error.value = err instanceof Error ? err.message : "An error occurred";
  }
  loading.value = false;

  window.addEventListener("scroll", onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <div class="page">
    <SiteHeader />
    <main>
      <section class="videos-section">
        <h1 class="page-heading">
          {{ headingLabel }}
          <span v-if="totalResults > 0" class="count">({{ totalResults }})</span>
        </h1>

        <div class="type-toggle">
          <button
            :class="['toggle-btn', { active: contentType === 'videos' }]"
            @click="switchType('videos')"
          >
            Videos
          </button>
          <button
            :class="['toggle-btn', { active: contentType === 'shorts' }]"
            @click="switchType('shorts')"
          >
            Shorts
          </button>
          <button
            :class="['toggle-btn', { active: contentType === 'streams' }]"
            @click="switchType('streams')"
          >
            Streams
          </button>
          <button
            :class="['toggle-btn', { active: contentType === 'playlists' }]"
            @click="switchType('playlists')"
          >
            Playlists
          </button>
        </div>

        <p v-if="loading" class="status-text">Loading, please wait...</p>
        <p v-else-if="error" class="status-text error">{{ error }}</p>

        <template v-else-if="contentType === 'playlists'">
          <PlaylistGrid :playlists="playlists" />
        </template>
        <template v-else>
          <VideoGrid :videos="videos" />

          <p v-if="loadingMore" class="status-text">Loading more...</p>
          <p v-else-if="!nextPageToken && videos.length > 0" class="status-text">
            You've reached the end.
          </p>
        </template>
      </section>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.videos-section {
  max-width: 72rem;
  margin: 0 auto;
}

.count {
  font-size: 0.8em;
  color: var(--color-text-muted);
  font-weight: 400;
}

.status-text {
  font-size: 1.1rem;
  margin-top: 2rem;
}

.status-text.error {
  color: var(--color-accent);
}

.type-toggle {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.toggle-btn {
  padding: 0.5rem 1.25rem;
  border: 1px solid #3a3a3a;
  border-radius: 0.5rem;
  background: transparent;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.toggle-btn:hover {
  border-color: var(--color-text-muted);
  color: var(--color-text);
}

.toggle-btn.active {
  background-color: var(--color-surface);
  border-color: var(--color-text-muted);
  color: var(--color-text);
}
</style>
