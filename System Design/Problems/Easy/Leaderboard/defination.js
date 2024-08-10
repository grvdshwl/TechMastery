/**
 * A Leaderboard is a data structure used to keep track of the rankings or scores of entities
 * (e.g., players, teams) based on their performance. The leaderboard is often used in gaming,
 * sports, or competitive environments to display and manage rankings.
 *
 * Key Characteristics:
 * - **Ranking**: The entities are sorted based on their scores or performance metrics.
 * - **Score Management**: Allows updating scores and maintaining rankings accordingly.
 * - **Display**: Provides a way to display the top entities in descending order of their scores.
 *
 * How It Works:
 * - **Data Structure**: Commonly implemented using a combination of a list or array and a hash map
 *   (or object) to maintain scores and rankings efficiently.
 *   - The **list or array** stores entities sorted by their scores in descending order.
 *   - The **hash map** (or object) maps entity identifiers to their scores for quick look-up and update.
 *
 * - **Operations**:
 *   - **Add/Update Score**: Update the score of an entity and adjust its position in the ranking list.
 *   - **Remove Entity**: Remove an entity from the leaderboard, if necessary.
 *   - **Get Top N**: Retrieve the top N entities based on their scores.
 *
 * Example Use Case:
 * - **Gaming**: Displaying top players based on their scores or achievements.
 * - **Sports**: Tracking and showing rankings of teams or athletes based on their performance.
 * - **Competitions**: Managing and displaying rankings in various competitive scenarios.
 */
