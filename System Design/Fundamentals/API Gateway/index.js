/**
 * API Gateway
 * ------------
 * An API Gateway acts as a reverse proxy that accepts all application programming interface (API) calls,
 * aggregates the various services required to fulfill them, and returns the appropriate result.
 *
 * Key Features:
 * -------------
 * 1. **Routing**: It routes incoming API requests to appropriate services.
 * 2. **Request Transformation**: Transforms requests between client and server.
 * 3. **Security**: Manages authentication, authorization, and throttling.
 * 4. **Rate Limiting**: Restricts the number of API calls from clients to protect the backend.
 * 5. **Load Balancing**: Distributes incoming API requests among available instances.
 * 6. **Caching**: Caches responses to reduce load on backend services.
 * 7. **Monitoring**: Tracks API usage and logs for monitoring and debugging purposes.
 * 8. **Centralized Entry Point**: It serves as a single entry point for all client requests.
 *
 * Use Cases:
 * ----------
 * 1. **Microservices Architecture**: API Gateways act as a unified front for multiple services in a microservices setup.
 * 2. **Client-specific APIs**: Different clients (web, mobile) can have tailored APIs without exposing all the microservices.
 * 3. **Security**: Centralized API security, including token validation (e.g., OAuth2), encryption, and IP whitelisting.
 * 4. **Traffic Management**: Apply rate limiting to prevent traffic spikes from overloading backend services.
 * 5. **Data Transformation**: Convert or format the data to meet client needs (e.g., XML to JSON conversion).
 *
 * Example Scenario:
 * -----------------
 * Consider an e-commerce platform where different services handle products, orders, payments, etc.
 * Instead of exposing each service to the client directly, the API Gateway handles all client interactions.
 *
 * For instance:
 * - Client makes a request to `/api/products`.
 * - API Gateway routes the request to the `Product Service`.
 * - The Gateway applies rate limiting and security checks (e.g., token validation).
 * - It may transform the request or response, if needed, and send the final response back to the client.
 *
 * Example in Code:
 * ----------------
 */

// Simulating a simplified API Gateway routing in Node.js

const express = require("express");
const app = express();

// Simulating different services
const productService = (req, res) =>
  res.json({ id: 1, name: "Laptop", price: 1200 });
const orderService = (req, res) =>
  res.json({ orderId: 101, status: "Processing" });

// API Gateway routes incoming requests to respective services
app.get("/api/products", (req, res) => {
  console.log("Routing to Product Service...");
  productService(req, res);
});

app.get("/api/orders", (req, res) => {
  console.log("Routing to Order Service...");
  orderService(req, res);
});

// Middleware for rate limiting (Token Bucket or Leaky Bucket logic can be applied here)
let requestCount = 0;
app.use((req, res, next) => {
  if (requestCount >= 10) {
    return res.status(429).send("Too Many Requests");
  }
  requestCount++;
  next();
});

// Start the API Gateway
app.listen(3000, () => {
  console.log("API Gateway running on port 3000");
});

/**
 * In this example:
 * - The API Gateway handles `/api/products` and `/api/orders` routes.
 * - Different services (product and order) handle business logic.
 * - Basic rate limiting is applied.
 */
