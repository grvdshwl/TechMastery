//* Database sharding
/**
 * Database Sharding:
 *
 * Sharding is a database architecture pattern that splits a large database
 * into smaller, more manageable pieces called shards. Each shard is a
 * separate database, but they collectively represent a single logical database.
 * This is typically used to improve performance and scalability.
 *
 * Pros:
 * 1. Scalability: Sharding allows a database to scale horizontally by adding
 *    more servers to distribute the load.
 * 2. Performance: Queries can be faster since they are run against smaller
 *    datasets. It reduces the load on any single database server.
 * 3. Availability: If one shard goes down, the others can still be accessible,
 *    improving the overall availability of the database.
 * 4. Maintenance: Smaller databases are easier to back up and restore.
 *
 * Cons:
 * 1. Complexity: Sharding adds significant complexity to the application and
 *    database architecture. Managing multiple databases, ensuring data
 *    consistency, and handling shard rebalancing can be challenging.
 * 2. Data Distribution: Properly distributing data across shards can be difficult.
 *    Uneven data distribution can lead to some shards being overloaded while others
 *    are underutilized (hotspot problem).
 * 3. Cross-Shard Joins: Joining data across shards is complex and often requires
 *    additional application logic. This can lead to performance issues.
 * 4. Maintenance: While smaller databases are easier to back up, managing backups
 *    and restores across multiple shards can be complicated.
 * 5. Cost: Maintaining multiple database servers can be more expensive in terms
 *    of hardware and management overhead.
 *
 * Example of Sharding:
 * Suppose we have a user database. Instead of storing all user data in one
 * large table, we can split users into different shards based on user ID ranges.
 * For instance, users with IDs 1-1000 go to shard 1, 1001-2000 go to shard 2, and
 * so on. When a user logs in, the application determines which shard to query based
 * on the user's ID.
 */
