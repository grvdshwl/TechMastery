// What is Docker?

// Docker is a platform that allows you to automate the deployment, scaling, and management of applications
// using containerization. Containers are lightweight, portable, and consistent environments that contain everything
// needed to run an application.

// Key Features:

// 1. Containerization:
// Docker uses containers to package an application and its dependencies into a single unit.
// Containers are isolated from each other and the host system, ensuring consistency across different environments.

// 2. Portability:
// Containers can run on any system that has Docker installed, making it easy to move applications
// between development, testing, and production environments.

// 3. Lightweight:
// Docker containers share the host system's kernel, making them more efficient and faster to start than traditional virtual machines.

// 4. Version Control:
// Docker images (the blueprints for containers) can be versioned, allowing you to track changes and roll back
// to previous versions if needed.

// 5. Scalability:
// Docker makes it easy to scale applications horizontally by adding or removing containers as needed.

// 6. Docker Hub:
// Docker Hub is a cloud-based registry service where you can find and share container images with the community.

// How It Works:

// 1. Dockerfile:
// You define a Dockerfile, which is a text file containing instructions to build a Docker image.
// The Dockerfile specifies the base image, application code, dependencies, and any other configurations needed.

// 2. Building an Image:
// You use the Dockerfile to build a Docker image. This image is a snapshot of the application and its environment.

// Example Dockerfile:
const Dockerfile = `
# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]
`;

// 3. Running a Container:
// You run a Docker container based on the image. The container runs the application in an isolated environment.

// Example of building and running a Docker container using the Dockerfile:
const { exec } = require("child_process");

// Build the Docker image
exec("docker build -t my-node-app .", (err, stdout, stderr) => {
  if (err) {
    console.log("Error building image: " + err);
    return;
  }
  console.log(stdout);

  // Run the Docker container
  exec("docker run -p 3000:3000 my-node-app", (err, stdout, stderr) => {
    if (err) {
      console.log("Error running container: " + err);
      return;
    }
    console.log(stdout);
  });
});

// 4. Managing Containers:
// Docker provides commands to start, stop, and manage containers. You can list running containers,
// inspect their details, and manage their lifecycle.

// Example Usage:

// 1. Development Environment:
// Developers can use Docker to create consistent development environments. This ensures that
// the application runs the same way on every developer's machine.

// 2. Microservices Architecture:
// Docker is well-suited for microservices, where each service runs in its own container.
// This makes it easy to deploy, scale, and manage services independently.

// 3. Continuous Integration and Deployment (CI/CD):
// Docker integrates well with CI/CD pipelines, allowing automated testing and deployment of applications in containers.

// 4. Cloud Deployments:
// Docker containers can be deployed to various cloud platforms, making it easy to scale applications
// and manage them in the cloud.

// In Summary:

// Docker is a powerful tool for containerizing applications. It provides a consistent environment for
// development, testing, and production, ensuring that applications run smoothly across different systems.
// Docker simplifies deployment, improves scalability, and integrates well with modern development workflows.
