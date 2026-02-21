import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { createVideosRouter } from "./routes/videos.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const port = parseInt(process.env.PORT ?? "3000", 10);

app.use("/api/videos", createVideosRouter());

// Serve static files in production
const staticDir = path.join(__dirname, "..", "dist");
app.use(express.static(staticDir));
app.get("/{*splat}", (_req, res) => {
  res.sendFile(path.join(staticDir, "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
