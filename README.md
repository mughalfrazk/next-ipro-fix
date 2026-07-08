# next-ipro-fix

This is a Next.js 14 application.

## Local development

```bash
yarn install
yarn dev
```

Open `http://localhost:3000` in your browser.

## Docker

Uses a multi-stage build with Next.js `standalone` output.

### Environment variables

Create `.env.local` with the following:

```bash
AUTH_SECRET=<generate with: openssl rand -base64 32>

# Browser-facing URL (baked at build time)
NEXT_PUBLIC_IPRO_FIX_BASE_URL=http://localhost:4000/api/

# Server-facing URL — use host.docker.internal when the backend runs on the host machine
# Note: host.docker.internal works on Mac/Windows Docker Desktop only.
# On Linux Docker Engine, replace it with the actual backend hostname or IP address.
IPRO_FIX_BASE_URL=http://host.docker.internal:4000/api/
```

`AUTH_TRUST_HOST=true` is set automatically by `docker-compose.yml` and does not need to be in the env file.

### Run locally

```bash
docker-compose up --build
```

Open `http://localhost:3000`. Runtime vars are loaded from `.env.local` via `docker-compose.yml`; the build arg uses the Dockerfile default.

### Deploy on a server

On the server, create `.env.local` with production values for runtime variables (`AUTH_SECRET`, `IPRO_FIX_BASE_URL`). Then build and start the container, passing `NEXT_PUBLIC_IPRO_FIX_BASE_URL` as a shell variable so it is baked into the JS bundle at build time (placing it in `.env.local` alone is not enough — Docker Compose reads build args from the shell environment, not from `env_file`):

```bash
NEXT_PUBLIC_IPRO_FIX_BASE_URL=https://your-api.com/api/ docker-compose up --build -d
```

### Useful commands

```bash
docker-compose logs -f
docker-compose down
docker-compose restart
```
