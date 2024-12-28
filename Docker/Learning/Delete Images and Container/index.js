// Step 1: List All Containers
// Use the `docker ps` command to list all running containers.
// Example:
// `docker ps`
// Add `-a` to include stopped containers:
// `docker ps -a`

// Step 2: Delete a Container
// Use the `docker rm` command to remove a specific container by its ID or name.
// Example:
// `docker rm container_id_or_name`

// Force removal of a running container (use cautiously):
// `docker rm -f container_id_or_name`

// Step 3: Remove All Stopped Containers
// Use `docker container prune` to remove all stopped containers.
// Example:
// `docker container prune`
// You will be prompted to confirm; add `-f` to skip the prompt:
// `docker container prune -f`

// Step 4: List All Images
// Use `docker images` to list all Docker images on your system.
// Example:
// `docker images`

// Step 5: Delete a Specific Image
// Use `docker rmi` to remove an image by its ID or name.
// Example:
// `docker rmi image_id_or_name`

// Step 6: Force Delete an Image
// If the image is in use by containers, you can force delete it with `-f`.
// Example:
// `docker rmi -f image_id_or_name`

// Step 7: Remove All Unused Images
// Use `docker image prune` to remove unused images.
// Example:
// `docker image prune`
// To remove ALL unused images, add the `-a` flag:
// `docker image prune -a`

// Step 8: Remove Containers and Images Together (Optional)
// If you want to remove all containers and images:
// Remove all containers:
// `docker rm -f $(docker ps -aq)`
// Remove all images:
// `docker rmi -f $(docker images -q)`
