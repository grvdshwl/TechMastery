// How Redis Works:

// Redis stores data in memory, which allows for extremely fast data access and manipulation.
// It supports various data structures like strings, lists, sets, and hashes, making it versatile for different use cases.

// Example: Using Redis for Caching

// 1. Connecting to Redis:
// First, you need to connect to a Redis server. This can be done using a Redis client library.

const redis = require("redis");
const client = redis.createClient();

client.on("error", (err) => {
  console.log("Redis error: " + err);
});

// 2. Storing Data:
// You can store data in Redis using the `set` command. Here, we're caching the result of an expensive computation.

const key = "expensive_computation_result";
const value = "42"; // Result of some expensive computation

client.set(key, value, redis.print); // 'redis.print' is a callback that logs the operation result

// 3. Retrieving Data:
// You can retrieve data from Redis using the `get` command. If the data is in the cache, you get it instantly.

client.get(key, (err, result) => {
  if (err) {
    console.log("Error getting data from Redis: " + err);
  } else if (result) {
    console.log("Cached result: " + result); // Prints 'Cached result: 42'
  } else {
    console.log("Data not found in cache");
  }
});

// 4. Using Different Data Structures:
// Redis supports various data structures. For example, you can use lists to store a collection of items.

const listKey = "recent_users";

// Adding items to a list
client.lpush(listKey, "user1", redis.print);
client.lpush(listKey, "user2", redis.print);
client.lpush(listKey, "user3", redis.print);

// Retrieving items from a list
client.lrange(listKey, 0, -1, (err, items) => {
  if (err) {
    console.log("Error getting list from Redis: " + err);
  } else {
    console.log("Recent users: " + items); // Prints 'Recent users: user3,user2,user1'
  }
});

// 5. Using Redis for Pub/Sub Messaging:
// Redis can be used for publish/subscribe messaging. One part of your system can publish messages,
// and another part can subscribe to receive those messages.

const pub = redis.createClient();
const sub = redis.createClient();

sub.on("message", (channel, message) => {
  console.log("Received message: " + message + " on channel: " + channel);
});

sub.subscribe("updates");

pub.publish("updates", "Hello, subscribers!"); // This message will be received by the subscriber

// In Summary:

// Redis works by storing data in memory for fast access. You can connect to a Redis server, store data,
// retrieve data, and use various data structures like strings, lists, and hashes. Redis also supports
// pub/sub messaging for real-time communication between different parts of your system. This makes Redis
// a powerful tool for caching, session management, real-time analytics, and more.
