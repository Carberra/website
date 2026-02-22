<script setup lang="ts">
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import LinkCard from "@/components/LinkCard.vue";
import { socials } from "@/data/socials";
</script>

<template>
  <div class="page">
    <SiteHeader />
    <main>
      <section class="links-section">
        <h1 class="page-heading">Links</h1>
        <div class="links-list">
          <LinkCard
            v-for="social in socials"
            :key="social.label"
            :label="social.label"
            :url="social.url"
            :icon-path="social.iconPath"
            :icon-color="social.iconColor"
          />
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
}

.links-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
}

.links-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
}
</style>
