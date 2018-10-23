FROM node:8

# Source app directory in the container
WORKDIR /usr/src/app

# Install app dependencies
COPY webapp/package*.json ./
RUN npm install

# Bundle app source
COPY ./webapp .

EXPOSE 3000
CMD ["npm", "start"]