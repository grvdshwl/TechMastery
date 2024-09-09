/**
 * Heartbeats
 * ----------
 * Heartbeats are periodic signals or messages sent between systems or services to indicate that a service or component
 * is still active and functioning. They are commonly used in distributed systems to monitor the health and availability
 * of services or nodes.
 *
 * Why Heartbeats are Important:
 * -----------------------------
 * 1. **System Health Monitoring**: They help in determining the availability and operational status of a system or service.
 * 2. **Fault Detection**: They enable quick detection of failures when a heartbeat signal is not received within a specified
 *    timeframe (timeout).
 * 3. **Failover Mechanisms**: If a service fails to send a heartbeat, the system can initiate failover processes,
 *    such as rerouting traffic to another healthy node.
 * 4. **Distributed Systems**: In systems with multiple services or nodes, heartbeats ensure all components are working
 *    as expected and can trigger alarms or corrective actions when failures are detected.
 *
 * Key Concepts of Heartbeats:
 * ---------------------------
 * 1. **Frequency**: The rate at which heartbeats are sent. Too frequent heartbeats may consume unnecessary resources, while
 *    too infrequent may cause delayed fault detection.
 * 2. **Timeout/TTL (Time-to-Live)**: The maximum time a system can wait for the next heartbeat before assuming a failure.
 * 3. **Heartbeat Interval**: The predefined interval at which a component sends heartbeats.
 * 4. **Failure Detection**: If a heartbeat is not received within the expected interval, the system detects a failure
 *    and triggers alerts or fallback mechanisms.
 * 5. **Leader Election**: In systems with leader nodes, heartbeats can be used to check if the leader is still alive,
 *    and if not, initiate a new leader election.
 *
 * Use Case: Heartbeats in a Distributed Database Cluster
 * ------------------------------------------------------
 * Scenario:
 * - A distributed database has multiple nodes, each responsible for different parts of the database.
 * - To maintain availability, each node periodically sends a heartbeat signal to a monitoring service.
 * - If one node stops sending heartbeats (due to failure), the system automatically detects it and promotes a backup node to take
 *   over, ensuring no downtime.
 *
 * Example: Heartbeat Mechanism in a Node.js Service
 * -------------------------------------------------
 */

const axios = require("axios");

// Heartbeat configuration
const heartbeatInterval = 5000; // Send heartbeat every 5 seconds
const heartbeatTimeout = 10000; // 10 seconds timeout to detect failure

// Function to send a heartbeat to a monitoring service
function sendHeartbeat() {
  axios
    .post("http://monitoring-service/heartbeat", { serviceId: "service-1" })
    .then((response) => {
      console.log("Heartbeat sent successfully:", response.status);
    })
    .catch((error) => {
      console.error("Error sending heartbeat:", error.message);
    });
}

// Set up periodic heartbeats
setInterval(() => {
  sendHeartbeat();
}, heartbeatInterval);

/**
 * Explanation:
 * ------------
 * 1. The service sends a heartbeat message (with its `serviceId`) to a central monitoring service every 5 seconds.
 * 2. If the service fails to send a heartbeat (e.g., due to network issues or server failure), the monitoring service
 *    can detect this and assume the service is down after a 10-second timeout.
 * 3. This approach helps detect service failures in real-time and allows the system to take corrective action.
 *
 * Use Case: Heartbeat in Load Balancer Health Checks
 * --------------------------------------------------
 * Scenario:
 * - A load balancer is distributing incoming traffic to multiple backend web servers.
 * - To ensure that traffic is only routed to healthy servers, the load balancer sends heartbeat requests (health checks)
 *   to each server.
 * - If a server fails to respond within a specific time, the load balancer stops sending traffic to that server, ensuring
 *   availability and preventing downtime.
 *
 * Solution:
 * - The load balancer uses **heartbeat checks** to periodically ping each backend server to ensure it's alive.
 * - If a server fails to respond, it is marked as unhealthy, and traffic is redirected to other available servers.
 *
 * Benefits of Heartbeats:
 * -----------------------
 * 1. **Failure Detection**: Quick identification of service outages or unresponsive systems.
 * 2. **Automated Recovery**: Enables automatic failover or backup mechanisms when failures occur.
 * 3. **Increased System Reliability**: Ensures only healthy nodes or services receive traffic, improving overall uptime.
 * 4. **Scalability**: Can be scaled across large distributed systems to monitor the health of numerous nodes or services.
 * 5. **Leader Election Support**: In distributed systems, heartbeats ensure that the leader node is still functioning,
 *    allowing smooth leader re-election if the leader fails.
 *
 * Real-World Scenario: Leader Node Monitoring in Distributed Systems
 * -----------------------------------------------------------------
 * - In a system with a single **leader node** (e.g., in a distributed database like Apache Zookeeper), heartbeats are sent from
 *   the leader to follower nodes to indicate that the leader is still alive.
 * - If followers stop receiving heartbeats within a predefined interval, they assume the leader has failed, and a leader
 *   election is triggered to choose a new leader.
 * - This ensures high availability and minimizes downtime in the system.
 */
