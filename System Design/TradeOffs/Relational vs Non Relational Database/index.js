/**
 * System Design: Relational Database vs. Non-Relational Database
 *
 * Relational Database (RDBMS):
 * - Relational databases store data in structured tables that are related to each other through defined relationships (foreign keys).
 * - Data is organized into rows and columns, with each row representing a record and each column representing an attribute.
 * - These databases use SQL (Structured Query Language) for querying and managing the data.
 *
 * Characteristics:
 * - **Structured Data**: Data is stored in a well-defined schema with relationships between tables (e.g., 1-to-1, 1-to-many, many-to-many).
 * - **ACID Transactions**: Supports Atomicity, Consistency, Isolation, and Durability (ACID) for ensuring data integrity in transactions.
 * - **Schema-Driven**: The database enforces a schema, meaning data must adhere to predefined structures.
 *
 * Examples:
 * - **MySQL**
 * - **PostgreSQL**
 * - **Oracle**
 * - **Microsoft SQL Server**
 *
 * Advantages of Relational Databases:
 * - **Data Integrity**: Strong support for data consistency, especially in complex transactions with ACID compliance.
 * - **Structured Queries**: SQL provides powerful querying capabilities, allowing for complex joins, filtering, and aggregations.
 * - **Schema Validation**: Enforces data integrity through schema constraints (e.g., data types, relationships, primary keys).
 * - **Mature Technology**: Decades of optimization and support in terms of tools, documentation, and best practices.
 *
 * Disadvantages of Relational Databases:
 * - **Scaling Challenges**: Horizontal scaling (scaling across multiple servers) is difficult, making it less suitable for very large datasets or high-throughput applications.
 * - **Fixed Schema**: Changing the schema can be complex and costly, requiring migrations or downtime.
 * - **Performance Overhead**: In read-heavy systems, joins across multiple tables can slow down performance.
 *
 * Use Cases for Relational Databases:
 * - **Transactional Systems**: Banking, e-commerce, or inventory management systems that require ACID compliance.
 * - **Data Integrity**: Applications where data consistency and complex relationships between entities are crucial (e.g., ERP systems).
 * - **Reporting and Analytics**: When running complex queries involving data from multiple tables (e.g., financial reporting).
 */

/**
 * Non-Relational Database (NoSQL):
 * - Non-relational databases store data in a variety of formats, including key-value pairs, documents, wide-column stores, and graphs.
 * - These databases are designed to handle unstructured or semi-structured data and prioritize scalability, flexibility, and high performance.
 * - They do not require a predefined schema, allowing more flexibility for changing data models over time.
 *
 * Characteristics:
 * - **Schema-Less**: Data can be stored without a predefined structure, allowing for flexibility and rapid evolution of the data model.
 * - **Scalable**: Designed for horizontal scaling, making it easy to handle large amounts of data and high transaction volumes.
 * - **High Availability**: Prioritizes availability over consistency, making it ideal for distributed systems (e.g., eventual consistency).
 *
 * Types of Non-Relational Databases:
 * 1. **Key-Value Store**: Data is stored as key-value pairs (e.g., Redis, DynamoDB).
 * 2. **Document Store**: Data is stored in JSON-like documents (e.g., MongoDB, CouchDB).
 * 3. **Column-Family Store**: Data is stored in wide tables with flexible columns (e.g., Cassandra, HBase).
 * 4. **Graph Database**: Data is stored as nodes and edges representing relationships (e.g., Neo4j).
 *
 * Examples:
 * - **MongoDB**
 * - **Cassandra**
 * - **Redis**
 * - **Amazon DynamoDB**
 *
 * Advantages of Non-Relational Databases:
 * - **Scalability**: Designed for horizontal scaling, making it ideal for handling large, distributed datasets.
 * - **Flexibility**: Schema-less design allows for storing unstructured and semi-structured data, which can evolve over time.
 * - **High Performance**: Optimized for fast reads and writes in distributed systems.
 * - **Handling Large Data**: Particularly useful for handling large datasets with varying data models (e.g., IoT data, logs, user-generated content).
 *
 * Disadvantages of Non-Relational Databases:
 * - **Consistency Trade-offs**: Typically follows eventual consistency, meaning data may not always be up to date across distributed nodes.
 * - **Complex Queries**: Limited support for complex joins and transactions compared to relational databases.
 * - **Limited Data Integrity**: Lack of strong ACID compliance and schema enforcement can lead to inconsistent data states in some cases.
 *
 * Use Cases for Non-Relational Databases:
 * - **Big Data and Analytics**: Applications requiring scalable storage for large datasets (e.g., social media, IoT, log analysis).
 * - **Real-Time Systems**: Applications that prioritize performance and availability over consistency (e.g., real-time analytics, recommendation engines).
 * - **Flexible Data Models**: When the data model is constantly evolving or when working with unstructured or semi-structured data (e.g., content management systems).
 */

/**
 * Relational vs. Non-Relational Databases:
 * - **Relational Databases (RDBMS)**: Use structured data models with predefined schemas and support ACID transactions. Suitable for applications where data integrity and complex relationships are crucial.
 * - **Non-Relational Databases (NoSQL)**: Offer flexible, schema-less designs, prioritize horizontal scalability, and can handle unstructured data. Suitable for high-throughput applications, big data, and real-time analytics.
 *
 * Trade-offs:
 * - **Relational**: Strong consistency, structured schema, and complex queries but harder to scale and less flexible with evolving data models.
 * - **Non-Relational**: Flexible schema, easier horizontal scaling, and optimized for distributed environments but with weaker consistency and less support for complex queries.
 *
 * Choosing Between the Two:
 * - **Relational Database**: Choose RDBMS when you need strong consistency, well-defined relationships, and ACID compliance (e.g., transactional systems, financial data).
 * - **Non-Relational Database**: Choose NoSQL when scalability, flexibility, and handling large-scale unstructured data are more important than consistency (e.g., social media, IoT, big data applications).
 */
