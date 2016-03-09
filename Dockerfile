FROM alpine

RUN apk add --no-cache nodejs
RUN mkdir /usr/data

WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install

COPY . /usr/src/app

ENV API_KEY changeme

EXPOSE 3000

CMD node index.js
