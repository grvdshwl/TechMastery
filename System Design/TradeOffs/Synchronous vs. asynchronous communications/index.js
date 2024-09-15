/**
 * System Design: Synchronous vs. Asynchronous Communication
 *
 * Synchronous Communication:
 * - In a distributed system, synchronous communication requires all systems or components to be available and interact in real time.
 * - A request is sent from one component, and it waits for the response before proceeding with the next operation.
 *
 * Characteristics:
 * - Blocking: The sender waits for the receiver’s response before continuing.
 * - Tight Coupling: Components are directly dependent on each other’s availability and response time.
 *
 * Examples in System Design:
 * - RESTful HTTP APIs (synchronous request/response cycle).
 * - RPC (Remote Procedure Call).
 * - Database queries where the client waits for the result before continuing.
 *
 * Advantages:
 * - Easier to implement and reason about since operations happen in a predictable sequence.
 * - Immediate feedback for error handling.
 *
 * Disadvantages:
 * - Latency: The entire process can be slowed down by waiting for responses.
 * - Single point of failure: If one component is down, the entire system can become unresponsive.
 *
 * Use Cases:
 * - Real-time services requiring immediate interaction, like payment gateways or authentication services.
 * - Systems where consistency is critical and delays in responses are not acceptable.
 */

/**
 * Asynchronous Communication:
 * - Asynchronous communication allows components to send a request and move on without waiting for an immediate response.
 * - The requestor doesn't block; it continues processing other tasks while awaiting the response or acknowledgment.
 *
 * Characteristics:
 * - Non-blocking: The sender doesn't wait for a response before continuing.
 * - Loose Coupling: Components can operate independently, improving scalability and fault tolerance.
 *
 * Examples in System Design:
 * - Message queues (e.g., RabbitMQ, Kafka) for decoupling services.
 * - Event-driven architectures (e.g., AWS SNS, Azure Event Grid).
 * - Webhooks or push notifications, where the sender and receiver don’t interact directly in real time.
 *
 * Advantages:
 * - Increased Scalability: Systems can process tasks independently, reducing bottlenecks.
 * - Fault Tolerance: If a component is down, messages can be queued and processed later.
 *
 * Disadvantages:
 * - Complexity: Handling eventual consistency and retries requires careful design.
 * - Delayed feedback: Error detection may be slower, affecting the system’s responsiveness.
 *
 * Use Cases:
 * - Large-scale distributed systems where high availability and fault tolerance are essential.
 * - Systems with background tasks, such as email delivery or report generation.
 */
