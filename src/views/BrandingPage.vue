<script setup lang="ts">
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";

interface ColourSwatch {
  name: string;
  hex: string;
  lightText: boolean;
}

interface FontShowcase {
  name: string;
  family: string;
  usage: string;
  sampleText: string;
  url: string;
}

const colours: ColourSwatch[] = [
  { name: "Brand Purple", hex: "#9e1cf3", lightText: true },
  { name: "Brand Blue", hex: "#1987bd", lightText: true },
  { name: "Accent Red", hex: "#c44040", lightText: true },
  { name: "Background", hex: "#0f0f0f", lightText: true },
  { name: "Surface", hex: "#1a1a1a", lightText: true },
  { name: "Text", hex: "#e0e0e0", lightText: false },
  { name: "Muted Text", hex: "#888888", lightText: false },
  { name: "White", hex: "#ffffff", lightText: false },
  { name: "Black", hex: "#000000", lightText: true },
];

const fonts: FontShowcase[] = [
  {
    name: "Zen Dots",
    family: '"Zen Dots", sans-serif',
    usage: "Logo",
    sampleText: "The quick brown fox jumps over the lazy dog",
    url: "https://fonts.google.com/specimen/Zen+Dots",
  },
  {
    name: "Victor Mono",
    family: '"Victor Mono", monospace',
    usage: "Headings + Thumbnails",
    sampleText: "The quick brown fox jumps over the lazy dog",
    url: "https://fonts.google.com/specimen/Victor+Mono",
  },
  {
    name: "Overpass",
    family: '"Overpass", sans-serif',
    usage: "Body text",
    sampleText: "The quick brown fox jumps over the lazy dog",
    url: "https://fonts.google.com/specimen/Overpass",
  },
];
</script>

<template>
  <div class="page">
    <SiteHeader />
    <main>
      <section class="branding-section">
        <h1 class="page-heading">Branding</h1>

        <div class="subsection">
          <h2>Colours</h2>
          <div class="colours-grid">
            <div
              v-for="colour in colours"
              :key="colour.hex"
              class="colour-swatch"
              :style="{ backgroundColor: colour.hex }"
            >
              <span class="swatch-name" :class="{ light: colour.lightText }">
                {{ colour.name }}
              </span>
              <span class="swatch-hex" :class="{ light: colour.lightText }">
                {{ colour.hex }}
              </span>
            </div>
          </div>
        </div>

        <div class="subsection">
          <h2>Gradient</h2>
          <div class="gradient-showcase">
            <div class="gradient-bar"></div>
            <p class="gradient-label">#9e1cf3 → #1987bd</p>
          </div>
        </div>

        <div class="subsection">
          <h2>Fonts</h2>
          <div class="fonts-list">
            <a
              v-for="font in fonts"
              :key="font.name"
              :href="font.url"
              target="_blank"
              rel="noopener noreferrer"
              class="font-card surface-card hover-lift"
            >
              <div class="font-header">
                <h3 class="font-name" :style="{ fontFamily: font.family }">{{ font.name }}</h3>
                <span class="font-usage">{{ font.usage }}</span>
              </div>
              <p class="font-sample" :style="{ fontFamily: font.family }">
                {{ font.sampleText }}
              </p>
              <p class="font-sample font-sample-large" :style="{ fontFamily: font.family }">
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm
              </p>
              <p class="font-family-name">{{ font.family }}</p>
            </a>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.branding-section {
  max-width: 60rem;
  margin: 0 auto;
}

.page-heading {
  margin-bottom: 2.5rem;
}

.subsection {
  margin-bottom: 3rem;
}

.subsection h2 {
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  margin-bottom: 1.25rem;
}

/* Colours */
.colours-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  gap: 1rem;
}

.colour-swatch {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.25rem;
  padding: 1rem;
  border-radius: 0.75rem;
  min-height: 7rem;
  border: 1px solid #2a2a2a;
}

.swatch-name {
  font-weight: 600;
  font-size: 0.85rem;
  color: #111;
}

.swatch-name.light {
  color: #f0f0f0;
}

.swatch-hex {
  font-family: var(--font-heading);
  font-size: 0.8rem;
  color: #333;
}

.swatch-hex.light {
  color: #ccc;
}

/* Gradient */
.gradient-showcase {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.gradient-bar {
  height: 5rem;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, var(--color-brand-start), var(--color-brand-end));
}

.gradient-label {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--color-text-muted);
  text-align: center;
}

/* Fonts */
.fonts-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.font-card {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: inherit;
}

.font-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.font-header h3 {
  font-size: 1.1rem;
}

.font-header .font-name {
  font-size: 1.1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #3a3a3a;
  width: 100%;
}

.font-usage {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.font-sample {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--color-brand);
}

.font-sample-large {
  font-size: 1.5rem;
  line-height: 1.4;
}

.font-family-name {
  font-family: var(--font-heading);
  font-size: 0.8rem;
  color: var(--color-text-muted);
}
</style>
