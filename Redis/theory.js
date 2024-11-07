// 1. What is Redis?

// Redis (Remote Dictionary Server) is an open-source, in-memory key-value store known for its high performance and flexibility. It is commonly used as a caching layer or session store in web applications. Redis supports various data structures such as strings, hashes, lists, sets, sorted sets, bitmaps, and more. It stores data in memory, which makes it faster than traditional databases that store data on disk.

// Example of setting a key-value pair in Redis:
// redisClient.set('username', 'john_doe');

// Redis supports persistence options like RDB (point-in-time snapshots) and AOF (append-only file) for data durability, but it is mainly known for its speed in temporary data storage, caching, and real-time applications.

// 2. What are the different data types supported by Redis?

// Redis supports several data types, each with its own use case:

// - **Strings**: Redis strings are the most basic data type. They can store any kind of data, such as text or numbers.
// Example:
// redisClient.set('name', 'John');

// - **Hashes**: Hashes are maps between string fields and string values. They are useful for storing objects with multiple properties.
// Example:
// redisClient.hset('user:1000', 'name', 'John', 'age', 30);

// - **Lists**: Redis lists are ordered collections of strings. You can push items to the head or tail of the list, making them useful for queuing and stack-like operations.
// Example:
// redisClient.rpush('queue', 'task1', 'task2');

// - **Sets**: Redis sets are unordered collections of unique strings. Useful for storing unique items and performing set operations like union, intersection, etc.
// Example:
// redisClient.sadd('users', 'user1', 'user2');

// - **Sorted Sets**: Redis sorted sets are similar to sets but with an associated score for each member, which allows elements to be ordered.
// Example:
// redisClient.zadd('leaderboard', 100, 'user1', 200, 'user2');

// - **Bitmaps**: Redis supports bitmaps for representing large amounts of binary data efficiently.

// - **HyperLogLog**: Used for approximating the cardinality of a dataset, helping to count unique items.

// - **Geospatial Indexes**: Redis supports geographic data types for storing and querying geographic locations (latitude/longitude).

// 3. What is Redis Persistence?

// Redis is primarily an in-memory database, but it also supports persistence options to store data on disk for durability. There are two main persistence mechanisms in Redis:

// - **RDB (Redis Database)**: Redis takes snapshots of your dataset at specified intervals. This is done through the `SAVE` or `BGSAVE` commands. It offers better performance for read-heavy workloads but with the risk of data loss between snapshots.
// Example:
// redisClient.save();  // Triggers a snapshot.

// - **AOF (Append-Only File)**: Redis appends every write operation to a log file, making it possible to re-construct the dataset by replaying the operations. This option ensures durability, but it comes with more disk I/O overhead.
// Example:
// redisClient.config('SET', 'appendonly', 'yes');

// You can also configure Redis to use both RDB and AOF for redundancy. The combination of these options allows for balancing durability and performance depending on the needs of the application.

// 4. How does Redis handle data eviction?

// Redis provides different eviction policies to handle situations when the memory limit is reached. When Redis runs out of memory, it uses the eviction policy to decide which keys to remove to free up space:

// - **noeviction**: Redis will return an error if the memory limit is reached and no more keys can be added.
// Example:
// redisClient.config('SET', 'maxmemory-policy', 'noeviction');

// - **allkeys-lru**: Redis will remove the least recently used (LRU) keys from the dataset.
// Example:
// redisClient.config('SET', 'maxmemory-policy', 'allkeys-lru');

// - **volatile-lru**: Redis will remove the least recently used keys that have an expiry set (i.e., volatile keys).
// Example:
// redisClient.config('SET', 'maxmemory-policy', 'volatile-lru');

// - **allkeys-random**: Redis will remove random keys from the dataset.
// Example:
// redisClient.config('SET', 'maxmemory-policy', 'allkeys-random');

// - **volatile-random**: Redis will remove random keys with an expiry set.
// Example:
// redisClient.config('SET', 'maxmemory-policy', 'volatile-random');

// - **volatile-ttl**: Redis will remove keys with the shortest time to live (TTL) first.
// Example:
// redisClient.config('SET', 'maxmemory-policy', 'volatile-ttl');

// Choosing the appropriate eviction policy depends on your application’s use case (e.g., caching, session storage) and the importance of different types of data.

// 5. What are Redis Pub/Sub (Publish/Subscribe) and its use cases?

// Redis Pub/Sub is a messaging pattern that allows messages to be sent to multiple subscribers. In this pattern, publishers send messages to channels, and subscribers receive messages from those channels. It allows for real-time messaging in distributed systems.

// Example of publishing a message to a channel:
// redisClient.publish('news_channel', 'Breaking news: Redis is awesome!');

// Example of subscribing to a channel:
// redisClient.subscribe('news_channel', function(channel, message) {
//   console.log('Received message:', message);
// });

// Use cases of Redis Pub/Sub:
// - Real-time notifications in applications.
// - Event-driven architectures where subscribers listen for specific events.
// - Chat systems, live updates, and real-time data streaming.

// Redis Pub/Sub is best for broadcasting messages to multiple subscribers but does not guarantee message persistence (i.e., messages are lost if no one is subscribed at the time of publishing). If you need durability, you can combine Pub/Sub with Redis streams or other persistence mechanisms.
