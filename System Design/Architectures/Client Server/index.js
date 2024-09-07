// Client-Server Architecture
/*
The Client-Server Architecture is a model where the client makes requests for resources or services, and the server provides those resources or services. 
The server typically handles data processing, storage, and management, while the client handles user interactions and presentation. 
This architecture is commonly used in web applications, where browsers act as clients and web servers serve the web pages.

Detailed Points:
- Client: Initiates requests for resources or services. Examples include web browsers, mobile apps.
- Server: Responds to client requests by providing resources or performing services. Examples include web servers, databases.
- Communication: Typically happens over a network using protocols such as HTTP/HTTPS.
- Scalability: Servers can be scaled to handle increased load. Clients do not need to change when servers are scaled.
- Examples: Web applications, email services, online games.
*/

// Example:
const express = require("express");
const app = express();

// Route to handle GET requests to the root URL
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
