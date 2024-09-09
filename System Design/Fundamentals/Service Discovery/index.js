/**
 * Service Discovery
 * -----------------
 * Service Discovery is a mechanism in microservices architecture where services (instances or nodes) automatically discover
 * and communicate with each other without the need for hard-coded network locations (IP addresses or URLs).
 *
 * Why is Service Discovery Important?
 * -----------------------------------
 * In a dynamic environment like microservices or containerized systems (e.g., Docker, Kubernetes), services can scale up, down,
 * move across hosts, or restart. IP addresses and hostnames can change frequently. Service discovery ensures that:
 * 1. Services can automatically find each other without manual configuration.
 * 2. Traffic is routed to healthy and available instances.
 *
 * Types of Service Discovery:
 * ---------------------------
 * 1. **Client-Side Discovery**:
 *    - The client is responsible for discovering the service by querying a service registry (e.g., Eureka, Consul).
 *    - The service registry contains information about available services and their addresses.
 *    - Once discovered, the client directly communicates with the service instance.
 *    - Example: Netflix Eureka, Consul
 *
 * 2. **Server-Side Discovery**:
 *    - The client makes a request to a load balancer (e.g., NGINX, AWS ELB) without knowing the exact service instance.
 *    - The load balancer queries the service registry and forwards the request to an appropriate service instance.
 *    - The client does not need to handle discovery logic.
 *
 * 3. **DNS-Based Discovery**:
 *    - Services are discovered using DNS lookups. The DNS server resolves service names to their IP addresses.
 *    - Popular in cloud environments (e.g., AWS, Google Cloud) where services are registered as DNS records.
 *    - This method is simpler but less dynamic than registry-based solutions.
 *
 * Components of Service Discovery:
 * --------------------------------
 * 1. **Service Registry**: A database that stores service instances and their locations (IP, port). It tracks active services
 *    and provides their locations upon request. Example: Consul, etcd, Zookeeper.
 *
 * 2. **Service Providers**: These are the microservices themselves that register with the service registry, making their
 *    presence known.
 *
 * 3. **Service Consumers**: The services or clients that query the service registry to discover and interact with other services.
 *
 * 4. **Health Checks**: Periodic checks to ensure services are alive and functional. If a service becomes unavailable, it is
 *    deregistered from the service registry.
 *
 * Advantages of Service Discovery:
 * --------------------------------
 * 1. **Dynamic Scaling**: Easily add or remove service instances without manual configuration.
 * 2. **Fault Tolerance**: Automatically routes requests to healthy services, improving fault tolerance.
 * 3. **Load Balancing**: Helps distribute requests evenly across instances.
 * 4. **Decoupling**: Services can evolve independently since discovery abstracts their network locations.
 *
 * User Case: Service Discovery in a Microservices E-Commerce Platform
 * ------------------------------------------------------------------
 * Scenario:
 * - An e-commerce platform has multiple services: `user-service`, `product-service`, `order-service`, etc.
 * - These services are containerized and deployed on multiple nodes, scaling dynamically based on load.
 * - `user-service` needs to communicate with `order-service`, but the IP address of `order-service` instances change frequently.
 * - Using service discovery, `user-service` queries a service registry to find active instances of `order-service`.
 * - The platform uses a **client-side discovery** approach, where clients directly query the registry and communicate with
 *   available service instances.
 *
 * Example: Service Discovery in Node.js using Consul
 * --------------------------------------------------
 */

// Required dependencies
const express = require("express");
const consul = require("consul")();

// Express app for microservice
const app = express();
const serviceId = "order-service-" + process.pid; // Unique ID for the service instance

// Register the service with Consul
consul.agent.service.register(
  {
    id: serviceId, // Unique ID for the service instance
    name: "order-service", // Service name
    address: "localhost", // Service host (in real scenario, it will be the container IP)
    port: 3001, // Service port
    tags: ["orders", "ecommerce"], // Tags for categorization
  },
  (err) => {
    if (err) {
      console.error("Failed to register service with Consul:", err);
      process.exit(1);
    }
    console.log(`Service ${serviceId} registered with Consul.`);
  }
);

// Handle service shutdown (deregister from Consul)
process.on("exit", () => {
  consul.agent.service.deregister(serviceId, (err) => {
    if (err) {
      console.error("Failed to deregister service from Consul:", err);
    } else {
      console.log(`Service ${serviceId} deregistered from Consul.`);
    }
  });
});

// Example route for the order service
app.get("/orders", (req, res) => {
  res.json({ message: "Order Service is running!" });
});

// Start the service
app.listen(3001, () => {
  console.log("Order service is running on port 3001");
});

/**
 * Explanation:
 * ------------
 * 1. The order-service registers itself with Consul (a service discovery tool) using a unique service ID and service name.
 * 2. When the service shuts down, it deregisters itself from the Consul registry to ensure it's no longer discoverable.
 * 3. Other services (e.g., user-service) can query Consul to discover the address and port of available order-service instances.
 * 4. In a production setup, the service’s address and port would be dynamic (e.g., container IP), making service discovery critical.
 *
 * User Case: Dynamic Microservices Communication
 * ----------------------------------------------
 * Scenario:
 * - A microservices-based payment system has multiple instances of a payment processing service.
 * - The services are running in containers and can scale up/down based on demand.
 * - The user-authentication service needs to interact with the payment-processing service, but its IP and port change dynamically.
 *
 * Solution:
 * - The user-authentication service uses **service discovery** to query the service registry (Consul) and find available instances
 *   of the payment-processing service.
 * - This eliminates the need for hard-coded IP addresses, making the system more flexible and scalable.
 *
 * Benefits of Service Discovery:
 * ------------------------------
 * 1. **Scalability**: Instances can be added or removed dynamically without reconfiguring clients.
 * 2. **Resilience**: Requests are routed to available services, improving fault tolerance.
 * 3. **Ease of Maintenance**: Reduces configuration management overhead by removing the need for hardcoded addresses.
 * 4. **Decentralization**: Each service can function independently, with service discovery enabling seamless communication.
 *
 * Real-World Scenario: Cloud-Native Applications
 * ----------------------------------------------
 * - In cloud-native environments (e.g., Kubernetes), services are frequently created and destroyed, and IP addresses are dynamic.
 * - Service discovery is crucial to ensure that services like databases, APIs, and front-end components can reliably communicate
 *   with each other as they scale.
 */
