// -------------------------------------------
// SQL Window Functions - Overview
// -------------------------------------------

// Window functions are special SQL functions that perform calculations
// across a set of rows (called a "window") that is defined by the `OVER()` clause.
// Unlike aggregate functions, they do not collapse rows into a single output.

// Key Features:
// 1. Window functions allow row-by-row calculations while retaining all rows.
// 2. They are versatile for analytics, rankings, and cumulative calculations.
// 3. Defined with `OVER()` clause, which specifies PARTITIONING and ORDERING.

// Common Use Cases:
// - Ranking rows (e.g., top-performing employees per department).
// - Calculating cumulative totals (e.g., running totals).
// - Grouping data into segments or buckets (e.g., NTILE).

// -------------------------------------------
// The `OVER()` Clause
// -------------------------------------------

// The `OVER()` clause defines the "window" for a window function. It specifies:
// 1. PARTITION BY: Divides rows into groups (like GROUP BY but more flexible).
// 2. ORDER BY: Defines the order of rows within each partition for the calculation.

// Syntax:
// function_name() OVER (PARTITION BY column_name ORDER BY column_name)

// Example:
// Imagine a table `employees` with columns `employee_id`, `department_id`, and `salary`.
// If you want to calculate rankings by salary within each department:
// SELECT employee_id, RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rank

// Output:
// Each department is treated as a separate partition. Salaries are ranked in descending order.

// -------------------------------------------
// 1. ROW_NUMBER()
// -------------------------------------------

// ROW_NUMBER() assigns a unique, sequential number to each row within a partition.
// The numbering starts at 1 for each partition.

// Use Case:
// You want to identify the top N employees in each department based on salary.

// Example:
// SELECT employee_id, department_id, ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) AS row_num

// Input:
// employee_id | department_id | salary
// 1           | 10            | 5000
// 2           | 10            | 6000
// 3           | 10            | 4000
// 4           | 20            | 7000
// 5           | 20            | 8000

// Output:
// employee_id | department_id | row_num
// 2           | 10            | 1
// 1           | 10            | 2
// 3           | 10            | 3
// 5           | 20            | 1
// 4           | 20            | 2

// Explanation:
// - For department 10, the employee with the highest salary (6000) gets row_num = 1.
// - Rows are numbered sequentially for each department (PARTITION BY department_id).

// -------------------------------------------
// 2. RANK()
// -------------------------------------------

// RANK() assigns a rank to each row within a partition. Tied values share the same rank,
// and gaps appear in the ranking for ties.

// Use Case:
// You want to rank employees by performance score within their department.
// Tied employees share the same rank, but the next rank skips.

// Example:
// SELECT employee_id, department_id, RANK() OVER (PARTITION BY department_id ORDER BY performance_score DESC) AS rank

// Input:
// employee_id | department_id | performance_score
// 1           | 10            | 80
// 2           | 10            | 90
// 3           | 10            | 90
// 4           | 20            | 85
// 5           | 20            | 90

// Output:
// employee_id | department_id | rank
// 2           | 10            | 1
// 3           | 10            | 1
// 1           | 10            | 3
// 5           | 20            | 1
// 4           | 20            | 2

// Explanation:
// - In department 10, two employees with the same score (90) share rank 1.
// - The next rank skips to 3 (1, 1, 3).

// -------------------------------------------
// 3. DENSE_RANK()
// -------------------------------------------

// DENSE_RANK() is similar to RANK(), but it does not leave gaps in rankings after ties.

// Use Case:
// Rank sales representatives by revenue within their region, without gaps in ranks.

// Example:
// SELECT employee_id, region_id, DENSE_RANK() OVER (PARTITION BY region_id ORDER BY revenue DESC) AS dense_rank

// Input:
// employee_id | region_id | revenue
// 1           | A         | 5000
// 2           | A         | 6000
// 3           | A         | 6000
// 4           | B         | 7000
// 5           | B         | 8000

// Output:
// employee_id | region_id | dense_rank
// 2           | A         | 1
// 3           | A         | 1
// 1           | A         | 2
// 5           | B         | 1
// 4           | B         | 2

// Explanation:
// - In region A, two employees with the same revenue (6000) share rank 1.
// - The next rank continues to 2, without skipping numbers (1, 1, 2).

// -------------------------------------------
// 4. NTILE()
// -------------------------------------------

// NTILE(n) divides rows into `n` roughly equal groups, numbered 1 through n.

// Use Case:
// Group students into quartiles based on their grades.

// Example:
// SELECT student_id, NTILE(4) OVER (ORDER BY grade DESC) AS quartile

// Input:
// student_id | grade
// 1          | 95
// 2          | 90
// 3          | 85
// 4          | 80
// 5          | 75
// 6          | 70
// 7          | 65
// 8          | 60

// Output:
// student_id | quartile
// 1          | 1
// 2          | 1
// 3          | 2
// 4          | 2
// 5          | 3
// 6          | 3
// 7          | 4
// 8          | 4

// Explanation:
// - The rows are divided into 4 groups based on grades.
// - Students with higher grades fall into the first quartile (1).

// -------------------------------------------
// 5. SUM(), AVG(), MAX(), MIN() with OVER()
// -------------------------------------------

// Aggregate functions like SUM() or AVG() can also be used as window functions
// by adding the `OVER()` clause. These calculate cumulative or moving totals.

// Use Case:
// Calculate the cumulative salary within each department.

// Example:
// SELECT employee_id, department_id, salary,
//        SUM(salary) OVER (PARTITION BY department_id ORDER BY salary DESC) AS cumulative_salary

// Input:
// employee_id | department_id | salary
// 1           | 10            | 5000
// 2           | 10            | 6000
// 3           | 10            | 4000
// 4           | 20            | 7000
// 5           | 20            | 8000

// Output:
// employee_id | department_id | cumulative_salary
// 2           | 10            | 6000
// 1           | 10            | 11000
// 3           | 10            | 15000
// 5           | 20            | 8000
// 4           | 20            | 15000

// Explanation:
// - For department 10, the salaries are summed in descending order (6000 -> 5000 -> 4000).
// - Cumulative totals are calculated row by row.
