/**
 * SQL Joins: Overview and Examples
 *
 * SQL JOIN clauses are used to combine rows from two or more tables based on a related column.
 * Joins are essential for retrieving data that is spread across multiple tables in a relational database.
 * Below are the main types of joins explained with examples.
 */

/**
 * 1. INNER JOIN
 * - Returns records that have matching values in both tables.
 * - Commonly used to find data that exists in two related tables.
 *
 * Example: Retrieve orders along with the customer names for matching customer IDs.
 */
const innerJoinExample = `
SELECT 
    orders.order_id, 
    customers.customer_name, 
    orders.order_date
FROM 
    orders
INNER JOIN 
    customers
ON 
    orders.customer_id = customers.customer_id; -- Matches orders to customers based on customer_id
`;

/**
 * Explanation:
 * - `INNER JOIN customers`: Combines rows from `orders` and `customers`.
 * - `ON orders.customer_id = customers.customer_id`: Specifies the condition for matching rows.
 * - Only rows where `customer_id` matches in both tables are included in the result.
 */

/**
 * 2. LEFT JOIN (or LEFT OUTER JOIN)
 * - Returns all records from the left table and matching records from the right table.
 * - If no match is found, the result contains NULL values for the right table's columns.
 *
 * Example: Retrieve all orders, including those without matching customer records.
 */
const leftJoinExample = `
SELECT 
    orders.order_id, 
    customers.customer_name, 
    orders.order_date
FROM 
    orders
LEFT JOIN 
    customers
ON 
    orders.customer_id = customers.customer_id; -- Matches orders to customers based on customer_id
`;

/**
 * Explanation:
 * - `LEFT JOIN customers`: Includes all rows from `orders`, even if no match exists in `customers`.
 * - `ON orders.customer_id = customers.customer_id`: Specifies the matching condition.
 * - Rows without a match will have `NULL` in `customers.customer_name`.
 */

/**
 * 3. RIGHT JOIN (or RIGHT OUTER JOIN)
 * - Returns all records from the right table and matching records from the left table.
 * - If no match is found, the result contains NULL values for the left table's columns.
 *
 * Example: Retrieve all customers, including those who have not placed any orders.
 */
const rightJoinExample = `
SELECT 
    customers.customer_name, 
    orders.order_id, 
    orders.order_date
FROM 
    orders
RIGHT JOIN 
    customers
ON 
    orders.customer_id = customers.customer_id; -- Matches customers to orders based on customer_id
`;

/**
 * Explanation:
 * - `RIGHT JOIN customers`: Includes all rows from `customers`, even if no match exists in `orders`.
 * - Rows without a match will have `NULL` in the `orders` columns.
 */

/**
 * 4. FULL JOIN (or FULL OUTER JOIN)
 * - Returns all records from both tables, with NULLs in columns where no match is found.
 *
 * Example: Retrieve all orders and customers, showing NULLs where matches are missing.
 */
const fullJoinExample = `
SELECT 
    customers.customer_name, 
    orders.order_id, 
    orders.order_date
FROM 
    orders
FULL JOIN 
    customers
ON 
    orders.customer_id = customers.customer_id; -- Matches customers to orders based on customer_id
`;

/**
 * Explanation:
 * - `FULL JOIN customers`: Combines all rows from both `orders` and `customers`.
 * - Rows without matches in either table will have `NULL` in the columns of the unmatched table.
 * - Not all databases support FULL JOIN; alternatives like UNION of LEFT and RIGHT JOIN results may be used.
 */

/**
 * 5. CROSS JOIN
 * - Produces the Cartesian product of the two tables, i.e., each row from the first table is combined with every row from the second table.
 *
 * Example: Combine all products with all categories to create a product-category matrix.
 */
const crossJoinExample = `
SELECT 
    products.product_name, 
    categories.category_name
FROM 
    products
CROSS JOIN 
    categories; -- Combines every row of products with every row of categories
`;

/**
 * Explanation:
 * - `CROSS JOIN categories`: No matching condition; results in all possible combinations.
 * - Useful for generating test cases or combinations, but can lead to large result sets.
 */

/**
 * 6. SELF JOIN
 * - A table is joined with itself to compare rows within the same table.
 *
 * Example: Find employees who share the same manager.
 */
const selfJoinExample = `
SELECT 
    e1.employee_id AS employee, 
    e1.manager_id, 
    e2.employee_name AS manager_name
FROM 
    employees e1
INNER JOIN 
    employees e2
ON 
    e1.manager_id = e2.employee_id; -- Matches employees to their managers
`;

/**
 * Explanation:
 * - `employees e1` and `employees e2`: Alias the same table to treat it as two separate tables.
 * - `ON e1.manager_id = e2.employee_id`: Matches employees with their managers.
 */

/**
 * Summary:
 * - **INNER JOIN**: Retrieves only matching records.
 * - **LEFT JOIN**: Retrieves all rows from the left table, with NULLs for no matches.
 * - **RIGHT JOIN**: Retrieves all rows from the right table, with NULLs for no matches.
 * - **FULL JOIN**: Combines all rows from both tables, with NULLs where no matches exist.
 * - **CROSS JOIN**: Produces the Cartesian product of two tables.
 * - **SELF JOIN**: Joins a table to itself for intra-table comparisons.
 */
