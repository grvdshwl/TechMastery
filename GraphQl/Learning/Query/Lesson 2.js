/**
 * 🛠 Advanced Features in Queries
 * 1. **Aliases**:
 *    - Rename fields to avoid conflicts or improve readability.
 *    - Example:
 *      query {
 *        firstUser: user(id: "1") { name }
 *        secondUser: user(id: "2") { name }
 *      }
 *
 * 2. **Fragments**:
 *    - Reuse parts of queries for consistent data fetching.
 *    - Example:
 *      fragment UserFields on User {
 *        id
 *        name
 *        email
 *      }
 *      query {
 *        user(id: "123") {
 *          ...UserFields
 *        }
 *      }
 *
 * 3. **Directives**:
 *    - Conditionally include or skip fields based on variables.
 *    - Example:
 *      query GetUser($withPosts: Boolean!) {
 *        user(id: "123") {
 *          name
 *          posts @include(if: $withPosts) {
 *            title
 *          }
 *        }
 *      }
 */

/**
 * 🌟 When to Use Queries:
 * - Fetching data for a specific page or component.
 * - Retrieving related, nested data in a single request.
 * - Scenarios where efficiency and precision are essential.
 */
