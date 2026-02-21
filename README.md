# Carberra Website

The official website for the [Carberra](https://youtube.com/@Carberra) YouTube channel.

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) 22+
- [Podman](https://podman.io/) or [Docker](https://www.docker.com/) (for containerised builds)

### Local development

```sh
npm install
npm run dev
```

### Formatting

```sh
npm run format        # Fix formatting
npm run format:check  # Check formatting
```

## Container build

The project uses a multi-stage build with nginx for production serving. The `Containerfile` is compatible with both Podman and Docker.

### With Podman

```sh
podman build -t carberra-website .
podman run -d -p 8080:80 carberra-website
```

### With Docker

```sh
docker build -f Containerfile -t carberra-website .
docker run -d -p 8080:80 carberra-website
```

The site will be available at `http://localhost:8080`.
