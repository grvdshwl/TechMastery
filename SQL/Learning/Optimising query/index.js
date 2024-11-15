/**
 * SQL Query Optimization Techniques for Relational Databases
 */

/**
 * 1. Use Indexes
 * - Create indexes on frequently queried columns (e.g., `WHERE`, `JOIN`, `ORDER BY`, `GROUP BY` columns).
 * - Avoid over-indexing as it can slow down `INSERT`, `UPDATE`, `DELETE`.
 */

/**
 * 2. Avoid SELECT *
 * - Specify only the columns you need to reduce the amount of data processed.
 */

/**
 * 3. Limit Results with LIMIT
 * - Use `LIMIT` to restrict the number of rows returned, especially for testing or large datasets.
 */

/**
 * 4. Avoid DISTINCT Unnecessarily
 * - Use `DISTINCT` only when needed, as it can be resource-intensive.
 */

/**
 * 5. Optimize Joins
 * - Use appropriate join types (`INNER JOIN`, `LEFT JOIN`).
 * - Join on indexed columns to speed up lookups.
 */

/**
 * 6. Use EXPLAIN to Analyze Query Execution
 * - Use `EXPLAIN` to understand how the query is executed and identify potential performance bottlenecks.
 */

/**
 * 7. Avoid Using NOT IN or NOT EXISTS in Large Datasets
 * - Use `LEFT JOIN` with `IS NULL` instead of `NOT IN` for better performance on large datasets.
 */

/**
 * 8. Optimize Subqueries
 * - Avoid subqueries in `WHERE` clauses, prefer `JOIN` whenever possible.
 */

/**
 * 9. Use Aggregate Functions Wisely
 * - Ensure aggregated columns are indexed.
 * - Limit the scope of aggregation by applying filters before aggregation.
 */

/**
 * 10. Use Temporary Tables
 * - Break down complex queries into smaller steps using temporary tables.
 */

/**
 * 11. Optimize ORDER BY
 * - Limit the use of `ORDER BY` on large tables.
 * - Index columns involved in `ORDER BY` to speed up sorting.
 */

/**
 * 12. Use JOIN Instead of Multiple UNIONs
 * - Replace multiple `UNION` queries with `JOIN` when possible to improve efficiency.
 */

/**
 * 13. Optimize Data Types
 * - Choose the most efficient data types for your columns to reduce storage and processing time.
 */

/**
 * 14. Implement Caching
 * - Cache frequently accessed data to reduce database load and speed up retrieval.
 */

/**
 * 15. Minimize Locking and Deadlocks
 * - Keep transactions short and use appropriate isolation levels to avoid locking issues.
 */

/**
 * 16. Partition Large Tables
 * - Partition large tables based on a specific column (e.g., date or region) to improve performance.
 */

/**
 * 17. Tune Database Configuration
 * - Adjust MySQL server configurations for optimal performance (e.g., buffer sizes, query cache).
 */
