//* Longest Common Prefix in a given set of strings (using Trie)

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

  commonPrefix(strs) {
    if (strs.length === 0) {
      return "";
    }

    strs.forEach((word) => this.insert(word));

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
var longestCommonPrefix = function (strs) {
  const trie = new Trie();

  const result = trie.commonPrefix(strs);

  return result;
};
