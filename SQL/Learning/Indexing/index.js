/**
 * SQL Indexing: Improve Query Performance
 *
 * Indexing is a technique used in SQL databases to speed up the retrieval of rows from a table.
 * It's like an index in a book: it helps the database quickly locate the rows that match a specific condition,
 * rather than scanning the entire table.
 *
 * Here’s a breakdown of how indexing works and how to use it effectively.
 */

/**
 * 1. What is an Index in SQL?
 *
 * An index is a database object that improves the speed of data retrieval operations on a table at the cost of additional space and increased maintenance time during updates, inserts, and deletes.
 *
 * **Basic Usage:**
 * An index can be created on one or more columns of a table.
 * Example:
 * CREATE INDEX index_name ON table_name (column1, column2);
 */

/**
 * 2. Types of Indexes in SQL:
 *
 * - **Single-column index**: Index on a single column.
 * - **Multi-column index**: Index on multiple columns. Useful for queries that filter based on multiple columns.
 * - **Unique index**: Ensures that all values in the indexed column(s) are unique.
 * - **Composite index**: An index on two or more columns. Often used for queries with conditions on multiple columns.
 *
 * Example of a Single-Column Index:
 *
 * CREATE INDEX idx_customer_name ON customers (customerName);
 * // Creates an index on the `customerName` column to speed up queries filtering by `customerName`.
 *
 * Example of a Composite Index:
 *
 * CREATE INDEX idx_customer_status ON customers (customerName, status);
 * // Creates an index on `customerName` and `status` to speed up queries filtering by both columns.
 */

/**
 * 3. Creating and Using Indexes:
 *
 * You can create an index using the `CREATE INDEX` statement, which improves the performance of SELECT queries.
 *
 * Example: Creating an index on the `employeeNumber` column in the `employees` table.
 *
 * CREATE INDEX idx_employee_number ON employees (employeeNumber);
 *
 * Example: Creating a unique index to ensure that no two employees have the same email.
 *
 * CREATE UNIQUE INDEX idx_employee_email ON employees (email);
 */

/**
 * 4. Benefits of Using Indexes:
 *
 * - **Faster Query Performance**: Indexes allow the database to quickly locate the rows that match a query condition, thus speeding up SELECT queries.
 * - **Efficient Sorting**: When you use `ORDER BY`, indexes can help the database sort results more quickly.
 * - **Faster Joins**: If you're joining tables on indexed columns, the join operation becomes faster.
 */

/**
 * 5. When Not to Use Indexes:
 *
 * - **Write-heavy tables**: If your table experiences frequent `INSERT`, `UPDATE`, or `DELETE` operations, creating too many indexes can slow down these operations. Each time the data is modified, the index also needs to be updated.
 * - **Small tables**: For small tables, a full table scan might be just as fast as using an index.
 * - **Redundant Indexes**: Having multiple indexes on the same column or similar columns can be inefficient.
 */

/**
 * 6. Dropping an Index:
 *
 * If an index is no longer needed, you can drop it to save space and improve performance for write operations.
 *
 * Example: Dropping the index `idx_employee_number`:
 *
 * DROP INDEX idx_employee_number ON employees;
 */

/**
 * 7. Example Query Performance with Index:
 *
 * Suppose you have the following table `employees`:
 *
 * | employeeNumber | firstName | lastName | jobTitle     |
 * |----------------|-----------|----------|--------------|
 * | 1001           | John      | Doe      | Sales Rep    |
 * | 1002           | Jane      | Smith    | Manager      |
 * | 1003           | Bob       | Johnson  | Sales Rep    |
 *
 * Without an index, if you run the following query:
 *
 * SELECT * FROM employees WHERE jobTitle = "Sales Rep";
 *
 * The database will need to scan every row in the `employees` table to find the matching `jobTitle`.
 *
 * If you create an index on the `jobTitle` column, the database can quickly find rows with the `jobTitle = "Sales Rep"`, improving query performance.
 *
 * Example:
 * CREATE INDEX idx_job_title ON employees (jobTitle);
 */

/**
 * 8. Analyzing Index Usage:
 *
 * To see how an index is being used, you can use the `EXPLAIN` keyword in SQL. This shows how the database is executing a query and whether it’s using any indexes.
 *
 * Example:
 * EXPLAIN SELECT * FROM employees WHERE jobTitle = "Sales Rep";
 *
 * The `EXPLAIN` statement shows the query execution plan, which tells you whether an index is being used.
 */

/**
 * Conclusion:
 * - Indexing is essential for optimizing SELECT queries, but it comes with trade-offs in terms of space and maintenance for write operations.
 * - Use indexes wisely based on the queries you need to optimize and avoid creating too many unnecessary indexes.
 */
