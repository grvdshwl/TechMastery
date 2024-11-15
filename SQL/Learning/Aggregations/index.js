/**
 * Aggregation, Grouping, and Pagination in SQL
 *
 * SQL provides powerful features for summarizing, organizing, and limiting
 * query results. Below, we'll explain each concept with examples in JavaScript comments.
 */

/**
 * Aggregation:
 * - Aggregation functions perform calculations on a set of rows and return a single value.
 * - Common aggregate functions include:
 *   - SUM(): Adds up numeric values.
 *   - AVG(): Calculates the average of values.
 *   - COUNT(): Counts the number of rows.
 *   - MAX(): Finds the highest value.
 *   - MIN(): Finds the lowest value.
 *
 * Example Query:
 * Calculate the total revenue for all customers.
 */
const aggregationExample = `
SELECT 
    SUM(quantity * price_per_unit) AS total_revenue
FROM sales;
`;

/**
 * Grouping:
 * - Grouping organizes rows into subsets based on a specified column or set of columns.
 * - Used with aggregation functions to calculate results for each group.
 *
 * Example Query:
 * Calculate total revenue for each customer.
 */
const groupingExample = `
SELECT 
    customer_id, 
    SUM(quantity * price_per_unit) AS total_revenue
FROM sales
GROUP BY customer_id;
`;

/**
 * Grouping with Multiple Columns:
 * - You can group by more than one column to further organize data.
 * - Example: Group by customer_id and product_id to find revenue for each product per customer.
 */
const multiGroupingExample = `
SELECT 
    customer_id, 
    product_id, 
    SUM(quantity * price_per_unit) AS product_revenue
FROM sales
GROUP BY customer_id, product_id;
`;

/**
 * Pagination:
 * - Pagination limits the number of rows returned and splits results into smaller chunks.
 * - Useful for displaying query results in pages.
 * - SQL keywords for pagination:
 *   - LIMIT (used in MySQL, PostgreSQL, SQLite).
 *   - OFFSET (specifies the starting row for results).
 *   - FETCH NEXT (used in SQL Server).
 *
 * Example Query:
 * Retrieve the first 10 rows (Page 1):
 */
const paginationExamplePage1 = `
SELECT 
    customer_id, 
    SUM(quantity * price_per_unit) AS total_revenue
FROM sales
GROUP BY customer_id
ORDER BY total_revenue DESC
LIMIT 10 OFFSET 0; -- Retrieves rows 1 to 10
`;

/**
 * Retrieve the next 10 rows (Page 2):
 */
const paginationExamplePage2 = `
SELECT 
    customer_id, 
    SUM(quantity * price_per_unit) AS total_revenue
FROM sales
GROUP BY customer_id
ORDER BY total_revenue DESC
LIMIT 10 OFFSET 10; -- Retrieves rows 11 to 20
`;

/**
 * Conclusion:
 * - Aggregation helps summarize data using mathematical operations.
 * - Grouping organizes data into logical subsets for meaningful summaries.
 * - Pagination ensures that results are displayed efficiently, especially with large datasets.
 */
