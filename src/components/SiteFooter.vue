<script setup lang="ts">
const currentYear: number = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <p class="copyright">&copy; {{ currentYear }} Carberra</p>
  </footer>
</template>

<style scoped>
.site-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 2rem;
}

.copyright {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}
</style>
