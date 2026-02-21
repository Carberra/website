<script setup lang="ts"></script>

<template>
  <header class="site-header">
    <RouterLink to="/" class="logo">CARBERRA</RouterLink>
  </header>
</template>

<style scoped>
.site-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 2rem;
}

.logo {
  font-family: var(--font-logo);
  font-size: 1.5rem;
  letter-spacing: 0.05em;
  background: linear-gradient(to bottom right, var(--color-brand-start), var(--color-brand-end));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
