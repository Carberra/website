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
    <div class="hero-bg">
      <img src="/setup.png" alt="" class="hero-bg-img" />
    </div>
    <SiteHeader class="hero-content" />
    <main class="hero-content">
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
        <p v-if="videosLoading" class="status-text">Loading videos...</p>
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
            class="social-icon hover-lift"
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
  position: relative;
  overflow: hidden;
}

/* Hero background */
.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 28rem;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.35;
  mask-image: linear-gradient(to bottom, black 30%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 30%, transparent 100%);
}

.hero-content {
  position: relative;
  z-index: 1;
}

main {
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
  /* background: linear-gradient(to bottom right, var(--color-brand-start), var(--color-brand-end));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
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
}
</style>
