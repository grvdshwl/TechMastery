/**
 * 🔄 GraphQL Mutation
 * A **mutation** in GraphQL is a write operation used to modify data on the server,
 * such as creating, updating, or deleting records. Mutations can return the updated
 * or affected data, making them highly efficient.
 *
 * 🎯 Key Features:
 * 1. **Data Modification**:
 *    - Mutations allow clients to change server-side data while optionally retrieving
 *      the results of those changes.
 * 2. **Single Operation**:
 *    - Unlike REST, where separate requests may be needed for actions and fetching data,
 *      a mutation can do both in one request.
 * 3. **Custom Return Data**:
 *    - Clients specify exactly what data they want back after a mutation.
 */

/**
 * 🚀 Structure of a GraphQL Mutation
 * A mutation is structured with:
 * - **Operation Name (optional)**: Identifies the operation.
 * - **Fields**: Specifies the operation to perform and data to return.
 * - **Arguments**: Provides inputs for the mutation.
 * - **Variables (optional)**: Makes mutations dynamic and reusable.
 *
 * Example Mutation:
 */

const exampleMutation = `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      email
      createdAt
    }
  }
`;

/**
 * 📌 Breakdown:
 * 1. **Operation Name**: `CreateUser` (optional but useful for debugging).
 * 2. **Arguments**:
 *    - `$input` is passed as a variable containing the user data to create.
 * 3. **Fields**:
 *    - `id`, `name`, `email`, and `createdAt` are returned for the newly created user.
 * 4. **Variables**: `$input` is supplied dynamically at runtime.
 *
 * Example Variable Payload:
 * {
 *   "input": {
 *     "name": "John Doe",
 *     "email": "john@example.com",
 *     "password": "securepassword123"
 *   }
 * }
 *
 * Expected Response:
 * {
 *   "data": {
 *     "createUser": {
 *       "id": "1",
 *       "name": "John Doe",
 *       "email": "john@example.com",
 *       "createdAt": "2024-01-01T00:00:00.000Z"
 *     }
 *   }
 * }
 */
