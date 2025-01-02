/**
 * 🛠 Advanced Features in Mutations
 * 1. **Input Types**:
 *    - Use input types to define the structure of mutation arguments.
 *    - Example:
 *      input CreateUserInput {
 *        name: String!
 *        email: String!
 *        password: String!
 *      }
 *
 * 2. **Multiple Mutations**:
 *    - Perform multiple mutations in a single request.
 *    - Example:
 *      mutation {
 *        createPost(input: { title: "GraphQL Rocks" }) {
 *          id
 *          title
 *        }
 *        deletePost(id: "1") {
 *          success
 *        }
 *      }
 *
 * 3. **Return Fields**:
 *    - Specify the fields to return, even from related data.
 *    - Example:
 *      mutation {
 *        updateUser(id: "123", input: { name: "Jane Doe" }) {
 *          id
 *          name
 *          posts {
 *            title
 *          }
 *        }
 *      }
 */

/**
 * 🌟 When to Use Mutations:
 * - Creating new records (e.g., users, posts, comments).
 * - Updating existing records (e.g., changing user details).
 * - Deleting records (e.g., removing posts or accounts).
 * - Performing complex server-side operations that may modify data.
 */
