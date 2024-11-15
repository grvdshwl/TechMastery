// Relational Databases
// --------------------
// Relational databases store data in a structured format using tables, making it easier to manage, retrieve, and manipulate information.
// This structure allows complex data relationships and ensures data integrity across various entities.

// Key Concepts
// ------------

// 1. Tables:
//    - Data is organized in tables, each table representing a distinct entity such as "Customers," "Orders," or "Products."
//    - Each table has:
//        - Columns: Define the types of data (e.g., name, age, price) to ensure consistency.
//        - Rows (Records): Hold the actual data. Each row represents an individual entry in the table (e.g., a single customer).
//    - Example:
//        - Customers Table:
//          | CustomerID | Name     | Email               | Phone        |
//          |------------|----------|---------------------|--------------|
//          | 1          | John Doe | john@example.com    | 123-456-7890 |
//          | 2          | Jane Doe | jane@example.com    | 098-765-4321 |

// 2. CRUD Operations:
//    - CRUD (Create, Read, Update, Delete) are the essential operations for managing data within a table.
//    - Examples:
//        - Create: Add a new record, e.g., insert a new customer.
//        - Read: Retrieve data, e.g., query a list of all customers.
//        - Update: Modify existing data, e.g., update a customer's phone number.
//        - Delete: Remove a record, e.g., delete an inactive customer.

// 3. Relationships:
//    - Tables can be linked through relationships, reflecting real-world data connections.
//    - Relationship Types:
//        - One-to-One: One record in Table A links to one in Table B (e.g., one employee has one ID).
//        - One-to-Many: One record in Table A links to multiple records in Table B (e.g., a customer with multiple orders).
//        - Many-to-Many: Records in Table A link to multiple records in Table B and vice versa (e.g., students in multiple classes).
//    - Example:
//        - Orders Table linked to Customers Table:
//          | OrderID | CustomerID | ProductID | Quantity |
//          |---------|------------|-----------|----------|
//          | 101     | 1          | 501       | 2        |
//          | 102     | 2          | 502       | 1        |

// 4. SQL (Structured Query Language):
//    - SQL is the language used to interact with relational databases for data manipulation and retrieval.
//    - Examples of SQL queries:
//        - SELECT * FROM Customers WHERE Name = 'John Doe';  // Retrieve information for a specific customer
//        - INSERT INTO Orders (CustomerID, ProductID, Quantity) VALUES (1, 501, 2);  // Add a new order
//        - UPDATE Customers SET Email = 'newemail@example.com' WHERE CustomerID = 1;  // Update customer info

// Data Types
// ----------
// - Each column in a table is defined with a data type to ensure consistent and accurate data.
// - Common data types include:
//     - INT: Stores integers (e.g., age, quantity)
//     - VARCHAR: Stores variable-length strings (e.g., names, emails)
//     - DATE: Stores dates (e.g., order dates, birth dates)
//     - FLOAT/DECIMAL: Stores decimal values (e.g., prices, percentages)
//     - BOOLEAN: Stores true/false values (e.g., is_active)
// - Example of defining data types in a SQL table:
//     CREATE TABLE Products (
//       ProductID INT PRIMARY KEY,
//       ProductName VARCHAR(50),
//       Price DECIMAL(10, 2),
//       InStock BOOLEAN
//     );

// Database Management Terms
// -------------------------

// - ERD (Entity-Relationship Diagram):
//   - ERD is a graphical representation of database structure, showing entities (tables), attributes (columns), and relationships.
//   - ERDs help in planning and visualizing complex database designs.

// - DDL (Data Definition Language):
//   - DDL defines and modifies the structure of the database, including creating tables and setting relationships.
//   - Common DDL Commands:
//        - CREATE: Defines new tables or databases.
//        - ALTER: Modifies existing tables, like adding or renaming columns.
//        - DROP: Deletes tables or databases.
//   - Example: CREATE TABLE Customers (CustomerID INT, Name VARCHAR(50), Email VARCHAR(100));

// - DML (Data Manipulation Language):
//   - DML is used to manage data within tables.
//   - Common DML Commands:
//        - INSERT: Adds new records to a table.
//        - UPDATE: Modifies existing records.
//        - DELETE: Removes specific records.
//        - SELECT: Retrieves data, often with filtering and sorting.
//   - Example: SELECT Name, Email FROM Customers WHERE CustomerID = 1;

// - DCL (Data Control Language):
//   - DCL controls user access and permissions in the database.
//   - Common DCL Commands:
//        - GRANT: Provides permissions to users (e.g., allowing read access to a table).
//        - REVOKE: Removes permissions from users.
//   - Example: GRANT SELECT ON Customers TO user1;

// Hosting Options
// ---------------
// - Databases can be hosted locally or in the cloud for distributed access.
// - Cloud-hosted databases enable multiple users to access and manage data from various locations, ideal for scalable applications.
