# Use official Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy backend files and install dependencies
COPY backend backend
WORKDIR /app/backend
RUN npm install

# Move back to root and copy frontend
WORKDIR /app
COPY frontend frontend

# Expose backend port
EXPOSE 4000

# Start backend server
CMD ["node", "backend/server.js"]
