# Use official Node.js image
FROM node:18

# Set working directory for backend
WORKDIR /app/backend

# Copy backend files
COPY backend/package*.json ./
RUN npm install --only=production
COPY backend/ .

# Set working directory for frontend
WORKDIR /app/frontend
COPY frontend/ .

# Install serve to host frontend
RUN npm install -g serve

# Expose ports
EXPOSE 8080
EXPOSE 4000

# Start both frontend and backend using a small shell script
WORKDIR /app

CMD sh -c "node backend/server.js & serve -s frontend -l 8080"
