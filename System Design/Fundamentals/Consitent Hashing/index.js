/**
 * Consistent Hashing is a technique used in distributed systems to distribute data across a cluster of servers.
 * It ensures minimal disruption when servers are added or removed from the cluster.
 * This is particularly useful for load balancing and distributed caching.

 * Key concepts:
 * 1. Hash Ring: A circular space where both keys and servers (nodes) are hashed to.
 * 2. Hash Function: A function that maps keys and nodes to the hash ring.
 * 3. Virtual Nodes: Multiple hashes of the same server to improve load distribution.

 * Basic Steps:
 * 1. Create a hash ring and hash servers to this ring.
 * 2. When a key needs to be stored, hash it and find its position on the ring.
 * 3. Find the first server (moving clockwise) from the key's position to store the data.
 * 4. When a server is added or removed, only the keys on the closest preceding server are reassigned.

 * Advantages:
 * - Minimizes data movement when nodes are added or removed (O(1/n) data moves on average).
 * - Balances the load more evenly across servers.
 * - Scales well with the number of nodes.

 * Example implementation (simplified):
 */
