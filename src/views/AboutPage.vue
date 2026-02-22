<script setup lang="ts">
import { computed } from "vue";
import { marked } from "marked";

import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import SocialsRow from "@/components/SocialsRow.vue";
import aboutMd from "@/content/about.md?raw";

const aboutHtml = computed(() => marked.parse(aboutMd) as string);
</script>

<template>
  <div class="page">
    <SiteHeader />
    <main>
      <section class="about-section">
        <h1 class="page-heading">About</h1>

        <div class="about-layout">
          <div class="headshot-wrapper">
            <img src="/headshot.jpg" alt="Carberra" class="headshot" />
            <SocialsRow />
          </div>
          <div class="about-text" v-html="aboutHtml"></div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.about-section {
  max-width: 56rem;
  margin: 0 auto;
}

.about-layout {
  display: flex;
  align-items: flex-start;
  gap: 3rem;
}

.headshot-wrapper {
  flex-shrink: 0;
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.headshot {
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  object-fit: cover;
}

.headshot-wrapper :deep(.socials-row) {
  max-width: 16rem;
  flex-wrap: wrap;
  justify-content: center;
}

.about-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--color-text);
}

.about-text :deep(p) {
  margin-bottom: 1rem;
}

.about-text :deep(p:last-child) {
  margin-bottom: 0;
}

.about-text :deep(a) {
  color: var(--color-accent);
}

@media (max-width: 640px) {
  .about-layout {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .headshot-wrapper {
    width: 100%;
  }

  .headshot {
    width: 12rem;
    height: 12rem;
  }

  .headshot-wrapper :deep(.socials-row) {
    max-width: none;
  }
}
</style>
