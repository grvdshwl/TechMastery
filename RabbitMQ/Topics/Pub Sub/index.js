/**
 * ─────────────────────────────────────────────────────────────
 * 🧠 WHAT IS PUBLISH/SUBSCRIBE? (RabbitMQ)
 * ─────────────────────────────────────────────────────────────
 * This pattern lets one producer broadcast messages to **many consumers**.
 *
 * 🔁 Unlike Work Queues (where 1 task = 1 worker),
 *    here ALL consumers get a copy of the same message.
 *
 * 🧾 Real-world analogy:
 * A radio station (Producer) broadcasts messages to all tuned-in radios (Consumers).
 *
 * ─────────────────────────────────────────────────────────────
 * ✅ KEY CONCEPTS
 * ─────────────────────────────────────────────────────────────
 * ✔ EXCHANGE: Middleman that receives messages from producers.
 * ✔ FANOUT EXCHANGE: Broadcasts each message to **all bound queues**.
 * ✔ TEMPORARY QUEUES: Created per consumer. Auto-deleted on disconnect.
 * ✔ BINDING: Connects a queue to an exchange.
 * ✔ NOACK: Messages are auto-acknowledged by the consumer.
 *
 * ─────────────────────────────────────────────────────────────
 * 💡 WHEN TO USE PUBLISH/SUBSCRIBE?
 * ─────────────────────────────────────────────────────────────
 * ✔ Logging systems (send logs to file & console at once)
 * ✔ Real-time dashboards (send to many viewers)
 * ✔ Notification fanout (e.g. to devices or apps)
 *
 * ─────────────────────────────────────────────────────────────
 * 🧪 HOW IT WORKS
 * ─────────────────────────────────────────────────────────────
 * 1. Publisher sends a message to a FANOUT EXCHANGE.
 * 2. Each subscriber creates a unique, temporary queue.
 * 3. Each queue is BOUND to the exchange.
 * 4. RabbitMQ delivers a **copy** of each message to **all queues**.
 * 5. Every consumer receives and handles the broadcast.
 *
 * 🖨️ VISUAL:
 *                [emit_log.js]
 *                   |
 *              FANOUT EXCHANGE
 *                 /     \
 *       [receive_logs] [receive_logs]
 *
 */

/**
 * ─────────────────────────────────────────────────────────────
 * 🧠 PUBLISHER — emit_log.js
 * ─────────────────────────────────────────────────────────────
 * This script sends a broadcast message to **all** subscribers.
 * It uses a FANOUT exchange called 'logs'.
 *
 * 💬 The second argument ("") is ignored in fanout mode.
 */

const amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", (error0, connection) => {
  if (error0) throw error0;

  connection.createChannel((error1, channel) => {
    if (error1) throw error1;

    const exchange = "logs";
    const msg = process.argv.slice(2).join(" ") || "Hello World!";

    // Step 1️⃣: Declare fanout exchange
    channel.assertExchange(exchange, "fanout", { durable: false });

    // Step 2️⃣: Publish message to exchange
    channel.publish(exchange, "", Buffer.from(msg));
    console.log("📤 [x] Sent:", msg);
  });

  // Step 3️⃣: Close connection after short delay
  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
});

/**
 * ✅ HOW TO RUN:
 * $ node emit_log.js "New log event!"
 *
 * 🖨️ OUTPUT:
 * 📤 [x] Sent: New log event!
 *
 * Every active receive_logs.js will receive this broadcast.
 */

/**
 * ─────────────────────────────────────────────────────────────
 * 🧠 SUBSCRIBER — receive_logs.js
 * ─────────────────────────────────────────────────────────────
 * This script listens to broadcasted messages from the 'logs' exchange.
 * It creates a TEMPORARY queue that exists only while the consumer is alive.
 *
 * 💡 Every new consumer gets its own private queue and sees every message.
 */

const amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", (error0, connection) => {
  if (error0) throw error0;

  connection.createChannel((error1, channel) => {
    if (error1) throw error1;

    const exchange = "logs";

    // Step 1️⃣: Declare the fanout exchange
    channel.assertExchange(exchange, "fanout", { durable: false });

    // Step 2️⃣: Create a unique, exclusive, auto-deleting queue
    channel.assertQueue("", { exclusive: true }, (error2, q) => {
      if (error2) throw error2;

      console.log("📡 [*] Waiting for logs in queue:", q.queue);

      // Step 3️⃣: Bind the queue to the exchange
      channel.bindQueue(q.queue, exchange, "");

      // Step 4️⃣: Start consuming (auto ack)
      channel.consume(
        q.queue,
        (msg) => {
          if (msg.content) {
            console.log("📥 [x] Received:", msg.content.toString());
          }
        },
        { noAck: true }
      );
    });
  });
});

/**
 * ✅ HOW TO RUN:
 * 1️⃣ Open multiple terminals:
 * $ node receive_logs.js
 * $ node receive_logs.js
 *
 * 2️⃣ In another terminal:
 * $ node emit_log.js "System started!"
 *
 * 🖨️ OUTPUT in each receiver:
 * 📥 [x] Received: System started!
 */
