/**
 * Microservices Guidelines
 * ------------------------
 * Microservices architecture involves breaking down an application into smaller, independently deployable services
 * that are loosely coupled and designed around specific business capabilities. Each service runs in its own process
 * and communicates over lightweight protocols, typically HTTP/REST or messaging systems.
 *
 * Key Guidelines for Designing Microservices:
 * -------------------------------------------
 * 1. **Single Responsibility**: Each microservice should focus on a specific business function or capability.
 * 2. **Loose Coupling**: Services should be independent, minimizing dependencies between them.
 * 3. **Independent Deployment**: Each microservice can be deployed independently without affecting other services.
 * 4. **Data Isolation**: Each service should own its data (e.g., separate databases for each service to avoid tight coupling).
 * 5. **Inter-service Communication**: Use lightweight protocols such as REST over HTTP or messaging systems (e.g., RabbitMQ, Kafka).
 * 6. **Scalability**: Each service should be independently scalable based on its own performance and load requirements.
 * 7. **Resilience and Fault Tolerance**: Services should handle failures gracefully (e.g., with retries, circuit breakers).
 * 8. **Monitoring and Logging**: Each service should have its own monitoring and logging for tracing and debugging.
 * 9. **API Gateway**: Use an API Gateway to manage client requests, routing them to the appropriate services.
 * 10. **Versioning**: Use API versioning to handle changes without disrupting other services.
 * 11. **Service Discovery**: Implement dynamic service discovery for locating services (e.g., with tools like Consul or Eureka).
 *
 * Use Case:
 * ---------
 * Consider an e-commerce platform where the business logic is split into multiple microservices:
 * 1. **User Service**: Manages user authentication, profiles, and permissions.
 * 2. **Product Service**: Manages product catalog, inventory, and pricing.
 * 3. **Order Service**: Manages order creation, status updates, and history.
 * 4. **Payment Service**: Handles payment processing and integration with payment gateways.
 *
 * Each of these services should be independently deployable and scalable, interacting through APIs or messaging queues.
 *
 * Example in Code:
 * ----------------
 */

// Simulating a basic microservices interaction using Express.js

const express = require("express");
const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Simulating a User Service
const userService = (req, res) => {
  res.json({ userId: 1, name: "Alice", email: "alice@example.com" });
};

// Simulating a Product Service
const productService = (req, res) => {
  res.json([
    { productId: 101, name: "Laptop", price: 1200 },
    { productId: 102, name: "Phone", price: 800 },
  ]);
};

// Simulating an Order Service
const orderService = (req, res) => {
  res.json({
    orderId: 1,
    userId: req.body.userId,
    products: req.body.products,
    total: req.body.total,
  });
};

// Simulating interaction between services

// 1. Route for fetching user details (handled by the User Service)
app.get("/user", (req, res) => {
  console.log("Fetching user details...");
  userService(req, res);
});

// 2. Route for fetching product list (handled by the Product Service)
app.get("/products", (req, res) => {
  console.log("Fetching products...");
  productService(req, res);
});

// 3. Route for creating an order (handled by the Order Service)
app.post("/order", (req, res) => {
  console.log("Placing an order...");
  orderService(req, res);
});

/**
 * In a real microservices architecture:
 * - The User Service, Product Service, and Order Service would each run on different servers or containers.
 * - These services would communicate via HTTP or messaging queues, with each service owning its database.
 * - The API Gateway (not shown in this example) would handle routing to the correct microservice.
 */

// Starting the server (in a microservices architecture, each service would have its own server)
app.listen(3000, () => {
  console.log("Microservices example running on port 3000");
});

/**
 * Explanation:
 * ------------
 * In this simplified example:
 * - **User Service** returns user data.
 * - **Product Service** returns a list of products.
 * - **Order Service** takes a user's order, which includes user ID, products, and total amount.
 *
 * In a real-world scenario:
 * - These services would be independent microservices, each with its own database.
 * - They would communicate through APIs (HTTP) or asynchronous messaging (RabbitMQ, Kafka).
 * - Scalability: Product Service could be scaled independently if the product catalog is frequently accessed.
 * - Fault Tolerance: If one service (e.g., Order Service) goes down, the others (e.g., User Service, Product Service) continue functioning.
 */
