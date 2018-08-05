FROM node:8

RUN mkdir -p /var/master-server

COPY . /var/master-server

WORKDIR /var/master-server

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
