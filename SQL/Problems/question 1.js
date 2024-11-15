// ## SQL Challenges

// Set up the Classic Models dataset locally with example data using the SQL script:
// https://raw.githubusercontent.com/harsha547/ClassicModels-Database-Queries/master/database.sql

// 1. Prepare a list of offices sorted by country, state, city.
const query1 = `
SELECT * 
FROM offices 
ORDER BY country, state, city;
`;

// 2. How many employees are there in the company?
const query2 = `
SELECT COUNT(*) AS total_employees 
FROM employees;
`;

// 3. What is the total of payments received?
const query3 = `
SELECT SUM(amount) AS total_payments 
FROM payments;
`;

// 4. List the product lines that contain 'Cars'.
const query4 = `
SELECT productLine 
FROM productlines 
WHERE productLine LIKE '%Cars%';
`;

// 5. Report total payments for October 28, 2004.
const query5 = `
SELECT SUM(amount) AS total_payments 
FROM payments 
WHERE paymentDate = '2004-10-28';
`;

// 6. Report those payments greater than $100,000.
const query6 = `
SELECT * 
FROM payments 
WHERE amount > 100000;
`;

// 7. List the products in each product line.
const query7 = `
SELECT productLine, productName 
FROM products 
ORDER BY productLine;
`;

// 8. How many products in each product line?
const query8 = `
SELECT productLine, COUNT(*) AS total_products 
FROM products 
GROUP BY productLine;
`;

// 9. What is the minimum payment received?
const query9 = `
SELECT MIN(amount) AS minimum_payment 
FROM payments;
`;

// 10. List all payments greater than twice the average payment.
const query10 = `
SELECT * 
FROM payments 
WHERE amount > 2 * (SELECT AVG(amount) FROM payments);
`;

// 11. What is the average percentage markup of the MSRP on buyPrice?
const query11 = `
SELECT AVG((MSRP - buyPrice) / buyPrice * 100) AS avg_markup_percentage 
FROM products;
`;

// 12. How many distinct products does ClassicModels sell?
const query12 = `
SELECT COUNT(DISTINCT productCode) AS distinct_products 
FROM products;
`;

// 13. Report the name and city of customers who don't have sales representatives.
const query13 = `
SELECT customerName, city 
FROM customers 
WHERE salesRepEmployeeNumber IS NULL;
`;

// 14. What are the names of executives with VP or Manager in their title?
// Use the CONCAT function to combine the employee's first name and last name into a single field for reporting.
const query14 = `
SELECT CONCAT(firstName, ' ', lastName) AS executive_name 
FROM employees 
WHERE jobTitle LIKE '%VP%' OR jobTitle LIKE '%Manager%';
`;

// 15. Which orders have a value greater than $5,000?
const query15 = `
SELECT orderNumber 
FROM orderdetails 
GROUP BY orderNumber 
HAVING SUM(quantityOrdered * priceEach) > 5000;
`;

// Note: The Classic Models dataset includes detailed information about office locations, employees, customers, orders, and payments.
