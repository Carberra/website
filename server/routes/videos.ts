import { Router } from "express";

import { MemoryCache } from "../cache.js";
import { fetchChannelVideos, type VideosPage } from "../youtube.js";

const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes

const CARBERRA_CHANNEL_ID = "UC13cYu7lec-oOcqQf5L-brg";

export function createVideosRouter(): Router {
  const router = Router();
  const cache = new MemoryCache();

  router.get("/", async (req, res) => {
    const apiKey = process.env.YOUTUBE_API_KEY;
    if (!apiKey) {
      res.status(500).json({ error: "YouTube API key not configured" });
      return;
    }

    const pageToken = (req.query.pageToken as string) || undefined;
    const cacheKey = `videos:${pageToken ?? "first"}`;

    const cached = cache.get<VideosPage>(cacheKey);
    if (cached) {
      res.json(cached);
      return;
    }

    try {
      const page = await fetchChannelVideos(apiKey, CARBERRA_CHANNEL_ID, 50, pageToken);
      cache.set(cacheKey, page, CACHE_TTL_MS);
      res.json(page);
    } catch (err) {
      console.error("Failed to fetch videos:", err);
      res.status(502).json({ error: "Failed to fetch videos from YouTube" });
    }
  });

  return router;
}
