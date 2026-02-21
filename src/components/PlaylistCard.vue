<script setup lang="ts">
defineProps<{
  id: string;
  title: string;
  thumbnailUrl: string;
  videoCount: string;
}>();
</script>

<template>
  <a
    :href="`https://www.youtube.com/playlist?list=${id}`"
    target="_blank"
    rel="noopener noreferrer"
    class="playlist-card content-card surface-card hover-lift"
  >
    <div class="thumb-wrapper">
      <img :src="thumbnailUrl" :alt="title" class="thumbnail" loading="lazy" />
      <span v-if="videoCount" class="badge">{{ videoCount }}</span>
    </div>
    <div class="info">
      <h3 class="title">{{ title }}</h3>
    </div>
  </a>
</template>

<style scoped>
.thumb-wrapper {
  position: relative;
}

.badge {
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0.25rem;
}
</style>
