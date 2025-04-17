# Use official Node.js image as the base
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app will run on
EXPOSE 4000

# Start the application
CMD ["node", "server.js"]
