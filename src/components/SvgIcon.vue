<script setup lang="ts">
defineProps<{
  path: string;
  size?: number;
  color?: string;
}>();
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size ?? 24"
    :height="size ?? 24"
    viewBox="0 0 24 24"
    :fill="color ?? 'currentColor'"
    role="img"
  >
    <path :d="path" />
  </svg>
</template>
