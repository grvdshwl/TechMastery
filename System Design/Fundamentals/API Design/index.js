/**
 * API Design
 * -----------
 * API design is the process of defining the structure, behavior, and interaction model of an API to ensure
 * that it is easy to use, scalable, secure, and well-documented. Good API design focuses on the needs of the developers
 * who will consume the API while ensuring consistent performance and functionality.
 *
 * Key Principles:
 * ---------------
 * 1. **Consistency**: Use consistent naming conventions, data formats (e.g., JSON), and response structures.
 * 2. **RESTful Design**: Follow REST principles by using standard HTTP methods (GET, POST, PUT, DELETE).
 * 3. **Versioning**: Use versioning in your API (e.g., `/api/v1/resource`) to avoid breaking changes for existing clients.
 * 4. **Error Handling**: Return appropriate HTTP status codes (e.g., 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error).
 * 5. **Authentication & Authorization**: Secure your API using mechanisms like OAuth, API Keys, or JWT (JSON Web Tokens).
 * 6. **Pagination & Filtering**: Implement pagination for large datasets and allow filtering/sorting in API queries.
 * 7. **Rate Limiting**: Prevent abuse by limiting the number of requests a client can make in a given time frame.
 * 8. **Statelessness**: Ensure that the server does not store session state between requests (key principle of REST).
 * 9. **Documentation**: Provide clear and comprehensive API documentation (e.g., Swagger, Postman collections).
 *
 * Use Case:
 * ---------
 * Consider a social media application that needs an API for users to:
 * 1. Create posts.
 * 2. Retrieve posts.
 * 3. Like/unlike posts.
 * 4. View user profiles.
 *
 * In such a case, the API should be designed to handle the basic CRUD (Create, Read, Update, Delete) operations
 * and actions like liking a post, with considerations for pagination, authentication, and error handling.
 *
 * Example in Code:
 * ----------------
 */

// Simulating an API for a social media platform using Express.js

const express = require("express");
const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Simulated data
let posts = [
  { id: 1, content: "Hello World!", likes: 10 },
  { id: 2, content: "My first post!", likes: 5 },
];

// 1. GET /api/posts - Retrieve all posts (with optional pagination)
app.get("/api/posts", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const start = (page - 1) * limit;
  const end = start + limit;

  const paginatedPosts = posts.slice(start, end);
  res.status(200).json(paginatedPosts);
});

// 2. POST /api/posts - Create a new post
app.post("/api/posts", (req, res) => {
  const newPost = { id: posts.length + 1, content: req.body.content, likes: 0 };

  if (!newPost.content) {
    return res.status(400).json({ message: "Content is required" });
  }

  posts.push(newPost);
  res.status(201).json(newPost);
});

// 3. PUT /api/posts/:id/like - Like a post
app.put("/api/posts/:id/like", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  post.likes++;
  res.status(200).json(post);
});

// 4. DELETE /api/posts/:id - Delete a post
app.delete("/api/posts/:id", (req, res) => {
  const postIndex = posts.findIndex((p) => p.id === parseInt(req.params.id));

  if (postIndex === -1) {
    return res.status(404).json({ message: "Post not found" });
  }

  posts.splice(postIndex, 1);
  res.status(204).send();
});

// Error Handling: Return 404 for unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Starting the server
app.listen(3000, () => {
  console.log("API is running on port 3000");
});

/**
 * In this example:
 * - **GET /api/posts** allows clients to retrieve posts with pagination.
 * - **POST /api/posts** allows creating a new post with validation for required fields.
 * - **PUT /api/posts/:id/like** allows users to like a specific post.
 * - **DELETE /api/posts/:id** allows deleting a post by ID.
 * - Error handling is implemented for missing routes and missing posts.
 */
