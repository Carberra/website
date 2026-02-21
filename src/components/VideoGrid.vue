<script setup lang="ts">
import VideoCard from "@/components/VideoCard.vue";

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  viewCount: string;
}

defineProps<{
  videos: Video[];
}>();
</script>

<template>
  <div class="videos-grid">
    <VideoCard
      v-for="video in videos"
      :key="video.id"
      :id="video.id"
      :title="video.title"
      :description="video.description"
      :thumbnail-url="video.thumbnailUrl"
      :published-at="video.publishedAt"
      :view-count="video.viewCount"
    />
  </div>
</template>

<style scoped>
.videos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 1.5rem;
  justify-items: center;
}
</style>
