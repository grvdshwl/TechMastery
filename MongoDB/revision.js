// 1. Selecting all documents from a collection
// SQL:
// SELECT * FROM employees;
await db.collection("employees").find().toArray();
/* Expected Output:
[
  { _id: 1, name: "Alice", department: "Engineering", salary: 70000 },
  { _id: 2, name: "Bob", department: "HR", salary: 50000 },
  ...
]
*/

// 2. Selecting specific fields
// SQL:
// SELECT name, department FROM employees;
await db
  .collection("employees")
  .find({}, { projection: { name: 1, department: 1 } })
  .toArray();
/* Expected Output:
[
  { name: "Alice", department: "Engineering" },
  { name: "Bob", department: "HR" },
  ...
]
*/

// 3. Filtering with WHERE
// SQL:
// SELECT * FROM employees WHERE department = 'Engineering';
await db.collection("employees").find({ department: "Engineering" }).toArray();
/* Expected Output:
[
  { _id: 1, name: "Alice", department: "Engineering", salary: 70000 },
  { _id: 3, name: "Charlie", department: "Engineering", salary: 80000 }
]
*/

// 4. Using ORDER BY to sort results
// SQL:
// SELECT * FROM employees ORDER BY salary DESC;
await db.collection("employees").find().sort({ salary: -1 }).toArray();
/* Expected Output:
[
  { _id: 3, name: "Charlie", department: "Engineering", salary: 80000 },
  { _id: 1, name: "Alice", department: "Engineering", salary: 70000 },
  { _id: 2, name: "Bob", department: "HR", salary: 50000 }
]
*/

// 5. Using LIMIT to restrict the number of documents
// SQL:
// SELECT * FROM employees LIMIT 2;
await db.collection("employees").find().limit(2).toArray();
/* Expected Output:
[
  { _id: 1, name: "Alice", department: "Engineering", salary: 70000 },
  { _id: 2, name: "Bob", department: "HR", salary: 50000 }
]
*/

// 6. Counting documents
// SQL:
// SELECT COUNT(*) FROM employees;
await db.collection("employees").countDocuments();
/* Expected Output: 5 (assuming there are 5 documents in the employees collection) */

// 7. Grouping and counting with GROUP BY
// SQL:
// SELECT department, COUNT(*) as total FROM employees GROUP BY department;
await db
  .collection("employees")
  .aggregate([{ $group: { _id: "$department", total: { $count: {} } } }])
  .toArray();
/* Expected Output:
[
  { _id: "Engineering", total: 2 },
  { _id: "HR", total: 1 },
  { _id: "Marketing", total: 2 }
]
*/

// 8. Aggregating with SUM
// SQL:
// SELECT department, SUM(salary) as total_salary FROM employees GROUP BY department;
await db
  .collection("employees")
  .aggregate([
    { $group: { _id: "$department", total_salary: { $sum: "$salary" } } },
  ])
  .toArray();
/* Expected Output:
[
  { _id: "Engineering", total_salary: 150000 },
  { _id: "HR", total_salary: 50000 },
  { _id: "Marketing", total_salary: 90000 }
]
*/

// 9. Using HAVING to filter groups
// SQL:
// SELECT department, SUM(salary) as total_salary FROM employees GROUP BY department HAVING total_salary > 60000;
await db
  .collection("employees")
  .aggregate([
    { $group: { _id: "$department", total_salary: { $sum: "$salary" } } },
    { $match: { total_salary: { $gt: 60000 } } },
  ])
  .toArray();
/* Expected Output:
[
  { _id: "Engineering", total_salary: 150000 },
  { _id: "Marketing", total_salary: 90000 }
]
*/

// 10. Joining two collections
// SQL:
// SELECT employees.name, departments.department_name
// FROM employees
// JOIN departments ON employees.department_id = departments.id;
await db
  .collection("employees")
  .aggregate([
    {
      $lookup: {
        from: "departments",
        localField: "department_id",
        foreignField: "_id",
        as: "department_info",
      },
    },
    { $unwind: "$department_info" },
    {
      $project: {
        name: 1,
        department_name: "$department_info.department_name",
      },
    },
  ])
  .toArray();
/* Expected Output:
[
  { name: "Alice", department_name: "Engineering" },
  { name: "Bob", department_name: "HR" },
  ...
]
*/

// 11. Left join example
// SQL:
// SELECT employees.name, departments.department_name
// FROM employees
// LEFT JOIN departments ON employees.department_id = departments.id;
await db
  .collection("employees")
  .aggregate([
    {
      $lookup: {
        from: "departments",
        localField: "department_id",
        foreignField: "_id",
        as: "department_info",
      },
    },
    { $unwind: { path: "$department_info", preserveNullAndEmptyArrays: true } },
    {
      $project: {
        name: 1,
        department_name: "$department_info.department_name",
      },
    },
  ])
  .toArray();
/* Expected Output:
[
  { name: "Alice", department_name: "Engineering" },
  { name: "Bob", department_name: "HR" },
  { name: "Eve", department_name: null } // if Eve's department is not set
]
*/

// 12. Using BETWEEN for range filtering
// SQL:
// SELECT * FROM employees WHERE salary BETWEEN 60000 AND 80000;
await db
  .collection("employees")
  .find({ salary: { $gte: 60000, $lte: 80000 } })
  .toArray();
/* Expected Output:
[
  { _id: 1, name: "Alice", department: "Engineering", salary: 70000 },
  { _id: 3, name: "Charlie", department: "Engineering", salary: 80000 }
]
*/

// 13. Using IN for multiple values
// SQL:
// SELECT * FROM employees WHERE department IN ('Engineering', 'HR');
await db
  .collection("employees")
  .find({ department: { $in: ["Engineering", "HR"] } })
  .toArray();
/* Expected Output:
[
  { _id: 1, name: "Alice", department: "Engineering", salary: 70000 },
  { _id: 2, name: "Bob", department: "HR", salary: 50000 }
]
*/

// 14. Updating a document
// SQL:
// UPDATE employees SET salary = 72000 WHERE name = 'Alice';
await db
  .collection("employees")
  .updateOne({ name: "Alice" }, { $set: { salary: 72000 } });
/* Expected Output:
{
  message: "1 document updated",
  modifiedCount: 1
}
*/

// 15. Deleting documents
// SQL:
// DELETE FROM employees WHERE department = 'Marketing';
await db.collection("employees").deleteMany({ department: "Marketing" });
/* Expected Output:
{
  message: "2 documents deleted",
  deletedCount: 2
}
*/
