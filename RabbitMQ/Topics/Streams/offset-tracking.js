/**
 * ─────────────────────────────────────────────────────────────
 * 📘 WHAT IS OFFSET TRACKING?
 * ─────────────────────────────────────────────────────────────
 * ➤ A stream = an append-only log of messages (like an array)
 * ➤ An offset = a number that represents the position of a message
 *
 * ➤ Example:
 *    Message at index 0: "hello 0"
 *    Message at index 99: "marker"
 *
 * 🛠️ WHY USE OFFSET TRACKING?
 * - Resume consumption after crash without reprocessing old data
 * - Support durable event-driven systems
 * - Read from a specific point (e.g., after midnight logs)
 *
 * ✅ PROS:
 * - Accurate resume on restart
 * - No duplicate processing
 * - Built-in support in RabbitMQ Streams
 *
 * ⚠️ CONS:
 * - Slightly more complex to manage consumerRefs and offsets
 *
 * 🧪 HOW TO TRACK:
 * - `storeOffset(offset)` = save progress
 * - `queryOffset(ref)` = resume progress
 */

/**
 * ─────────────────────────────────────────────────────────────
 * 📤 OFFSET TRACKING — PRODUCER (offset_tracking_send.js)
 * ─────────────────────────────────────────────────────────────
 * This script:
 * 1. Connects to RabbitMQ Stream server
 * 2. Declares a stream (if not already exists)
 * 3. Publishes 100 messages — last one is a special "marker"
 *
 * 🧪 The "marker" helps the consumer know when to stop.
 */

const rabbit = require("rabbitmq-stream-js-client");

(async () => {
  const streamName = "stream-offset-tracking-js";
  const client = await rabbit.connect({
    hostname: "localhost",
    port: 5552,
    username: "guest",
    password: "guest",
    vhost: "/",
  });

  console.log("📡 Making sure stream exists...");
  await client.createStream({
    stream: streamName,
    arguments: { "max-length-bytes": 5 * 1e9 },
  });

  const publisher = await client.declarePublisher({ stream: streamName });

  const messageCount = 100;
  console.log(`🚀 Publishing ${messageCount} messages...`);
  for (let i = 0; i < messageCount; i++) {
    const content = i === messageCount - 1 ? "marker" : `hello ${i}`;
    await publisher.send(Buffer.from(content));
  }

  console.log("✅ Done sending!");
  await publisher.close();
  await client.close();
})();
