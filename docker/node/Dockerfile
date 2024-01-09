FROM node:18-alpine

WORKDIR /var/www/app

ENV NODE_ENV=development


COPY . /var/www/app/

#npm install for backend
RUN cd /var/www/app/server && npm install 

#npm install for frontend
RUN cd /var/www/app/client && npm install