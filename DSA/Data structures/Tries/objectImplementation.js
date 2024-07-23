class TrieNode {
  constructor() {
    this.children = {}; // A mapping of characters to TrieNodes
    this.isEndOfWord = false; // Indicates if the node represents the end of a word
    this.childCount = 0;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(); // The root node of the Trie
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
        node.childCount++;
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  delete(word) {
    this._deleteHelper(this.root, word, 0);
  }

  _deleteHelper(current, word, index) {
    if (index === word.length) {
      if (current.isEndOfWord) {
        current.isEndOfWord = false;
      }
      return Object.keys(current.children).length === 0;
    }

    const char = word[index];
    if (!current.children[char]) {
      return false;
    }

    const shouldDeleteCurrentNode = this._deleteHelper(
      current.children[char],
      word,
      index + 1
    );

    if (shouldDeleteCurrentNode) {
      delete current.children[char];
      node.childCount--;
      return Object.keys(current.children).length === 0;
    }

    return false;
  }

  startsWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }

  commonPrefix() {
    let node = this.root;
    let result = "";
    let hasEnded = false;
    while (!hasEnded) {
      if (node.childCount === 1 && !node.isEndOfWord) {
        const char = Object.keys(node.children)[0];
        result += char;
        node = node.children[char];
      } else {
        hasEnded = true;
      }
    }
    return result;
  }
}
module.exports = Trie;
// Example Usage:
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("application");

console.log(trie.search("apple")); // Output: true
console.log(trie.search("app")); // Output: true
console.log(trie.search("ap")); // Output: false
console.log(trie.startsWith("ap")); // Output: true
console.log(trie.commonPrefix());
// console.log(trie.searchWords("app"));
