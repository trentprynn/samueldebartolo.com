FROM caddy:alpine

COPY ./Caddyfile /etc/caddy/Caddyfile

COPY ./src /var/www/html

CMD export PORT="${PORT:-80}" \ 
    && caddy run --config /etc/caddy/Caddyfile
