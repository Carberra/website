<script setup lang="ts">
import { siYoutube, siGithub, siDiscord } from "simple-icons";

import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import LinkCard from "@/components/LinkCard.vue";

interface LinkItem {
  label: string;
  url: string;
  iconPath: string;
  iconColor: string;
}

const links: LinkItem[] = [
  {
    label: "YouTube",
    url: "https://youtube.com/@Carberra",
    iconPath: siYoutube.path,
    iconColor: `#${siYoutube.hex}`,
  },
  {
    label: "GitHub",
    url: "https://github.com/Carberra",
    iconPath: siGithub.path,
    iconColor: "#e0e0e0",
  },
  {
    label: "Discord",
    url: "https://discord.gg/5vVgQpK",
    iconPath: siDiscord.path,
    iconColor: `#${siDiscord.hex}`,
  },
];
</script>

<template>
  <div class="page">
    <SiteHeader />
    <main>
      <section class="links-section">
        <h1 class="title">Links</h1>
        <div class="links-list">
          <LinkCard
            v-for="link in links"
            :key="link.label"
            :label="link.label"
            :url="link.url"
            :icon-path="link.iconPath"
            :icon-color="link.iconColor"
          />
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
}

.links-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
}

.title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  text-align: center;
}

.links-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
}
</style>
