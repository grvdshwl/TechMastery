//* Trie Implementation
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
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
    }

    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }

    return node.isEndOfWord;
  }

  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }

    return true;
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
      index + 1,
    );

    if (shouldDeleteCurrentNode) {
      delete current.children[char];
      return Object.keys(current.children).length === 0;
    }

    return false;
  }
  commonPrefix() {
    let prefix = "";

    let node = this.root;

    while (Object.keys(node.children).length === 1 && !node.isEndOfWord) {
      let char = Object.keys(node.children)[0];

      prefix += char;

      node = node.children[char];
    }

    return prefix;
  }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("application");
console.log(trie.search("apple")); // Output: true
console.log(trie.search("app")); // Output: true
console.log(trie.search("ap")); // Output: false
console.log(trie.startsWith("ap")); // Output: true
console.log(trie.commonPrefix());
