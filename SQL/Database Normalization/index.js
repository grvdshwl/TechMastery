/**
 * Data Normalization in SQL
 *
 * Data normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.
 * It involves structuring the database into multiple tables and defining relationships between them.
 * The goal of normalization is to eliminate undesirable characteristics like data anomalies, redundancy, and inconsistency.
 */

/**
 * 1. First Normal Form (1NF)
 * - A table is in 1NF if it contains only atomic (indivisible) values and each record is unique.
 * - No repeating groups or arrays in any column. Every column must contain a single value.
 *
 * Example:
 * Incorrect 1NF table:
 *
 * | studentID | studentName | courses              |
 * |-----------|-------------|----------------------|
 * | 1         | John        | Math, Science        |
 * | 2         | Jane        | History, English     |
 *
 * Corrected 1NF table:
 *
 * | studentID | studentName | course    |
 * |-----------|-------------|-----------|
 * | 1         | John        | Math      |
 * | 1         | John        | Science   |
 * | 2         | Jane        | History   |
 * | 2         | Jane        | English   |
 *
 * SQL Table Creation for 1NF:
 * ```sql
 * CREATE TABLE students (
 *     studentID INT PRIMARY KEY,
 *     studentName VARCHAR(100)
 * );
 * CREATE TABLE courses (
 *     studentID INT,
 *     course VARCHAR(100),
 *     FOREIGN KEY (studentID) REFERENCES students(studentID)
 * );
 * ```
 */

/**
 * 2. Second Normal Form (2NF)
 * - A table is in 2NF if it is in 1NF and all non-key attributes are fully dependent on the primary key.
 * - Eliminate partial dependency (where a non-key attribute depends on only part of the primary key).
 * - Applicable only for tables with composite primary keys.
 *
 * Example:
 * Incorrect 2NF table (partial dependency):
 *
 * | studentID | course    | instructor    |
 * |-----------|-----------|---------------|
 * | 1         | Math      | Mr. Smith     |
 * | 1         | Science   | Mrs. Johnson  |
 * | 2         | History   | Mr. Green     |
 *
 * Corrected 2NF tables:
 *
 * **students**:
 * | studentID | studentName |
 * |-----------|-------------|
 * | 1         | John        |
 * | 2         | Jane        |
 *
 * **courses**:
 * | course    | instructor    |
 * |-----------|---------------|
 * | Math      | Mr. Smith     |
 * | Science   | Mrs. Johnson  |
 * | History   | Mr. Green     |
 *
 * SQL Table Creation for 2NF:
 * ```sql
 * CREATE TABLE students (
 *     studentID INT PRIMARY KEY,
 *     studentName VARCHAR(100)
 * );
 * CREATE TABLE courses (
 *     course VARCHAR(100) PRIMARY KEY,
 *     instructor VARCHAR(100)
 * );
 * CREATE TABLE student_courses (
 *     studentID INT,
 *     course VARCHAR(100),
 *     FOREIGN KEY (studentID) REFERENCES students(studentID),
 *     FOREIGN KEY (course) REFERENCES courses(course)
 * );
 * ```
 */

/**
 * 3. Third Normal Form (3NF)
 * - A table is in 3NF if it is in 2NF and all non-key attributes are not transitively dependent on the primary key.
 * - Eliminate transitive dependency (where non-key attributes depend on other non-key attributes).
 *
 * Example:
 * Incorrect 3NF table (transitive dependency):
 *
 * | studentID | course    | instructor    | instructorPhone |
 * |-----------|-----------|---------------|-----------------|
 * | 1         | Math      | Mr. Smith     | 123-456-7890    |
 * | 1         | Science   | Mrs. Johnson  | 987-654-3210    |
 * | 2         | History   | Mr. Green     | 555-123-4567    |
 *
 * Corrected 3NF tables:
 *
 * **students**:
 * | studentID | studentName |
 * |-----------|-------------|
 * | 1         | John        |
 * | 2         | Jane        |
 *
 * **courses**:
 * | course    | instructor    |
 * |-----------|---------------|
 * | Math      | Mr. Smith     |
 * | Science   | Mrs. Johnson  |
 * | History   | Mr. Green     |
 *
 * **instructors**:
 * | instructor    | instructorPhone |
 * |---------------|-----------------|
 * | Mr. Smith     | 123-456-7890    |
 * | Mrs. Johnson  | 987-654-3210    |
 * | Mr. Green     | 555-123-4567    |
 *
 * SQL Table Creation for 3NF:
 * ```sql
 * CREATE TABLE students (
 *     studentID INT PRIMARY KEY,
 *     studentName VARCHAR(100)
 * );
 * CREATE TABLE courses (
 *     course VARCHAR(100) PRIMARY KEY,
 *     instructor VARCHAR(100)
 * );
 * CREATE TABLE instructors (
 *     instructor VARCHAR(100) PRIMARY KEY,
 *     instructorPhone VARCHAR(15)
 * );
 * CREATE TABLE student_courses (
 *     studentID INT,
 *     course VARCHAR(100),
 *     FOREIGN KEY (studentID) REFERENCES students(studentID),
 *     FOREIGN KEY (course) REFERENCES courses(course)
 * );
 * CREATE TABLE instructor_phone (
 *     instructor VARCHAR(100),
 *     instructorPhone VARCHAR(15),
 *     FOREIGN KEY (instructor) REFERENCES instructors(instructor)
 * );
 * ```
 */

/**
 * 4. Boyce-Codd Normal Form (BCNF)
 * - A table is in BCNF if it is in 3NF and for every non-trivial functional dependency, the left-hand side is a superkey.
 * - In simpler terms, every determinant must be a candidate key.
 *
 * Example:
 * A table might be in 3NF but not BCNF if a non-prime attribute determines another non-prime attribute.
 * BCNF addresses this issue by ensuring that each determinant is a key.
 */

/**
 * 5. Fourth Normal Form (4NF)
 * - A table is in 4NF if it is in BCNF and there are no multi-valued dependencies.
 * - Multi-valued dependencies occur when one column contains multiple values that should be stored separately.
 *
 * Example:
 * A table storing multiple phone numbers for each student in a single column violates 4NF.
 * To fix this, create a separate table for phone numbers.
 */

/**
 * 6. Fifth Normal Form (5NF)
 * - A table is in 5NF if it is in 4NF and all join dependencies are implied by candidate keys.
 * - 5NF ensures that no information is lost when the table is decomposed into smaller tables.
 */

/**
 * Benefits of Data Normalization:
 * - Reduces data redundancy and improves data integrity.
 * - Minimizes update anomalies (e.g., inconsistent data when updating).
 * - Simplifies data maintenance by separating different concerns into related tables.
 * - Optimizes storage by removing unnecessary duplicated data.
 */

/**
 * Summary:
 * - Data normalization in SQL aims to structure a database to reduce redundancy and dependency.
 * - It progresses through several stages: 1NF, 2NF, 3NF, BCNF, 4NF, and 5NF.
 * - Normalization improves data integrity, consistency, and overall performance.
 */
