<script setup lang="ts">
import { ref, onMounted } from "vue";

import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import SocialsRow from "@/components/SocialsRow.vue";
import VideoGrid from "@/components/VideoGrid.vue";
import type { Video } from "@/components/VideoGrid.vue";

const latestVideos = ref<Video[]>([]);
const videosLoading = ref<boolean>(true);

const taglines: string[] = [
  "Programming tutorials and tech content.",
  "It's pronounced car-buh-ruh, actually.",
  "Making videos about Python. The programming language, not the snake.",
  "No, not the capital of Australia.",
];

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
        <p class="hero-tagline">{{ taglines[Math.floor(Math.random() * taglines.length)] }}</p>
        <a
          href="https://youtube.com/@Carberra"
          target="_blank"
          rel="noopener noreferrer"
          class="hero-cta"
        >
          Watch on YouTube
        </a>
      </section>

      <section class="about-teaser">
        <div class="about-teaser-layout">
          <img src="/headshot.jpg" alt="Carberra" class="about-teaser-img" />
          <div class="about-teaser-body">
            <h2>About me</h2>
            <p class="about-teaser-text">
              Hey, I'm Ethan! I'm a software developer from the UK, but you probably know me best
              for making Python videos on the internet.
            </p>
            <RouterLink to="/about" class="about-teaser-link">Learn more →</RouterLink>
          </div>
        </div>
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
        <p class="about-teaser-text">Sponsorship enquiries are not currently being accepted.</p>
        <SocialsRow />
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

/* About teaser */
.about-teaser {
  max-width: 56rem;
  width: 100%;
  margin: 0 auto;
}

.about-teaser-layout {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.about-teaser-img {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.about-teaser-body {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.about-teaser-body h2 {
  font-size: clamp(1.25rem, 3vw, 1.75rem);
}

.about-teaser-text {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--color-text-muted);
}

.about-teaser-link {
  font-size: 0.95rem;
  white-space: nowrap;
  align-self: flex-start;
}

@media (max-width: 640px) {
  .about-teaser-layout {
    flex-direction: column;
    text-align: center;
  }

  .about-teaser-img {
    width: 8rem;
    height: 8rem;
  }

  .about-teaser-link {
    align-self: center;
  }
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
</style>
