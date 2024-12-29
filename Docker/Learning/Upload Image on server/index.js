//*https://labs.play-with-docker.com/

// **Step 1: Create a Repository on Docker Hub**
/*
1. Log in to your Docker Hub account at https://hub.docker.com.
2. Click on "Create Repository."
3. Fill in the repository details:
   - Repository Name: Name your repository (e.g., my-node-app).
   - Description: Provide a brief description of your app.
   - Visibility: Choose "Public" to make it accessible to everyone, or "Private" for restricted access.
4. Click "Create" to finish setting up your repository.
*/

// **Step 2: Make an Image of Your App**
/*
# Create a Dockerfile for your application.
# Example: Simple Node.js Dockerfile

FROM node:18
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]

# Build the Docker image using the Dockerfile
docker build -t your-dockerhub-username/my-node-app:1.0 .

# Replace "your-dockerhub-username" with your Docker Hub username and
# "my-node-app:1.0" with your image name and tag (e.g., version 1.0).
*/

// **Step 3: Upload the Image to Docker Hub**
/*
# Log in to Docker Hub (if not already logged in)
docker login

# Push the image to your Docker Hub repository
docker push your-dockerhub-username/my-node-app:1.0

# Replace "your-dockerhub-username" with your Docker Hub username and
# "my-node-app:1.0" with your image name and tag.
*/

// **Step 4: Use Play with Docker to Pull and Run the Image**
/*
# Visit Play with Docker:
1. Go to https://labs.play-with-docker.com.
2. Log in with your Docker Hub account (if required).
3. Create a new instance by clicking "Start."
4. In the terminal provided, pull your image from Docker Hub:

docker pull your-dockerhub-username/my-node-app:1.0

# Replace "your-dockerhub-username/my-node-app:1.0" with your image name and tag.

# Run the pulled image
docker run -p 3000:3000 your-dockerhub-username/my-node-app:1.0

# Access the running app
1. Play with Docker provides a public URL for the app.
2. Note the port mapping (e.g., 3000), and open the app URL in your browser.
*/

// **Recap**
// 1. Create a Docker Hub repository.
// 2. Build and push your app image to Docker Hub.
// 3. Use Play with Docker to pull, build, and run your image in a cloud-based environment.
