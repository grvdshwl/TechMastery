/**
 * Entity-Relationship Diagram (ERD) with Respect to SQL
 *
 * An Entity-Relationship Diagram (ERD) is a visual representation of the structure of a database.
 * It shows entities (tables) and their relationships, helping to design and understand the database schema.
 * In SQL, ERDs help in creating relational tables, understanding data relationships, and optimizing queries.
 */

/**
 * 1. Entities (Tables)
 * - In an ERD, entities represent real-world objects, which translate to tables in SQL.
 * - Example: An `Employee` entity would be represented by an `employees` table.
 */

/**
 * 2. Attributes (Columns)
 * - Each entity has attributes, which become columns in the corresponding SQL table.
 * - Example: An `Employee` entity might have attributes like `employeeID`, `firstName`, `lastName`, etc.
 */

/**
 * 3. Relationships
 * - Relationships describe how entities are related to each other.
 * - In SQL, relationships are represented using foreign keys (`FK`).
 *
 * Types of relationships:
 *
 * - **One-to-One (1:1)**:
 *   - One record in one table is related to one record in another table.
 *   - Example: A `person` table and a `passport` table where each person has exactly one passport.
 *   - In SQL: A foreign key constraint linking the two tables ensures the one-to-one relationship.
 *
 * - **One-to-Many (1:M)**:
 *   - One record in one table is related to many records in another table.
 *   - Example: One `customer` can place many `orders`.
 *   - In SQL: Use a foreign key in the "many" table that references the primary key of the "one" table.
 *   ```sql
 *   CREATE TABLE orders (
 *       orderID INT PRIMARY KEY,
 *       customerID INT,
 *       FOREIGN KEY (customerID) REFERENCES customers(customerID)
 *   );
 *   ```
 *
 * - **Many-to-Many (M:M)**:
 *   - Many records in one table are related to many records in another table.
 *   - Example: A `student` can enroll in many `courses`, and a `course` can have many `students`.
 *   - In SQL: Implement this using a junction (or associative) table that holds foreign keys from both related tables.
 *   ```sql
 *   CREATE TABLE student_courses (
 *       studentID INT,
 *       courseID INT,
 *       FOREIGN KEY (studentID) REFERENCES students(studentID),
 *       FOREIGN KEY (courseID) REFERENCES courses(courseID)
 *   );
 *   ```
 */

/**
 * 4. Primary Key (PK)
 * - A primary key uniquely identifies each record in a table.
 * - It is represented as a single attribute or a combination of attributes.
 * - Example: `employeeID` in the `employees` table could be the primary key.
 *
 * ```sql
 * CREATE TABLE employees (
 *     employeeID INT PRIMARY KEY,
 *     firstName VARCHAR(50),
 *     lastName VARCHAR(50)
 * );
 * ```
 */

/**
 * 5. Foreign Key (FK)
 * - A foreign key is a field in one table that links to the primary key of another table.
 * - Foreign keys establish relationships between tables (e.g., one-to-many, many-to-many).
 *
 * Example: The `orders` table might have a foreign key referencing the `customers` table:
 * ```sql
 * CREATE TABLE orders (
 *     orderID INT PRIMARY KEY,
 *     orderDate DATE,
 *     customerID INT,
 *     FOREIGN KEY (customerID) REFERENCES customers(customerID)
 * );
 * ```
 */

/**
 * 6. Normalization
 * - ERD helps in normalizing the database, ensuring that the design is free from redundancy and anomalies.
 * - The process involves splitting data into multiple tables and establishing relationships to reduce duplication.
 *
 * Example: Instead of storing customer information repeatedly in each order, the `orders` table references the `customers` table via a foreign key.
 */

/**
 * 7. Cardinality
 * - Cardinality refers to the number of instances of one entity that can be associated with instances of another entity.
 * - This is represented in ERD as `1` (one), `M` (many), or `N` (many).
 * - Understanding cardinality helps define the correct relationships in SQL.
 */

/**
 * 8. Constraints in SQL (Mapped from ERD)
 * - **Primary Key (PK)**: Uniquely identifies each record in a table.
 * - **Foreign Key (FK)**: Ensures referential integrity between related tables.
 * - **Unique Key**: Ensures that all values in a column or a group of columns are unique.
 * - **Check Constraint**: Ensures values in a column meet a specific condition.
 * - **Not Null**: Ensures that a column does not have null values.
 */

/**
 * Summary:
 * - ERD serves as a blueprint for designing relational databases in SQL.
 * - It helps visualize entities, their attributes, and the relationships between them.
 * - In SQL, relationships are mapped using primary keys, foreign keys, and junction tables for many-to-many relationships.
 */
