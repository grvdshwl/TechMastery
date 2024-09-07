/**
 * Pub/Sub Architecture (Publish-Subscribe)
 * -----------------------------------------
 * Pub/Sub is an asynchronous messaging pattern where publishers (producers) send messages to a central event bus (or broker),
 * and subscribers (consumers) listen for specific events.
 *
 * The key feature of Pub/Sub is the decoupling of the producers (who generate messages) from the consumers
 * (who process the messages). Producers don’t need to know who will consume the message, and consumers don’t need to
 * know where the message originated. This architecture promotes scalability and flexibility.
 *
 * Key Concepts in Pub/Sub:
 * ------------------------
 * 1. **Publisher**: The service or component that produces or sends messages (events).
 * 2. **Subscriber**: The service or component that listens for and processes specific events.
 * 3. **Broker/Message Queue**: The intermediary that receives messages from publishers and forwards them to subscribers.
 * 4. **Topic**: A category or channel that messages are published to. Subscribers can subscribe to one or more topics to receive relevant messages.
 * 5. **Event-driven**: Pub/Sub systems are event-driven, meaning actions are triggered by the occurrence of specific events.
 *
 * Advantages of Pub/Sub Architecture:
 * -----------------------------------
 * 1. **Decoupling**: Publishers and subscribers are decoupled, allowing them to evolve independently without direct dependencies.
 * 2. **Scalability**: Can easily scale as the system grows. New subscribers or publishers can be added without affecting the other components.
 * 3. **Asynchronous Communication**: Subscribers can process messages in their own time, allowing non-blocking interactions.
 * 4. **Loose Coupling**: Reduces dependencies between services, improving fault tolerance and system flexibility.
 * 5. **Flexibility**: Multiple services can subscribe to the same topic, enabling broadcasting to many services.
 *
 * Common Use Cases for Pub/Sub:
 * -----------------------------
 * 1. **Notifications System**: A service that publishes notifications (e.g., email, SMS, push notifications) to different channels.
 *    Subscribers handle the actual sending of the notifications.
 * 2. **Event-driven Microservices**: In a distributed system, microservices publish events when certain actions occur (e.g., user registration, order creation),
 *    and other microservices respond by consuming those events.
 * 3. **Data Pipelines**: Real-time data streaming, where producers generate large amounts of data, and consumers process that data asynchronously.
 * 4. **Logging & Monitoring**: Services publish logs or metrics, and logging/monitoring systems subscribe to process and visualize the data.
 * 5. **IoT Systems**: Sensors (publishers) send data to a broker, and various devices or applications (subscribers) process the data.
 *
 * Example: Pub/Sub using Node.js with Redis as a message broker
 * -------------------------------------------------------------
 * In this example, we'll simulate a Pub/Sub system using Redis as the message broker.
 * We will have a Publisher that publishes messages to a "notifications" topic, and Subscribers that consume these messages.
 */

// Simulating Pub/Sub using Node.js and Redis

const redis = require("redis");

// Create Publisher
const publisher = redis.createClient();

// Create Subscribers
const subscriber1 = redis.createClient();
const subscriber2 = redis.createClient();

// Subscriber 1 subscribes to the "notifications" topic
subscriber1.subscribe("notifications", (message) => {
  console.log(`Subscriber 1 received notification: ${message}`);
});

// Subscriber 2 subscribes to the "notifications" topic
subscriber2.subscribe("notifications", (message) => {
  console.log(`Subscriber 2 received notification: ${message}`);
});

// Simulate a publisher sending messages to the "notifications" topic
function publishNotification(notification) {
  publisher.publish("notifications", notification);
}

// Example Usage: Publishing notifications
setTimeout(() => {
  publishNotification("User Alice has registered!");
  publishNotification("New order placed by User Bob!");
}, 2000);

/**
 * Explanation:
 * ------------
 * 1. **Publisher**: The `publisher` sends notifications to the Redis message broker on the "notifications" topic.
 * 2. **Subscribers**: The `subscriber1` and `subscriber2` listen for messages on the "notifications" topic.
 *    When a message is published, both subscribers receive and process it.
 * 3. **Message Broker**: Redis acts as the intermediary broker, managing the messages and delivering them to the subscribers.
 * 4. **Topic**: The "notifications" topic is used to categorize and filter the messages. Subscribers only receive messages
 *    for the topics they are interested in.
 *
 * This pattern can be scaled easily: new subscribers can join the "notifications" topic to receive the same messages,
 * and the publisher can continue sending messages without knowing the number or identity of the subscribers.
 *
 * Advantages of Pub/Sub in This Example:
 * --------------------------------------
 * - **Decoupling**: The publisher doesn't need to know which services are subscribed to the messages.
 * - **Broadcasting**: Both `subscriber1` and `subscriber2` receive the same message independently.
 * - **Scalability**: More subscribers can be added to the "notifications" topic without changing the publisher logic.
 * - **Asynchronous Processing**: Subscribers can process messages at their own pace, improving performance and system resilience.
 *
 * Real-World Example:
 * -------------------
 * Use case: **E-commerce Order System**
 * 1. When a user places an order, the **Order Service** publishes an event to the "orderCreated" topic.
 * 2. Several other microservices subscribe to this event:
 *    - **Inventory Service**: Decreases stock.
 *    - **Payment Service**: Processes payment.
 *    - **Notification Service**: Sends an email or SMS confirmation to the customer.
 *
 * The advantage here is that each of these services operates independently and can be developed, deployed, and scaled separately.
 * New services can subscribe to the same "orderCreated" topic without changing the Order Service or other existing services.
 */
