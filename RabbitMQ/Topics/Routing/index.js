/**
 * ─────────────────────────────────────────────────────────────
 * 🧠 RABBITMQ PATTERN: ROUTING (USING DIRECT EXCHANGE)
 * ─────────────────────────────────────────────────────────────
 * 💡 GOAL:
 *   Send messages to specific consumers based on a **routing key**.
 *
 * 👷‍♂️ COMPONENTS:
 *   1️⃣ Producer: Sends messages with a routing key (e.g., "info", "error").
 *   2️⃣ Direct Exchange: Delivers each message to queues **bound with matching keys**.
 *   3️⃣ Consumer(s): Declare interest in specific routing keys.
 *
 * 📦 Analogy:
 *   Imagine a mailroom (exchange) that receives packages with labels.
 *   - "Fragile" packages only go to the fragile handler.
 *   - "Urgent" messages are picked up by the express courier.
 *
 * 🧪 USE CASES:
 *   - Filter logs by level: info, warning, error
 *   - Deliver events to microservices by topic
 *   - Load only relevant tasks into services
 *
 * 🔁 COMPARED TO:
 * ┌────────────┬──────────────────────────────┐
 * │ Pattern     │ Message Sent To              │
 * ├────────────┼──────────────────────────────┤
 * │ Work Queue │ One consumer only            │
 * │ Fanout     │ All consumers (broadcast)    │
 * │ Direct     │ Consumers with matching keys │
 * └────────────┴──────────────────────────────┘
 */

/**
 * ─────────────────────────────────────────────────────────────
 * 🏭 PRODUCER — emit_log_direct.js
 * ─────────────────────────────────────────────────────────────
 * ✔ Sends a message to the "direct_logs" exchange
 * ✔ Attaches a routing key (e.g., "info", "error")
 *
 * 🧪 EXAMPLES:
 * $ node emit_log_direct.js info "Server started"
 * $ node emit_log_direct.js warning "High CPU"
 * $ node emit_log_direct.js error "System crash"
 */

const amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", (err0, connection) => {
  if (err0) throw err0;

  connection.createChannel((err1, channel) => {
    if (err1) throw err1;

    const exchange = "direct_logs";
    const args = process.argv.slice(2);
    const msg = args.slice(1).join(" ") || "Hello World!";
    const severity = args[0] || "info"; // routing key

    // 1. Declare a direct exchange
    channel.assertExchange(exchange, "direct", { durable: false });

    // 2. Publish message with routing key
    channel.publish(exchange, severity, Buffer.from(msg));
    console.log(`📤 [x] Sent '${severity}': '${msg}'`);
  });

  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
});

/**
 * ─────────────────────────────────────────────────────────────
 * 📥 CONSUMER — receive_logs_direct.js
 * ─────────────────────────────────────────────────────────────
 * ✔ Connects to RabbitMQ
 * ✔ Declares same direct exchange
 * ✔ Creates exclusive (temp) queue
 * ✔ Binds to routing key(s) passed via CLI
 * ✔ Receives and prints matching messages
 *
 * 🧪 USAGE:
 * Terminal 1: Only error messages
 * $ node receive_logs_direct.js error
 *
 * Terminal 2: All logs
 * $ node receive_logs_direct.js info warning error
 *
 * Terminal 3: Emit messages
 * $ node emit_log_direct.js error "Boom!"
 * $ node emit_log_direct.js info "System up"
 */

const amqp = require("amqplib/callback_api");

// Get routing keys from CLI
const severities = process.argv.slice(2); // e.g., ['info', 'error']
if (args.length === 0) {
  console.log("Usage: node receive_logs_direct.js [info] [warning] [error]");
  process.exit(1);
}

amqp.connect("amqp://localhost", (err0, connection) => {
  if (err0) throw err0;

  connection.createChannel((err1, channel) => {
    if (err1) throw err1;

    const exchange = "direct_logs";

    // 1. Declare direct exchange
    channel.assertExchange(exchange, "direct", { durable: false });

    // 2. Declare exclusive temp queue (random name)
    channel.assertQueue("", { exclusive: true }, (err2, q) => {
      if (err2) throw err2;

      console.log("👂 [*] Waiting for logs. To exit press CTRL+C");

      // 3. Bind queue for each routing key
      args.forEach((severity) => {
        channel.bindQueue(q.queue, exchange, severity);
      });

      // 4. Consume messages
      channel.consume(
        q.queue,
        (msg) => {
          console.log(
            `📩 [x] ${msg.fields.routingKey}: '${msg.content.toString()}'`
          );
        },
        { noAck: true }
      );
    });
  });
});
