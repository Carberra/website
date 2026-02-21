# Carberra Website

The official website for the [Carberra](https://youtube.com/@Carberra) YouTube channel.

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) 22+
- [Podman](https://podman.io/) or [Docker](https://www.docker.com/) (for production container builds)

### Setup

```sh
npm install
git config core.hooksPath .githooks
```

### Environment variables

Create a `.env` file in the project root:

```sh
YOUTUBE_API_KEY=your_api_key_here
```

You will need a [Google API key](https://console.cloud.google.com/apis/credentials) with the YouTube Data API v3 enabled.

### Local development

```sh
npm run dev
```

### Formatting

```sh
npm run format        # Fix formatting
npm run format:check  # Check formatting
```

## Production container

Both Podman and Docker are supported. The examples below use Podman — for Docker, replace `podman` with `docker`.

Multi-stage build that compiles the app and runs it with Express:

```sh
podman build -t carberra-website .
podman run -d -p 3000:3000 --env-file .env --name carberra-website carberra-website
```

The production site will be available at `http://localhost:3000`.
