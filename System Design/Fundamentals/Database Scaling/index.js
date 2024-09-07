/**
 * Database Scaling
 * -----------------
 * Database scaling refers to techniques used to handle increasing data load and traffic while ensuring performance, availability,
 * and reliability. As applications grow, they require databases to manage more read and write operations. Scaling a database
 * can be done vertically or horizontally, depending on the system architecture and requirements.
 *
 * Types of Database Scaling:
 * --------------------------
 * 1. **Vertical Scaling (Scaling Up)**:
 *    - Involves upgrading the existing database server by adding more CPU, RAM, or storage.
 *    - Easier to implement but has a hardware limit. Once you reach the max capacity of a machine, you can’t scale further.
 *    - Suitable for small to medium applications but not ideal for massive scaling.
 *
 * 2. **Horizontal Scaling (Scaling Out)**:
 *    - Involves adding more database servers (or nodes) to distribute the load.
 *    - More complex but offers limitless scaling.
 *    - Requires data partitioning or sharding to split data across multiple servers.
 *    - Suitable for large-scale applications with high traffic.
 *
 * 3. **Sharding**:
 *    - A type of horizontal scaling where the database is split into smaller pieces called shards.
 *    - Each shard contains a subset of the total data, and queries are routed to the appropriate shard.
 *    - Example: Splitting user data across multiple databases by region (e.g., shard for US users, another for EU users).
 *
 * 4. **Read Replicas**:
 *    - Involves creating replica databases to handle read-heavy workloads.
 *    - Write operations go to the master database, and read operations are distributed among read replicas.
 *    - Improves read performance without overloading the main database.
 *
 * 5. **Caching**:
 *    - Use caching mechanisms like Redis or Memcached to store frequently accessed data in memory.
 *    - Reduces the load on the database by serving repeated queries from cache.
 *
 * 6. **Database Partitioning**:
 *    - Splitting a single large database table into smaller, manageable parts (partitions) to improve performance.
 *    - Partitions can be created based on ranges (e.g., date range) or list values (e.g., by region or department).
 *
 * Key Considerations in Database Scaling:
 * ---------------------------------------
 * 1. **Consistency**: Ensuring that all replicas or shards maintain consistent data.
 * 2. **Latency**: Minimizing latency while distributing data across multiple nodes.
 * 3. **Fault Tolerance**: Handling failures gracefully in distributed databases.
 * 4. **Query Routing**: Efficiently routing queries to the correct shard or replica.
 * 5. **Backup and Recovery**: Ensuring that data can be backed up and restored across multiple nodes.
 *
 * User Case: Database Scaling for an E-Commerce Platform
 * ------------------------------------------------------
 * Scenario:
 * - An e-commerce platform handles millions of customers and transactions daily.
 * - The platform needs to scale its database to handle increased traffic during events like flash sales or Black Friday.
 * - To improve performance, the platform implements horizontal scaling by sharding the user and order data across multiple servers.
 * - Additionally, read replicas are used to improve read performance for frequently accessed product details.
 *
 * Example: Database Scaling Using Read Replicas and Sharding in Node.js
 * ---------------------------------------------------------------------
 */

// Simulating database read replica and sharding for an e-commerce platform

const axios = require("axios");

// Simulated main database for write operations (master)
const masterDB = "http://master-db.example.com";

// Simulated read replica databases for read operations (replicas)
const replicaDBs = [
  "http://replica1-db.example.com",
  "http://replica2-db.example.com",
  "http://replica3-db.example.com",
];

// Shards for user data (horizontal scaling by sharding)
const userShards = [
  "http://user-shard1-db.example.com", // Users with ID 1-10000
  "http://user-shard2-db.example.com", // Users with ID 10001-20000
];

// Function to get a random read replica for reading data
function getRandomReplica() {
  return replicaDBs[Math.floor(Math.random() * replicaDBs.length)];
}

// Function to find the appropriate shard based on user ID
function getShardForUser(userId) {
  if (userId <= 10000) return userShards[0];
  return userShards[1];
}

// Function to handle user write operations (e.g., user registration)
async function registerUser(userData) {
  // Write operation goes to the master database
  const response = await axios.post(`${masterDB}/users`, userData);
  return response.data;
}

// Function to handle user read operations (e.g., fetching user details)
async function getUserDetails(userId) {
  // Determine the appropriate shard for the user based on their ID
  const shard = getShardForUser(userId);
  const response = await axios.get(`${shard}/users/${userId}`);
  return response.data;
}

// Function to handle product read operations (e.g., fetching product details)
async function getProductDetails(productId) {
  // Read operation goes to a random replica
  const replica = getRandomReplica();
  const response = await axios.get(`${replica}/products/${productId}`);
  return response.data;
}

// Example usage
(async () => {
  // Registering a new user (write operation goes to master DB)
  const newUser = { name: "Alice", email: "alice@example.com" };
  await registerUser(newUser);

  // Fetching user details (read operation goes to a shard)
  const userDetails = await getUserDetails(1500); // This goes to user-shard1
  console.log("User Details:", userDetails);

  // Fetching product details (read operation goes to a replica)
  const productDetails = await getProductDetails(42); // This goes to a random read replica
  console.log("Product Details:", productDetails);
})();

/**
 * Explanation:
 * ------------
 * 1. **Master-Replica Architecture**: Write operations (such as user registration) are handled by the master database,
 *    while read operations (such as fetching product details) are distributed across read replicas to improve performance.
 *
 * 2. **Sharding**: User data is horizontally scaled by sharding across two databases (`user-shard1-db` and `user-shard2-db`).
 *    Users with IDs from 1 to 10000 are stored in `user-shard1-db`, and users with IDs from 10001 onward are stored in `user-shard2-db`.
 *
 * 3. **Load Balancing**: Read operations for product data are load-balanced across multiple read replicas. This ensures
 *    that the load on the master database is reduced, improving performance during read-heavy scenarios.
 *
 * 4. **Scalability**: This architecture allows the platform to scale horizontally by adding more shards and replicas
 *    as the number of users and products grows.
 *
 * Real-World Scenario:
 * --------------------
 * Use case: **Social Media Platform**
 * - A social media platform with millions of users needs to scale its database to handle user data (profiles, posts, messages).
 * - Horizontal scaling with sharding is implemented to distribute user data across multiple database servers.
 * - Read replicas are used to improve read performance for popular content (e.g., trending posts or public profiles).
 *
 * Key Benefits of Database Scaling:
 * ---------------------------------
 * 1. **Improved Performance**: Scaling databases improves performance by distributing the load, reducing bottlenecks.
 * 2. **High Availability**: Read replicas ensure high availability and fault tolerance.
 * 3. **Seamless Growth**: Horizontal scaling allows the system to handle growth without major architectural changes.
 * 4. **Reduced Latency**: Sharding and replicas minimize latency by distributing data geographically or logically.
 * 5. **Cost Efficiency**: Horizontal scaling allows you to use multiple smaller, cost-effective servers instead of one large machine.
 */
