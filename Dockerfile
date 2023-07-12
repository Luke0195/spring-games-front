# de onde nossa imagem é baseada
FROM node:18.16-alpine
## O comando run nos permite executar o shell script que vai cria a pasta dentro do container do node
ENV WATCHPACK_POLLING true
RUN mkdir -p /usr/app

WORKDIR /usr/app
#Vai copiar todo o nosso source para o projeo
COPY package*.json ./

RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
