FROM node:8

# Source app directory in the container
WORKDIR /usr/src/app

# Install app dependencies
COPY demo-app/package*.json ./
RUN npm install

# Bundle app source
COPY ./demo-app .

EXPOSE 4200
CMD ["npm", "start"]