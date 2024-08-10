class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // Hash Map for O(1) access
    this.order = new DoublyLinkedList(); // Doubly Linked List to track access order
  }

  // Retrieve an item from the cache
  get(key) {
    if (!this.cache.has(key)) {
      // Key not found in cache
      return -1;
    }
    // Move the accessed item to the front of the list (most recently used)
    const node = this.cache.get(key);
    this.order.moveToFront(node);
    return node.value;
  }

  // Add or update an item in the cache
  put(key, value) {
    if (this.cache.has(key)) {
      // Update the existing item
      const node = this.cache.get(key);
      node.value = value;
      this.order.moveToFront(node);
    } else {
      // Add a new item
      if (this.cache.size >= this.capacity) {
        // Evict the least recently used item
        const tail = this.order.removeTail();
        this.cache.delete(tail.key);
      }
      // Insert the new item
      const newNode = this.order.addToFront(key, value);
      this.cache.set(key, newNode);
    }
  }
}

// Doubly Linked List Node
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Doubly Linked List for LRU Cache
class DoublyLinkedList {
  constructor() {
    this.head = new Node(null, null); // Dummy head node
    this.tail = new Node(null, null); // Dummy tail node
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // Add a node to the front of the list
  addToFront(key, value) {
    const newNode = new Node(key, value);
    newNode.next = this.head.next;
    newNode.prev = this.head;
    this.head.next.prev = newNode;
    this.head.next = newNode;
    return newNode;
  }

  // Remove the node from the end of the list
  removeTail() {
    const tailNode = this.tail.prev;
    this.removeNode(tailNode);
    return tailNode;
  }

  // Move a node to the front of the list
  moveToFront(node) {
    this.removeNode(node);
    this.addToFront(node.key, node.value);
  }

  // Remove a node from the list
  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
}

// Example usage:
const lruCache = new LRUCache(2);

lruCache.put(1, 1);
lruCache.put(2, 2);
console.log(lruCache.get(1)); // returns 1
lruCache.put(3, 3); // evicts key 2
console.log(lruCache.get(2)); // returns -1 (not found)
lruCache.put(4, 4); // evicts key 1
console.log(lruCache.get(1)); // returns -1 (not found)
console.log(lruCache.get(3)); // returns 3
console.log(lruCache.get(4)); // returns 4
