/**
 * SQL Querying with WHERE, ORDER BY, LIMIT, and BETWEEN
 *
 * This section covers how to filter data using the WHERE clause, how to sort data using ORDER BY,
 * how to limit the number of results returned, and how to filter within a range using BETWEEN.
 */

/**
 * 1. WHERE Clause: Filtering Records
 * - The WHERE clause filters records in a SELECT, UPDATE, or DELETE statement.
 *
 * Example: Select employees with the job title "Sales Rep".
 */
const whereExample = `
SELECT * FROM employees 
WHERE jobTitle = "Sales Rep"; -- Filters employees with job title 'Sales Rep'
`;

/**
 * Supported Operators in WHERE:
 * - = : Equal to
 * - > : Greater than
 * - < : Less than
 * - >= : Greater than or equal to
 * - <= : Less than or equal to
 * - <> or != : Not equal to
 * - BETWEEN : Within a range (inclusive)
 * - LIKE : Pattern matching
 * - IN : Matches any value in a list
 */

/**
 * Combining Conditions: Use AND/OR to combine multiple conditions.
 * Example: Select employees in the United States with a credit limit higher than $1000.
 */
const andExample = `
SELECT * FROM customers 
WHERE country = "United States" AND creditLimit > 1000; -- Filters customers from the United States with a credit limit > $1000
`;

/**
 * Negating Conditions: Use NOT to negate a condition.
 * Example: Show customers who do not have "Toys" in their name.
 */
const notExample = `
SELECT * FROM customers 
WHERE NOT customerName LIKE "%Toys%"; -- Filters customers without 'Toys' in their name
`;

/**
 * 2. Exercises with WHERE Clause:
 *
 * 1. List customers in the United States with a credit limit higher than $1000.
 */
const exercise1 = `
SELECT * FROM customers 
WHERE country = "United States" AND creditLimit > 1000;
`;

/**
 * 2. List employee codes for sales representatives of customers in Spain, France, and Italy.
 */
const exercise2 = `
SELECT DISTINCT employees.employeeCode
FROM employees
JOIN customers ON employees.employeeCode = customers.salesRepEmployeeNumber
WHERE country IN ("Spain", "France", "Italy");
`;

/**
 * 3. Update job title "Sales Rep" to "Sales Representative".
 */
const exercise3 = `
UPDATE employees 
SET jobTitle = "Sales Representative" 
WHERE jobTitle = "Sales Rep";
`;

/**
 * 4. Delete entries for Sales Representatives working in London.
 */
const exercise4 = `
DELETE FROM employees 
WHERE jobTitle = "Sales Representative" AND officeCode = 
(SELECT officeCode FROM offices WHERE city = "London");
`;

/**
 * 5. Show a list of employees who are not Sales Representatives.
 */
const exercise5 = `
SELECT * FROM employees 
WHERE jobTitle != "Sales Representative";
`;

/**
 * 6. Show a list of customers with "Toys" in their name.
 */
const exercise6 = `
SELECT * FROM customers 
WHERE customerName LIKE "%Toys%";
`;

/**
 * 3. ORDER BY and LIMIT
 * - Use ORDER BY to sort results in ascending (ASC) or descending (DESC) order.
 * - LIMIT restricts the number of rows returned.
 */

/**
 * Sorting by last name in ascending order.
 */
const orderByExample = `
SELECT * FROM employees 
ORDER BY lastName ASC; -- Sorts employees by last name in ascending order
`;

/**
 * Sorting products by buy price in descending order.
 */
const orderByDescExample = `
SELECT * FROM products 
ORDER BY buyPrice DESC; -- Sorts products by buy price in descending order
`;

/**
 * LIMIT Example: Retrieve the top 5 products by price.
 */
const limitExample = `
SELECT * FROM products 
ORDER BY buyPrice DESC 
LIMIT 5; -- Limits the result to top 5 most expensive products
`;

/**
 * Exercises with ORDER BY and LIMIT:
 *
 * 1. List the 5 most expensive products from the "Planes" product line.
 */
const exercise7 = `
SELECT * FROM products 
WHERE productLine = "Planes" 
ORDER BY buyPrice DESC 
LIMIT 5;
`;

/**
 * 2. Identify products about to run out of stock (quantity in stock < 100).
 */
const exercise8 = `
SELECT * FROM products 
WHERE quantityInStock < 100;
`;

/**
 * 3. List 10 products in the "Motorcycles" category with the lowest buy price and more than 1000 units in stock.
 */
const exercise9 = `
SELECT * FROM products 
WHERE productLine = "Motorcycles" 
AND quantityInStock > 1000 
ORDER BY buyPrice ASC 
LIMIT 10;
`;

/**
 * 4. BETWEEN: Filtering within a Range
 * - The BETWEEN operator is used to filter within a range.
 */

/**
 * Example: Find employees with office codes between 1 and 5.
 */
const betweenExample = `
SELECT * FROM employees 
WHERE officeCode BETWEEN 1 AND 5; -- Filters employees with office codes between 1 and 5
`;

/**
 * Example: Get products priced between $20 and $50.
 */
const betweenPriceExample = `
SELECT * FROM products 
WHERE buyPrice BETWEEN 20 AND 50; -- Filters products with a price between $20 and $50
`;

/**
 * 5. SELECT statement using LIKE, GROUP BY, ORDER BY, and JOIN
 *
 * Example: Query to find customer names, order dates, and total spent, sorted by total spending.
 */
const selectExample = `
SELECT customers.name, orders.order_date, SUM(orders.total) as total_spent
FROM customers
JOIN orders ON customers.id = orders.customer_id
WHERE customers.name LIKE 'J%'  -- Filters customer names starting with 'J'
GROUP BY customers.name, orders.order_date  -- Groups by customer and order date
ORDER BY total_spent DESC;  -- Orders by total_spent in descending order
`;

/**
 * Explanation:
 * - `LIKE 'J%'`: Filters customer names starting with 'J'.
 * - `JOIN`: Combines 'customers' and 'orders' tables where the customer's id matches the order's customer_id.
 * - `GROUP BY`: Aggregates data by customer name and order date, calculating total spending per customer per date.
 * - `ORDER BY DESC`: Sorts the result by total spending in descending order.
 */
