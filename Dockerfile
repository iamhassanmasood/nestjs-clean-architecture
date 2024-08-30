FROM node:18.8.0-alpine

WORKDIR /app

COPY package*.json ./

COPY .env .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4000

CMD ["npm", "run", "start:dev"]
