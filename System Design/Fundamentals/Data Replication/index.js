/**
 * Database Replication
 * ---------------------
 * Database replication is the process of copying and maintaining database data across multiple servers or nodes.
 * The goal is to improve data availability, reliability, and performance by distributing copies of the database
 * across different locations. This ensures that if one server fails, the data is still accessible from another server.
 *
 * Types of Database Replication:
 * ------------------------------
 * 1. **Master-Slave Replication (Primary-Secondary)**:
 *    - The **master** (or primary) database handles write operations.
 *    - **Slave** (or secondary) databases receive copies of the data and handle read operations.
 *    - Ideal for read-heavy workloads since it offloads read traffic to replicas.
 *    - Write operations are centralized, so consistency is maintained by replicating changes to slaves.
 *
 * 2. **Master-Master Replication**:
 *    - Both databases are writable, meaning write operations can occur on any node.
 *    - Changes are synchronized between both databases.
 *    - More complex to manage but ideal for systems that require high write throughput and availability.
 *
 * 3. **Asynchronous Replication**:
 *    - The master sends updates to replicas without waiting for a confirmation that replicas have successfully received the data.
 *    - Faster, but there may be a delay between when data is written on the master and when it is available on the replicas.
 *
 * 4. **Synchronous Replication**:
 *    - The master waits for all replicas to confirm that they’ve received the data before completing the write operation.
 *    - Ensures consistency but can introduce latency, especially in distributed environments.
 *
 * 5. **Cascading Replication**:
 *    - In this setup, replication occurs in a chain. The primary node replicates data to one or more secondary nodes,
 *      which in turn replicate data to other secondaries.
 *    - This reduces the load on the primary database by distributing the replication workload.
 *
 * Advantages of Database Replication:
 * -----------------------------------
 * 1. **High Availability**: Data is available even if one server fails, ensuring minimal downtime.
 * 2. **Improved Read Performance**: Read-heavy applications can offload traffic to replica databases, improving performance.
 * 3. **Fault Tolerance**: Replication improves fault tolerance by distributing copies of the database to multiple locations.
 * 4. **Disaster Recovery**: Replicas can serve as backups, enabling recovery in the event of a failure.
 * 5. **Geographic Distribution**: Replicas can be placed in different geographical regions to reduce latency for users.
 *
 * Key Considerations in Database Replication:
 * -------------------------------------------
 * 1. **Data Consistency**: Ensuring that all replicas have up-to-date and consistent data is critical.
 * 2. **Replication Lag**: In asynchronous replication, there can be a delay between when data is written on the master and when it is available on replicas.
 * 3. **Conflict Resolution**: In master-master replication, there may be conflicts if the same record is updated simultaneously on multiple nodes.
 * 4. **Network Overhead**: Replicating data across multiple locations can introduce network overhead, especially for synchronous replication.
 *
 * User Case: Database Replication in a Global E-Commerce Platform
 * --------------------------------------------------------------
 * Scenario:
 * - A global e-commerce platform has users across multiple regions (US, EU, APAC).
 * - The platform implements database replication to ensure high availability and low latency for users in different regions.
 * - The master database is located in the US, and read replicas are deployed in EU and APAC regions.
 * - Users in those regions get faster access to data as read operations are routed to the nearest replica.
 *
 * Example: Database Replication in Node.js using MySQL and Read Replicas
 * ----------------------------------------------------------------------
 */

// Simulating master-slave database replication using Node.js and MySQL

const mysql = require("mysql");

// Master (Primary) database connection
const masterDB = mysql.createConnection({
  host: "master-db.example.com",
  user: "root",
  password: "password",
  database: "ecommerce",
});

// Read Replica (Slave) database connections
const replicaDBs = [
  mysql.createConnection({
    host: "replica1-db.example.com",
    user: "root",
    password: "password",
    database: "ecommerce",
  }),
  mysql.createConnection({
    host: "replica2-db.example.com",
    user: "root",
    password: "password",
    database: "ecommerce",
  }),
];

// Function to select a random replica for read operations
function getRandomReplica() {
  return replicaDBs[Math.floor(Math.random() * replicaDBs.length)];
}

// Function to handle write operations (goes to master)
async function createOrder(orderData) {
  return new Promise((resolve, reject) => {
    masterDB.query("INSERT INTO orders SET ?", orderData, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

// Function to handle read operations (goes to a random replica)
async function getOrderDetails(orderId) {
  const replica = getRandomReplica();
  return new Promise((resolve, reject) => {
    replica.query(
      "SELECT * FROM orders WHERE id = ?",
      [orderId],
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }
    );
  });
}

// Example usage
(async () => {
  // Write operation (creating a new order, goes to master database)
  const newOrder = { userId: 1, productId: 101, quantity: 2 };
  await createOrder(newOrder);
  console.log("Order created successfully in master database.");

  // Read operation (fetching order details, goes to a random replica)
  const orderDetails = await getOrderDetails(1); // This will be routed to a replica
  console.log("Order details from replica:", orderDetails);
})();

/**
 * Explanation:
 * ------------
 * 1. **Master-Slave Replication**: Write operations (e.g., creating a new order) are sent to the master database, while read operations
 *    (e.g., fetching order details) are distributed across read replicas to balance the load.
 *
 * 2. **Replication Strategy**: Data consistency is maintained as the master database handles all write operations.
 *    The replicas get updated asynchronously with the latest data, allowing them to handle read-heavy operations.
 *
 * 3. **Load Balancing**: By offloading read traffic to replicas, the system improves read performance and prevents the master database from becoming a bottleneck.
 *
 * 4. **Fault Tolerance**: If the master database fails, the system can promote a replica to master or serve data from the replicas, ensuring high availability.
 *
 * Real-World Scenario:
 * --------------------
 * Use case: **Social Media Platform**
 * - A social media platform with millions of users implements **master-slave replication** to handle user profile and post data.
 * - Write operations (e.g., creating posts, updating profiles) go to the master database.
 * - Read-heavy operations, such as fetching timelines or viewing user profiles, are handled by multiple read replicas.
 *
 * Advantages of Database Replication:
 * -----------------------------------
 * 1. **Increased Availability**: Data remains accessible even if the master goes down, thanks to replicas.
 * 2. **Improved Performance**: Offloading reads to replicas enhances performance, especially for read-heavy applications.
 * 3. **Fault Tolerance**: Replicas can be promoted to master in case of failure, improving disaster recovery.
 * 4. **Load Balancing**: Read replicas distribute the load, ensuring that high traffic doesn’t overwhelm the master database.
 *
 * Key Considerations:
 * -------------------
 * - **Replication Lag**: In asynchronous replication, there might be a delay between the master and replicas, leading to temporary inconsistencies.
 * - **Conflict Resolution**: In master-master setups, conflict resolution mechanisms must be in place to handle data inconsistencies.
 * - **Network Overhead**: Synchronous replication can introduce latency if replicas are geographically distributed.
 */
