// -------------------------------------------
// 1. Understand Types of Indexes
// -------------------------------------------

// An index is a database structure that improves query performance by optimizing how rows are located and sorted.
// Types of Indexes:
// - Clustered Index
// - Non-Clustered Index
// - Unique Index
// - Full-Text Index

// 1. Clustered Index:
// - Defines the physical order of rows in a table.
// - A table can have only one clustered index because rows can only be stored in one order.
// - Use Case: Primary keys often have clustered indexes for quick lookups.

// Example:
// CREATE CLUSTERED INDEX idx_employees_id ON employees(employee_id);

// 2. Non-Clustered Index:
// - Creates a separate structure from the data to store pointers to rows.
// - A table can have multiple non-clustered indexes.
// - Use Case: Speed up searches on frequently queried columns.

// Example:
// CREATE NONCLUSTERED INDEX idx_employees_name ON employees(employee_name);

// 3. Unique Index:
// - Ensures that all values in a column or combination of columns are unique.
// - Use Case: Enforce uniqueness for columns like email or username.

// Example:
// CREATE UNIQUE INDEX idx_employees_email ON employees(email);

// 4. Full-Text Index:
// - Designed for fast searches of text data, supporting linguistic queries like "contains" or "starts with."
// - Use Case: Searching product descriptions or blog content.

// Example:
// CREATE FULLTEXT INDEX ON products(product_description);

// -------------------------------------------
// 2. Learn How and When to Use Indexes for Performance
// -------------------------------------------

// Indexing is crucial for optimizing query performance, especially on large datasets.

// When to Use Indexes:
// - Columns frequently used in WHERE, JOIN, ORDER BY, or GROUP BY clauses.
// - For enforcing uniqueness (e.g., UNIQUE constraints).
// - For speeding up text searches with full-text indexes.

// When NOT to Use Indexes:
// - Columns with high write/update frequency (indexes slow down DML operations).
// - Columns with low cardinality (e.g., boolean values).

// Tip: Always analyze query plans to determine if indexes are effectively utilized.

// -------------------------------------------
// 3. Learn About Transactions, ACID Properties, and Isolation Levels
// -------------------------------------------

// A transaction is a sequence of operations performed as a single logical unit of work.
// Properties of Transactions: **ACID**
// - Atomicity: All operations succeed or fail as a single unit.
// - Consistency: Ensures data integrity before and after the transaction.
// - Isolation: Transactions do not interfere with each other.
// - Durability: Changes persist even in case of system failure.

// Example Transaction:
// BEGIN TRANSACTION;
// UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
// UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
// COMMIT;

// Isolation Levels:
// - READ UNCOMMITTED: Allows dirty reads (lowest isolation level).
// - READ COMMITTED: Prevents dirty reads but allows non-repeatable reads.
// - REPEATABLE READ: Prevents dirty and non-repeatable reads.
// - SERIALIZABLE: Highest isolation level, prevents all concurrency issues.

// Use Case: Use higher isolation levels for critical financial transactions but lower levels for read-heavy operations.

// -------------------------------------------
// 4. Understand Locks, Deadlocks, and How to Avoid Them
// -------------------------------------------

// Locks are mechanisms used to ensure data consistency during concurrent transactions.
// Types of Locks:
// - Shared Lock: Allows multiple reads but no writes.
// - Exclusive Lock: Prevents both reads and writes.

// Deadlocks:
// - Occur when two or more transactions block each other indefinitely.
// - Example: Transaction A locks table 1 and waits for table 2, while transaction B locks table 2 and waits for table 1.

// How to Avoid Deadlocks:
// - Access resources in the same order.
// - Keep transactions short.
// - Use proper isolation levels.

// -------------------------------------------
// 5. Explore Advanced Data Types
// -------------------------------------------

// Modern databases support advanced data types for complex applications.

// 1. JSON:
// - Use Case: Store and query semi-structured data like API responses.
// - Example: CREATE TABLE logs (id INT, data JSON);

// 2. XML:
// - Use Case: Store and query structured data in XML format.
// - Example: CREATE TABLE orders (id INT, details XML);

// 3. Arrays:
// - Use Case: Store multi-valued attributes in a single column (common in PostgreSQL).
// - Example: CREATE TABLE tags (id INT, keywords TEXT[]);

// -------------------------------------------
// 6. Learn to Write and Use Stored Procedures and User-Defined Functions
// -------------------------------------------

// Stored Procedures:
// - Precompiled SQL code that performs a specific task.
// - Use Case: Automate repetitive operations like inserting logs or performing calculations.

// Example:
// CREATE PROCEDURE sp_add_employee(name VARCHAR, salary DECIMAL)
// BEGIN
//   INSERT INTO employees (employee_name, salary) VALUES (name, salary);
// END;

// User-Defined Functions (UDFs):
// - Custom functions that return a value.
// - Use Case: Reuse business logic like calculating tax or discounts.

// Example:
// CREATE FUNCTION fn_calculate_tax(amount DECIMAL) RETURNS DECIMAL
// BEGIN
//   RETURN amount * 0.1;
// END;

// -------------------------------------------
// 7. Explore Recursive and Non-Recursive CTEs
// -------------------------------------------

// Common Table Expressions (CTEs):
// - Temporary result sets used within a query.
// - Recursive CTEs are used for hierarchical data, like organizational structures.

// Recursive CTE Example:
// WITH RECURSIVE OrgChart AS (
//   SELECT employee_id, manager_id, employee_name
//   FROM employees
//   WHERE manager_id IS NULL
//   UNION ALL
//   SELECT e.employee_id, e.manager_id, e.employee_name
//   FROM employees e
//   INNER JOIN OrgChart o ON e.manager_id = o.employee_id
// )
// SELECT * FROM OrgChart;

// -------------------------------------------
// 8. Learn to Write Dynamic SQL and Understand Its Use Cases
// -------------------------------------------

// Dynamic SQL:
// - Allows SQL queries to be constructed and executed at runtime.
// - Use Case: Create queries for varying conditions or tables dynamically.

// Example:
// SET @sql = 'SELECT * FROM ' + @table_name;
// EXECUTE sp_executesql @sql;

// -------------------------------------------
// 9. Understand the Concept and Use of Triggers
// -------------------------------------------

// Triggers are special procedures that automatically execute in response to certain database events (INSERT, UPDATE, DELETE).

// Use Case: Enforce data validation or maintain audit logs.

// Example Trigger for Audit Logging:
// CREATE TRIGGER trg_after_update
// AFTER UPDATE ON employees
// FOR EACH ROW
// BEGIN
//   INSERT INTO audit_logs (employee_id, change_time)
//   VALUES (NEW.employee_id, NOW());
// END;

// -------------------------------------------
// Summary
// -------------------------------------------

// These concepts are essential for mastering advanced database management:
// 1. Indexes optimize query performance.
// 2. Transactions and isolation levels ensure consistency.
// 3. Locks and deadlocks affect concurrency management.
// 4. Advanced data types like JSON and arrays handle complex data structures.
// 5. Stored procedures and UDFs encapsulate reusable logic.
// 6. CTEs simplify complex hierarchical queries.
// 7. Dynamic SQL offers runtime query flexibility.
// 8. Triggers automate data validation and auditing.

// Each topic can greatly enhance database efficiency, scalability, and maintainability when applied appropriately.
