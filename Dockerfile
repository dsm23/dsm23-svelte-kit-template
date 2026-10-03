# syntax=docker.io/docker/dockerfile:1@sha256:4edf897a3ffa55b89f906fc8cc78afdb3f1834cc9c7083565e611a8a7d5fe99e

FROM ghcr.io/pnpm/pnpm:11.28.3@sha256:b646ee1ec9f720a0659047861f4390ca30523492b5c3bf2ea6c5a8162401aeb2 AS base
FROM dhi.io/node:26.1.0-alpine3.23@sha256:89ba306d54a9025da2e7862ff22ae13a95d825a0e459217138242115dfc700a5 AS runtime

# renovate: datasource=docker depName=dhi.io/node
ARG NODE_VERSION="26.5.0"

# Stage 1: Install dependencies only when needed
FROM base AS deps

WORKDIR /app

ENV LEFTHOOK=0

# Install dependencies based on the preferred package manager
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
  pnpm runtime set node "$NODE_VERSION" -g && pnpm install --frozen-lockfile

# Stage 2: Build stage
FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm runtime set node "$NODE_VERSION" -g \
  && pnpm run build

# Stage 3: Production image
FROM runtime

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/static ./static

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder /app/.svelte-kit ./.svelte-kit
COPY --from=builder /app/build ./build

EXPOSE 3000

ENV PORT=3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
ENV HOSTNAME="0.0.0.0"
CMD ["node", "build"]
