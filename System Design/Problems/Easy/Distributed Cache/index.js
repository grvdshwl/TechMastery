// Distributed Cache System Design
//* https://www.youtube.com/watch?v=iuqZvajTOyA

// 1. **Cache Nodes:**
//    - Multiple servers that store cached data.
//    - **Data Partitioning:** Use consistent hashing or a similar technique to distribute data across cache nodes.
//    - **Replication:** Implement data replication to ensure high availability and fault tolerance.

// 2. **Cache Consistency:**
//    - **Write-Through Cache:** Write data to both cache and the database simultaneously to ensure consistency.
//    - **Write-Behind Cache:** Write data to the cache first, then asynchronously update the database.
//    - **Cache Eviction Policy:** Use policies like LRU (Least Recently Used) or LFU (Least Frequently Used) to manage cache memory.

// 3. **Cache Coherence:**
//    - **Invalidate Cache:** When the underlying data changes, invalidate the stale cache entries.
//    - **Broadcast Updates:** Broadcast updates to all cache nodes when data is modified to maintain coherence.

// 4. **Cache Sharding:**
//    - **Shard Management:** Divide the cache into shards, each managed by a different cache node.
//    - **Dynamic Sharding:** Add or remove nodes dynamically and redistribute shards accordingly.

// 5. **Data Access Layer:**
//    - **Cache Lookup:** Check if the requested data is in the cache before querying the database.
//    - **Fallback to Database:** If a cache miss occurs, fetch data from the database and update the cache.

// 6. **Cache Invalidation:**
//    - **Time-Based Invalidation:** Set TTL (Time-to-Live) for cache entries, after which they are automatically invalidated.
//    - **Event-Based Invalidation:** Invalidate cache entries based on events like data updates, deletions, etc.

// 7. **Fault Tolerance:**
//    - **Redundancy:** Store redundant copies of cached data to handle node failures.
//    - **Failure Detection:** Implement mechanisms to detect node failures and reroute traffic to healthy nodes.

// 8. **Scalability:**
//    - **Horizontal Scaling:** Add more cache nodes to handle increased load.
//    - **Load Balancing:** Distribute requests evenly across cache nodes to avoid bottlenecks.

// 9. **Security:**
//    - **Access Control:** Implement authentication and authorization mechanisms to protect cached data.
//    - **Data Encryption:** Encrypt sensitive data stored in the cache to prevent unauthorized access.

// 10. **Monitoring and Logging:**
//    - **Cache Metrics:** Monitor cache hit/miss rates, latency, and memory usage.
//    - **Alerting:** Set up alerts for anomalies like high miss rates or node failures.
