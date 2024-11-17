/**
 * First Normal Form (1NF)
 * - Using row order to convey information is not permitted.
 * - Mixing data types within a column is not permitted.
 * - Each record must have a primary key.
 * - Repeating groups or arrays are not allowed.
 *
 * Example:
 * Incorrect Table (violates 1NF):
 * | StudentID | Name    | Subjects          |
 * |-----------|---------|-------------------|
 * | 1         | Alice   | Math, Science     |
 * | 2         | Bob     | English, History  |
 *
 * Correct Table (normalized to 1NF):
 * | StudentID | Name    | Subject   |
 * |-----------|---------|-----------|
 * | 1         | Alice   | Math      |
 * | 1         | Alice   | Science   |
 * | 2         | Bob     | English   |
 * | 2         | Bob     | History   |
 */

/**
 * Second Normal Form (2NF)
 * - A table is in 2NF if it is in 1NF and all non-key attributes are fully dependent on the entire primary key.
 * Note :- No partial dependency: non-key attributes must depend on the composite primary key (if applicable).
 *
 * Example:
 * Incorrect Table (violates 2NF):
 * | StudentID | Course     | InstructorName |
 * |-----------|------------|----------------|
 * | 1         | Math       | Mr. Smith      |
 * | 1         | Science    | Mrs. Johnson   |
 *
 * Issue: InstructorName depends only on Course, not on the composite key {StudentID, Course}.
 *
 * Correct Tables (normalized to 2NF):
 * Students_Courses:
 * | StudentID | Course     |
 * |-----------|------------|
 * | 1         | Math       |
 * | 1         | Science    |
 *
 * Courses:
 * | Course     | InstructorName |
 * |------------|----------------|
 * | Math       | Mr. Smith      |
 * | Science    | Mrs. Johnson   |
 */

/**
 * Third Normal Form (3NF)
 * - A table is in 3NF if it is in 2NF and there are no transitive dependencies.
 * - Each non-key attribute in the table must be dependent on the entire primary key.
 * - Non-key attributes must depend only on the primary key.
 *
 * Note :- Each non-key attribute in the table must depend on the key, the whole key, and nothing but the key.
 *
 * Example:
 * Incorrect Table (violates 3NF):
 * | StudentID | Course     | InstructorName | InstructorPhone |
 * |-----------|------------|----------------|-----------------|
 * | 1         | Math       | Mr. Smith      | 123-456-7890    |
 *
 * Issue: InstructorPhone depends on InstructorName, not directly on StudentID.
 *
 * Correct Tables (normalized to 3NF):
 * Students_Courses:
 * | StudentID | Course     |
 * |-----------|------------|
 * | 1         | Math       |
 *
 * Courses:
 * | Course     | InstructorName |
 * |------------|----------------|
 * | Math       | Mr. Smith      |
 *
 * Instructors:
 * | InstructorName | InstructorPhone |
 * |----------------|-----------------|
 * | Mr. Smith      | 123-456-7890    |
 */

/**
 * Boyce-Codd Normal Form (BCNF)
 * - A table is in BCNF if it is in 3NF and every determinant is a candidate key.
 * - Eliminates situations where a non-prime attribute determines part of the key.
 * Note :- Each attribute in the table must depend on the key, the whole key, and nothing but the key.
 *
 * Example:
 * Incorrect Table (violates BCNF):
 * | StudentID | Course     | InstructorName |
 * |-----------|------------|----------------|
 * | 1         | Math       | Mr. Smith      |
 * | 2         | Science    | Mr. Smith      |
 *
 * Issue: InstructorName determines Course but is not a key.
 *
 * Correct Tables (normalized to BCNF):
 * Students_Courses:
 * | StudentID | Course     |
 * |-----------|------------|
 * | 1         | Math       |
 * | 2         | Science    |
 *
 * Instructors_Courses:
 * | Course     | InstructorName |
 * |------------|----------------|
 * | Math       | Mr. Smith      |
 * | Science    | Mr. Smith      |
 */

/**
 * Fourth Normal Form (4NF)
 * - A table is in 4NF if it is in BCNF and has no multivalued dependencies.
 * - Multivalued attributes must be decomposed into separate tables.
 * Note :- The only kinds of multivalued dependency allowed in a table are multivalued dependencies on the key.
 *
 * Example:
 * Incorrect Table (violates 4NF):
 * | Model     | Color   | Style      |
 * |-----------|---------|------------|
 * | Prairie   | Brown   | Bungalow   |
 * | Prairie   | Green   | Schoolhouse|
 *
 * Correct Tables (normalized to 4NF):
 * Model_Colors:
 * | Model     | Color   |
 * |-----------|---------|
 * | Prairie   | Brown   |
 * | Prairie   | Green   |
 *
 * Model_Styles:
 * | Model     | Style      |
 * |-----------|------------|
 * | Prairie   | Bungalow   |
 * | Prairie   | Schoolhouse|
 */

/**
 * Fifth Normal Form (5NF)
 * - A table is in 5NF if it is in 4NF and cannot be decomposed further without losing data.
 * - Ensures all join dependencies are preserved.
 *Note :- It must not be possible to describe the table as being the logical result of joining some other tables together.
 * Example:
 * Preferred_Brands_By_Person:
 * | Person | Brand     |
 * |--------|-----------|
 * | Jason  | Frosty's  |
 * | Suzy   | Alpine    |
 *
 * Preferred_Flavors_By_Person:
 * | Person | Flavor          |
 * |--------|-----------------|
 * | Jason  | Vanilla         |
 * | Suzy   | Strawberry      |
 *
 * Available_Flavors_By_Brand:
 * | Brand     | Flavor          |
 * |-----------|-----------------|
 * | Frosty's  | Vanilla         |
 * | Alpine    | Strawberry      |
 *
 * Join query to get final preferences:
 * SELECT
 *     pbrand.Person, bf.Brand, bf.Flavor
 * FROM
 *     Preferred_Brands_By_Person pbrand
 * INNER JOIN
 *     Preferred_Flavors_By_Person pflavor ON pbrand.Person = pflavor.Person
 * INNER JOIN
 *     Available_Flavors_By_Brand bf ON pbrand.Brand = bf.Brand AND pflavor.Flavor = bf.Flavor;
 */
