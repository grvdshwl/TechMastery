/**
 * SQL Views: Virtual Tables for Simplifying Complex Queries
 *
 * A **view** in SQL is essentially a saved query that you can reference like a table in other queries.
 * It is a virtual table that stores the result of a SELECT query. Views can simplify complex queries by hiding the complexity of joins, subqueries, and aggregations.
 *
 * **Key Points**:
 * - A view does not store data itself; it is a stored query that retrieves data from underlying tables when queried.
 * - Views help in organizing and reusing complex SQL queries.
 * - Views can be used to restrict access to specific columns or rows of a table, enhancing security.
 *
 * Here's how views work and how to create and use them.
 */

/**
 * 1. Creating a View
 *
 * You can create a view using the `CREATE VIEW` statement followed by a SELECT query.
 * Once the view is created, you can treat it like a table in subsequent queries.
 *
 * Example: Creating a view that shows employees' full names and their department names:
 */
const createViewExample = `
CREATE VIEW employee_details AS
SELECT employees.employeeNumber, 
       CONCAT(employees.firstName, ' ', employees.lastName) AS fullName, 
       departments.departmentName
FROM employees
JOIN departments ON employees.departmentId = departments.departmentId;
`;

/**
 * Explanation:
 * - `CREATE VIEW employee_details`: Creates a new view named `employee_details`.
 * - `SELECT ...`: The query that defines the data the view will return, which includes employee numbers, full names (first and last), and department names.
 * - The view will return a result similar to a table with employee details.
 */

/**
 * 2. Using Views
 *
 * Once the view is created, you can query it just like you would query a table.
 * Example: To get the list of all employees along with their department names:
 */
const selectFromViewExample = `
SELECT * FROM employee_details;
`;

/**
 * Explanation:
 * - This SELECT query retrieves all columns from the `employee_details` view, which includes employee number, full name, and department name.
 * - Since the view is just a stored query, you don't need to write the complex join every time.
 */

/**
 * 3. Updating Data Through Views
 *
 * In some cases, you can update data through a view, but the view must be updatable. This depends on the query used to create the view.
 * For example, views that involve `JOIN`s or complex expressions might be read-only.
 *
 * Example: Updating an employee’s department through the `employee_details` view:
 */
const updateViewExample = `
UPDATE employee_details
SET departmentName = 'Marketing'
WHERE employeeNumber = 1002;
`;

/**
 * Explanation:
 * - `UPDATE employee_details`: Updates the `employee_details` view (which updates the underlying `employees` table).
 * - `SET departmentName = 'Marketing'`: Changes the department name to 'Marketing' for the employee with `employeeNumber = 1002`.
 * - **Important**: The view must meet specific criteria to be updatable, such as not containing joins or complex calculations.
 */

/**
 * 4. Dropping a View
 *
 * If you no longer need a view, you can remove it from the database using the `DROP VIEW` statement.
 *
 * Example: Dropping the `employee_details` view:
 */
const dropViewExample = `
DROP VIEW employee_details;
`;

/**
 * Explanation:
 * - `DROP VIEW employee_details`: Removes the `employee_details` view from the database. This does not affect the underlying data in the `employees` or `departments` tables.
 */

/**
 * 5. Benefits of Using Views
 *
 * - **Simplification**: Views encapsulate complex queries and make them reusable. You don't need to repeat complicated logic in every query.
 * - **Security**: Views can expose only specific columns and rows, hiding sensitive data in underlying tables.
 * - **Data Abstraction**: Views provide an abstraction layer, making it easier to manage and query data without worrying about underlying schema changes.
 * - **Code Reusability**: You can create views to store common queries and reuse them in various parts of your application.
 */

/**
 * 6. Types of Views:
 *
 * - **Simple Views**: Views based on a single table and without any complex joins, groupings, or subqueries.
 * - **Complex Views**: Views based on multiple tables, joins, or nested queries.
 * - **Materialized Views**: A type of view that stores the result of the query physically, so it can be queried faster. (Note: Not supported in all databases).
 */

/**
 * 7. Example Use Cases for Views:
 *
 * - **Reporting**: If you need a complex report that joins multiple tables, you can create a view that returns the report's data and query the view directly.
 * - **Access Control**: You can create views to expose only certain columns to users, keeping sensitive information hidden.
 * - **Data Aggregation**: Use views to aggregate data and present it in a user-friendly format.
 */

/**
 * Conclusion:
 * - Views are a powerful tool to simplify complex queries, enhance security, and improve code reusability.
 * - They do not store data but act as virtual tables to encapsulate SELECT statements.
 * - Use views to present data in a specific format or hide complexity, but be mindful of their limitations, such as potential non-updatability.
 */
