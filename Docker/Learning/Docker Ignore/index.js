// The .dockerignore File
// ======================
// The `.dockerignore` file is used to specify files and directories
// that should be excluded from the Docker build context.
// This helps speed up the build process and reduces the size of the build context.

// Step 1: Create a .dockerignore File
// -----------------------------------
// Place the `.dockerignore` file in the root of your project,
// in the same directory as your `Dockerfile`.

// Step 2: Define Patterns to Exclude
// -----------------------------------
// Add patterns to the `.dockerignore` file to specify files and directories to exclude.
// The syntax is similar to `.gitignore`.

// Example Patterns:
// -----------------
// ```plaintext
// # Exclude node_modules to avoid unnecessary dependencies in the image
// node_modules

// # Exclude build artifacts
// build
// dist

// # Ignore log files and temporary files
// *.log
// *.tmp

// # Exclude sensitive environment files
// .env
// .env.local

// # Ignore system-specific files
// .DS_Store
// Thumbs.db

// # Ignore Git-related files
// .git
// .gitignore
// ```

// Step 3: How Docker Uses .dockerignore
// -------------------------------------
// When you run `docker build`, Docker looks at the `.dockerignore` file
// and excludes the listed files and directories from the build context.
// This means those files will NOT be sent to the Docker daemon or included in the image.

// Benefits of Using .dockerignore:
// --------------------------------
// 1. **Faster Builds**: Reduces the size of the build context sent to Docker.
// 2. **Smaller Images**: Ensures unnecessary files are not added to the image.
// 3. **Security**: Keeps sensitive files (like `.env`) out of the image.

// Step 4: Example Project Structure
// ----------------------------------
// Consider the following project structure:
// project/
// ├── .dockerignore
// ├── Dockerfile
// ├── src/
// ├── node_modules/
// ├── build/
// ├── .env
// ├── package.json
// └── README.md

// Corresponding .dockerignore:
// ----------------------------
// node_modules       // Exclude dependency folder
// build              // Exclude build artifacts
// .env               // Exclude environment files
// .DS_Store          // Exclude macOS system file
// *.log              // Exclude all log files

// Step 5: Testing .dockerignore
// ------------------------------
// After creating the `.dockerignore`, run `docker build` and verify that
// the excluded files and directories are not included in the image.
