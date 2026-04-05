# Use the official Node.js 20 Alpine image as a lightweight base layer
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker layer caching
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the remaining source files into the container
COPY . .

# Expose port 3000 to allow traffic to the Express app
EXPOSE 3000

# Start the application using Node
CMD ["node", "index.js"]
