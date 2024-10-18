# Use Node.js image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json
COPY package.json ./

# Install http-server
RUN npm install -g http-server

# Copy the rest of your application code
COPY . .

# Expose the application port
EXPOSE 8080

# Start the server
CMD ["http-server", "-p", "8080"]
