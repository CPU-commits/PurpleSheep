# STAGE 0 -> Builder
FROM oven/bun:1.1-alpine AS installer

WORKDIR /app

COPY package*.json ./

RUN bun install
# STAGE 1 -> Nuxt build
FROM oven/bun:1.1-alpine AS builder

WORKDIR /app

COPY --from=installer /app/node_modules ./node_modules

COPY . .

ENV IS_BUILDING=building

RUN bunx nuxi build

# STAGE 2 -> Nuxt entrypoint
FROM node:22.3.0-alpine3.20

WORKDIR /app

COPY --from=builder /app/.output ./.output

ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

ENTRYPOINT [ "node", ".output/server/index.mjs" ]