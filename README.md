# samueldebartolo.com

Repository for Samuel DeBartolo's architecture portfolio

## Development

Use Node 24.16 or newer within Node 24, and npm 11. Install the locked dependencies with `npm ci`, then run `npm run dev`.

| Command                | Purpose                                               |
| ---------------------- | ----------------------------------------------------- |
| `npm run check`        | Type-check Astro components and TypeScript            |
| `npm run lint`         | Check source without modifying it                     |
| `npm run format`       | Format source and configuration                       |
| `npm run format:check` | Verify formatting without modifying files             |
| `npm run build`        | Build the static site, responsive images, and sitemap |
| `npm run preview`      | Serve the production build locally                    |

Direct dependencies use exact versions. Keep `@types/node` on the runtime's major version. TypeScript remains on 6.0.3, the newest version supported by both the Astro checker and typescript-eslint.

## Deployment

- Railway serves the static build with Caddy using the Dockerfile.
- The following commands can be used to locally build and run the Dockerfile that will be deployed
  - build image: `docker build . -t samueldebartolo.com`
  - create container: `docker run -d --name samueldebartolo.com -p 8080:80 samueldebartolo.com`
  - stop container: `docker stop samueldebartolo.com`
  - delete container: `docker rm samueldebartolo.com`
  - delete image: `docker rmi samueldebartolo.com`
