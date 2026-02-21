<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import VideoGrid from "@/components/VideoGrid.vue";
import type { Video } from "@/components/VideoGrid.vue";

interface VideosResponse {
  videos: Video[];
  nextPageToken: string | null;
  totalResults: number;
}

const videos = ref<Video[]>([]);
const loading = ref<boolean>(true);
const loadingMore = ref<boolean>(false);
const error = ref<string | null>(null);
const nextPageToken = ref<string | null>(null);
const totalResults = ref<number>(0);
const sentinel = ref<HTMLElement | null>(null);

let observer: IntersectionObserver | null = null;

async function fetchVideos(pageToken?: string): Promise<void> {
  try {
    const url = pageToken
      ? `/api/videos?pageToken=${encodeURIComponent(pageToken)}`
      : "/api/videos";
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch videos (${res.status})`);
    }
    const data: VideosResponse = await res.json();
    videos.value.push(...data.videos);
    nextPageToken.value = data.nextPageToken;
    if (data.totalResults > 0) {
      totalResults.value = data.totalResults;
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : "An error occurred";
  }
}

let sentinelVisible = false;

async function loadMore(): Promise<void> {
  if (loadingMore.value || !nextPageToken.value) return;
  loadingMore.value = true;
  await fetchVideos(nextPageToken.value);
  loadingMore.value = false;

  // If the sentinel is still in view after loading, fetch the next page too
  if (sentinelVisible && nextPageToken.value) {
    loadMore();
  }
}

onMounted(async () => {
  await fetchVideos();
  loading.value = false;

  observer = new IntersectionObserver(
    (entries) => {
      sentinelVisible = entries[0].isIntersecting;
      if (sentinelVisible) {
        loadMore();
      }
    },
    { rootMargin: "200px" },
  );

  if (sentinel.value) {
    observer.observe(sentinel.value);
  }
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <div class="page">
    <SiteHeader />
    <main>
      <section class="videos-section">
        <h1 class="heading">
          Videos
          <span v-if="totalResults > 0" class="count">({{ totalResults }})</span>
        </h1>

        <p v-if="loading" class="status">Loading videos...</p>
        <p v-else-if="error" class="status error">{{ error }}</p>

        <VideoGrid v-else :videos="videos" />

        <p v-if="loadingMore" class="status">Loading more videos...</p>
        <p v-else-if="!loading && !nextPageToken && videos.length > 0" class="status">
          No more videos.
        </p>
        <div ref="sentinel" class="sentinel"></div>
      </section>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 2rem 1rem;
}

.videos-section {
  max-width: 72rem;
  margin: 0 auto;
}

.heading {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  text-align: center;
  margin-bottom: 2rem;
}

.count {
  font-size: 0.8em;
  color: var(--color-text-muted);
  font-weight: 400;
}

.status {
  text-align: center;
  color: var(--color-text-muted);
  font-size: 1.1rem;
  margin-top: 2rem;
}

.status.error {
  color: var(--color-accent);
}

.sentinel {
  height: 1px;
}
</style>
