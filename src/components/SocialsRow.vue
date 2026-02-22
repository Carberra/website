<script setup lang="ts">
import SvgIcon from "@/components/SvgIcon.vue";
import { socials } from "@/data/socials";
</script>

<template>
  <div class="socials-row">
    <a
      v-for="social in socials"
      :key="social.label"
      :href="social.url"
      :aria-label="social.label"
      target="_blank"
      rel="noopener noreferrer"
      class="social-icon hover-lift"
    >
      <SvgIcon :path="social.iconPath" :size="28" :color="social.iconColor" />
    </a>
  </div>
</template>

<style scoped>
.socials-row {
  display: flex;
  gap: 1.5rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: var(--color-surface);
  color: var(--color-text);
}
</style>
