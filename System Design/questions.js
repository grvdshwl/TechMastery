// Explanation and Answers:

// 1. What does the following command do?
// Command: git diff-tree -r {commit hash}
// Answer: Get a list of files that has been changed in a particular commit.

// Explanation:
// The `git diff-tree -r {commit hash}` command shows the changes made in a specific commit, including a list of files that were modified.

// ---------------------------------------------------

// 2. Which Git command incorporates all the new commits in the master branch and rewrites project history by creating new commits?
// Answer: git rebase

// Explanation:
// The `git rebase` command incorporates new commits from another branch (e.g., master) into the current branch and rewrites the project history by creating brand-new commits for the original branch.

// ---------------------------------------------------

// 3. In a distributed system, which techniques can achieve eventual consistency?
// Answer: Conflict-free replicated data types (CRDTs) or vector clocks

// Explanation:
// CRDTs and vector clocks are designed to ensure eventual consistency in distributed systems by resolving conflicts and propagating updates across nodes without requiring strict synchronization.

// ---------------------------------------------------

// 4. Which of the following is an example of a partitioning strategy in distributed systems?
// Answer: Sharding

// Explanation:
// Sharding partitions data into smaller, independent subsets (shards) to distribute the load effectively, enabling horizontal scaling and improving system performance.

// ---------------------------------------------------

// 5. How to reduce data transfer between server and client in web applications?
// Answer: Data compression

// Explanation:
// Data compression reduces the size of data transferred between the server and client, improving performance and reducing bandwidth usage.

// ---------------------------------------------------

// 6. Strategies to mitigate the 'thundering herd' problem:
// Answer: Implementing caching and request throttling

// Explanation:
// Caching reduces repeated requests, and request throttling prevents simultaneous requests from overwhelming the system, mitigating the 'thundering herd' problem.

// ---------------------------------------------------

// 7. Main advantage of sharding over replication for scaling a system:
// Answer: Sharding allows for horizontal scaling and can help distribute write-heavy workloads.

// Explanation:
// Sharding enables the division of data into smaller chunks for efficient management, distributing both read and write workloads across nodes, unlike replication, which primarily supports read scaling.

// ---------------------------------------------------

// 8. Example of a data synchronization strategy for eventual consistency:
// Answer: Gossip protocol

// Explanation:
// The Gossip protocol propagates updates incrementally between nodes, ensuring eventual consistency without requiring strict coordination or consensus.

// ---------------------------------------------------

// 9. Techniques to mitigate single points of failure:
// Answer: Implementing redundancy and failover mechanisms

// Explanation:
// Redundancy ensures backup systems are available, while failover mechanisms redirect traffic to backups during a failure, enhancing system reliability.

// ---------------------------------------------------

// 10. How Async Hooks monitor the lifetime of asynchronous resources:
// Answer: By tracking every phase of each resource.

// Explanation:
// Async Hooks in Node.js provide a way to monitor and track the lifecycle of asynchronous operations by observing phases like initialization, execution, and completion of resources.
