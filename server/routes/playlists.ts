import { Router } from "express";

import { MemoryCache } from "../cache.js";
import { fetchChannelPlaylists, type PlaylistsPage } from "../youtube.js";

const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes

const CARBERRA_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID as string;

export function createPlaylistsRouter(): Router {
  const router = Router();
  const cache = new MemoryCache();

  router.get("/", async (_req, res) => {
    const cacheKey = "playlists";

    const cached = cache.get<PlaylistsPage>(cacheKey);
    if (cached) {
      res.json(cached);
      return;
    }

    try {
      const page = await fetchChannelPlaylists(CARBERRA_CHANNEL_ID);
      cache.set(cacheKey, page, CACHE_TTL_MS);
      res.json(page);
    } catch (err) {
      console.error("Failed to fetch playlists:", err);
      res.status(502).json({ error: "Failed to fetch playlists from YouTube" });
    }
  });

  return router;
}
