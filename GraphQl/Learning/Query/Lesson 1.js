/**
 * 📊 GraphQL Query
 * A **query** in GraphQL is a read operation used to fetch data from a server.
 * Clients specify the shape of the data they need, and the server responds with
 * a JSON object containing only the requested information.
 *
 * 🎯 Key Features:
 * 1. **Customizable Requests**:
 *    - Clients can request exactly the fields they need, nothing more, nothing less.
 * 2. **Nested Queries**:
 *    - Queries can include nested fields to represent complex relationships.
 * 3. **Single Request**:
 *    - Fetch multiple types of data in one query using a single endpoint.
 */

/**
 * 🚀 Structure of a GraphQL Query
 * A query is structured with:
 * - **Operation Name (optional)**: Identifies the operation.
 * - **Fields**: Specifies the data to fetch.
 * - **Arguments (optional)**: Filters or modifies the results.
 * - **Variables (optional)**: Makes queries dynamic and reusable.
 *
 * Example Query:
 */

const exampleQuery = `
  query GetUserData($userId: ID!) {
    user(id: $userId) {
      id
      name
      email
      posts {
        title
        content
      }
    }
  }
`;

/**
 * 📌 Breakdown:
 * 1. **Operation Name**: `GetUserData` (optional but useful for debugging).
 * 2. **Arguments**: `$userId` is passed as a variable to identify the user.
 * 3. **Fields**:
 *    - `id`, `name`, `email` are direct fields of the `user` type.
 *    - `posts` is a nested field returning related data.
 * 4. **Variables**: `$userId` is supplied dynamically at runtime.
 *
 * Example Variable Payload:
 * {
 *   "userId": "123"
 * }
 *
 * Expected Response:
 * {
 *   "data": {
 *     "user": {
 *       "id": "123",
 *       "name": "John Doe",
 *       "email": "john@example.com",
 *       "posts": [
 *         { "title": "GraphQL Basics", "content": "Introduction to GraphQL." },
 *         { "title": "Advanced GraphQL", "content": "Complex queries and mutations." }
 *       ]
 *     }
 *   }
 * }
 */
