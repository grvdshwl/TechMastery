// ===============================
//* Hash Table Overview
// ===============================
// A hash table is a data structure that stores key-value pairs. It uses a hash function
// to compute an index where an element can be stored or located quickly.

// -------------------------------
//* Hash Table Definition
// -------------------------------
// A hash table, also known as a hash map, is a data structure that organizes data using
// hash functions. It maps keys to values by transforming keys into unique indices, allowing
// efficient retrieval and storage of data.

// -------------------------------
//* Simple Explanation
// -------------------------------
// Imagine a hash table like a library index system. Books (data) are stored on shelves,
// but instead of remembering the exact location of each book, you use the index (hash)
// to quickly find where a specific book belongs. Similarly, a hash table uses keys to
// compute unique indices, enabling rapid access to stored values based on their keys.

export class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }

  remove(key) {
    let index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(10);
table.set("name", "Bruce");
table.set("age", 25);
table.display();
console.log(table.get("name"));
table.set("mane", "Clark");
table.set("name", "Diana");
console.log(table.get("mane"));
table.remove("name");
table.display();
module.exports = HashTable;
