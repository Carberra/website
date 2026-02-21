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
  <a :href="url" target="_blank" rel="noopener noreferrer" class="link-card hover-lift">
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
}

.label {
  font-size: 1.125rem;
  font-weight: 500;
}
</style>
