FROM node:18.14.2

WORKDIR /app

COPY package*.json ./


RUN npm install

COPY . .

COPY prisma ./prisma/ 

EXPOSE 3000

RUN npm run build

RUN npx prisma generate

CMD [ "npm", "run", "start" ]