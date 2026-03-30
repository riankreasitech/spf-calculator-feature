# syntax=docker/dockerfile:1

# ─── Base ────────────────────────────────────────────────────────────────────
FROM node:20-alpine AS base
# libc6-compat is required for some native bindings on Alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app

# ─── Dev (hot-reload) ────────────────────────────────────────────────────────
FROM base AS dev
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1
# Install deps first (layer-cached unless package*.json changes)
COPY package.json package-lock.json* ./
RUN npm ci
# Source is mounted as a volume at runtime — don't COPY here
EXPOSE 3000
CMD ["npm", "run", "dev"]

# ─── Deps (production) ───────────────────────────────────────────────────────
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# ─── Builder ─────────────────────────────────────────────────────────────────
FROM base AS builder
WORKDIR /app
# Need all deps (including devDeps) to build
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ─── Runner (production) ─────────────────────────────────────────────────────
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Prerender cache directory
RUN mkdir .next && chown nextjs:nodejs .next

# Standalone output (requires `output: "standalone"` in next.config)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static   ./.next/static

USER nextjs

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

EXPOSE 3000
CMD ["node", "server.js"]
