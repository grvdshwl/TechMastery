/*
| **System**                   | **Read Throughput (ops/sec)**        | **Write Throughput (ops/sec)**     | **Latency (ms)**    | **Scaling**              | **Notes**                                                                 |
|------------------------------|--------------------------------------|------------------------------------|---------------------|--------------------------|---------------------------------------------------------------------------|
| Application Server            | 500–2,000 RPS                       | N/A                                | 10–100              | Vertical & Horizontal     | Used for handling HTTP requests and API calls.                            |
| SQL Server (MySQL/PostgreSQL) | 1,000–10,000 QPS                    | 500–5,000 QPS                      | 1–50                | Vertical                  | Performance depends on indexing, query optimization, and hardware.        |
| Cassandra (NoSQL)             | 5,000–50,000 reads/node             | 10,000–100,000 writes/node         | <10                 | Horizontal                | Optimized for high throughput, suitable for distributed applications.     |
| Redis (In-memory)             | 100,000–500,000 ops/sec             | 50,000–300,000 ops/sec             | <1                  | Vertical & Horizontal     | Ideal for caching and real-time data processing with low-latency.         |
| Kafka (Queue)                 | 100,000–1,000,000 msgs/sec/node     | 100,000–1,000,000 msgs/sec/node    | 1–10                | Horizontal (partitioned)  | Ideal for real-time streaming and large-scale data pipelines.             |
*/

/*
| **Metric**           | **Cassandra**                         | **MongoDB**                           | **DynamoDB**                              |
|----------------------|---------------------------------------|---------------------------------------|-------------------------------------------|
| **Data Model**        | Wide-column (distributed)             | Document (BSON/JSON-like)             | Document and Key-Value                    |
| **Read Throughput**   | 5,000–50,000 reads/node              | 10,000–50,000 reads/sec (depends on setup) | 100–40,000 reads/sec (provisioned & on-demand capacity) |
| **Write Throughput**  | 10,000–100,000 writes/node           | 5,000–20,000 writes/sec (depends on setup) | 100–40,000 writes/sec (provisioned & on-demand capacity) |
| **Latency**           | <10 ms (low-latency reads/writes)    | 10–100 ms (depending on workload)     | Single-digit ms (reads/writes under low load) |
| **Scaling**           | Horizontal (adds more nodes)         | Vertical & Horizontal                 | Horizontal (scales automatically)         |
| **Consistency**       | Tunable (Eventual, Quorum, Strong)   | Tunable (Eventual, Strong)            | Eventual, Strong                          |
| **Availability**      | High (peer-to-peer)                  | High (depending on setup, e.g., replica sets) | High (managed service with built-in redundancy) |
| **Query Flexibility** | Limited (restricted to partition keys) | Flexible (rich query language)       | Limited (primary key and indexes)         |
| **Use Cases**         | Time-series data, high write loads   | General-purpose, analytics, flexible schema | Serverless applications, IoT, e-commerce |
| **Backup & Restore**  | Manual or scheduled                  | Built-in for cloud instances          | Automated (native backup/restore options) |
| **Pricing Model**     | Open-source (self-hosted), paid support | Open-source (self-hosted), cloud pricing varies | Pay-per-request (on-demand), or provisioned throughput |
| **Best For**          | High throughput, distributed systems | Flexible schemas, large-scale web apps | Auto-scaling, serverless, managed solution |
*/

/*
| **Metric**             | **MySQL**                                | **PostgreSQL**                            | **Amazon RDS (MySQL/PostgreSQL)**               |
|------------------------|------------------------------------------|-------------------------------------------|-------------------------------------------------|
| **Data Model**          | Relational (tables, rows, and columns)   | Relational (tables, rows, and columns)    | Managed Relational (supports MySQL/PostgreSQL)  |
| **Read Throughput**     | 1,000–10,000 QPS                        | 1,000–20,000 QPS                          | 1,000–50,000 QPS (depending on instance type)   |
| **Write Throughput**    | 500–5,000 QPS                           | 500–10,000 QPS                            | 500–50,000 QPS (depending on instance type)     |
| **Latency**             | 1–50 ms (depending on query complexity)  | 1–50 ms (depending on query complexity)   | 1–50 ms (depending on instance and region)      |
| **Scaling**             | Vertical                                | Vertical and Horizontal (via sharding)    | Vertical (instance-based) with some auto-scaling|
| **Consistency**         | Strong                                  | Strong                                    | Strong (ACID compliant)                         |
| **Availability**        | Medium (requires replica configuration) | High (with replicas and failover)         | High (multi-AZ support, managed failover)       |
| **Query Flexibility**   | High (SQL queries, indexing)            | Very High (SQL, indexing, JSONB support)  | High (native SQL support for both MySQL and PostgreSQL) |
| **Use Cases**           | Web applications, CMS, e-commerce       | Complex queries, analytics, data warehousing | General-purpose, managed databases for web apps, IoT, analytics |
| **Backup & Restore**    | Manual or scheduled backups             | Manual or scheduled backups               | Automated backups, snapshots, point-in-time recovery |
| **Pricing Model**       | Open-source, free                       | Open-source, free                         | Pay-as-you-go (instance size, I/O requests, storage) |
| **Best For**            | Simple web apps, small-medium workloads | Complex queries, data warehousing         | Managed relational database, minimal administration |
*/
