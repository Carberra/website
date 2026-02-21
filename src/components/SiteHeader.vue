<script setup lang="ts">
import { ref } from "vue";

const menuOpen = ref(false);

function toggleMenu(): void {
  menuOpen.value = !menuOpen.value;
}

function closeMenu(): void {
  menuOpen.value = false;
}
</script>

<template>
  <header class="site-header">
    <RouterLink to="/" class="logo" @click="closeMenu">CARBERRA</RouterLink>

    <nav class="nav-desktop">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/videos" class="nav-link">Videos</RouterLink>
      <RouterLink to="/links" class="nav-link">Links</RouterLink>
      <RouterLink to="/branding" class="nav-link">Branding</RouterLink>
    </nav>

    <button
      class="hamburger"
      :class="{ open: menuOpen }"
      aria-label="Toggle menu"
      @click="toggleMenu"
    >
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>

    <Transition name="slide">
      <nav v-if="menuOpen" class="nav-mobile">
        <RouterLink to="/" class="nav-link" @click="closeMenu">Home</RouterLink>
        <RouterLink to="/videos" class="nav-link" @click="closeMenu">Videos</RouterLink>
        <RouterLink to="/links" class="nav-link" @click="closeMenu">Links</RouterLink>
        <RouterLink to="/branding" class="nav-link" @click="closeMenu">Branding</RouterLink>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 2rem;
  position: relative;
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

/* Desktop nav */
.nav-desktop {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--color-text);
  opacity: 1;
}

.nav-link.router-link-exact-active {
  color: var(--color-text);
}

/* Hamburger button */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  z-index: 20;
}

.hamburger .bar {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--color-text);
  border-radius: 2px;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.hamburger.open .bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.open .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.open .bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile nav */
.nav-mobile {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--color-surface);
  padding: 1rem 2rem 1.5rem;
  gap: 0.75rem;
  z-index: 10;
}

/* Slide transition */
.slide-enter-active,
.slide-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem);
}

@media (max-width: 640px) {
  .nav-desktop {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}
</style>
