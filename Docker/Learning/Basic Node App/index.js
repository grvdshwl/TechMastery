// Step 1: Use the Node.js 16.20.1 image as the base image
// This sets up the container environment with Node.js and npm pre-installed.
// The version ensures consistency across environments.

// FROM node:16.20.1

// Step 2: Copy all files from the current directory into the container
// This includes the application source code, package.json, and any other required files.
// Files are copied to the root directory of the container.

// COPY . .

// Step 3: Install all Node.js dependencies
// The `npm install` command reads the package.json file and installs all required packages.
// This ensures the application has everything it needs to run.

// RUN npm install

// Step 4: Expose port 4000
// This makes the application accessible via port 4000 inside the container.
// Ensure that the application listens on this port.

// EXPOSE 4000

// Step 5: Specify the command to run the application
// This tells Docker to use Node.js to execute the "index.js" file, which is the entry point of the application.
// When the container starts, it will run `node index.js`.

// CMD [ "node", "index.js" ]
