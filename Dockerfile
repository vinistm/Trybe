FROM node:16-alpine

ENV PORT=3000

EXPOSE 3000
EXPOSE 3001
EXPOSE 3002

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

CMD ["yarn", "dev"]
