<script setup lang="ts">
import SvgIcon from "@/components/SvgIcon.vue";

defineProps<{
  label: string;
  url: string;
  iconPath: string;
  iconColor?: string;
}>();
</script>

<template>
  <a :href="url" target="_blank" rel="noopener noreferrer" class="link-card">
    <SvgIcon :path="iconPath" :size="32" :color="iconColor" />
    <span class="label">{{ label }}</span>
  </a>
</template>

<style scoped>
.link-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 24rem;
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  background-color: var(--color-surface);
  color: var(--color-text);
  transition:
    background-color 0.2s ease,
    transform 0.15s ease;
}

.link-card:hover {
  background-color: #242424;
  transform: translateY(-2px);
  opacity: 1;
}

.label {
  font-size: 1.125rem;
  font-weight: 500;
}
</style>
