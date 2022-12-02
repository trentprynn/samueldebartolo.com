# Portfolio
Repository to hold source code for samueldebartolo.com portfolio.

## Development server
1. clone the repository
2. navigate into it
3. run `yarn`
4. run `yarn start` to run local application at `http://localhost:4200/` with hot reloading

## Deployment
- on a push to master the website will be built and deployed automatically by Railway 
- The following commands can be used to locally build and run the Dockerfile that will be deployed
    - build image: `docker build . -t samueldebartolo.com`
    - create container: `docker run -d --name samueldebartolo.com -p 8080:80 samueldebartolo.com`
    - stop container: `docker stop samueldebartolo.com`
    - delete container: `docker rm samueldebartolo.com`
    - delete image: `docker rmi samueldebartolo.com`
