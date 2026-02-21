<script setup lang="ts">
import PlaylistCard from "@/components/PlaylistCard.vue";

export interface Playlist {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoCount: string;
}

defineProps<{
  playlists: Playlist[];
}>();
</script>

<template>
  <div class="content-grid">
    <PlaylistCard
      v-for="playlist in playlists"
      :key="playlist.id"
      :id="playlist.id"
      :title="playlist.title"
      :thumbnail-url="playlist.thumbnailUrl"
      :video-count="playlist.videoCount"
    />
  </div>
</template>
