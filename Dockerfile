# --------------------------------------------
# Dependency installation
# --------------------------------------------

ARG NODE_VERSION=24-alpine

FROM node:${NODE_VERSION} AS dependencies
WORKDIR /app

ARG NEXT_PUBLIC_IPRO_FIX_BASE_URL
ENV NEXT_PUBLIC_IPRO_FIX_BASE_URL=${NEXT_PUBLIC_IPRO_FIX_BASE_URL:-http://localhost:4000/api/}
RUN echo $NEXT_PUBLIC_IPRO_FIX_BASE_URL

COPY package.json yarn.lock* ./

RUN if [ -f yarn.lock ]; then \
    corepack enable yarn && yarn install --frozen-lockfile --production=false; \
  else \
    echo "No lockfile found." && exit 1; \
  fi

# --------------------------------------------
# Build application in standalone mode
# --------------------------------------------

FROM node:${NODE_VERSION} AS builder
WORKDIR /app

ARG NEXT_PUBLIC_IPRO_FIX_BASE_URL
ENV NEXT_PUBLIC_IPRO_FIX_BASE_URL=${NEXT_PUBLIC_IPRO_FIX_BASE_URL:-http://localhost:4000/api/}

COPY --from=dependencies /app/node_modules ./node_modules

COPY . .

RUN mkdir -p public

ENV NODE_ENV=production

RUN if [ -f yarn.lock ]; then \
    corepack enable yarn && yarn build; \
  else \
    echo "No lockfile found." && exit 1; \
  fi

# --------------------------------------------
# Run the application
# --------------------------------------------

FROM node:${NODE_VERSION} AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NEXT_PUBLIC_IPRO_FIX_BASE_URL=${NEXT_PUBLIC_IPRO_FIX_BASE_URL:-http://localhost:4000/api/}

COPY --from=builder --chown=node:node /app/public ./public

RUN mkdir .next
RUN chown node:node .next

COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

USER node

EXPOSE 3000
CMD ["node", "server.js"]