// ===============================
// * Tries (Prefix Trees)
// ===============================
// Tries, also known as Prefix Trees, are tree-like data structures used for storing
// and retrieving strings efficiently. They excel at handling dictionaries, search
// engines, and autocomplete systems.

// -------------------------------
// * Definition
// -------------------------------
// A Trie is a tree-like structure made of nodes that represent characters.
// Each path from the root to a node represents a sequence of characters.
// It's commonly used to store and search for strings by their prefixes.

// -------------------------------
// * Simple Explanation
// -------------------------------
// Imagine a Trie like an organized directory structure. Each level represents
// a character, and complete words are formed by traversing paths from the root
// to specific nodes. This structure allows for quick lookup and retrieval of words
// based on their prefixes.

//* Implementation
// 1. Dictionary and Spell Checkers
// 2. Auto-Completion and Search Engines

class TrieNode {
  constructor() {
    this.children = new Map(); // A map of characters to TrieNodes
    this.isEndOfWord = false; // Indicates if the node represents the end of a word
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(); // The root node of the Trie
  }

  // Insert a word into the Trie
  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.isEndOfWord = true;
  }

  // Search for a word in the Trie
  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return node.isEndOfWord;
  }

  // Delete a word from the Trie
  delete(word) {
    this._deleteHelper(this.root, word, 0);
  }

  _deleteHelper(current, word, index) {
    if (index === word.length) {
      if (current.isEndOfWord) {
        current.isEndOfWord = false;
      }
      return current.children.size === 0;
    }

    const char = word[index];
    if (!current.children.has(char)) {
      return false;
    }

    const nextNode = current.children.get(char);
    const shouldDeleteCurrentNode = this._deleteHelper(
      nextNode,
      word,
      index + 1
    );

    if (shouldDeleteCurrentNode) {
      current.children.delete(char);
      return current.children.size === 0;
    }

    return false;
  }

  // Check if the Trie contains words with a given prefix
  startsWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return true;
  }

  commonPrefix() {
    let node = this.root;
    let result = "";
    let hasEnded = false;
    while (!hasEnded) {
      if (node.children.size === 1 && !node.isEndOfWord) {
        const char = [...node.children.keys()][0];
        result += char;
        node = node.children.get(char);
      } else {
        hasEnded = true;
      }
    }
    return result;
  }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("app");

console.log(trie.search("apple")); // Output: true
console.log(trie.search("app")); // Output: true
console.log(trie.search("ap")); // Output: false
console.log(trie.startsWith("ap")); // Output: true
console.log(trie.commonPrefix());
