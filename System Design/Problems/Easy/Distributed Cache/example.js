// Simulated Distributed Cache Node
class CacheNode {
  constructor() {
    this.store = new Map(); // In-memory key-value store
  }

  // Get data from the cache
  get(key) {
    return this.store.get(key);
  }

  // Set data in the cache
  set(key, value) {
    this.store.set(key, { value, timestamp: Date.now() });
  }

  // Delete data from the cache
  delete(key) {
    this.store.delete(key);
  }

  // Simulate TTL (Time-to-Live) expiration check
  isExpired(key, ttl) {
    const entry = this.store.get(key);
    if (!entry) return true;
    return Date.now() - entry.timestamp > ttl;
  }
}

// Distributed Cache Manager
class DistributedCache {
  constructor(nodes) {
    this.nodes = nodes; // Array of CacheNode instances
  }

  // Simple hash function to determine the node
  hash(key) {
    return key.charCodeAt(0) % this.nodes.length;
  }

  // Get data from the distributed cache
  get(key, ttl) {
    const nodeIndex = this.hash(key);
    const node = this.nodes[nodeIndex];
    if (node.isExpired(key, ttl)) {
      console.log("Cache Miss:", key);
      return null;
    }
    console.log("Cache Hit:", key);
    return node.get(key).value;
  }

  // Set data in the distributed cache
  set(key, value) {
    const nodeIndex = this.hash(key);
    const node = this.nodes[nodeIndex];
    node.set(key, value);
    console.log("Data Cached:", key);
  }

  // Invalidate cache entry
  invalidate(key) {
    const nodeIndex = this.hash(key);
    const node = this.nodes[nodeIndex];
    node.delete(key);
    console.log("Cache Invalidated:", key);
  }
}

// Example usage:

// Create cache nodes
const node1 = new CacheNode();
const node2 = new CacheNode();
const node3 = new CacheNode();

// Create distributed cache with nodes
const distributedCache = new DistributedCache([node1, node2, node3]);

// Set data in cache
distributedCache.set("user:123", { name: "Alice", age: 30 });
distributedCache.set("user:456", { name: "Bob", age: 25 });

// Get data from cache
console.log(distributedCache.get("user:123", 5000)); // Cache hit
console.log(distributedCache.get("user:789", 5000)); // Cache miss

// Invalidate cache
distributedCache.invalidate("user:123");
console.log(distributedCache.get("user:123", 5000)); // Cache miss after invalidation
