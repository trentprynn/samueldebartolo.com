# Stage 1: Compile and build app

FROM node:24-bullseye-slim AS build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm ci

RUN npm run build

# Stage 2: Serve app with caddy

FROM caddy:alpine

COPY ./Caddyfile /etc/caddy/Caddyfile

COPY --from=build /usr/local/app/dist /var/www/html

ENV PORT=80

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
