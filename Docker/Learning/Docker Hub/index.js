// **What is Docker Hub?**
// Docker Hub is a cloud-based container registry provided by Docker, where developers can store, share, and manage Docker images.
// It contains both public and private repositories, allowing you to share images with the community or keep them private for your projects.

// **How to Make an Account and Log In?**
/*
1. Go to https://hub.docker.com and click on "Sign Up."
2. Fill in the required information (username, email, password) and create an account.
3. Verify your email to activate the account.
4. Log in to Docker Hub using your credentials.

# Log in from the terminal (after installing Docker on your system)
docker login
# You will be prompted for your Docker Hub username and password.
*/

// **Make an Image and Push It to Docker Hub**
/*
# Step 1: Create a Dockerfile
# Example: A simple Node.js application Dockerfile
FROM node:18
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]

# Step 2: Build the Docker Image
docker build -t your-dockerhub-username/your-image-name:tag .

# Replace "your-dockerhub-username" with your Docker Hub username,
# "your-image-name" with the name of your image,
# and "tag" with the version/tag (e.g., latest).

# Step 3: Push the Image to Docker Hub
docker push your-dockerhub-username/your-image-name:tag

# Before pushing, ensure you are logged in to Docker Hub using `docker login`.
*/

// **How to Pull an Image from Docker Hub**
/*
# Step 1: Search for the image on Docker Hub
# Example: Go to https://hub.docker.com and search for the image name.

# Step 2: Pull the image using the `docker pull` command
docker pull your-dockerhub-username/your-image-name:tag

# Replace "your-dockerhub-username" with the username of the image owner,
# "your-image-name" with the name of the image,
# and "tag" with the specific version/tag (e.g., latest).

# Step 3: Run the pulled image
docker run -p 3000:3000 your-dockerhub-username/your-image-name:tag
*/

// **Benefits of Using Docker Hub**
// - Easy to share Docker images with others.
// - Access to a large repository of pre-built images for various technologies.
// - Facilitates CI/CD workflows by integrating with cloud services.
