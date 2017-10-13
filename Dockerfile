FROM node:alpine

ENV HOST=0.0.0.0
EXPOSE 3000
WORKDIR /usr/src/app

COPY package.json package-lock.json /usr/src/app/
RUN npm install

COPY . /usr/src/app
RUN npm run build

ENV NODE_ENV=production
CMD npm start
