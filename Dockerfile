# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

RUN npm install

# Install dependencies
RUN npm install express 

COPY . .

EXPOSE 5000

# Specify the command to run your app (assuming your entry point is app.js)
CMD ["node", "app.js"]
