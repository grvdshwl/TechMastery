/**
 * RabbitMQ Fundamentals and Important Metrics
 *
 * --- What is RabbitMQ? ---
 * RabbitMQ is an open-source message broker that uses the AMQP protocol.
 * It allows different applications or components to communicate asynchronously by sending messages.
 *
 * --- Core Concepts ---
 * Producer: Sends messages to RabbitMQ.
 * Consumer: Receives messages from RabbitMQ queues.
 * Exchange: Routes messages to queues based on routing rules.
 *    Types: direct, fanout, topic, headers.
 * Queue: Buffers messages until they are consumed.
 * Binding: Connects an exchange to a queue with routing keys.
 * Routing Key: Used by exchanges to selectively route messages.
 * Channel: A lightweight virtual connection inside a single TCP connection.
 *
 * --- Why Use RabbitMQ? ---
 * - Decouples message producers and consumers.
 * - Enables asynchronous, reliable communication.
 * - Supports flexible routing and delivery guarantees.
 * - Scales well using clustering or federation.
 * - Ensures message durability and acknowledgement.
 *
 * --- Typical Throughput Values ---
 * - Publish Rate: 5,000 to 100,000 messages/sec.
 * - Deliver Rate: Similar to publish rate if consumers are fast.
 * - Acknowledge Rate: Similar to deliver rate.
 * - Queue Length: Ideally close to zero.
 *
 * --- Factors Affecting Throughput ---
 * - Message Size: Larger messages reduce throughput.
 * - Persistence: Persistent messages involve disk I/O, lowering throughput.
 * - Network Latency: Higher latency reduces message speed.
 * - Acknowledgment Mode: Sync acks add overhead.
 * - Consumer Speed: Slow consumers cause message backlog.
 * - Hardware: CPU, RAM, disk speed impact performance.
 *
 * --- Approximate Max Throughput by Message Size ---
 * - 128 bytes: 100,000+ msg/sec (very fast).
 * - 1 KB: 10,000 – 50,000 msg/sec.
 * - 10 KB: 5,000 – 10,000 msg/sec.
 * - 100 KB: 1,000 – 3,000 msg/sec (large messages slow down throughput).
 *
 * --- Summary ---
 * RabbitMQ is powerful for asynchronous messaging with flexible routing.
 * Monitoring throughput, queue length, and resource usage is critical to maintain performance.
 * Optimizing message size, acknowledgments, and consumer speed improves system scalability.
 */
