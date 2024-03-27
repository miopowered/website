FROM node:21-alpine as build

WORKDIR /app
COPY package.json package-lock.json .

RUN npm ci

COPY . .

RUN npm run docs:build

FROM nginx:alpine as runtime

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/.vuepress/dist /usr/share/nginx/html

EXPOSE 80