FROM node:alpine3.23 AS base

WORKDIR /usr/src/app

COPY package*.json ./

#FROM base AS dev

#RUN --mount=type=cache, target=/usr/src/app/.npm \
#   npm set cache /usr/src/app/.npm && \
#   npm install

RUN npm install --omit=dev

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]