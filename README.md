# samueldebartolo.com
Repository for Samuel DeBartolo's architecture portfolio

## development
- Clone the project, navigate into the `src` directory and run `python3 -m http.server` (requires `python3` be installed), the website should now be available at `localhost:8000`

## Deployment
- On a push to master the website will be deployed automatically by Railway
- The following commands can be used to locally build and run the Dockerfile that will be deployed
    - build image: `docker build . -t samueldebartolo.com`
    - create container: `docker run -d --name samueldebartolo.com -p 8080:80 samueldebartolo.com`
    - stop container: `docker stop samueldebartolo.com`
    - delete container: `docker rm samueldebartolo.com`
    - delete image: `docker rmi samueldebartolo.com`
