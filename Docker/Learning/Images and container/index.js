/**
 * Docker Image:
 * -------------
 * - A Docker image is a lightweight, standalone, and executable package that contains everything
 *   needed to run a piece of software. This includes the code, runtime, libraries, environment
 *   variables, and configuration files.
 * - Images are the source or blueprint for Docker containers. They are immutable, meaning they
 *   cannot be modified once created.
 * - Think of a Docker image as a template or snapshot of the application environment.
 * - Docker images are created using a `Dockerfile`, which specifies the base image (e.g.,
 *   `node`, `python`), dependencies, and instructions for setting up the environment.
 * - Images are stored in registries, such as Docker Hub, AWS Elastic Container Registry (ECR), or
 *   private registries. You can pull images from registries or push your custom images to them.
 *
 * Example:
 * - A Node.js application may have an image that includes the Node.js runtime and all required
 *   dependencies for the app to run.
 *
 * Commands:
 * - `docker build .` -> Builds a Docker image from a Dockerfile.
 * - `docker pull <image_name>` -> Pulls an image from a registry.
 * - `docker images` -> Lists all available images on the local system.
 *
 * Docker Container:
 * -----------------
 * - A Docker container is a runnable instance of a Docker image. Containers are the actual
 *   environments where applications run.
 * - Containers are isolated from each other and the host system, ensuring consistent behavior
 *   across different environments (development, testing, production).
 * - Unlike images, containers are mutable, meaning you can make changes to a running container
 *   (e.g., modifying a file) though these changes won't persist unless committed to a new image.
 * - Containers share the host OS kernel but have their own filesystem, network, and process space.
 *   This lightweight nature makes containers highly efficient.
 *
 * Example:
 * - A Node.js container would run the application using the image mentioned above. You can start
 *   multiple containers from the same image.
 *
 * Commands:
 * - `docker run <image_name>` -> Creates and starts a container from the specified image.
 * - `docker ps` -> Lists all running containers.
 * - `docker stop <container_id>` -> Stops a running container.
 * - `docker rm <container_id>` -> Deletes a stopped container.
 * - `docker exec -it <container_id> <command>` -> Runs a command in a running container (e.g.,
 *   starting a shell session).
 *
 * Relationship Between Image and Container:
 * -----------------------------------------
 * - Images are static blueprints, while containers are dynamic, live instances of these
 *   blueprints.
 * - You can create multiple containers from a single image, each running independently with
 *   isolated resources.
 *
 * Practical Analogy:
 * ------------------
 * - Docker Image: Think of it as a class in object-oriented programming.
 * - Docker Container: Think of it as an object (instance) created from the class.
 */
