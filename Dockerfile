# Stage 1: Compile and build app

FROM node:24-bookworm-slim AS build

WORKDIR /usr/local/app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve app with caddy

FROM caddy:alpine

COPY ./Caddyfile /etc/caddy/Caddyfile

COPY --from=build /usr/local/app/dist /var/www/html

ENV PORT=80

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
