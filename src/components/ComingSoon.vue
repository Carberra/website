<script setup lang="ts">
import { ref } from "vue";

const titles = [
  "Something is being built.",
  "Anyone got a time machine?",
  "Coming soon to a browser near you.",
  "Coming soon™",
  "Be patient, my child.",
];
const title = ref(titles[Math.floor(Math.random() * titles.length)]);
const subtitle = ref("Stay tuned — this site is under construction.");
</script>

<template>
  <section class="coming-soon">
    <h1 class="title">{{ title }}</h1>
    <p class="subtitle">{{ subtitle }}</p>
  </section>
</template>

<style scoped>
.coming-soon {
  text-align: center;
  padding: 2rem;
}

.title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
  color: var(--color-text);
}

.subtitle {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: var(--color-text-muted);
  max-width: 40ch;
  margin: 0 auto;
}
</style>
