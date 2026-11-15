# ---- build stage ----
FROM oven/bun:1 AS builder

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .

# .env is dockerignored, so pass the API URL in as a build arg instead.
# Vite bakes VITE_* values into the JS bundle at build time - it's not a
# secret, it ends up readable in the shipped bundle either way.
ARG VITE_API_URL=http://localhost:8081/api
ENV VITE_API_URL=$VITE_API_URL

RUN bun run build

# ---- runtime stage ----
FROM nginx:1.27-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5180

CMD ["nginx", "-g", "daemon off;"]
