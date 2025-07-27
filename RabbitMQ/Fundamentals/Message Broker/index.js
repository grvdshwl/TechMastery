// 📦 What is a Message Broker?
// A Message Broker is middleware that helps software components communicate
// by sending and receiving messages asynchronously, without needing to be directly connected.

// 🧱 Core Concepts:

// 1. Producer:
//    - Sends messages to the message broker.
//    - Example: An order service sending new orders.

// 2. Consumer:
//    - Receives and processes messages from the broker.
//    - Example: A worker service that processes those orders.

// 3. Queue:
//    - A storage area where messages wait until they are consumed.
//    - Used in point-to-point communication (1 producer → 1 consumer).
//    - Follows FIFO (First In, First Out).

// 4. Topic / Exchange:
//    - Used in publish-subscribe (pub-sub) models.
//    - One producer can send messages to multiple consumers based on topic subscriptions.

// 🧰 Why Use a Message Broker?

// - Decoupling:
//   Services don't need to know about each other's details or availability.
//   They only interact with the broker.

// - Asynchronous Processing:
//   Producers send messages and move on without waiting for consumers to finish work.

// - Scalability:
//   You can scale producers and consumers independently.
//   Add more consumers to process high message volumes.

// - Reliability:
//   Messages are stored in the broker and delivered even if the consumer is temporarily offline.

// - Flexibility:
//   The broker can route, filter, or prioritize messages.

// 📬 Communication Flow:

// Without Message Broker:
// [Service A] ---> [Service B]
// (Tightly coupled, both must be running and online at the same time)

// With Message Broker:
// [Producer] ---> [Message Broker] ---> [Consumer]
// (Loosely coupled, asynchronous, resilient)

// 🔌 Popular Message Brokers:

// - RabbitMQ: Queue-based, supports AMQP, ideal for background jobs.
// - Apache Kafka: Distributed log-based, best for real-time data streaming.
// - Amazon SQS: Scalable managed queue on AWS.
// - Redis Streams: Lightweight pub-sub for real-time applications.

// 📈 Common Use Cases:

// - Order processing systems
// - Background job queues (e.g., sending emails or invoices)
// - IoT device data collection
// - Real-time messaging (e.g., chat apps)
// - Event-driven microservices architecture

// 🧠 Summary:
// A message broker is essential for building scalable, decoupled, and reliable systems.
// It allows different services to communicate by exchanging messages through queues or topics,
// enabling better architecture and fault tolerance.
