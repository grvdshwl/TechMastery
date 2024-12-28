// Docker Image Versioning
// ========================
// Docker uses tags to version images. Tags help identify a specific state of the image,
// such as a particular release or environment (e.g., `latest`, `v1.0.0`).

// Step 1: Pull a Specific Version of an Image
// -------------------------------------------
// To pull a specific version, include the tag in the `docker pull` command.
// Example:
// `docker pull node:16`
// - `node` is the image name.
// - `16` is the version tag.
// If no tag is specified, Docker defaults to `latest`:
// `docker pull node`

// Step 2: Tag an Image with a Version
// -----------------------------------
// Use `docker tag` to assign a specific version tag to an image.
// Example:
// `docker tag my-app:latest my-app:v1.0.0`
// - `my-app:latest` is the source image.
// - `my-app:v1.0.0` is the new tag for the image.

// Step 3: List All Image Versions Locally
// ---------------------------------------
// Use `docker images` to list all images and their tags on your system.
// Example:
// `docker images`
// Output shows the `REPOSITORY`, `TAG`, `IMAGE ID`, and more.

// Step 4: Push an Image with a Version to a Registry
// --------------------------------------------------
// To share an image with others, push it to a Docker registry (e.g., Docker Hub).
// Example:
// `docker push my-app:v1.0.0`
// Ensure you’ve logged in first with `docker login`.

// Step 5: Remove Old or Unused Versions
// -------------------------------------
// Use `docker rmi` to delete a specific version of an image by its tag.
// Example:
// `docker rmi my-app:v1.0.0`

// Step 6: Pull All Available Versions (Optional)
// ----------------------------------------------
// Use `docker pull` to pull all tags if needed (not commonly done).
// Example:
// `docker pull my-app --all-tags`
// This pulls all available versions of the image.

// Step 7: Automate Versioning (Best Practices)
// --------------------------------------------
// - Use semantic versioning (e.g., `v1.0.0`, `v1.0.1`) to manage image versions clearly.
// - Tag your images during CI/CD builds to align with the application version.
// Example in a CI pipeline:
// `docker build -t my-app:${VERSION} .`

// Step 8: Inspect an Image's Metadata
// ------------------------------------
// Use `docker inspect` to view detailed information about an image, including its tag.
// Example:
// `docker inspect my-app:v1.0.0`
