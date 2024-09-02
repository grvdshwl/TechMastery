// https://www.youtube.com/watch?v=cODCpXtPHbQ

/**
 * Database Performance Overview with Additional Parameters
 *
 * | Database          | Type       | Throughput (TPS)         | Latency (ms) | Minimum Price per Node (USD/month) | Storage Type | Scalability       | Consistency Model | Suitable Use Cases                               | Ease of Use         |
 * |-------------------|------------|--------------------------|--------------|-------------------------------------|--------------|-------------------|-------------------|--------------------------------------------------|---------------------|
 * | PostgreSQL        | SQL        | 2,000 - 40,000           | 1 - 50       | $20 - $50                          | Disk-based   | Vertical & Horizontal | ACID              | Complex queries, OLTP, Analytics                | Moderate            |
 * | MySQL             | SQL        | 2,000 - 50,000           | 1 - 50       | $20 - $50                          | Disk-based   | Vertical & Horizontal | ACID              | Web applications, Read-heavy workloads           | Easy                |
 * | Oracle Database   | SQL        | 10,000 - 500,000         | 1 - 20       | $350 - $1,000+                     | Disk-based   | Vertical & Horizontal | ACID              | Enterprise applications, High availability      | Complex             |
 * | Microsoft SQL Server | SQL    | 10,000 - 200,000         | 1 - 20       | $150 - $500+                       | Disk-based   | Vertical & Horizontal | ACID              | Enterprise applications, Business intelligence  | Moderate            |
 * | MongoDB           | NoSQL      | 5,000 - 100,000          | 1 - 15       | $50 - $200                         | Disk-based   | Horizontal         | BASE              | Document storage, Real-time analytics           | Easy                |
 * | Cassandra         | NoSQL      | 10,000 - 1,000,000       | 1 - 15       | $200 - $500+                       | Disk-based   | Horizontal         | BASE              | High write throughput, Time-series data         | Moderate            |
 * | Couchbase         | NoSQL      | 50,000 - 1,000,000       | 1 - 5        | $200 - $500+                       | Disk-based   | Horizontal         | BASE              | Low-latency operations, Real-time analytics     | Moderate            |
 * | Redis             | Key-Value  | 100,000 - 1,000,000      | < 1          | $20 - $100                         | In-memory    | Vertical & Horizontal | BASE              | Caching, Real-time analytics                    | Easy                |
 * | DynamoDB          | Key-Value  | Scalable (varies)        | < 10         | $25+                               | Disk-based   | Horizontal         | BASE              | Serverless applications, IoT, Mobile apps       | Easy                |
 * | Memcached         | Key-Value  | 200,000 - 1,000,000      | < 1          | $15 - $100                         | In-memory    | Horizontal         | BASE              | Caching, Session management                     | Easy                |
 *
 * Notes:
 *
 * 1. Throughput (TPS): Transactions Per Second, indicating the number of transactions a database can handle per second. This can vary significantly based on the configuration, hardware, and workload.
 * 2. Latency (ms): The time it takes to complete a single transaction or query, measured in milliseconds. Lower latency is generally better.
 * 3. Minimum Price per Node (USD/month): Approximate cost for a basic node. Prices can vary based on the cloud provider, region, and specific configurations.
 * 4. Storage Type: Indicates whether the database is disk-based, in-memory, or a combination.
 * 5. Scalability: Indicates the database's ability to scale horizontally (adding more nodes) or vertically (adding more resources to a node).
 * 6. Consistency Model: Indicates whether the database uses ACID (Atomicity, Consistency, Isolation, Durability) or BASE (Basically Available, Soft state, Eventual consistency).
 * 7. Suitable Use Cases: Common use cases where the database excels.
 * 8. Ease of Use: A general measure of how easy the database is to set up and manage.
 *
 * These figures are typical ranges and actual performance and pricing may vary based on specific use cases and configurations.
 */
