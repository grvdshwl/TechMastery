/**
 * SQL Date Functions: Comprehensive Guide with Year, Month, and Related Operations
 *
 * SQL provides robust support for handling and manipulating date and time data.
 * This guide combines common date functions, year/month operations, and formatting for comprehensive coverage.
 */

/**
 * 1. CURRENT_DATE and CURRENT_TIMESTAMP
 * - `CURRENT_DATE`: Returns the current date (without time).
 * - `CURRENT_TIMESTAMP`: Returns the current date and time (with time zone if applicable).
 *
 * Example: Get the current date and time.
 */
const currentDateExample = `
SELECT 
    CURRENT_DATE AS today_date,        -- Returns the current date (e.g., '2024-11-15')
    CURRENT_TIMESTAMP AS now_datetime; -- Returns date and time (e.g., '2024-11-15 14:30:00')
`;

/**
 * 2. YEAR Function
 * - Extracts the year from a date column.
 *
 * Example: Retrieve the year from the `order_date` column.
 */
const yearFunctionExample = `
SELECT 
    order_date, 
    YEAR(order_date) AS order_year -- Extracts the year (e.g., '2024' for '2024-11-15')
FROM orders;
`;

/**
 * 3. MONTH and MONTHNAME Functions
 * - `MONTH`: Extracts the month as a numeric value (1-12).
 * - `MONTHNAME`: Extracts the name of the month (e.g., 'November').
 *
 * Example: Retrieve the month and its name from the `order_date` column.
 */
const monthFunctionExample = `
SELECT 
    order_date, 
    MONTH(order_date) AS order_month,       -- Extracts the numeric month (e.g., '11')
    MONTHNAME(order_date) AS month_name    -- Extracts the month name (e.g., 'November')
FROM orders;
`;

/**
 * 4. CONCATENATING YEAR AND MONTH
 * - Combine year and month to create a custom format like `YYYY-MM`.
 *
 * Example: Create a `YYYY-MM` formatted string.
 */
const yearMonthConcatExample = `
SELECT 
    order_date, 
    CONCAT(YEAR(order_date), '-', LPAD(MONTH(order_date), 2, '0')) AS year_month -- Combines year and month
FROM orders;
`;

/**
 * 5. DATE_PART / EXTRACT
 * - Extracts a specific part of a date, such as year, month, day, etc.
 *
 * Example: Extract year and quarter from a date column.
 */
const datePartExample = `
SELECT 
    EXTRACT(YEAR FROM order_date) AS year,    -- Extracts the year (e.g., '2024')
    EXTRACT(QUARTER FROM order_date) AS quarter -- Extracts the quarter (e.g., '4')
FROM orders;
`;

/**
 * 6. QUARTER Function
 * - Returns the quarter of the year (1 to 4) for a given date.
 *
 * Example: Determine the quarter of the `order_date`.
 */
const quarterFunctionExample = `
SELECT 
    order_date, 
    QUARTER(order_date) AS order_quarter -- Returns the quarter (e.g., '4' for '2024-11-15')
FROM orders;
`;

/**
 * 7. DATE_ADD and DATE_SUB
 * - `DATE_ADD`: Adds a specified interval to a date.
 * - `DATE_SUB`: Subtracts a specified interval from a date.
 *
 * Example: Add 30 days and subtract 7 days from the current date.
 */
const dateAddSubExample = `
SELECT 
    CURRENT_DATE AS today_date, 
    DATE_ADD(CURRENT_DATE, INTERVAL 30 DAY) AS thirty_days_later, -- Adds 30 days
    DATE_SUB(CURRENT_DATE, INTERVAL 7 DAY) AS one_week_ago       -- Subtracts 7 days
`;

/**
 * 8. DATEDIFF
 * - Calculates the difference between two dates in days.
 *
 * Example: Find the number of days between order_date and delivery_date.
 */
const dateDiffExample = `
SELECT 
    order_date, 
    delivery_date, 
    DATEDIFF(delivery_date, order_date) AS days_between -- Calculates the day difference
FROM orders;
`;

/**
 * 9. DATE_FORMAT
 * - Formats a date value into a specified format.
 *
 * Example: Format a date into 'Month Day, Year' format.
 */
const dateFormatExample = `
SELECT 
    order_date, 
    DATE_FORMAT(order_date, '%M %d, %Y') AS formatted_date -- Formats the date (e.g., 'November 15, 2024')
FROM orders;
`;

/**
 * 10. FIRST_DAY and LAST_DAY
 * - `FIRST_DAY`: Use functions like `DATE_FORMAT` to calculate the first day.
 * - `LAST_DAY`: Returns the last day of the month for a given date.
 *
 * Example: Get the first and last days of the year or month.
 */
const firstLastDayExample = `
SELECT 
    order_date, 
    DATE_FORMAT(order_date, '%Y-01-01') AS first_day_of_year, -- First day of the year
    LAST_DAY(order_date) AS last_day_of_month                -- Last day of the month
FROM orders;
`;

/**
 * 11. DATE_TRUNC (For PostgreSQL)
 * - Truncates a date to a specified precision (e.g., month, year).
 *
 * Example: Truncate `order_date` to the beginning of the month.
 */
const dateTruncExample = `
SELECT 
    order_date, 
    DATE_TRUNC('month', order_date) AS start_of_month -- Truncates to '2024-11-01'
FROM orders;
`;

/**
 * Summary:
 * - Common functions like **YEAR**, **MONTH**, **MONTHNAME**, **QUARTER**, and **DATEDIFF** help analyze and manipulate date components.
 * - **DATE_ADD**, **DATE_SUB**, and **LAST_DAY** handle intervals and specific calculations.
 * - Formatting functions like **DATE_FORMAT** enable custom output.
 */
