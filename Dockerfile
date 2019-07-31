FROM node:10.16.0-alpine
  RUN mkdir -p /home/node/mern_task
  WORKDIR /home/node/mern_task
  COPY . .
  RUN npm install && npm run build
  CMD npm start