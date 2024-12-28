// Step 1: Ensure Docker is Installed
// Before starting, make sure Docker is installed and running on your machine.
// You can verify the installation with `docker --version`.

// Step 2: Create a Dockerfile
// Create a `Dockerfile` in your project directory to define the container environment.
// Example:
// ```
// FROM node:16  // Use the official Node.js image
// WORKDIR /app  // Set the working directory in the container
// COPY package*.json ./  // Copy package files
// RUN npm install  // Install dependencies
// COPY . .  // Copy the project files
// EXPOSE 3000  // Expose the container's port
// CMD ["npm", "start"]  // Define the command to run your app
// ```

// Step 3: Build the Docker Image
// Use the `docker build` command to create an image from the Dockerfile.
// Example:
// `docker build -t my-project .`
// - `-t`: Tags the image with a name (e.g., `my-project`).
// - `.`: Specifies the build context (current directory).

// Step 4: Run a Container from the Image
// Use the `docker run` command to start a container with the image.
// Example:
// `docker run -d --name my-container -p 3000:3000 my-project`
// - `-d`: Runs the container in detached mode.
// - `--name`: Assigns a custom name to the container (e.g., `my-container`).
// - `-p`: Maps a host port (e.g., 3000) to a container port (e.g., 3000).
// - `my-project`: Specifies the image to use.

// Step 5: Verify the Running Container
// Use `docker ps` to ensure the container is running.
// This will display container details like its ID, name, and mapped ports.

// Step 6: Test the Project
// Open a browser or use a tool like Postman to test your project.
// Navigate to `http://localhost:3000` (or the port you exposed) to verify it's working.

// Step 7: Debug or Access the Container
// To debug or inspect, use `docker exec` to access the container’s shell.
// Example:
// `docker exec -it my-container bash`
// This lets you explore the container environment and troubleshoot issues.

// Step 8: Stop the Container
// Once done, stop the container using `docker stop`.
// Example:
// `docker stop my-container`

// Step 9: Remove Unused Containers and Images (Optional)
// Use `docker rm` to remove stopped containers and `docker rmi` to delete unused images.
// Examples:
// `docker rm my-container`
// `docker rmi my-project`
