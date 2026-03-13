FROM node:alpine3.23 AS build

WORKDIR /usr/src/app

COPY ./frontend/docker_frontend/package*.json ./

#FROM base AS dev

#RUN --mount=type=cache, target=/usr/src/app/.npm \
#   npm set cache /usr/src/app/.npm && \
#  npm install

RUN npm install

COPY ./frontend/docker_frontend .

RUN ["npm", "run", "build"] 

FROM nginxinc/nginx-unprivileged:alpine3.23-perl

RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
