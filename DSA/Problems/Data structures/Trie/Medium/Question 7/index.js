//* Find the shortest unique prefix for every word in an array
class TrieNode {
  constructor() {
    this.children = {};
    this.freq = 0;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
      node.freq++;
    }
  }

  findShortestUniquePrefix(word) {
    let node = this.root;
    let prefix = "";
    for (let char of word) {
      prefix += char;
      if (node.children[char].freq === 1) {
        return prefix;
      }
      node = node.children[char];
    }
    return word; // If the entire word is a prefix
  }
}

function findShortestUniquePrefixes(arr) {
  const trie = new Trie();
  for (let word of arr) {
    trie.insert(word);
  }

  const result = [];
  for (let word of arr) {
    result.push(trie.findShortestUniquePrefix(word));
  }
  return result;
}

// Example usage:
const arr = ["zebra", "dog", "duck", "dove"];
console.log(findShortestUniquePrefixes(arr)); // Output: ['z', 'dog', 'du', 'dov']
