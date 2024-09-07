// Microservices Architecture
/*
Microservices Architecture is an approach where a large application is divided into smaller, loosely coupled services, each responsible for a specific function or business capability. 
Each microservice can be developed, deployed, and scaled independently, which promotes flexibility and easier maintenance. 
Communication between microservices often happens over a network using APIs, such as REST or gRPC.

Detailed Points:
- Microservices: A large application is divided into smaller services handling specific business functions.
- Decoupling: Services can be developed, deployed, and scaled independently.
- Communication: Microservices communicate through APIs or message brokers.
- Scalability: Services can be scaled independently based on demand.
- Examples: E-commerce platforms (e.g., separate services for user management, product catalog, payment processing).
*/

// Example:
// Example of a simple microservice using Node.js and Express
const express = require("express");
const app = express();

// Route to handle GET requests for products
app.get("/products", (req, res) => {
  // Example product data
  res.json([
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
  ]);
});

// Start the service on port 4000
app.listen(4000, () => {
  console.log("Product service running on http://localhost:4000");
});
