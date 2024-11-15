//* Mapping and arthematic functions
/**
 * SQL Mapping, Arithmetic, and String Functions
 *
 * This guide covers mapping, arithmetic, and essential string manipulation functions,
 * enabling transformation, calculation, and text processing in SQL queries.
 */

/**
 * 1. Mapping Functions
 * - Mapping functions transform or modify data during query execution.
 */

/**
 * 1.1 CASE WHEN (Conditional Mapping)
 * - Used to create custom mappings or classifications based on conditions.
 *
 * Example: Categorize orders based on their total amount.
 */
const caseWhenExample = `
SELECT 
    order_id, 
    order_total, 
    CASE 
        WHEN order_total > 1000 THEN 'High Value'
        WHEN order_total BETWEEN 500 AND 1000 THEN 'Medium Value'
        ELSE 'Low Value'
    END AS order_category -- Categorizes orders based on the total amount
FROM orders;
`;

/**
 * 1.2 COALESCE (Handling NULL Values)
 * - Returns the first non-NULL value in a list of arguments.
 *
 * Example: Replace NULL customer names with 'Guest'.
 */
const coalesceExample = `
SELECT 
    customer_id, 
    COALESCE(customer_name, 'Guest') AS customer_name -- Replaces NULLs with 'Guest'
FROM customers;
`;

/**
 * 2. Arithmetic Functions
 * - Perform calculations like addition, subtraction, multiplication, and division.
 */

/**
 * 2.1 Basic Arithmetic Operators
 * - Used for calculations within queries.
 *
 * Example: Calculate the total cost by multiplying quantity and unit price.
 */
const basicArithmeticExample = `
SELECT 
    product_id, 
    quantity, 
    unit_price, 
    quantity * unit_price AS total_cost -- Multiplies quantity and unit price to calculate total cost
FROM order_details;
`;

/**
 * 2.2 ROUND (Rounding Numbers)
 * - Rounds a numeric value to the specified number of decimal places.
 *
 * Example: Round the total amount to 2 decimal places.
 */
const roundExample = `
SELECT 
    order_id, 
    ROUND(order_total, 2) AS rounded_total -- Rounds the total to 2 decimal places
FROM orders;
`;

/**
 * 2.3 ABS (Absolute Value)
 * - Returns the absolute (positive) value of a number.
 *
 * Example: Calculate the absolute difference between two amounts.
 */
const absExample = `
SELECT 
    order_id, 
    ABS(amount_paid - order_total) AS payment_difference -- Calculates the absolute difference
FROM payments;
`;

/**
 * 2.4 MOD (Modulo Operation)
 * - Returns the remainder of a division operation.
 *
 * Example: Check if an order ID is even or odd.
 */
const modExample = `
SELECT 
    order_id, 
    MOD(order_id, 2) AS is_even -- Returns 0 for even numbers, 1 for odd numbers
FROM orders;
`;

/**
 * 3. String Functions
 * - String functions enable manipulation and formatting of text data.
 */

/**
 * 3.1 UPPER and LOWER (Case Conversion)
 * - `UPPER`: Converts text to uppercase.
 * - `LOWER`: Converts text to lowercase.
 *
 * Example: Standardize customer names to all uppercase and lowercase formats.
 */
const caseConversionExample = `
SELECT 
    customer_name, 
    UPPER(customer_name) AS uppercase_name, -- Converts to uppercase
    LOWER(customer_name) AS lowercase_name  -- Converts to lowercase
FROM customers;
`;

/**
 * 3.2 CONCAT (String Concatenation)
 * - Combines two or more strings into one.
 *
 * Example: Combine customer first and last names into a full name.
 */
const concatExample = `
SELECT 
    customer_id, 
    CONCAT(first_name, ' ', last_name) AS full_name -- Concatenates first and last names with a space
FROM customers;
`;

/**
 * 3.3 SUBSTRING (Extract Part of a String)
 * - Extracts a portion of a string starting from a specific position.
 *
 * Example: Extract the first three characters of product codes.
 */
const substringExample = `
SELECT 
    product_code, 
    SUBSTRING(product_code, 1, 3) AS short_code -- Extracts the first 3 characters
FROM products;
`;

/**
 * 4. Advanced Arithmetic Functions
 * - POWER and SQRT for exponentiation and square roots.
 * - FLOOR and CEIL for rounding down or up.
 */

/**
 * 4.1 POWER and SQRT (Exponents and Roots)
 * - `POWER`: Raises a number to a specified power.
 * - `SQRT`: Calculates the square root of a number.
 *
 * Example: Compute the square root of a value and raise a number to the power of 3.
 */
const powerSqrtExample = `
SELECT 
    POWER(5, 3) AS five_cubed, -- Calculates 5 to the power of 3 (5^3)
    SQRT(49) AS square_root_of_49 -- Calculates the square root of 49
FROM dual; -- 'dual' is a dummy table in some databases (e.g., Oracle)
`;

/**
 * 4.2 FLOOR and CEIL (Rounding Down or Up)
 * - `FLOOR`: Rounds a number down to the nearest integer.
 * - `CEIL`: Rounds a number up to the nearest integer.
 *
 * Example: Round prices to the nearest lower and higher integers.
 */
const floorCeilExample = `
SELECT 
    unit_price, 
    FLOOR(unit_price) AS rounded_down, -- Rounds down to the nearest integer
    CEIL(unit_price) AS rounded_up -- Rounds up to the nearest integer
FROM products;
`;

/**
 * Summary:
 * - **Mapping Functions**: Use `CASE WHEN` and `COALESCE` for conditional mapping and NULL handling.
 * - **Arithmetic Functions**: Perform calculations with operators and functions like `ROUND`, `ABS`, `MOD`, `POWER`, and `SQRT`.
 * - **String Functions**: Transform text with `UPPER`, `LOWER`, `CONCAT`, and `SUBSTRING`.
 * - These functions allow efficient transformation and analysis in SQL queries.
 */
