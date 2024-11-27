// ========================== EVENTS IN NODE.JS ===========================

// Theory:
// - Node.js uses an event-driven architecture to handle asynchronous operations.
// - The "EventEmitter" class from the "events" module is used to handle custom events.
// - An event is emitted (triggered), and listeners (callbacks) respond to it.

// Importing the EventEmitter class
const EventEmitter = require("events");

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Register an event listener for a custom event named "greet"
eventEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the "greet" event
eventEmitter.emit("greet", "Alice"); // Output: Hello, Alice!

// Register an event that executes only once using "once"
eventEmitter.once("welcome", () => {
  console.log("Welcome event triggered!");
});

// Emit the "welcome" event twice
eventEmitter.emit("welcome"); // Output: Welcome event triggered!
eventEmitter.emit("welcome"); // No output, listener is removed after the first call

// =========================== EVENT LOOP ===========================

// Theory:
// - The Event Loop is the core of Node.js's asynchronous execution.
// - It listens for events and executes their corresponding callbacks.
// - Tasks are divided into "phases" (e.g., timers, I/O, close callbacks).

// Example: Asynchronous I/O with Event Loop
const fs = require("fs");

console.log("1. Start"); // Output first
fs.readFile("./example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("3. File content read!"); // Output after I/O is complete
});
console.log("2. End"); // Output second

// Output Order:
// 1. Start
// 2. End
// 3. File content read!

// =========================== THREAD POOLS ===========================

// Theory:
// - Node.js uses a thread pool for handling expensive I/O operations (e.g., file, network).
// - By default, the thread pool size is 4 (can be adjusted using `UV_THREADPOOL_SIZE`).
// - The thread pool is managed by libuv, separate from the Event Loop.

// Example: Using the thread pool with crypto (for computational tasks)
const crypto = require("crypto");

console.log("Start hashing tasks");

// Perform 4 hashing tasks (uses thread pool)
for (let i = 0; i < 4; i++) {
  crypto.pbkdf2("password", "salt", 100000, 64, "sha512", () => {
    console.log(`Task ${i + 1} completed`);
  });
}

// Perform 1 additional hashing task
crypto.pbkdf2("password", "salt", 100000, 64, "sha512", () => {
  console.log("Task 5 completed (may queue)");
});

// Output:
// - The first 4 tasks run in parallel (using the 4 threads in the pool).
// - The 5th task may be queued until a thread becomes available.

// =========================== SUMMARY ===========================
// 1. Events:
// - Node.js uses the EventEmitter class to handle custom events.
// - The Event Loop processes these events and their callbacks in phases.

// 2. Thread Pool:
// - Used for handling CPU-intensive or blocking I/O operations.
// - Default size is 4 threads but can be increased for high workloads.

// Note: Thread pools are primarily for libuv-managed tasks like `fs`, `crypto`, and some `dns` operations.
// They do not run user-defined JavaScript code.
