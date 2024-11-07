// 1. What is SQL?

// SQL (Structured Query Language) is a standard programming language used for managing and manipulating relational databases. SQL is used for querying, inserting, updating, and deleting data. It works with databases like MySQL, PostgreSQL, SQL Server, and Oracle, organizing data into tables with rows and columns, and establishing relationships between tables.

// Example of a simple SQL query:
// SELECT * FROM employees;

// SQL is divided into categories like DML (Data Manipulation Language), DDL (Data Definition Language), DQL (Data Query Language), and DCL (Data Control Language).

// 2. What are the different types of joins in SQL?

// SQL joins are used to combine rows from two or more tables based on a related column. There are different types of joins:

// - `INNER JOIN`: Returns only matching rows from both tables.
// Example:
// SELECT users.name, orders.amount
// FROM users
// INNER JOIN orders ON users.id = orders.user_id;

// - `LEFT JOIN` (or `LEFT OUTER JOIN`): Returns all rows from the left table and matching rows from the right table. If no match, NULL values are returned for the right table.
// Example:
// SELECT users.name, orders.amount
// FROM users
// LEFT JOIN orders ON users.id = orders.user_id;

// - `RIGHT JOIN` (or `RIGHT OUTER JOIN`): Returns all rows from the right table and matching rows from the left table. If no match, NULL values are returned for the left table.
// Example:
// SELECT users.name, orders.amount
// FROM users
// RIGHT JOIN orders ON users.id = orders.user_id;

// - `FULL JOIN` (or `FULL OUTER JOIN`): Returns all rows when there is a match in either left or right table. If no match, NULL values are returned for missing matches from either side.
// Example:
// SELECT users.name, orders.amount
// FROM users
// FULL JOIN orders ON users.id = orders.user_id;

// 3. What is a `subquery` in SQL?

// A subquery is a query nested inside another query. Subqueries are used to retrieve data that will be used in the main query. Subqueries can return a single value (scalar subquery), multiple values (multi-row subquery), or a set of rows (correlated subquery).

// Example of a scalar subquery:
// SELECT name, age
// FROM users
// WHERE age > (SELECT AVG(age) FROM users);

// Example of a subquery in the `FROM` clause:
// SELECT department, COUNT(*) AS employee_count
// FROM (SELECT * FROM employees WHERE status = 'active') AS active_employees
// GROUP BY department;

// 4. What is the difference between `GROUP BY` and `HAVING`?

// - `GROUP BY` is used to group rows that have the same values into summary rows like counts or averages. It is used with aggregate functions like COUNT(), AVG(), MIN(), MAX(), etc.
// Example:
// SELECT department, COUNT(*)
// FROM employees
// GROUP BY department;

// - `HAVING` is used to filter the results of a `GROUP BY` query based on the aggregated values. It acts like a `WHERE` clause but works with aggregate functions.
// Example:
// SELECT department, COUNT(*) AS total_employees
// FROM employees
// GROUP BY department
// HAVING COUNT(*) > 10;

// 5. What is the difference between `INNER JOIN` and `LEFT JOIN`?

// - `INNER JOIN` returns only rows that have matching values in both tables. It excludes rows without matches in either table.
// Example:
// SELECT users.name, orders.amount
// FROM users
// INNER JOIN orders ON users.id = orders.user_id;

// - `LEFT JOIN` (or `LEFT OUTER JOIN`) returns all rows from the left table and the matching rows from the right table. If no match, NULL values are returned for the right table's columns.
// Example:
// SELECT users.name, orders.amount
// FROM users
// LEFT JOIN orders ON users.id = orders.user_id;

// 6. What are indexes in SQL?

// Indexes are data structures that improve the speed of data retrieval from a table at the cost of additional space. They are created on columns frequently used in queries, especially in `WHERE` and `ORDER BY` clauses. Indexes help avoid full table scans, making query execution faster.

// Example of creating an index on the "email" column of the "users" table:
// CREATE INDEX idx_email ON users(email);

// Example of using an indexed column:
// SELECT * FROM users WHERE email = 'john@example.com';

// 7. What is normalization in SQL?

// Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves dividing a database into smaller tables and defining relationships between them. The goal is to minimize the duplication of data and ensure logical data organization.

// Example of first normal form (1NF):
// A table is in 1NF if it contains only atomic (indivisible) values and each record has a unique identifier (primary key).
// Example:
// users(id, name, email) - valid if each column contains only one value, not lists or arrays.

// 8. What is a `PRIMARY KEY`?

// A `PRIMARY KEY` is a column or a combination of columns that uniquely identifies each row in a table. A primary key must contain unique values, and it cannot contain NULL values. Each table can have only one primary key.

// Example:
// CREATE TABLE users(
//   id INT PRIMARY KEY,
//   name VARCHAR(100),
//   email VARCHAR(100)
// );

// 9. What are aggregate functions in SQL?

// Aggregate functions are used to perform a calculation on a set of values and return a single result. Common aggregate functions include:

// - `COUNT()` - Returns the number of rows.
// SELECT COUNT(*) FROM users;

// - `SUM()` - Returns the sum of a numeric column.
// SELECT SUM(salary) FROM employees;

// - `AVG()` - Returns the average of a numeric column.
// SELECT AVG(age) FROM users;

// - `MIN()` - Returns the minimum value in a column.
// SELECT MIN(price) FROM products;

// - `MAX()` - Returns the maximum value in a column.
// SELECT MAX(salary) FROM employees;

// 10. What is the `DISTINCT` keyword in SQL?

// The `DISTINCT` keyword is used to return only distinct (unique) values in a result set. It eliminates duplicate values from the selected columns.

// Example:
// SELECT DISTINCT department FROM employees;
// This query will return only unique department names, excluding duplicates.
