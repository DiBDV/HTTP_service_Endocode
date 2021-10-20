# Dockerfile

FROM node:lts-alpine

WORKDIR /usr/src/app

COPY .eslintrc.yml /root/.eslintrc.yml
COPY package.json ./
COPY Makefile ./


RUN npm install -g eslint babel-eslint
RUN npm install -g eslint-config-airbnb-base eslint-plugin-import

COPY server.js server.js

CMD ["eslint", "/usr/src/app"]
