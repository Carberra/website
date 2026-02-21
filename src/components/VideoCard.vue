<script setup lang="ts">
defineProps<{
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  viewCount: string;
  unavailable?: boolean;
}>();

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatViews(count: string): string {
  const num = parseInt(count, 10);
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M views`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K views`;
  return `${num} views`;
}

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}
</script>

<template>
  <a
    :href="`https://www.youtube.com/watch?v=${id}`"
    target="_blank"
    rel="noopener noreferrer"
    class="video-card surface-card hover-lift"
  >
    <template v-if="unavailable">
      <div class="thumbnail unavailable-thumb"></div>
      <div class="info">
        <p class="unavailable-text">Information not available.</p>
      </div>
    </template>
    <template v-else>
      <img :src="thumbnailUrl" :alt="title" class="thumbnail" loading="lazy" />
      <div class="info">
        <h3 class="title">{{ title }}</h3>
        <p class="description">{{ truncate(description, 100) }}</p>
        <div class="meta">
          <span>{{ formatDate(publishedAt) }}</span>
          <span>{{ formatViews(viewCount) }}</span>
        </div>
      </div>
    </template>
  </a>
</template>

<style scoped>
.video-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 22rem;
  overflow: hidden;
}

.thumbnail {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
}

.title {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.3;
}

.description {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  line-height: 1.4;
}

.meta {
  display: flex;
  gap: 1rem;
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.unavailable-thumb {
  background-color: var(--color-bg);
}

.unavailable-text {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  font-style: italic;
}
</style>
