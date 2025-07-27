/**
 * ─────────────────────────────────────────────────────────────
 * 🧠 THEORY BLOCK — RETRY QUEUES & DEAD LETTER QUEUES (DLQ)
 * ─────────────────────────────────────────────────────────────
 *
 * 🧾 REAL-WORLD ANALOGY:
 * Imagine a delivery driver (consumer) trying to deliver a package (message).
 * - If the delivery fails, it goes back to the warehouse to retry later (retry queue).
 * - After 3 failed attempts, the package is marked as "undeliverable" and sent to a storage bin (DLQ).
 *
 * 🧩 KEY CONCEPTS:
 *
 * ➤ main_queue
 *    - Where the initial task/message is consumed.
 *
 * ➤ retry_queue
 *    - A holding area for failed messages.
 *    - Messages sit here for a TTL (e.g., 5s) before being re-delivered.
 *
 * ➤ dead_queue
 *    - Final resting place for messages that failed after all retry attempts.
 *
 * ➤ main_exchange
 *    - Routes new messages from the producer to main_queue.
 *
 * ➤ retry_exchange
 *    - Routes failed messages to retry_queue.
 *
 * ➤ dead_exchange
 *    - Routes messages to the dead_queue once max retries are exceeded.
 *
 * 🧠 HOW RETRY WORKS:
 * 1. A message is published to `main_exchange` → lands in `main_queue`
 * 2. If processing fails, it is rejected (`nack`) and sent to `retry_exchange`
 * 3. `retry_queue` holds it for X seconds (via TTL), then routes it back to `main_exchange`
 * 4. This retry loop continues until retry count exceeds the limit (tracked via `x-death` header)
 * 5. After limit (e.g., 3), it is routed to `dead_exchange` → lands in `dead_queue`
 *
 * ⚙ RETRY COUNT:
 * RabbitMQ auto-adds an `x-death` header in message metadata.
 * You can inspect this to determine how many times a message has been retried.
 *
 * ✅ BENEFITS:
 * - Resilient to temporary failures (network, DB down, etc.)
 * - Avoids infinite retry loops
 * - DLQ helps investigate and handle problematic messages later
 *
 * 🛑 LIMITATIONS:
 * - Retry logic is at queue level, not per message
 * - No exponential backoff unless you implement it manually (using multiple TTL queues)
 *
 * ─────────────────────────────────────────────────────────────
 */

/**
 * ─────────────────────────────────────────────────────────────
 * 📤 PRODUCER BLOCK — Send Task to main_queue
 * ─────────────────────────────────────────────────────────────
 */

const amqp = require("amqplib");

async function producer() {
  const conn = await amqp.connect("amqp://localhost");
  const ch = await conn.createChannel();

  // Setup exchange and queue for initial tasks
  await ch.assertExchange("main_exchange", "direct", { durable: true });

  await ch.assertQueue("main_queue", {
    durable: true,
    deadLetterExchange: "retry_exchange", // send failed to retry_exchange
  });

  await ch.bindQueue("main_queue", "main_exchange", "task_key");

  // Send a task message
  const task = { id: 101, job: "📦 Deliver Package to 42 Wallaby Way" };
  ch.publish("main_exchange", "task_key", Buffer.from(JSON.stringify(task)), {
    persistent: true,
  });

  console.log("📤 Sent task:", task);

  await ch.close();
  await conn.close();
}

// Run producer once to send a message
// producer();

/**
 * ─────────────────────────────────────────────────────────────
 * 👷 CONSUMER BLOCK — Process, Retry, or Send to DLQ
 * ─────────────────────────────────────────────────────────────
 */

const amqp = require("amqplib");

async function consumer() {
  const conn = await amqp.connect("amqp://localhost");
  const ch = await conn.createChannel();

  // Create exchanges
  await ch.assertExchange("main_exchange", "direct", { durable: true });
  await ch.assertExchange("retry_exchange", "direct", { durable: true });
  await ch.assertExchange("dead_exchange", "direct", { durable: true });

  // Main queue
  await ch.assertQueue("main_queue", {
    durable: true,
    deadLetterExchange: "retry_exchange",
  });
  await ch.bindQueue("main_queue", "main_exchange", "task_key");

  // Retry queue (5s delay)
  await ch.assertQueue("retry_queue", {
    durable: true,
    messageTtl: 5000, // 5 seconds delay
    deadLetterExchange: "main_exchange",
    deadLetterRoutingKey: "task_key",
  });
  await ch.bindQueue("retry_queue", "retry_exchange", "retry_key");

  // Dead letter queue
  await ch.assertQueue("dead_queue", { durable: true });
  await ch.bindQueue("dead_queue", "dead_exchange", "dead_key");

  console.log("👷 Waiting for messages in main_queue...");

  ch.consume(
    "main_queue",
    (msg) => {
      const task = JSON.parse(msg.content.toString());
      const xDeath = msg.properties.headers["x-death"] || [];
      const retryCount = xDeath.length > 0 ? xDeath[0].count : 0;

      console.log(`📥 Received:`, task, `| Retry #${retryCount}`);

      const failTask = true; // simulate failure

      if (failTask && retryCount < 3) {
        console.log("⏳ Failed. Requeueing to retry_queue...");
        ch.nack(msg, false, false); // reject → goes to retry_exchange
      } else if (failTask) {
        console.log("☠️ Max retries reached. Sending to dead_queue...");
        ch.ack(msg); // acknowledge to avoid retry
        ch.publish(
          "dead_exchange",
          "dead_key",
          Buffer.from(JSON.stringify(task)),
          {
            persistent: true,
          }
        );
      } else {
        console.log("✅ Task completed successfully:", task);
        ch.ack(msg);
      }
    },
    { noAck: false }
  );
}

// Run consumer to process and retry failed tasks
// consumer();
