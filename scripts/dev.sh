#!/bin/sh

# Compile and start the API server in the background
npx tsc -p tsconfig.server.json && node --env-file=.env server-dist/index.js &

# Start the Vite dev server in the foreground
npx vite
