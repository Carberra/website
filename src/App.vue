<script setup lang="ts">
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import ComingSoon from "@/components/ComingSoon.vue";
</script>

<template>
  <div class="app-container">
    <SiteHeader />
    <main>
      <ComingSoon />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
