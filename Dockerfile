
FROM node:12-alpine

RUN mkdir -p /home/node/app/node_modules
WORKDIR /home/node/app

COPY package*.json ./
COPY . . 

RUN npm install

CMD ["npm", "run", "dev"]
