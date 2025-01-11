# Stage 1: Compile and build app

FROM node:22-bullseye-slim AS build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN yarn

RUN yarn build

# Stage 2: Serve app with caddy

FROM caddy:alpine

COPY ./Caddyfile /etc/caddy/Caddyfile

COPY --from=build /usr/local/app/dist /var/www/html

CMD export PORT="${PORT:-80}" \ 
    && caddy run --config /etc/caddy/Caddyfile
