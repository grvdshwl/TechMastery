// Prepare a list of offices sorted by country, state, city.
/*
SELECT officeCode, city, state, country
FROM offices
ORDER BY country, state, city;
*/

// How many employees are there in the company?
/*
SELECT COUNT(*) AS total_employees
FROM employees;
*/

// What is the total of payments received?
/*
SELECT SUM(amount) AS total_payments
FROM payments;
*/

// List the product lines that contain 'Cars'.
/*
SELECT DISTINCT productLine
FROM products
WHERE productLine LIKE '%Cars%';
*/

// Report total payments for October 28, 2004.
/*
SELECT SUM(amount) AS total_payments_on_oct28
FROM payments
WHERE paymentDate = '2004-10-28';
*/

// Report those payments greater than $100,000.
/*
SELECT paymentDate, amount
FROM payments
WHERE amount > 100000;
*/

// List the products in each product line.
/*
SELECT productLine, productName
FROM products
ORDER BY productLine, productName;
*/

// How many products in each product line?
/*
SELECT productLine, COUNT(*) AS num_products
FROM products
GROUP BY productLine;
*/

// What is the minimum payment received?
/*
SELECT MIN(amount) AS minimum_payment
FROM payments;
*/

// List all payments greater than twice the average payment.
/*
SELECT paymentDate, amount
FROM payments
WHERE amount > (SELECT AVG(amount) * 2 FROM payments);
*/

// What is the average percentage markup of the MSRP on buyPrice?
/*
SELECT AVG((MSRP - buyPrice) / buyPrice * 100) AS avg_markup_percentage
FROM products;
*/

// How many distinct products does ClassicModels sell?
/*
SELECT COUNT(DISTINCT productCode) AS distinct_products
FROM products;
*/

// Report the name and city of customers who don't have sales representatives?
/*
SELECT customerName, city
FROM customers
WHERE salesRepEmployeeNumber IS NULL;
*/

// What are the names of executives with VP or Manager in their title? Use the CONCAT function to combine the employee's first name and last name into a single field for reporting.
/*
SELECT CONCAT(firstName, ' ', lastName) AS full_name
FROM employees
WHERE jobTitle LIKE '%VP%' OR jobTitle LIKE '%Manager%';
*/

// Which orders have a value greater than $5,000?
/*
SELECT orderNumber, SUM(quantityOrdered * priceEach) AS order_value
FROM orderdetails
JOIN products ON orderdetails.productCode = products.productCode
GROUP BY orderNumber
HAVING order_value > 5000;
*/
