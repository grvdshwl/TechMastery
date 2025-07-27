/**
 * ─────────────────────────────────────────────────────────────
 * 🧠 THEORY BLOCK — WHAT IS TOPIC EXCHANGE?
 * ─────────────────────────────────────────────────────────────
 * Topic exchange allows messages to be routed to one or many queues
 * based on wildcard-matching between the routing key and binding key.
 *
 * ➕ Supports advanced routing with wildcards:
 *    - `*` (star) matches exactly one word
 *    - `#` (hash) matches zero or more words
 *
 * 📝 Example routing keys:
 *    - auth.error
 *    - cron.warning
 *    - kern.info
 *
 * 🧾 Real-world analogy:
 * Like subscribing to emails: you can choose specific topics,
 * like "news.sports.*" to get all sports news, but not politics.
 *
 * ─────────────────────────────────────────────────────────────
 * ✅ USE CASES:
 * ─────────────────────────────────────────────────────────────
 * ✔ Selective subscription (e.g., only receive errors or only from "cron")
 * ✔ Dynamic topic-based filtering
 * ✔ Broadcasting + filtering combined
 */

/**
 * ─────────────────────────────────────────────────────────────
 * 📤 PRODUCER — emit_topic_logs.js
 * ─────────────────────────────────────────────────────────────
 * Sends logs to a topic exchange using keys like:
 *   - "auth.error"
 *   - "cron.warning"
 *   - "kern.info"
 */

const amqp = require("amqplib/callback_api");

const logsToSend = [
  ["auth.error", "User not authenticated!"],
  ["cron.warning", "Cron job took too long!"],
  ["kern.info", "Kernel started successfully."],
];

// Step 1: Connect to RabbitMQ
amqp.connect("amqp://localhost", (err, conn) => {
  if (err) throw err;

  conn.createChannel((err1, channel) => {
    if (err1) throw err1;

    const exchange = "topic_logs";

    // Step 2: Declare topic exchange
    channel.assertExchange(exchange, "topic", { durable: false });

    // Step 3: Publish each log message with a routing key
    logsToSend.forEach(([key, msg]) => {
      channel.publish(exchange, key, Buffer.from(msg));
      console.log(`📤 Sent [${key}]: ${msg}`);
    });
  });

  // Step 4: Exit after short delay
  setTimeout(() => {
    conn.close();
    process.exit(0);
  }, 500);
});

/**
 * ✅ HOW TO USE:
 * $ node emit_log_topic.js auth.error "Unauthorized access!"
 * $ node emit_log_topic.js kern.info "System rebooted"
 * $ node emit_log_topic.js cron.warning "Cron job failed"
 */

/**
 * ─────────────────────────────────────────────────────────────
 * 📥 CONSUMER — receive_topic_logs.js
 * ─────────────────────────────────────────────────────────────
 * Receives messages using binding patterns like:
 *   - "*.error" → all error logs
 *   - "auth.*" → all auth logs
 *   - "#.warning" → logs ending in 'warning'
 */

const amqp = require("amqplib/callback_api");

// Define the binding keys this consumer is interested in
const bindings = ["auth.*", "*.error", "#.warning"];

amqp.connect("amqp://localhost", (err, conn) => {
  if (err) throw err;

  conn.createChannel((err1, channel) => {
    if (err1) throw err1;

    const exchange = "topic_logs";

    // Step 1: Declare the topic exchange
    channel.assertExchange(exchange, "topic", { durable: false });

    // Step 2: Create a temporary, exclusive queue with random name
    channel.assertQueue("", { exclusive: true }, (err2, q) => {
      if (err2) throw err2;

      console.log(`👂 Waiting for logs in queue: ${q.queue}`);

      // Step 3: Bind queue with each binding pattern
      bindings.forEach((pattern) => {
        channel.bindQueue(q.queue, exchange, pattern);
        console.log(`🔗 Bound with pattern: '${pattern}'`);
      });

      // Step 4: Consume messages that match the bindings
      channel.consume(
        q.queue,
        (msg) => {
          console.log(
            `📨 [${msg.fields.routingKey}]: ${msg.content.toString()}`
          );
        },
        { noAck: true }
      );
    });
  });
});
