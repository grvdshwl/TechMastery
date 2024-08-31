// What is Apache Kafka?

//*https://www.youtube.com/watch?v=DU8o-OTeoCc

// Apache Kafka is an open-source distributed event streaming platform designed for high-throughput, fault-tolerant, and scalable
// data streaming and messaging. It is used for building real-time data pipelines and streaming applications.

// Key Features:

// 1. Publish-Subscribe Model:
// Kafka uses a publish-subscribe model where producers publish messages to topics and consumers subscribe to these topics to receive the messages.

// 2. Distributed and Scalable:
// Kafka is designed to be distributed and scalable. It runs on a cluster of machines and can handle high-throughput data streams
// across multiple nodes.

// 3. Fault Tolerance:
// Kafka provides fault tolerance by replicating data across multiple brokers (nodes). If a broker fails, the data can still be accessed
// from other brokers.

// 4. Durability:
// Kafka ensures message durability by writing messages to disk and replicating them across brokers. This means messages are not lost
// even if a broker crashes.

// 5. Real-Time Data Processing:
// Kafka supports real-time data processing, making it suitable for applications that require low-latency data streaming and analytics.

// How It Works:

// 1. Topics and Partitions:
// Messages in Kafka are organized into topics. Each topic can have multiple partitions, which allows Kafka to distribute
// messages across multiple brokers for scalability and fault tolerance.

// Example:
// Creating a topic with multiple partitions:
// kafka-topics --create --topic my-topic --partitions 3 --replication-factor 2 --bootstrap-server localhost:9092

// 2. Producers:
// Producers send messages to Kafka topics. They can publish messages to specific topics, and Kafka handles distributing them
// to the appropriate partitions.

// Example:
// Sending a message to a topic:
// const producer = kafka.producer();
// await producer.send({
//     topic: 'my-topic',
//     messages: [{ value: 'Hello, Kafka!' }],
// });

// 3. Consumers:
// Consumers subscribe to Kafka topics to read messages. They can read from specific partitions and process the messages
// in real-time or batch mode.

// Example:
// Consuming messages from a topic:
// const consumer = kafka.consumer({ groupId: 'my-group' });
// await consumer.subscribe({ topic: 'my-topic' });
// await consumer.run({
//     eachMessage: async ({ topic, partition, message }) => {
//         console.log(`Received message: ${message.value.toString()}`);
//     },
// });

// 4. Brokers:
// Kafka brokers are servers that manage the storage and retrieval of messages. Each broker is responsible for storing data
// for one or more partitions and handling requests from producers and consumers.

// Example:
// Starting a Kafka broker:
// kafka-server-start.sh config/server.properties

// 5. Zookeeper:
// Kafka uses Zookeeper to manage cluster metadata, such as broker information, topic configurations, and leader election
// for partitions. Zookeeper helps coordinate and maintain the cluster's state.

// Example:
// Starting Zookeeper:
// zookeeper-server-start.sh config/zookeeper.properties

// Example Usage:

// 1. Real-Time Analytics:
// Kafka is used for real-time analytics by streaming data from various sources and processing it in real-time to generate insights.

// 2. Log Aggregation:
// Kafka can aggregate logs from different services and applications, providing a unified log stream for monitoring and analysis.

// 3. Event Sourcing:
// Kafka supports event sourcing, where changes in the system are recorded as a sequence of events, allowing for rebuilding state
// from events.

// 4. Data Pipelines:
// Kafka is often used to build data pipelines that move data between different systems, such as databases, data warehouses,
// and analytics platforms.

// In Summary:

// Apache Kafka is a powerful event streaming platform that provides high-throughput, fault-tolerant, and scalable messaging.
// It is used for real-time data processing, log aggregation, and building data pipelines. Kafka's architecture, which includes topics,
// partitions, producers, consumers, brokers, and Zookeeper, allows it to handle large volumes of data efficiently and reliably.
