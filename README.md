# Carberra Website

The official website for the [Carberra](https://youtube.com/@Carberra) YouTube channel.

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) 22+
- [Podman](https://podman.io/) or [Docker](https://www.docker.com/) (for containerised builds)

### Setup

```sh
npm install
git config core.hooksPath .githooks
```

### Local development

```sh
npm run dev
```

### Formatting

```sh
npm run format        # Fix formatting
npm run format:check  # Check formatting
```

## Containers

Both Podman and Docker are supported. The examples below use Podman — for Docker, replace `podman` with `docker`.

### Development (hot reload)

Builds a dev image once, then bind-mounts your source code so changes are reflected instantly via Vite's HMR:

```sh
podman build -t carberra-dev -f Containerfile.dev .
podman run --rm -p 5173:5173 -v .:/app carberra-dev
```

The dev site will be available at `http://localhost:5173`.

### Production

Multi-stage build that compiles the app and serves it with nginx:

```sh
podman build -t carberra-website .
podman run -d -p 8080:80 carberra-website
```

The production site will be available at `http://localhost:8080`.
