FROM node:20 AS build
WORKDIR /usr/src/app
COPY frontend/package.json frontend/package-lock.json ./ 
RUN npm install
COPY frontend/ . 
RUN npm run build

FROM nginx:alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
