import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import LinksPage from "@/views/LinksPage.vue";
import VideosPage from "@/views/VideosPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/links",
      name: "links",
      component: LinksPage,
    },
    {
      path: "/videos",
      name: "videos",
      component: VideosPage,
    },
  ],
});

export default router;
