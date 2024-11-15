/**
 * SQL Query Operations: UPDATE, DELETE, and ALTER with Examples and Context
 *
 * These SQL operations are used to modify data or the structure of a table.
 * Below, we explain the purpose of each operation with examples and detailed explanations.
 */

/**
 * 1. UPDATE Query:
 * - The UPDATE statement modifies existing records in a table.
 * - Useful for updating specific details, such as changing an employee's role or updating the status of an order.
 *
 * Example: Update an employee's job title and salary after a promotion.
 */
const updateQueryExample = `
UPDATE employees
SET 
    jobTitle = 'Senior Developer',  -- Update job title to 'Senior Developer'
    salary = 75000                  -- Update salary to 75,000
WHERE 
    employeeNumber = 1002;          -- Target the employee with employeeNumber = 1002
`;

/**
 * Explanation:
 * - `UPDATE employees`: Targets the `employees` table.
 * - `SET`: Specifies the columns to update and the new values.
 * - `WHERE employeeNumber = 1002`: Ensures only the specified employee is updated.
 * - **Important**: Always use a `WHERE` clause unless you intend to update every record.
 */

/**
 * 2. DELETE Query:
 * - The DELETE statement removes records from a table.
 * - Commonly used to delete obsolete or irrelevant data.
 *
 * Example: Remove an employee's record when they leave the company.
 */
const deleteQueryExample = `
DELETE FROM employees
WHERE 
    employeeNumber = 1002;  -- Deletes the record of the employee with employeeNumber = 1002
`;

/**
 * Explanation:
 * - `DELETE FROM employees`: Targets the `employees` table for deletion.
 * - `WHERE employeeNumber = 1002`: Deletes only the specified record.
 * - **Important**: Without a `WHERE` clause, all records in the table will be deleted!
 */

/**
 * 3. ALTER Query:
 * - The ALTER statement modifies the structure of an existing table.
 * - You can add, modify, or delete columns and make other schema adjustments.
 *
 * Example: Add a new column for storing employees' phone numbers.
 */
const alterAddColumnExample = `
ALTER TABLE employees
ADD phoneNumber VARCHAR(15);  -- Adds a 'phoneNumber' column with a max length of 15 characters
`;

/**
 * Explanation:
 * - `ALTER TABLE employees`: Specifies the table to alter.
 * - `ADD phoneNumber VARCHAR(15)`: Adds a new column named `phoneNumber` with a specific data type.
 * - **Important**: Test schema changes in a staging environment before applying them in production.
 */

/**
 * Additional ALTER Use Cases:
 * - Modify a column's data type or size:
 */
const alterModifyColumnExample = `
ALTER TABLE employees
MODIFY COLUMN salary DECIMAL(10, 2);  -- Adjusts 'salary' to store larger decimal values
`;

/**
 * - Drop a column that's no longer needed:
 */
const alterDropColumnExample = `
ALTER TABLE employees
DROP COLUMN oldAddress;  -- Removes the 'oldAddress' column from the table
`;

/**
 * Summary:
 * - **UPDATE**: Modifies existing records based on specific criteria.
 * - **DELETE**: Removes records; ensure a `WHERE` clause is included to avoid accidental mass deletions.
 * - **ALTER**: Changes the table structure; use cautiously to avoid affecting dependent applications.
 */
