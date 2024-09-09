# Stage 1 - the build process
FROM node:14 AS build-deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.17.9-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Build: docker build -t supermongol/hello-world-k8s-ui .
# Run local: docker run -p 80:80 hello-world-k8s-ui