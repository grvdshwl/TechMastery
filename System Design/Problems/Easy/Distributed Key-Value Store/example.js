// Simple In-Memory Key-Value Store

class KeyValueStore {
  constructor() {
    this.store = new Map(); // In-memory storage using a JavaScript Map
  }

  // Set a key-value pair
  set(key, value) {
    this.store.set(key, value);
    console.log(`Set: {${key}: ${value}}`);
  }

  // Get the value for a given key
  get(key) {
    if (this.store.has(key)) {
      console.log(`Get: {${key}: ${this.store.get(key)}}`);
      return this.store.get(key);
    } else {
      console.log(`Key ${key} not found`);
      return null;
    }
  }

  // Delete a key-value pair
  delete(key) {
    if (this.store.delete(key)) {
      console.log(`Deleted key: ${key}`);
    } else {
      console.log(`Key ${key} not found`);
    }
  }

  // Check if a key exists
  has(key) {
    return this.store.has(key);
  }

  // Clear the entire store
  clear() {
    this.store.clear();
    console.log("Store cleared");
  }
}

// Example usage:

const kvStore = new KeyValueStore();

// Set key-value pairs
kvStore.set("name", "Alice");
kvStore.set("age", 30);

// Get values
kvStore.get("name");
kvStore.get("age");
kvStore.get("nonexistentKey");

// Delete a key
kvStore.delete("name");

// Check if key exists
console.log("Has age:", kvStore.has("age"));

// Clear the store
kvStore.clear();
