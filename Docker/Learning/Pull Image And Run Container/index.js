// Step 1: Pull an Image
// Use the `docker pull` command to download a Docker image from Docker Hub or another registry.
// Example: To pull the official Node.js image, use `docker pull node`.
// This downloads the image layers and stores them locally for use.

// Step 2: Verify the Pulled Image
// After pulling, you can verify the image is available locally with `docker images`.
// This command lists all images available on your system.

// Step 3: Run a Container from the Image
// Use the `docker run` command to create and start a container from the pulled image.
// Example:
// `docker run -d --name my-container -p 3000:3000 node`
// - `-d`: Runs the container in detached mode (in the background).
// - `--name`: Assigns a custom name to the container (e.g., `my-container`).
// - `-p`: Maps a host port (e.g., 3000) to a container port (e.g., 3000).
// - `node`: Specifies the image to use for the container.

// Step 4: Verify the Running Container
// Use `docker ps` to list all running containers and ensure your container is active.
// This shows details like container ID, name, ports, and the command used to start it.

// Step 5: Interact with the Running Container
// You can interact with the container, for example, by attaching to it or executing commands inside it.
// Example: `docker exec -it my-container bash` opens a terminal inside the container.

// Step 6: Stop or Remove the Container
// To stop the container, use `docker stop my-container`.
// To remove it, use `docker rm my-container` (stop it first if it’s running).
