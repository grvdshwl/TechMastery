/**
 * Comparison Between MySQL, PostgreSQL, and SQLite
 *
 * This comparison highlights the key differences between MySQL, PostgreSQL, and SQLite, focusing on performance, flexibility, ease of use, scalability, and practical use cases, with numbers on latency and transaction throughput.
 */

/**
 * 1. MySQL
 * - **Type**: Relational Database Management System (RDBMS)
 * - **Advantages**:
 *   - **High Performance**: MySQL is optimized for high performance in read-heavy applications with low latency.
 *   - **Replication & Scaling**: Supports master-slave replication, read replicas, and sharding for horizontal scaling.
 *   - **Simple Setup**: Easy to set up and maintain, with strong community support and plenty of tutorials.
 *   - **Widely Supported**: Available on most cloud providers, offering managed instances like Amazon RDS for MySQL.
 * 
 * - **Tradeoffs**:
 *   - **Limited Advanced Features**: Fewer advanced features compared to PostgreSQL (e.g., no full support for advanced indexing like GIN).
 *   - **Transaction Handling**: Not as efficient in handling very complex multi-step transactions under high loads.
 * 
 * - **Performance**:
 *   - **Latency**: ~1-10ms per query (depends on hardware and query complexity).
 *   - **Transactions Per Second (TPS)**: Around **50,000 TPS** on optimized setups, especially for read-heavy workloads.
 *   - **Use Case**: Best for applications with high read requirements such as e-commerce platforms, blogs, or content management systems.

 */

/**
 * 2. PostgreSQL
 * - **Type**: Relational Database Management System (RDBMS)
 * - **Advantages**:
 *   - **Advanced Features**: Supports JSONB, Common Table Expressions (CTEs), and full-text search.
 *   - **ACID Compliance**: Fully ACID-compliant, making it ideal for applications that require high data integrity and complex transactions.
 *   - **Concurrency**: PostgreSQL uses MVCC (Multi-Version Concurrency Control) to allow multiple transactions to happen simultaneously without conflict.
 *   - **Extensibility**: Supports custom extensions and indexing techniques (e.g., GIN, GiST).
 * 
 * - **Tradeoffs**:
 *   - **Slower Write Performance**: In some cases, PostgreSQL can be slower than MySQL for simple queries or on hardware with high I/O bottlenecks.
 *   - **More Complex Setup**: The setup and configuration can be more complex compared to MySQL, especially for high-availability and scaling setups.
 * 
 * - **Performance**:
 *   - **Latency**: ~5-15ms per query (can be higher with complex queries or without proper indexing).
 *   - **Transactions Per Second (TPS)**: Can handle around **30,000-40,000 TPS** under normal workloads, but can scale for larger and more complex transaction-heavy applications.
 *   - **Use Case**: Ideal for data warehousing, complex queries, or applications needing strong consistency and complex transactions.

 */

/**
 * 3. SQLite
 * - **Type**: Embedded Relational Database
 * - **Advantages**:
 *   - **Lightweight**: SQLite is an embedded database, meaning it doesn’t require a server or separate process to run.
 *   - **Zero Configuration**: It’s serverless, self-contained, and requires no setup, making it very easy to integrate into mobile apps, desktop apps, and small web applications.
 *   - **File-Based**: All data is stored in a single file, making it very portable and easy to manage.
 *   - **Fast for Small Applications**: Optimized for small-to-medium-sized applications with a low amount of concurrent write operations.
 * 
 * - **Tradeoffs**:
 *   - **Limited Scalability**: SQLite is not designed for high-concurrency or high-transaction volume applications.
 *   - **Concurrency Limitations**: Writes are serialized, meaning only one write can occur at a time. This limits scalability for applications with high write requirements.
 *   - **Basic Features**: Lacks some advanced features like user management, advanced indexing options, and full ACID compliance under high loads.
 * 
 * - **Performance**:
 *   - **Latency**: ~1-5ms for simple queries, though can increase if concurrency or complexity rises.
 *   - **Transactions Per Second (TPS)**: Around **500-2,000 TPS** depending on the complexity and size of transactions (not suited for high-load applications).
 *   - **Use Case**: Best suited for embedded systems, mobile applications, or single-user apps with moderate data needs (e.g., small desktop apps, IoT devices).

 */

/**
 * 4. Sequelize (ORM - for Node.js)
 * - **Type**: Object-Relational Mapper (ORM)
 * - **Advantages**:
 *   - **Simplifies Querying**: Provides an abstraction layer for database queries, allowing developers to work with JavaScript objects rather than SQL queries.
 *   - **Cross-database Support**: Supports MySQL, PostgreSQL, SQLite, and MSSQL, making it easy to switch between different databases.
 *   - **Database Migrations**: Includes built-in support for database migrations, making schema updates and version control easier.
 *   - **Promises and Async Support**: Works natively with promises and async/await, making it easier to work with asynchronous database operations.
 * 
 * - **Tradeoffs**:
 *   - **Performance Overhead**: ORM abstractions introduce some performance overhead, especially with complex queries and large datasets.
 *   - **Limited Advanced Features**: May not support all database-specific features or optimizations, requiring raw SQL in some cases for advanced queries.
 * 
 * - **Performance**:
 *   - **Latency**: Depends on the underlying database (e.g., MySQL, PostgreSQL). Expect **1-10ms** for simple queries.
 *   - **Transactions Per Second (TPS)**: Performance is tied to the underlying database, but ORMs generally can handle fewer transactions per second due to abstraction overhead.
 *   - **Use Case**: Best for applications that need database abstraction, rapid development, and flexibility in working with multiple databases.

 */
