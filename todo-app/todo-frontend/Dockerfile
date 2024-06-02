# Stage 1: Build the application
FROM node:20 AS build
WORKDIR /usr/src/app
ENV VITE_BACKEND_URL=http://localhost:8080/api
COPY . .

RUN npm install
RUN npm run build



# Stage 2: Serve the application with Nginx
FROM nginx:1.20.1
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

