//* https://neetcode.io/problems/lru-cache
class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();

    // Dummy nodes to represent the bounds
    this.left = new Node(0, 0); // LRU
    this.right = new Node(0, 0); // Most recent

    this.left.next = this.right;
    this.right.prev = this.left;
  }

  // Remove node from the doubly linked list
  remove(node) {
    let prev = node.prev;
    let next = node.next;

    prev.next = next;
    next.prev = prev;
  }

  // Insert node at the most recent position (before the right dummy node)
  insert(node) {
    let prev = this.right.prev;
    let next = this.right;

    prev.next = node;
    node.prev = prev;
    node.next = next;
    next.prev = node;
  }

  get(key) {
    if (this.cache.has(key)) {
      // Move the accessed node to the most recent position
      this.remove(this.cache.get(key));
      this.insert(this.cache.get(key));

      return this.cache.get(key).val;
    }

    return -1; // Key not found
  }

  put(key, value) {
    if (this.cache.has(key)) {
      // Remove the old node
      this.remove(this.cache.get(key));
    }

    // Insert the new node
    let newNode = new Node(key, value);
    this.cache.set(key, newNode);
    this.insert(newNode);

    if (this.cache.size > this.capacity) {
      // Remove the LRU node
      let lru = this.left.next;
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
