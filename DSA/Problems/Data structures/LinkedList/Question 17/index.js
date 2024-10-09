//* 	LRU Cache
//* https://neetcode.io/problems/lru-cache
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();

    // Dummy nodes to represent the bounds
    this.left = new Node(null, null); // LRU
    this.right = new Node(null, null); // MRU

    this.left.next = this.right;
    this.right.prev = this.left;
  }

  // Remove node from the doubly linked list
  remove(node) {
    let next = node.next;
    let prev = node.prev;
    prev.next = next;
    next.prev = prev;
  }

  // Insert node at the most recent position (before the right dummy node)
  insert(node) {
    let prev = this.right.prev;
    let next = this.right;

    prev.next = node;
    node.next = next;
    node.prev = prev;
    next.prev = node;
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }

    const node = this.cache.get(key);
    this.remove(node);
    this.insert(node);
    return node.value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      // Remove the old node
      const oldNode = this.cache.get(key);
      this.remove(oldNode);
    }

    // Insert the new node
    let newNode = new Node(key, value);
    this.cache.set(key, newNode);
    this.insert(newNode);

    if (this.cache.size > this.capacity) {
      // Remove the LRU node
      const lru = this.left.next;
      this.remove(lru);
      this.cache.delete(lru.key);
    }
  }
}

// Example usage:
const lRUCache = new LRUCache(2);
lRUCache.put(1, 10); // cache: {1=10}
console.log(lRUCache.get(1)); // Output: 10
lRUCache.put(2, 20); // cache: {1=10, 2=20}
lRUCache.put(3, 30); // cache: {2=20, 3=30}, key=1 was evicted
console.log(lRUCache.get(2)); // Output: 20
console.log(lRUCache.get(1)); // Output: -1 (not found)
