# syntax=docker.io/docker/dockerfile:1@sha256:2780b5c3bab67f1f76c781860de469442999ed1a0d7992a5efdf2cffc0e3d769

FROM ghcr.io/pnpm/pnpm:11.1.1@sha256:2ae5576f1e7dfb11a947c71faa61533c1089859bfc6766270ae7d102f55f71fa AS base
FROM dhi.io/node:26.1.0-alpine3.23@sha256:89ba306d54a9025da2e7862ff22ae13a95d825a0e459217138242115dfc700a5 AS runtime

# renovate: datasource=docker depName=dhi.io/node
ARG NODE_VERSION="26.1.0"

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
