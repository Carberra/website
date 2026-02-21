<script setup lang="ts">
import { ref, onMounted } from "vue";
import { siYoutube, siGithub, siDiscord } from "simple-icons";

import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import SvgIcon from "@/components/SvgIcon.vue";
import VideoGrid from "@/components/VideoGrid.vue";
import type { Video } from "@/components/VideoGrid.vue";

interface SocialLink {
  label: string;
  url: string;
  iconPath: string;
  iconColor: string;
}

const socials: SocialLink[] = [
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

const latestVideos = ref<Video[]>([]);
const videosLoading = ref<boolean>(true);

onMounted(async () => {
  try {
    const res = await fetch("/api/videos");
    if (res.ok) {
      const data = await res.json();
      latestVideos.value = data.videos.slice(0, 6);
    }
  } finally {
    videosLoading.value = false;
  }
});
</script>

<template>
  <div class="page">
    <SiteHeader />
    <main>
      <section class="hero">
        <h1 class="hero-title">CARBERRA</h1>
        <p class="hero-tagline">
          Programming tutorials and tech content. Normally of <i>at least</i> OK quality.
        </p>
        <a
          href="https://youtube.com/@Carberra"
          target="_blank"
          rel="noopener noreferrer"
          class="hero-cta"
        >
          Watch on YouTube
        </a>
      </section>

      <section class="latest-videos">
        <div class="section-header">
          <h2>Latest videos</h2>
          <RouterLink to="/videos" class="see-all">See all videos →</RouterLink>
        </div>
        <p v-if="videosLoading" class="status">Loading videos...</p>
        <VideoGrid v-else :videos="latestVideos" />
      </section>

      <section class="socials">
        <h2>Find me elsewhere</h2>
        <div class="socials-row">
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.url"
            :aria-label="social.label"
            target="_blank"
            rel="noopener noreferrer"
            class="social-icon"
          >
            <SvgIcon :path="social.iconPath" :size="28" :color="social.iconColor" />
          </a>
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
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

/* Hero */
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  padding: 4rem 1rem 2rem;
}

.hero-title {
  font-family: var(--font-logo);
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  letter-spacing: 0.05em;
  background: linear-gradient(to bottom right, var(--color-brand-start), var(--color-brand-end));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-tagline {
  font-size: clamp(1rem, 2.5vw, 1.35rem);
  color: var(--color-text-muted);
  max-width: 32rem;
}

.hero-cta {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  background: linear-gradient(135deg, var(--color-brand-start), var(--color-brand-end));
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  transition:
    opacity 0.2s ease,
    transform 0.15s ease;
}

.hero-cta:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Latest videos */
.latest-videos {
  max-width: 72rem;
  width: 100%;
  margin: 0 auto;
}

.section-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  gap: 1rem;
  flex-wrap: wrap;
}

.section-header h2 {
  font-size: clamp(1.25rem, 3vw, 1.75rem);
}

.see-all {
  font-size: 0.95rem;
  white-space: nowrap;
}

.status {
  text-align: center;
  color: var(--color-text-muted);
}

/* Socials */
.socials {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.socials h2 {
  font-size: clamp(1.25rem, 3vw, 1.75rem);
}

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
  transition:
    background-color 0.2s ease,
    transform 0.15s ease;
}

.social-icon:hover {
  background-color: #242424;
  transform: translateY(-2px);
  opacity: 1;
}
</style>
