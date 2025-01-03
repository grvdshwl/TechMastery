// **What are Volumes in Docker?**
// Volumes in Docker are used to persist data generated by a container so it can be reused by the container or shared between containers.
// They are managed by Docker and are not tied to the lifecycle of a specific container, ensuring data is not lost when a container stops or is deleted.

// **Continuous Changes in Container with Volume**
// Using a volume allows you to continuously apply changes to your code or files on your host system,
// and they will reflect inside the container in real-time. This is especially useful during development
// when changes in code need to be tested frequently without rebuilding the container.

// **Add Nodemon and Update Dockerfile**
// Nodemon is a tool that automatically restarts the Node.js application when file changes in the directory are detected.
// To use it in a Docker container, you'll need to update the Dockerfile accordingly.

// Sample Dockerfile for a Node.js application with Nodemon
/*
# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Copy the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Use nodemon to run the app
CMD ["nodemon", "index.js"]
*/

// **Create Volume and Update Container**
// To use volumes with your container, you can mount a volume when starting the container.
// This links a directory on your host system to a directory in the container.

/*
# Start a container with a volume
# Replace "/path/to/your/code" with the directory of your application code on the host system
docker run -v /path/to/your/code:/app -p 3000:3000 your-node-image

# Explanation:
# -v /path/to/your/code:/app maps the host directory to the container's /app directory.
# Changes in the host's code will reflect in the container in real-time.
*/

// **Test the Setup**
// After the container is running with the volume, make changes to your code on the host system.
// Nodemon in the container will automatically detect changes and restart the Node.js app.
