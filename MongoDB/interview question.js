const { MongoClient } = require("mongodb");

async function run() {
  const client = new MongoClient("mongodb://localhost:27017", {
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db("testdb");

    // 1. Find All Documents in a Collection
    const employees = await db.collection("employees").find().toArray();
    console.log("All Employees:", employees);
    /* Expected Output:
    [
      { _id: ObjectId("..."), name: "Alice", department: "Engineering", salary: 70000 },
      { _id: ObjectId("..."), name: "Bob", department: "HR", salary: 50000 },
      ...
    ]
    */

    // 2. Find Documents with a Specific Condition
    const engineers = await db
      .collection("employees")
      .find({ department: "Engineering" })
      .toArray();
    console.log("Engineering Employees:", engineers);
    /* Expected Output:
    [
      { _id: ObjectId("..."), name: "Alice", department: "Engineering", salary: 70000 },
      { _id: ObjectId("..."), name: "Charlie", department: "Engineering", salary: 80000 }
    ]
    */

    // 3. Find Specific Fields in Documents
    const employeeNames = await db
      .collection("employees")
      .find({}, { projection: { name: 1, department: 1 } })
      .toArray();
    console.log("Employee Names and Departments:", employeeNames);
    /* Expected Output:
    [
      { _id: ObjectId("..."), name: "Alice", department: "Engineering" },
      { _id: ObjectId("..."), name: "Bob", department: "HR" }
    ]
    */

    // 4. Sorting Documents
    const sortedEmployees = await db
      .collection("employees")
      .find()
      .sort({ salary: -1 })
      .toArray();
    console.log("Employees Sorted by Salary:", sortedEmployees);
    /* Expected Output:
    [
      { _id: ObjectId("..."), name: "Charlie", salary: 80000 },
      { _id: ObjectId("..."), name: "Alice", salary: 70000 },
      { _id: ObjectId("..."), name: "Bob", salary: 50000 }
    ]
    */

    // 5. Using LIMIT to Restrict the Number of Rows
    const limitedEmployees = await db
      .collection("employees")
      .find()
      .limit(2)
      .toArray();
    console.log("Limited Employees:", limitedEmployees);
    /* Expected Output:
    [
      { _id: ObjectId("..."), name: "Alice", department: "Engineering", salary: 70000 },
      { _id: ObjectId("..."), name: "Bob", department: "HR", salary: 50000 }
    ]
    */

    // 6. Counting Rows
    const employeeCount = await db.collection("employees").countDocuments();
    console.log("Employee Count:", employeeCount);
    /* Expected Output: 5 (assuming there are 5 rows in the employees collection) */

    // 7. Grouping and Counting with GROUP BY
    const groupCount = await db
      .collection("employees")
      .aggregate([{ $group: { _id: "$department", total: { $count: {} } } }])
      .toArray();
    console.log("Group and Count:", groupCount);
    /* Expected Output:
    [
      { _id: "Engineering", total: 2 },
      { _id: "HR", total: 1 },
      { _id: "Marketing", total: 2 }
    ]
    */

    // 8. Aggregating with SUM
    const totalSalaries = await db
      .collection("employees")
      .aggregate([
        { $group: { _id: "$department", total_salary: { $sum: "$salary" } } },
      ])
      .toArray();
    console.log("Total Salaries by Department:", totalSalaries);
    /* Expected Output:
    [
      { _id: "Engineering", total_salary: 150000 },
      { _id: "HR", total_salary: 50000 },
      { _id: "Marketing", total_salary: 90000 }
    ]
    */

    // 9. Using HAVING to Filter Groups
    const havingFilter = await db
      .collection("employees")
      .aggregate([
        { $group: { _id: "$department", total_salary: { $sum: "$salary" } } },
        { $match: { total_salary: { $gt: 60000 } } },
      ])
      .toArray();
    console.log("Departments with Total Salary > 60000:", havingFilter);
    /* Expected Output:
    [
      { _id: "Engineering", total_salary: 150000 },
      { _id: "Marketing", total_salary: 90000 }
    ]
    */

    // 10. Joining Two Collections
    const employeeDepartments = await db
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
        { $project: { name: 1, "department_info.department_name": 1 } },
      ])
      .toArray();
    console.log("Employee Departments:", employeeDepartments);
    /* Expected Output:
    [
      { name: "Alice", department_name: "Engineering" },
      { name: "Bob", department_name: "HR" },
      ...
    ]
    */
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

//*------------------------------------------------*//

// 1. How do you perform a basic join in MongoDB (similar to SQL joins)?
// Using $lookup to join employees and departments collections.
// MongoDB Query:
db.employees.aggregate([
  {
    $lookup: {
      from: "departments",
      localField: "department_id",
      foreignField: "_id",
      as: "department_info",
    },
  },
  { $unwind: "$department_info" },
  { $project: { name: 1, "department_info.department_name": 1 } },
]);
/* Expected Output:
[
  { name: "Alice", department_name: "Engineering" },
  { name: "Bob", department_name: "HR" },
  ...
]
*/

// 2. How would you find the second highest salary in a collection?
// MongoDB Query:
db.employees.aggregate([
  { $sort: { salary: -1 } },
  { $skip: 1 },
  { $limit: 1 },
  { $project: { second_highest_salary: "$salary" } },
]);
/* Expected Output:
[
  { second_highest_salary: 70000 }
]
*/

// 3. How do you find duplicate documents in MongoDB based on a specific field?
// MongoDB Query:
db.employees.aggregate([
  { $group: { _id: "$name", count: { $sum: 1 } } },
  { $match: { count: { $gt: 1 } } },
]);
/* Expected Output:
[
  { _id: "John Doe", count: 2 },
  { _id: "Jane Smith", count: 3 }
]
*/

// 4. How can you get the count of employees in each department?
// MongoDB Query:
db.employees.aggregate([
  { $group: { _id: "$department_id", employee_count: { $sum: 1 } } },
]);
/* Expected Output:
[
  { _id: 1, employee_count: 5 },
  { _id: 2, employee_count: 3 },
  ...
]
*/

// 5. What is the equivalent of a primary key in MongoDB?
// *Explanation:* MongoDB uses the `_id` field as a unique identifier for each document in a collection, similar to a primary key in SQL.

// 6. Write a query to fetch the details of employees who joined in the last 30 days.
// MongoDB Query:
db.employees.find({
  join_date: { $gte: new Date(new Date().setDate(new Date().getDate() - 30)) },
});
/* Expected Output:
[
  { _id: ObjectId("..."), name: "Emma", join_date: ISODate("2023-10-10T00:00:00Z") },
  { _id: ObjectId("..."), name: "Liam", join_date: ISODate("2023-10-15T00:00:00Z") },
  ...
]
*/

// 7. How do you find the nth highest salary in MongoDB?
// For example, find the 3rd highest salary.
// MongoDB Query:
db.employees.aggregate([
  { $sort: { salary: -1 } },
  { $skip: 2 },
  { $limit: 1 },
  { $project: { nth_highest_salary: "$salary" } },
]);
/* Expected Output:
[
  { nth_highest_salary: 65000 } // Assuming 65000 is the 3rd highest salary
]
*/

// 8. How can you delete duplicate documents in MongoDB while keeping one of each duplicate?
// MongoDB Query:
db.employees
  .aggregate([
    { $group: { _id: "$name", docs: { $push: "$_id" }, count: { $sum: 1 } } },
    { $match: { count: { $gt: 1 } } },
  ])
  .forEach((doc) => {
    doc.docs.shift(); // Keep one of the duplicates
    db.employees.deleteMany({ _id: { $in: doc.docs } });
  });
/* Expected Output:
{ deletedCount: 2 } // Assuming two duplicate documents were deleted
*/

// 9. How do $match and $project work in MongoDB aggregation pipelines?
// *Explanation:* `$match` filters documents based on conditions, while `$project` specifies which fields to include or exclude.
// MongoDB Query:
db.employees.aggregate([
  { $match: { salary: { $gt: 50000 } } },
  { $project: { name: 1, salary: 1 } },
]);
/* Expected Output:
[
  { name: "Alice", salary: 70000 },
  { name: "Charlie", salary: 80000 },
  ...
]
*/

// 10. How do you use MongoDB window functions like $rank or $denseRank?
// MongoDB 5.0+ supports window functions. Here’s an example to rank top 3 salaries:
// MongoDB Query:
db.employees.aggregate([
  {
    $setWindowFields: {
      sortBy: { salary: -1 },
      output: { salary_rank: { $rank: {} } },
    },
  },
  { $match: { salary_rank: { $lte: 3 } } },
  { $project: { name: 1, salary: 1, salary_rank: 1 } },
]);
/* Expected Output:
[
  { name: "John", salary: 80000, salary_rank: 1 },
  { name: "Emma", salary: 75000, salary_rank: 2 },
  { name: "Liam", salary: 70000, salary_rank: 3 }
]
*/
