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
IPRO_FIX_BASE_URL=http://host.docker.internal:4000/api/
```

`AUTH_TRUST_HOST=true` is set automatically by `compose.yml` and does not need to be in the env file.

### Run locally

```bash
docker-compose up --build
```

Open `http://localhost:3000`. Runtime vars are loaded from `.env.local` via `compose.yml`; the build arg uses the Dockerfile default.

### Deploy on a server

On the server, create an env file with production values (replace `localhost` URLs with real hostnames), then:

```bash
docker-compose up --build -d
```

### Useful commands

```bash
docker-compose logs -f
docker-compose down
docker-compose restart
```
