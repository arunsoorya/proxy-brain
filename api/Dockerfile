# Use a lighter version of Node as a parent image
FROM node:11
# Set the working directory to /api
WORKDIR usr/src/api
# # copy package.json into the container at /api
COPY package*.json ./
# install dependencies
RUN npm install nodemon -g
# Copy the current directory contents into the container at /api
COPY . .
# Make port 3000 available to the world outside this container
EXPOSE 9001
# Run the app when the container launches
CMD ["npm", "start"]