// **What is the Use of a Compose File?**
// A Docker Compose file (`docker-compose.yml`) is used to define and manage multi-container Docker applications.
// It simplifies container orchestration by allowing you to define services, networks, and volumes in a single YAML file.
// Instead of running multiple `docker run` commands, you can start all services with a single command: `docker-compose up`.

// **How to Make a Compose File?**
// 1. Create a file named `docker-compose.yml` in your project root.
// 2. Define your services (containers), including their image, build context, ports, volumes, environment variables, etc.

// **Example Compose File**
/*
version: "3.8" # Specifies the Compose file version

services:
  app: # Define the service name
    build: . # Build the image from the current directory
    ports:
      - "3000:3000" # Map port 3000 on the host to port 3000 in the container
    volumes:
      - .:/app # Mount the current directory to /app in the container
    environment:
      NODE_ENV: development # Set environment variables
    command: nodemon index.js # Override the default command to use nodemon

  db: # Define a database service
    image: postgres:15 # Use the official PostgreSQL image
    environment:
      POSTGRES_USER: user # Set the PostgreSQL username
      POSTGRES_PASSWORD: password # Set the PostgreSQL password
      POSTGRES_DB: mydb # Set the database name
    ports:
      - "5432:5432" # Map port 5432 on the host to port 5432 in the container

volumes:
  db_data: # Named volume for database persistence
*/

// **Commands to Use the Compose File**
/*
# Build and start all services in the Compose file
docker-compose up

# Start the services in detached mode (runs in the background)
docker-compose up -d

# Stop all running services
docker-compose down

# Rebuild the services (e.g., after code changes or Dockerfile updates)
docker-compose up --build

# View logs of all services
docker-compose logs -f
*/

// **Run the Compose File**
// 1. Save the `docker-compose.yml` file in your project directory.
// 2. Open a terminal in the same directory.
// 3. Run `docker-compose up` to start all services defined in the file.

// **Benefits of Docker Compose**
// - Simplifies managing multi-container applications.
// - Provides a declarative way to configure services.
// - Makes it easier to share your setup with others or use in CI/CD pipelines.
