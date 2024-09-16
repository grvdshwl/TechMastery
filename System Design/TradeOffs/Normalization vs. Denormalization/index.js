/**
 * System Design: Normalization vs. Denormalization
 *
 * Normalization:
 * - Normalization is a database design technique that organizes data into smaller, related tables to reduce redundancy and dependency.
 * - The process typically follows a set of "normal forms" (1NF, 2NF, 3NF, etc.) to structure data efficiently.
 *
 * Characteristics:
 * - **Data Integrity**: Reduces redundancy and ensures data consistency by storing information in one place.
 * - **Smaller Tables**: Data is split into multiple related tables, often linked through foreign keys.
 * - **Fewer Anomalies**: Normalization helps prevent update, insert, and delete anomalies.
 *
 * Steps in Normalization:
 * 1. **First Normal Form (1NF)**: Eliminate duplicate data and ensure that each field contains atomic values.
 * 2. **Second Normal Form (2NF)**: Ensure that every non-primary-key column is fully dependent on the primary key.
 * 3. **Third Normal Form (3NF)**: Eliminate transitive dependencies where non-key attributes depend on other non-key attributes.
 *
 * Advantages of Normalization:
 * - **Reduced Data Redundancy**: Each piece of data is stored only once, reducing storage space and avoiding duplication.
 * - **Improved Data Integrity**: Changes or updates are made in one place, making it easier to maintain data consistency.
 * - **Efficient Updates**: Since data is not duplicated, updates are faster and less prone to errors.
 *
 * Disadvantages of Normalization:
 * - **Complex Queries**: Data retrieval can require joining multiple tables, which can result in complex and slower queries.
 * - **Performance Overhead**: Multiple table joins can slow down query performance in read-heavy systems.
 * - **Overhead for Distributed Systems**: In distributed databases, joins across multiple nodes can significantly impact performance.
 *
 * Use Cases for Normalization:
 * - **Transactional Systems**: Applications that prioritize data consistency and integrity, such as banking systems, where data accuracy is critical.
 * - **Data Warehousing**: Systems that rely on clean, organized data with minimal redundancy.
 */

/**
 * Denormalization:
 * - Denormalization is the process of combining related data into fewer, larger tables to improve read performance by reducing the need for joins.
 * - This approach introduces controlled redundancy to optimize query performance, especially in read-heavy systems.
 *
 * Characteristics:
 * - **Data Redundancy**: Data may be duplicated across multiple tables to optimize query speed and reduce the need for joins.
 * - **Larger Tables**: Fewer, larger tables with repeated or precomputed data to improve read performance.
 * - **Simplified Queries**: Queries are faster since they don’t require multiple table joins.
 *
 * Denormalization Techniques:
 * 1. **Precomputed Data**: Storing calculated or aggregated data to avoid expensive calculations during queries.
 * 2. **Duplicating Data**: Storing the same data in multiple tables to minimize the need for joins.
 * 3. **Storing JSON/Array Fields**: Using denormalized fields such as arrays or JSON objects to store related data.
 *
 * Advantages of Denormalization:
 * - **Improved Read Performance**: By reducing the need for joins, queries are faster, especially in read-heavy workloads.
 * - **Simpler Queries**: Queries are easier to write and execute since all the necessary data is in one table.
 * - **Better for Distributed Databases**: Reduces the overhead of performing joins across nodes in distributed databases.
 *
 * Disadvantages of Denormalization:
 * - **Increased Data Redundancy**: Data is duplicated, which can increase storage costs and the risk of inconsistencies.
 * - **Slower Updates**: Changes need to be propagated to multiple places, which can slow down update operations and increase the risk of errors.
 * - **Data Anomalies**: Higher risk of insert, update, and delete anomalies since data is duplicated.
 *
 * Use Cases for Denormalization:
 * - **Read-Heavy Systems**: Applications where read performance is crucial, such as reporting systems, dashboards, or real-time analytics.
 * - **NoSQL Databases**: NoSQL systems (e.g., MongoDB, Cassandra) often favor denormalized designs to optimize query speed.
 * - **Caching Layers**: Systems where precomputed or denormalized data is cached for quick access.
 */

/**
 * Normalization vs. Denormalization:
 * - **Normalization**: Focuses on eliminating data redundancy and maintaining data integrity by dividing data into smaller, related tables.
 * - **Denormalization**: Focuses on optimizing read performance by introducing controlled data redundancy, reducing the need for joins.
 *
 * Trade-offs:
 * - **Normalization**: Reduces redundancy and improves data consistency, but may result in slower read performance due to table joins.
 * - **Denormalization**: Improves read performance, especially in distributed or read-heavy systems, but increases redundancy and the complexity of updates.
 *
 * Choosing Between the Two:
 * - **Normalization**: Best for write-heavy systems or transactional applications where data consistency is critical and frequent updates are expected.
 * - **Denormalization**: Best for read-heavy systems where query performance is prioritized over storage efficiency, and data consistency can be managed.
 */
