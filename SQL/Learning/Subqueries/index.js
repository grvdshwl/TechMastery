// -------------------------------------------
// Subqueries - Overview
// -------------------------------------------

// A subquery is a SQL query nested within another query.
// Subqueries allow you to:
// 1. Filter data dynamically.
// 2. Perform transformations and calculations.
// 3. Aggregate data for use in the main query.

// Types of Subqueries:
// 1. Correlated Subquery: Depends on the outer query for its execution.
// 2. Non-Correlated Subquery: Executes independently of the outer query.

// Common Usage:
// - Used in SELECT, WHERE, and FROM clauses.
// - Simplify complex SQL queries by breaking them into smaller, logical steps.

// -------------------------------------------
// 1. Correlated Subqueries
// -------------------------------------------

// A correlated subquery is executed repeatedly for each row processed by the outer query.
// The inner query references columns from the outer query.

// Syntax:
// SELECT column1, column2
// FROM table1
// WHERE column1 [comparison operator] (SELECT column FROM table2 WHERE table2.column = table1.column)

// Use Case:
// Find employees whose salary is above the average salary in their department.

// Example:
// SELECT employee_id, department_id, salary
// FROM employees e
// WHERE salary > (SELECT AVG(salary) 
//                 FROM employees 
//                 WHERE department_id = e.department_id);

// Input (`employees`):
// employee_id | department_id | salary
// 1           | 10            | 5000
// 2           | 10            | 6000
// 3           | 10            | 4000
// 4           | 20            | 7000
// 5           | 20            | 8000

// Output:
// employee_id | department_id | salary
// 2           | 10            | 6000
// 5           | 20            | 8000

// Explanation:
// - For each employee, the inner query calculates the average salary in their department.
// - The outer query filters employees whose salary is above their department's average.

// -------------------------------------------
// 2. Non-Correlated Subqueries
// -------------------------------------------

// A non-correlated subquery is executed once, and its result is used by the outer query.
// The inner query does not depend on the outer query's columns.

// Syntax:
// SELECT column1, column2
// FROM table1
// WHERE column1 [comparison operator] (SELECT column FROM table2)

// Use Case:
// Find employees whose salary is greater than the overall average salary.

// Example:
// SELECT employee_id, salary
// FROM employees
// WHERE salary > (SELECT AVG(salary) FROM employees);

// Input (`employees`):
// employee_id | salary
// 1           | 5000
// 2           | 6000
// 3           | 4000
// 4           | 7000
// 5           | 8000

// Output:
// employee_id | salary
// 2           | 6000
// 4           | 7000
// 5           | 8000

// Explanation:
// - The inner query calculates the overall average salary (6000).
// - The outer query filters employees with a salary greater than 6000.

// -------------------------------------------
// 3. Subqueries in SELECT Clause
// -------------------------------------------

// Subqueries in the SELECT clause allow you to dynamically calculate and add additional columns to the result.

// Use Case:
// Display each employee's salary and the average salary of their department.

// Example:
// SELECT employee_id, salary, 
//        (SELECT AVG(salary) 
//         FROM employees 
//         WHERE department_id = e.department_id) AS avg_department_salary
// FROM employees e;

// Input (`employees`):
// employee_id | department_id | salary
// 1           | 10            | 5000
// 2           | 10            | 6000
// 3           | 10            | 4000
// 4           | 20            | 7000
// 5           | 20            | 8000

// Output:
// employee_id | salary | avg_department_salary
// 1           | 5000   | 5000
// 2           | 6000   | 5000
// 3           | 4000   | 5000
// 4           | 7000   | 7500
// 5           | 8000   | 7500

// Explanation:
// - The subquery calculates the average salary for the employee's department.
// - The main query adds this calculated column for each row in the output.

// -------------------------------------------
// 4. Subqueries in FROM Clause
// -------------------------------------------

// Subqueries in the FROM clause create a temporary table (derived table) that the outer query can use.

// Use Case:
// Find the department with the highest total salary.

// Example:
// SELECT department_id, total_salary
// FROM (SELECT department_id, SUM(salary) AS total_salary
//       FROM employees
//       GROUP BY department_id) AS department_totals
// WHERE total_salary = (SELECT MAX(total_salary) 
//                       FROM (SELECT SUM(salary) AS total_salary
//                             FROM employees
//                             GROUP BY department_id) AS dept_totals);

// Input (`employees`):
// employee_id | department_id | salary
// 1           | 10            | 5000
// 2           | 10            | 6000
// 3           | 10            | 4000
// 4           | 20            | 7000
// 5           | 20            | 8000

// Output:
// department_id | total_salary
// 20            | 15000

// Explanation:
// - The inner query calculates total salaries for each department.
// - The outer query finds the department with the highest total salary.

// -------------------------------------------
// Summary of Subquery Use Cases
// -------------------------------------------

// 1. Correlated Subqueries:
// - Used when the inner query depends on the outer query.
// - Example: Filtering rows based on dynamic conditions (e.g., employees above the department average).

// 2. Non-Correlated Subqueries:
// - Used when the inner query is independent of the outer query.
// - Example: Filtering rows based on a global condition (e.g., employees above the overall average salary).

// 3. Subqueries in SELECT:
// - Used to dynamically calculate and add extra columns.
// - Example: Adding the department's average salary as a column in the output.

// 4. Subqueries in FROM:
// - Used to create temporary tables for complex aggregations or transformations.
// - Example: Finding departments with the highest total salary.

// Subqueries are powerful tools that simplify and modularize SQL queries,
// making them easier to read and maintain while handling complex calculations.
