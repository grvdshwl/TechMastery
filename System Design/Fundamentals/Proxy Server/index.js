/**
 * Proxy Server
 * ------------
 * A proxy server is an intermediary between a client and a target server, typically used to route traffic, provide security,
 * improve performance, or cache resources. It acts as a gateway for requests from clients seeking resources from other servers.
 *
 * Key Functions of a Proxy Server:
 * --------------------------------
 * 1. **Anonymity**: Hides the client's real IP address, enhancing privacy and security.
 * 2. **Load Balancing**: Distributes incoming traffic across multiple servers to balance the load.
 * 3. **Caching**: Stores copies of frequently requested resources to speed up response times for clients.
 * 4. **Content Filtering**: Can block or restrict access to specific websites or content based on policies.
 * 5. **Security**: Adds a layer of security by filtering traffic, blocking malicious content, and protecting the internal network.
 * 6. **Protocol Translation**: Converts traffic from one protocol to another, e.g., HTTP to HTTPS.
 * 7. **Compression**: Compresses data to reduce bandwidth usage and speed up content delivery.
 *
 * Types of Proxy Servers:
 * -----------------------
 * 1. **Forward Proxy**:
 *    - Handles client requests and forwards them to the target server.
 *    - Typically used to mask the client’s IP address or bypass network restrictions.
 *    - Example: A company using a forward proxy to control and monitor employee web access.
 *
 * 2. **Reverse Proxy**:
 *    - Sits in front of one or more backend servers and routes incoming client requests to them.
 *    - Used for load balancing, caching, and improving security.
 *    - Example: NGINX as a reverse proxy to distribute requests among multiple web servers.
 *
 * 3. **Transparent Proxy**:
 *    - Operates without the client being aware of it, usually for caching or monitoring purposes.
 *    - Example: An ISP using a transparent proxy to cache frequently accessed websites.
 *
 * 4. **Anonymous Proxy**:
 *    - Hides the client’s IP address from the target server, providing privacy to the user.
 *    - Example: Users accessing a website through an anonymous proxy to avoid location-based restrictions.
 *
 * 5. **High-Anonymity Proxy**:
 *    - Provides maximum anonymity by not identifying itself as a proxy server to the target server.
 *    - Commonly used for sensitive browsing or scraping websites without detection.
 *
 * User Case: Proxy Server for Web Scraping
 * ----------------------------------------
 * Scenario:
 * - A company is performing web scraping on various e-commerce websites to gather price comparison data.
 * - However, frequent requests from the same IP address are being blocked by these websites as a security measure.
 *
 * Solution:
 * - The company uses a **forward proxy** to mask its IP address and rotate between different proxy IPs.
 * - This prevents the target websites from blocking requests, enabling continuous web scraping without detection.
 *
 * Example: Basic Proxy Setup in Node.js using `http-proxy`
 * --------------------------------------------------------
 */

const http = require("http");
const httpProxy = require("http-proxy");

// Create a proxy server
const proxy = httpProxy.createProxyServer();

// Create an HTTP server to listen for client requests
const server = http.createServer((req, res) => {
  // Forward the client request to the target server (e.g., a backend API)
  proxy.web(req, res, { target: "http://example.com" }, (err) => {
    if (err) {
      console.error("Error forwarding request:", err);
      res.writeHead(500);
      res.end("Proxy error");
    }
  });
});
