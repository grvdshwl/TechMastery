// 📡 What is AMQP?

// AMQP stands for Advanced Message Queuing Protocol.
// It is an open, standard messaging protocol that defines how messages are:
// - Created
// - Sent
// - Routed
// - Queued
// - Acknowledged (confirmed by the consumer)

// Note: AMQP is a protocol, not a product.
// Tools like RabbitMQ are message brokers that implement AMQP.

// 🧱 Core Components of AMQP:

// 1. Producer:
//    - A service or application that sends messages.
//    - It sends messages to an "exchange", not directly to a queue.

// 2. Exchange:
//    - Acts like a message router.
//    - It receives messages from producers and routes them to queues based on rules.
//    - Types of exchanges: direct, fanout, topic, headers.

// 3. Queue:
//    - A buffer that holds messages until they are processed.
//    - Consumers receive messages from queues (not directly from exchanges).

// 4. Consumer:
//    - A service that listens to a queue and processes incoming messages.
//    - Can acknowledge messages (important for reliability).

// 5. Routing Key:
//    - A string used by the producer to label the message.
//    - Used by the exchange to decide which queue(s) the message should go to.

// 6. Binding:
//    - A connection between an exchange and a queue.
//    - Includes rules that match routing keys to determine message routing.

// 🔁 Message Flow in AMQP:

// Step 1: Producer sends message to an Exchange with a Routing Key.
// Step 2: Exchange looks at bindings and routing key to determine target queues.
// Step 3: Message is placed in one or more Queues.
// Step 4: Consumer(s) read the message from the queue and process it.
// Step 5: Consumer can send an ACK to confirm successful processing.

// 🔀 Types of Exchanges:

// 1. Direct Exchange:
//    - Sends messages to queues with an exact routing key match.
//    - Example: key = "order.created" matches only queue bound with "order.created".

// 2. Fanout Exchange:
//    - Broadcasts messages to all bound queues.
//    - Ignores routing keys entirely.
//    - Example: for notifications, logs, pub/sub.

// 3. Topic Exchange:
//    - Uses wildcard patterns for flexible routing.
//    - `*` = exactly one word, `#` = zero or more words.
//    - Example: key "user.signup" matches binding "user.*" or "user.#".

// 4. Headers Exchange:
//    - Routes messages based on header key-value pairs instead of routing keys.

// 🛡️ Reliability Features:

// - Acknowledgments (ACK): Consumer confirms message was received and processed.
// - Durable Queues: Messages survive broker restarts if the queue is durable.
// - Persistent Messages: Producer can mark messages as persistent.
// - Dead Letter Queues (DLQ): Failed or unprocessable messages can be redirected.

// 📦 Real-World Example (E-commerce):

// Services:
// - order-service (producer)
// - inventory-service (consumer)
// - notification-service (consumer)

// Flow:
// - order-service sends a message like: "Order ID 123 created"
// - Message goes to 'order_events' exchange
// - exchange routes to:
//     - order_queue → for processing the order
//     - notification_queue → for customer alerts
//     - analytics_queue → for tracking metrics

// This allows services to react independently to the same event.

// 🧠 Summary:

// - AMQP is a protocol that defines a messaging model.
// - Used by RabbitMQ and similar brokers.
// - Core flow: Producer → Exchange → Queue → Consumer
// - Supports reliable, decoupled, and scalable communication.
// - Great for microservices, task queues, and real-time systems.
