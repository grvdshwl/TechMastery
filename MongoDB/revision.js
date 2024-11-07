// 1. Selecting all columns from a table
// SQL:
// SELECT * FROM employees;
/* Sequelize: */
// await Employee.findAll();
/* Expected Output:
[
  { id: 1, name: "Alice", department: "Engineering", salary: 70000 },
  { id: 2, name: "Bob", department: "HR", salary: 50000 },
  ...
]
*/

// 2. Selecting specific columns
// SQL:
// SELECT name, department FROM employees;
/* Sequelize: */
// await Employee.findAll({ attributes: ['name', 'department'] });
/* Expected Output:
[
  { name: "Alice", department: "Engineering" },
  { name: "Bob", department: "HR" },
  ...
]
*/

// 3. Filtering with WHERE
// SQL:
// SELECT * FROM employees WHERE department = 'Engineering';
/* Sequelize: */
// await Employee.findAll({ where: { department: 'Engineering' } });
/* Expected Output:
[
  { id: 1, name: "Alice", department: "Engineering", salary: 70000 },
  { id: 3, name: "Charlie", department: "Engineering", salary: 80000 }
]
*/

// 4. Using ORDER BY to sort results
// SQL:
// SELECT * FROM employees ORDER BY salary DESC;
/* Sequelize: */
// await Employee.findAll({ order: [['salary', 'DESC']] });
/* Expected Output:
[
  { id: 3, name: "Charlie", department: "Engineering", salary: 80000 },
  { id: 1, name: "Alice", department: "Engineering", salary: 70000 },
  { id: 2, name: "Bob", department: "HR", salary: 50000 }
]
*/

// 5. Using LIMIT to restrict the number of rows
// SQL:
// SELECT * FROM employees LIMIT 2;
/* Sequelize: */
// await Employee.findAll({ limit: 2 });
/* Expected Output:
[
  { id: 1, name: "Alice", department: "Engineering", salary: 70000 },
  { id: 2, name: "Bob", department: "HR", salary: 50000 }
]
*/

// 6. Counting rows
// SQL:
// SELECT COUNT(*) FROM employees;
/* Sequelize: */
// await Employee.count();
/* Expected Output: 5 (assuming there are 5 rows in the employees table) */

// 7. Grouping and counting with GROUP BY
// SQL:
// SELECT department, COUNT(*) as total FROM employees GROUP BY department;
/* Sequelize: */
// await Employee.findAll({
//   attributes: ['department', [Sequelize.fn('COUNT', Sequelize.col('*')), 'total']],
//   group: 'department'
// });
/* Expected Output:
[
  { department: "Engineering", total: 2 },
  { department: "HR", total: 1 },
  { department: "Marketing", total: 2 }
]
*/

// 8. Aggregating with SUM
// SQL:
// SELECT department, SUM(salary) as total_salary FROM employees GROUP BY department;
/* Sequelize: */
// await Employee.findAll({
//   attributes: ['department', [Sequelize.fn('SUM', Sequelize.col('salary')), 'total_salary']],
//   group: 'department'
// });
/* Expected Output:
[
  { department: "Engineering", total_salary: 150000 },
  { department: "HR", total_salary: 50000 },
  { department: "Marketing", total_salary: 90000 }
]
*/

// 9. Using HAVING to filter groups
// SQL:
// SELECT department, SUM(salary) as total_salary FROM employees GROUP BY department HAVING total_salary > 60000;
/* Sequelize: */
// await Employee.findAll({
//   attributes: ['department', [Sequelize.fn('SUM', Sequelize.col('salary')), 'total_salary']],
//   group: 'department',
//   having: Sequelize.where(Sequelize.fn('SUM', Sequelize.col('salary')), '>', 60000)
// });
/* Expected Output:
[
  { department: "Engineering", total_salary: 150000 },
  { department: "Marketing", total_salary: 90000 }
]
*/

// 10. Joining two tables
// SQL:
// SELECT employees.name, departments.department_name
// FROM employees
// JOIN departments ON employees.department_id = departments.id;
/* Sequelize: */
// await Employee.findAll({
//   attributes: ['name'],
//   include: [{ model: Department, attributes: ['department_name'] }]
// });
/* Expected Output:
[
  { name: "Alice", department_name: "Engineering" },
  { name: "Bob", department_name: "HR" },
  ...
]
*/

// 11. Left join example
// SQL:
// SELECT employees.name, departments.department_name
// FROM employees
// LEFT JOIN departments ON employees.department_id = departments.id;
/* Sequelize: */
// await Employee.findAll({
//   attributes: ['name'],
//   include: [{ model: Department, attributes: ['department_name'], required: false }]
// });
/* Expected Output:
[
  { name: "Alice", department_name: "Engineering" },
  { name: "Bob", department_name: "HR" },
  { name: "Eve", department_name: null } // if Eve's department is not set
]
*/

// 12. Using BETWEEN for range filtering
// SQL:
// SELECT * FROM employees WHERE salary BETWEEN 60000 AND 80000;
/* Sequelize: */
// await Employee.findAll({ where: { salary: { [Op.between]: [60000, 80000] } } });
/* Expected Output:
[
  { id: 1, name: "Alice", department: "Engineering", salary: 70000 },
  { id: 3, name: "Charlie", department: "Engineering", salary: 80000 }
]
*/

// 13. Using IN for multiple values
// SQL:
// SELECT * FROM employees WHERE department IN ('Engineering', 'HR');
/* Sequelize: */
// await Employee.findAll({ where: { department: { [Op.in]: ['Engineering', 'HR'] } } });
/* Expected Output:
[
  { id: 1, name: "Alice", department: "Engineering", salary: 70000 },
  { id: 2, name: "Bob", department: "HR", salary: 50000 }
]
*/

// 14. Updating a record
// SQL:
// UPDATE employees SET salary = 72000 WHERE name = 'Alice';
/* Sequelize: */
// await Employee.update({ salary: 72000 }, { where: { name: 'Alice' } });
/* Expected Output:
{
  message: "1 row updated",
  rowsAffected: 1
}
*/

// 15. Deleting records
// SQL:
// DELETE FROM employees WHERE department = 'Marketing';
/* Sequelize: */
// await Employee.destroy({ where: { department: 'Marketing' } });
/* Expected Output:
{
  message: "2 rows deleted",
  rowsAffected: 2
}
*/
