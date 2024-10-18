FROM node:14

WORKDIR /app

COPY package.json ./

RUN npm install -g http-server

COPY . .

EXPOSE 8080

CMD ["http-server", "-p", "8080"]
