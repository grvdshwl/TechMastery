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
