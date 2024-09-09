/**
 * Distributed Locking Algorithms
 * ------------------------------
 * Distributed locking algorithms ensure that only one instance or node in a distributed system can access a particular
 * resource at a time. This is important to prevent race conditions, ensure data consistency, and coordinate access to shared
 * resources in distributed systems.
 *
 * Key Points:
 * -----------
 * 1. **Mutual Exclusion**: A distributed lock ensures that only one process can access a resource at any given time,
 *    avoiding conflicts in accessing shared resources.
 * 2. **Lock Acquisition and Release**: Nodes or processes can request a lock on a resource and must release it after
 *    finishing the operation.
 * 3. **Lease Time (TTL)**: Locks are usually set with a lease time or time-to-live (TTL) to prevent deadlocks in case a
 *    node holding the lock crashes or fails to release it.
 * 4. **Deadlock Prevention**: Distributed locking mechanisms should handle scenarios where nodes fail or disconnect
 *    while holding a lock, preventing deadlocks.
 * 5. **Consensus-Based Locking**: Distributed systems use consensus algorithms (e.g., **Paxos** or **Raft**) to ensure
 *    that lock acquisition decisions are agreed upon by a quorum of nodes, ensuring consistency.
 * 6. **Popular Implementations**:
 *    - **ZooKeeper**: Apache ZooKeeper provides distributed locking through ephemeral nodes.
 *    - **Redis**: Redis can be used to implement distributed locks using its `SET` command with `NX` and `EX` options.
 *    - **Etcd**: A distributed key-value store like etcd also supports distributed locks using lease-based locking.
 *
 * Use Case: Distributed Job Scheduling
 * ------------------------------------
 * Scenario:
 * - A distributed job scheduler runs on multiple nodes, and only one node should execute a particular job at a time
 *   to avoid duplicated job execution.
 *
 * Solution:
 * - A distributed lock is implemented so that when a node acquires the lock, it can execute the job. Other nodes
 *   are prevented from acquiring the lock and executing the job simultaneously. If the node crashes or fails to
 *   release the lock, the TTL will expire, allowing another node to acquire the lock.
 *
 * Example: Simulating a Distributed Lock Using Redis in JavaScript
 * ----------------------------------------------------------------
 */

// Simulate a Redis client with a simple in-memory object for demonstration purposes
class RedisClient {
  constructor() {
    this.store = {}; // Simulate key-value store
  }

  // SET command for acquiring a lock (NX: only if not exists, EX: set expiration time)
  set(key, value, options) {
    if (!this.store[key]) {
      this.store[key] = {
        value,
        expiration: Date.now() + options.expiration * 1000,
      };
      console.log(`Lock acquired: ${key}`);
      return true;
    }
    return false;
  }

  // DEL command for releasing a lock
  del(key) {
    if (this.store[key]) {
      delete this.store[key];
      console.log(`Lock released: ${key}`);
      return true;
    }
    return false;
  }

  // Check if lock is still valid based on expiration
  checkLock(key) {
    if (this.store[key] && this.store[key].expiration > Date.now()) {
      console.log(`Lock is still valid for: ${key}`);
      return true;
    }
    console.log(`Lock expired for: ${key}`);
    this.del(key);
    return false;
  }
}

// Simulating a distributed lock using Redis
class DistributedLock {
  constructor(redisClient) {
    this.redisClient = redisClient;
  }

  // Acquire a lock
  acquireLock(resourceKey, lockValue, ttl) {
    const success = this.redisClient.set(resourceKey, lockValue, {
      expiration: ttl,
    });
    if (success) {
      console.log(`Successfully acquired lock for resource: ${resourceKey}`);
    } else {
      console.log(`Failed to acquire lock for resource: ${resourceKey}`);
    }
    return success;
  }

  // Release a lock
  releaseLock(resourceKey) {
    const success = this.redisClient.del(resourceKey);
    if (success) {
      console.log(`Successfully released lock for resource: ${resourceKey}`);
    } else {
      console.log(`Failed to release lock for resource: ${resourceKey}`);
    }
  }
}

// Simulate nodes acquiring a distributed lock
const redisClient = new RedisClient();
const distributedLock = new DistributedLock(redisClient);

// Node 1 tries to acquire the lock
const lockAcquiredByNode1 = distributedLock.acquireLock("job123", "node1", 5); // TTL = 5 seconds

// Node 2 tries to acquire the same lock while Node 1 holds it
setTimeout(() => {
  const lockAcquiredByNode2 = distributedLock.acquireLock("job123", "node2", 5);
}, 2000); // After 2 seconds

// Node 1 releases the lock after completing the job
setTimeout(() => {
  distributedLock.releaseLock("job123");
}, 4000); // After 4 seconds

// Node 2 tries again to acquire the lock after TTL expires
setTimeout(() => {
  const lockAcquiredByNode2 = distributedLock.acquireLock("job123", "node2", 5);
}, 6000); // After 6 seconds (TTL expired)

/**
 * Explanation:
 * ------------
 * 1. **RedisClient Class**: Simulates a Redis-like key-value store to manage locks with TTL.
 * 2. **DistributedLock Class**: Implements lock acquisition and release using the RedisClient.
 * 3. **TTL (Time-To-Live)**: If a node holding the lock doesn't release it in time, the lock automatically expires.
 * 4. **Locking Simulation**: In the example, Node 1 acquires a lock on a job, and Node 2 waits for the lock to be released or TTL to expire.
 *
 * User Case: Distributed File System
 * ----------------------------------
 * Scenario:
 * - In a distributed file system, multiple nodes may try to update the same file concurrently, leading to potential conflicts.
 *
 * Solution:
 * - Implement a distributed lock to ensure that only one node can modify the file at a time. Once the operation is complete,
 *   the lock is released, allowing other nodes to acquire the lock and proceed.
 *
 * Benefits of Distributed Locking:
 * --------------------------------
 * 1. **Prevents Race Conditions**: Ensures that shared resources (e.g., databases, files) are accessed by only one node
 *    at a time.
 * 2. **Fault Tolerance**: With TTL, the system can recover from node failures without causing deadlocks.
 * 3. **Scalability**: Distributed locks allow scalable coordination of resources in a distributed system.
 * 4. **Consistency**: Maintains data consistency by preventing simultaneous writes or updates.
 *
 * Real-World Example: Redis Distributed Lock in Uber's Microservices
 * ------------------------------------------------------------------
 * - **Uber** uses Redis-based distributed locking to coordinate microservices when they need to update the same data
 *   (e.g., rider and driver matching) across distributed servers. The locking mechanism ensures that no two servers
 *   modify the same data simultaneously.
 */
