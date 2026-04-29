# samueldebartolo.com
Repository for Samuel DeBartolo's architecture portfolio

## Development
1. clone the repository
2. navigate into it 
3. run `npm install`
    - installs dependencies
4. run `npm run dev`
    - runs the Astro dev server with hot reloading enabled

## Deployment
- On a push to master the website will be deployed automatically by Railway
- The following commands can be used to locally build and run the Dockerfile that will be deployed
    - build image: `docker build . -t samueldebartolo.com`
    - create container: `docker run -d --name samueldebartolo.com -p 8080:80 samueldebartolo.com`
    - stop container: `docker stop samueldebartolo.com`
    - delete container: `docker rm samueldebartolo.com`
    - delete image: `docker rmi samueldebartolo.com`
