/**
 * ─────────────────────────────────────────────────────────────
 * 🧠 WHAT IS RABBITMQ STREAM?
 * ─────────────────────────────────────────────────────────────
 * ✅ RabbitMQ Stream is a **high-throughput, append-only log** system:
 *
 * - Ideal for event sourcing, log aggregation, time-series pipelines.
 * - Allows consumers to replay messages (not just "once-and-gone" like queues).
 * - Supports very large data retention (gigabytes to terabytes).
 *
 * 🆚 Compared to traditional queues:
 * ┌────────────────────┬─────────────────────────────────────────────┐
 * │ Feature            │ Classic Queues        | Streams              │
 * ├────────────────────┼───────────────────────┼─────────────────────┤
 * │ Message Storage    │ In-memory + disk      | Append-only log      │
 * │ Consumption Model  │ Push-only             | Replay possible      │
 * │ Throughput         │ Medium                | Very High            │
 * │ Retention          │ TTL-based (short)     | Size/time-based      │
 * │ Use Cases          │ Tasks, Jobs           | Logs, Events         │
 * └────────────────────┴───────────────────────┴─────────────────────┘
 *
 * 🧾 Real-world example:
 *  A system publishes log entries to a stream:
 *    - One consumer stores to DB
 *    - Another prints to terminal
 *    - Both can replay past events anytime
 */

const rabbit = require("rabbitmq-stream-js-client");

/**
 * Producer sends a single message to a stream.
 */
(async () => {
  const streamName = "hello-nodejs-stream";

  console.log("🔌 Connecting to RabbitMQ Stream...");
  const client = await rabbit.connect({
    hostname: "localhost",
    port: 5552,
    username: "guest",
    password: "guest",
    vhost: "/",
  });

  console.log("📦 Creating stream (if not exists)...");
  await client.createStream({
    stream: streamName,
    arguments: {
      "max-length-bytes": 5 * 1024 * 1024 * 1024, // 5GB retention
    },
  });

  const publisher = await client.declarePublisher({ stream: streamName });

  const message = "🔥 Hello from RabbitMQ Stream!";
  console.log("📤 Sending message...");
  await publisher.send(Buffer.from(message));

  console.log("✅ Message sent:", message);

  await client.close();
})();

const rabbit = require("rabbitmq-stream-js-client");

/**
 * Consumer reads messages from the stream (starting from beginning).
 */
(async () => {
  const streamName = "hello-nodejs-stream";

  console.log("🔌 Connecting to RabbitMQ Stream...");
  const client = await rabbit.connect({
    hostname: "localhost",
    port: 5552,
    username: "guest",
    password: "guest",
    vhost: "/",
  });

  console.log("📦 Ensuring stream exists...");
  await client.createStream({
    stream: streamName,
    arguments: {
      "max-length-bytes": 5 * 1024 * 1024 * 1024, // same 5GB limit
    },
  });

  console.log("📥 Subscribing to stream from first message...");
  await client.declareConsumer(
    {
      stream: streamName,
      offset: rabbit.Offset.first(), // 👈 consume from beginning
    },
    (msg) => {
      console.log("📨 Received message:", msg.content.toString());
    }
  );
})();

//* SETUP & USAGE
// # 1. Initialize project
// npm init -y

// # 2. Install RabbitMQ stream client
// npm install rabbitmq-stream-js-client

// # 3. Add these scripts to package.json (optional)
// # "scripts": {
// #   "send": "node send.js",
// #   "receive": "node receive.js"
// # }

// # 4. Start RabbitMQ with Streams enabled (via Docker)
// docker run -it --rm --name rabbitmq -p 5552:5552 -p 15672:15672 -p 5672:5672 \
//   -e RABBITMQ_SERVER_ADDITIONAL_ERL_ARGS='-rabbitmq_stream advertised_host localhost' \
//   rabbitmq:4-management

// # Enable stream plugin:
// docker exec rabbitmq rabbitmq-plugins enable rabbitmq_stream rabbitmq_stream_management

// # 5. Run consumer first
// node receive.js

// # 6. In another terminal, run producer
// node send.js

/**
 * ─────────────────────────────────────────────────────────────
 * 🧠 RABBITMQ STREAMS — OVERVIEW, USE CASES, PROS & CONS
 * ─────────────────────────────────────────────────────────────
 * 📦 WHAT ARE RABBITMQ STREAMS?
 * RabbitMQ Streams are a high-throughput, durable, and replayable
 * messaging feature designed for **event streaming**, introduced in RabbitMQ 3.9.
 * Unlike traditional queues (where messages are consumed once), streams act
 * like an **append-only log** — allowing multiple consumers to read from
 * any offset (start, latest, etc.).
 *
 * 🔥 WHY USE STREAMS?
 * Traditional queues are great for job processing (one-time tasks),
 * but fall short when you need:
 *   → Replayable history of messages
 *   → Massive data throughput
 *   → Time-based or size-based retention
 *   → Real-time AND historical event consumption
 *
 * 🧾 REAL-WORLD EXAMPLES:
 * ┌─────────────────────────────────────────────────────────────┐
 * │ 📊 Event Sourcing & Audit Logs                              │
 * │     - Persist every user action or system event             │
 * │                                                             │
 * │ 📈 Metrics & Monitoring Pipelines                           │
 * │     - Stream server metrics (CPU, memory, errors...)        │
 * │                                                             │
 * │ 📡 IoT or Sensor Data                                       │
 * │     - Collect readings from thousands of sensors            │
 * │                                                             │
 * │ 💬 Chat & Notification Streams                              │
 * │     - Replay missed messages for new/late consumers         │
 * └─────────────────────────────────────────────────────────────┘
 *
 * ✅ PROS:
 * ─────────────────────────────────────────────────────────────
 * ✔ Super high throughput (millions of msgs/sec)
 * ✔ Replay support — fetch from start, or a specific offset
 * ✔ Durable storage — configurable (e.g. 5GB, 7 days, etc.)
 * ✔ Multiple consumers per stream
 * ✔ Ideal for decoupled, observable, scalable systems
 *
 * ⚠️ CONS:
 * ─────────────────────────────────────────────────────────────
 * ❌ More complex than basic queues
 * ❌ Higher disk usage (messages retained longer)
 * ❌ Requires stream-specific ports (default: 5552)
 * ❌ Not all RabbitMQ clients support Streams yet
 *
 * 🧠 TL;DR
 * Use RabbitMQ Streams if:
 * → You need to **consume and replay** messages
 * → You deal with **large volumes of continuous events**
 * → You want **durable logs** with high performance
 */
