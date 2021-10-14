# Dockerfile

FROM node:16.10

WORKDIR /usr/src

RUN npm install -g eslint babel-eslint
RUN npm install -g eslint-config-airbnb-base eslint-plugin-import

COPY eslintrc.yml /root/.eslintrc.yml

CMD ["eslint", "/app"]

