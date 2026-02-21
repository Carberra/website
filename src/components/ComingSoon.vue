<script setup lang="ts"></script>

<template>
  <section class="coming-soon">
    <h1 class="title">Something is being built.</h1>
    <p class="subtitle">Stay tuned — this site is under construction.</p>
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
