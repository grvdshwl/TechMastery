// 1. What are the different types of joins in SQL, and how do they work?
// Example Query: INNER JOIN
// SELECT employees.name, departments.department_name
// FROM employees
// INNER JOIN departments ON employees.department_id = departments.id;
/* Expected Output:
[
  { name: "Alice", department_name: "Engineering" },
  { name: "Bob", department_name: "HR" },
  ...
]
*/

// 2. How would you find the second highest salary in an employee table?
// Query:
// SELECT MAX(salary) AS second_highest_salary
// FROM employees
// WHERE salary < (SELECT MAX(salary) FROM employees);
/* Expected Output:
[
  { second_highest_salary: 70000 }
]
*/

// 3. How do you find duplicate records in a table based on a specific column?
// Query:
// SELECT name, COUNT(*)
// FROM employees
// GROUP BY name
// HAVING COUNT(*) > 1;
/* Expected Output:
[
  { name: "John Doe", count: 2 },
  { name: "Jane Smith", count: 3 }
]
*/

// 4. How can you get the count of employees in each department?
// Query:
// SELECT department_id, COUNT(*) AS employee_count
// FROM employees
// GROUP BY department_id;
/* Expected Output:
[
  { department_id: 1, employee_count: 5 },
  { department_id: 2, employee_count: 3 },
  ...
]
*/

// 5. What is a primary key, and why is it important?
// *Explanation:* A primary key uniquely identifies each record in a table. It ensures that no duplicate or null values exist for that column in the table.

// 6. Write a query to fetch the details of employees who joined in the last 30 days.
// Query:
// SELECT * FROM employees
// WHERE join_date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY);
/* Expected Output:
[
  { id: 101, name: "Emma", join_date: "2023-10-10" },
  { id: 102, name: "Liam", join_date: "2023-10-15" },
  ...
]
*/

// 7. How do you find the nth highest salary in a table?
// For example, find the 3rd highest salary.
// Query:
// SELECT DISTINCT salary
// FROM employees
// ORDER BY salary DESC
// LIMIT 1 OFFSET 2;
/* Expected Output:
[
  { salary: 65000 } // Assuming 65000 is the 3rd highest salary
]
*/

// 8. How can you delete duplicate rows in SQL while keeping one of each duplicate?
// Query (for MySQL):
// DELETE e1
// FROM employees e1
// INNER JOIN employees e2
// ON e1.name = e2.name AND e1.id > e2.id;
/* Expected Output:
{
  affectedRows: 2 // Assuming two duplicates were deleted
}
*/

// 9. What is the difference between WHERE and HAVING clauses?
// *Explanation:* WHERE is used to filter rows before grouping, while HAVING filters after grouping.
// Example:
// SELECT department_id, COUNT(*) AS employee_count
// FROM employees
// WHERE salary > 50000
// GROUP BY department_id
// HAVING employee_count > 2;
/* Expected Output:
[
  { department_id: 1, employee_count: 4 }
]
*/

// 10. How do you use window functions in SQL, like ROW_NUMBER(), RANK(), or DENSE_RANK()?
// Query to find the top 3 salaries with their ranks:
// SELECT name, salary, RANK() OVER (ORDER BY salary DESC) AS salary_rank
// FROM employees
// WHERE salary > 0
// ORDER BY salary_rank
// LIMIT 3;
/* Expected Output:
[
  { name: "John", salary: 80000, salary_rank: 1 },
  { name: "Emma", salary: 75000, salary_rank: 2 },
  { name: "Liam", salary: 70000, salary_rank: 3 }
]
*/