/**
 * SQL Theory: Data Types and Constraints
 *
 * 1. Important Data Types in SQL:
 *    - **INT** (Integer):
 *      - Used for whole numbers (e.g., 1, -42).
 *      - Commonly used for IDs, counters, and numeric fields.
 *    - **VARCHAR(n)** (Variable-length Character String):
 *      - Stores text up to a maximum of `n` characters.
 *      - Flexible and efficient for storing variable-length text (e.g., names, descriptions).
 *    - **BOOLEAN**:
 *      - Represents a true/false value (commonly stored as 1 for true, 0 for false).
 *      - Useful for flags like availability, status, or yes/no answers.
 *    - **DATE**:
 *      - Stores a calendar date (YYYY-MM-DD format).
 *      - Used for fields like birthdate, registration date, or published date.
 *    - **DECIMAL(p, s)** or **NUMERIC(p, s)**:
 *      - Used for precise numbers with a fixed number of decimal places (e.g., 123.45).
 *      - Ideal for financial or scientific calculations.
 *    - **TEXT**:
 *      - Stores large amounts of text (e.g., articles, descriptions).
 *      - Unlike `VARCHAR`, it doesn't have a predefined length limit but can be less efficient.
 *
 * 2. Key SQL Constraints:
 *    Constraints enforce rules to ensure data integrity and validity in a database table.
 *
 *    - **PRIMARY KEY**:
 *      - Uniquely identifies each record in a table.
 *      - A combination of `UNIQUE` and `NOT NULL`.
 *      - Example: `BookID INT PRIMARY KEY`.
 *
 *    - **FOREIGN KEY**:
 *      - Links a column to the primary key of another table.
 *      - Enforces referential integrity between tables.
 *      - Example: `AuthorID INT, FOREIGN KEY (AuthorID) REFERENCES Authors(AuthorID)`.
 *
 *    - **NOT NULL**:
 *      - Ensures that a column cannot store `NULL` values.
 *      - Example: `Title VARCHAR(255) NOT NULL`.
 *
 *    - **UNIQUE**:
 *      - Ensures all values in a column are unique across the table.
 *      - Example: `Email VARCHAR(255) UNIQUE`.
 *
 *    - **DEFAULT**:
 *      - Assigns a default value to a column if no value is provided.
 *      - Example: `Available BOOLEAN DEFAULT TRUE`.
 *
 *    - **CHECK**:
 *      - Enforces a condition for the data in a column.
 *      - Example: `PublishedYear INT CHECK (PublishedYear >= 1500)`.
 *
 *    - **AUTO_INCREMENT**:
 *      - Automatically generates a unique value for a column.
 *      - Commonly used with `PRIMARY KEY`.
 *      - Example: `BookID INT AUTO_INCREMENT`.
 *
 * 3. Combining Data Types and Constraints:
 *    - Constraints and data types work together to define the behavior and integrity of a table.
 *    - Example Column Definition:
 *      - `BookID INT PRIMARY KEY AUTO_INCREMENT`:
 *        - Data Type: `INT` for whole numbers.
 *        - Constraints: `PRIMARY KEY` ensures uniqueness, `AUTO_INCREMENT` generates new values.
 */

/**
 * Schema Explanation and Data Types:
 *
 * 1. Table Schema:
 *    - Table Name: `LibraryBooks`
 *    - Columns:
 *      - `BookID` (INT, Primary Key, Auto-Increment):
 *        - A unique identifier for each book.
 *        - Data Type: `INT` (Stores whole numbers).
 *      - `Title` (VARCHAR(255), NOT NULL):
 *        - The title of the book.
 *        - Data Type: `VARCHAR` (Variable-length string, max 255 characters).
 *      - `Author` (VARCHAR(255), NOT NULL):
 *        - The author of the book.
 *        - Data Type: `VARCHAR` (Variable-length string, max 255 characters).
 *      - `PublishedYear` (INT):
 *        - The year the book was published.
 *        - Data Type: `INT` (Stores whole numbers).
 *      - `Genre` (VARCHAR(100)):
 *        - The genre or category of the book (e.g., Fiction, Non-Fiction).
 *        - Data Type: `VARCHAR` (Variable-length string, max 100 characters).
 *      - `Available` (BOOLEAN, Default TRUE):
 *        - Indicates whether the book is currently available in the library.
 *        - Data Type: `BOOLEAN` (Stores `TRUE` or `FALSE` values).
 *
 * 2. Common SQL Commands:
 *    - `SHOW TABLES`:
 *      - Lists all the tables in the current database.
 *      - Example Output:
 *        | Tables_in_Database |
 *        |--------------------|
 *        | LibraryBooks       |
 *    - `DESCRIBE LibraryBooks`:
 *      - Displays the schema of the `LibraryBooks` table.
 *      - Example Output:
 *        | Field          | Type         | Null | Key | Default | Extra          |
 *        |----------------|--------------|------|-----|---------|----------------|
 *        | BookID         | int          | NO   | PRI | NULL    | auto_increment |
 *        | Title          | varchar(255) | NO   |     | NULL    |                |
 *        | Author         | varchar(255) | NO   |     | NULL    |                |
 *        | PublishedYear  | int          | YES  |     | NULL    |                |
 *        | Genre          | varchar(100) | YES  |     | NULL    |                |
 *        | Available      | tinyint(1)   | YES  |     | 1       |                |
 */

// -- Create a table for storing information about books in a library
// CREATE TABLE LibraryBooks (
//     BookID INT PRIMARY KEY AUTO_INCREMENT, -- Unique identifier for each book
//     Title VARCHAR(255) NOT NULL,           -- Title of the book
//     Author VARCHAR(255) NOT NULL,          -- Author of the book
//     PublishedYear INT,                     -- Year the book was published
//     Genre VARCHAR(100),                    -- Genre of the book
//     Available BOOLEAN DEFAULT TRUE         -- Availability status of the book
// );

// -- Show the tables in the current database
// SHOW TABLES;

// -- Get the schema of the `LibraryBooks` table
// DESCRIBE LibraryBooks;
