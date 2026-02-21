<script setup lang="ts">
import VideoCard from "@/components/VideoCard.vue";

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  viewCount: string;
  unavailable?: boolean;
}

defineProps<{
  videos: Video[];
}>();
</script>

<template>
  <div class="content-grid">
    <VideoCard
      v-for="video in videos"
      :key="video.id"
      :id="video.id"
      :title="video.title"
      :description="video.description"
      :thumbnail-url="video.thumbnailUrl"
      :published-at="video.publishedAt"
      :view-count="video.viewCount"
      :unavailable="video.unavailable ?? false"
    />
  </div>
</template>
