// 1. What is MongoDB?

// MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like format called BSON (Binary JSON). It is designed for handling large volumes of unstructured data and is highly scalable. Unlike traditional relational databases, MongoDB does not use tables with rows and columns but instead uses collections to store documents. MongoDB is known for its high availability, flexibility, and horizontal scalability, making it popular for modern applications that require fast reads/writes and flexibility in schema.

// Example of a document in MongoDB:
// {
//   "_id": ObjectId("604c8f50d3f1b24c3b90b0e3"),
//   "name": "John Doe",
//   "email": "johndoe@example.com",
//   "age": 30
// }

// 2. What is the difference between `find()` and `findOne()` in MongoDB?

// - `find()` is used to retrieve multiple documents from a collection that match a query. It returns a cursor which can be iterated over to get the results. If no documents match, it returns an empty array.
// Example:
// db.collection('users').find({ age: { $gt: 25 } });

// - `findOne()` is used to retrieve a single document that matches the query. It returns only one document or `null` if no document is found.
// Example:
// db.collection('users').findOne({ name: 'John Doe' });

// `find()` is typically used when multiple results are expected, while `findOne()` is used when you expect only one result or when you need the first document that matches the query.

// 3. What is the purpose of indexes in MongoDB?

// Indexes in MongoDB are used to improve the performance of read operations by allowing the database to quickly locate and retrieve data without scanning every document in a collection. Without indexes, MongoDB performs a collection scan to find the relevant documents, which can be very slow for large datasets. Indexes can be created on one or more fields, and MongoDB supports different types of indexes like single-field, compound, and geospatial indexes.

// Example of creating an index on a field:
// db.collection('users').createIndex({ email: 1 }); // Creates an ascending index on the "email" field

// Example of compound index on multiple fields:
// db.collection('users').createIndex({ name: 1, age: -1 }); // Compound index on "name" and "age"

// Indexes speed up queries but can slow down write operations since MongoDB must also update the index when a document is inserted or modified.

// 4. What are the differences between `updateOne()`, `updateMany()`, and `replaceOne()`?

// - `updateOne()` is used to update a single document that matches a specified filter. It updates the first document that matches the filter.
// Example:
// db.collection('users').updateOne(
//   { name: 'John Doe' },
//   { $set: { age: 31 } }
// );

// - `updateMany()` is used to update multiple documents that match a specified filter. It updates all documents that meet the condition.
// Example:
// db.collection('users').updateMany(
//   { age: { $lt: 30 } },
//   { $set: { status: 'young' } }
// );

// - `replaceOne()` is used to completely replace a single document with a new one. It is different from `updateOne()` because it replaces the entire document instead of just updating specific fields.
// Example:
// db.collection('users').replaceOne(
//   { name: 'John Doe' },
//   { name: 'John Doe', age: 31, email: 'john.doe@example.com' }
// );

// `updateOne()` and `updateMany()` are more commonly used for partial updates, while `replaceOne()` is used when you want to replace an entire document.

// 5. What is the `aggregation` framework in MongoDB?

// The aggregation framework in MongoDB is used to process data and return computed results. It allows you to perform operations such as filtering, grouping, sorting, and transforming data. The aggregation framework provides several stages, such as `$match`, `$group`, `$project`, and `$sort`, which are used to build a pipeline of operations that process the data. Aggregation can be useful for tasks like calculating totals, averages, and grouping documents by specific fields.

// Example of an aggregation pipeline to group users by age and count them:
// db.collection('users').aggregate([
//   { $group: { _id: '$age', count: { $sum: 1 } } },
//   { $sort: { _id: 1 } }
// ]);

// The aggregation pipeline can handle complex data processing operations, including joining data from multiple collections using the `$lookup` stage, making it a powerful tool for data analysis and reporting.
