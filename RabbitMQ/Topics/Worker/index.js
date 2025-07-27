/**
 * ─────────────────────────────────────────────────────────────
 * 🧠 WHAT IS A WORK QUEUE? (RabbitMQ)
 * ─────────────────────────────────────────────────────────────
 * A Work Queue is a messaging pattern where:
 *
 * → One or more PRODUCERS send tasks (messages) to a QUEUE.
 * → One or more WORKERS (consumers) pull tasks from the QUEUE and process them.
 * → Each task is given to only ONE worker — not broadcasted.
 *
 * 🧾 Real-world example:
 * A restaurant kitchen has:
 *   - a tray for incoming orders (QUEUE)
 *   - a server writing orders (PRODUCER)
 *   - several chefs preparing dishes (WORKERS)
 *
 * ─────────────────────────────────────────────────────────────
 * ✅ PURPOSE OF WORK QUEUES
 * ─────────────────────────────────────────────────────────────
 * ✔ Offload slow/background work from the main app.
 * ✔ Prevent loss of tasks if system crashes (with durable queues/messages).
 * ✔ Share tasks between multiple workers to scale efficiently.
 *
 * 
 /**
 * ─────────────────────────────────────────────────────────────
 * 🧠 PRODUCER — new_task.js
 * ─────────────────────────────────────────────────────────────
 * This script sends a task (message) to a queue.
 * Each dot (.) in the message simulates 1 second of work.
 *
 * 💡 Real-world analogy:
 * This is like a restaurant server writing an order and
 * putting it in the kitchen's queue (tray).
 */

const amqp = require("amqplib/callback_api");

// Step 1: Connect to RabbitMQ server
amqp.connect("amqp://localhost", function (error0, connection) {
  if (error0) throw error0;

  // Step 2: Create a channel
  connection.createChannel(function (error1, channel) {
    if (error1) throw error1;

    const queue = "task_queue";
    const msg = process.argv.slice(2).join(" ") || "Hello...";

    // Step 3: Declare durable queue
    channel.assertQueue(queue, { durable: true });

    // Step 4: Send a persistent message to the queue
    channel.sendToQueue(queue, Buffer.from(msg), { persistent: true });

    console.log("📤 [x] Sent task:", msg);
  });

  // Step 5: Close the connection after a short delay
  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
});

/**
 * ✅ HOW TO USE:
 * $ node new_task.js "Clean the house..."
 *
 * 🖨️ OUTPUT:
 * 📤 [x] Sent task: Clean the house...
 */

/**
 * ─────────────────────────────────────────────────────────────
 * 🧠 WORKER — worker.js
 * ─────────────────────────────────────────────────────────────
 * This script listens for tasks and "does the work".
 * Each dot (.) in the message = 1 second of simulated work.
 *
 * 💡 Real-world analogy:
 * This is like a chef picking an order from the tray and preparing it.
 */

const amqp = require("amqplib/callback_api");

// Step 1: Connect to RabbitMQ server
amqp.connect("amqp://localhost", function (error0, connection) {
  if (error0) throw error0;

  // Step 2: Create a channel
  connection.createChannel(function (error1, channel) {
    if (error1) throw error1;

    const queue = "task_queue";

    // Step 3: Declare durable queue (same as producer)
    channel.assertQueue(queue, { durable: true });

    // Step 4: Fair dispatch — give only 1 task at a time per worker
    channel.prefetch(1);

    console.log(
      "👷 [*] Waiting for messages in '%s'. To exit press CTRL+C",
      queue
    );

    // Step 5: Start consuming messages
    channel.consume(
      queue,
      function (msg) {
        const task = msg.content.toString();
        const secs = task.split(".").length - 1;

        console.log("📥 [x] Received:", task);
        console.log("⏳ [~] Working for", secs, "seconds...");

        // Step 6: Simulate work based on number of dots
        setTimeout(() => {
          console.log("✅ [✓] Done with task:", task);

          // Step 7: Acknowledge the message to remove it from the queue
          channel.ack(msg);
        }, secs * 1000);
      },
      {
        noAck: false, // Enable manual acknowledgment
      }
    );
  });
});

/**
 * ✅ HOW TO USE:
 * $ node worker.js
 *
 * 🖨️ OUTPUT:
 * 👷 [*] Waiting for messages in 'task_queue'. To exit press CTRL+C
 * 📥 [x] Received: Clean the house...
 * ⏳ [~] Working for 3 seconds...
 * ✅ [✓] Done with task: Clean the house...
 */
