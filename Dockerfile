FROM node:16.15.0-bullseye
RUN mkdir /app
WORKDIR /app
RUN npm install -g gatsby-cli