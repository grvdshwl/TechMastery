//* 	Extra Characters in a String
//* Trie Solution

class TrieNode {
  constructor() {
    this.children = new Map();
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
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.isEndOfWord = true;
  }
}

const minExtraChar = (s, dictionary) => {
  const words = new Set(dictionary);
  const dp = {};
  const n = s.length;
  const trie = new Trie();

  for (let word of dictionary) {
    trie.insert(word);
  }

  const dfs = (i) => {
    if (i === n) {
      return 0;
    }
    if (i in dp) {
      return dp[i];
    }

    let result = 1 + dfs(i + 1);

    let current = trie.root;
    for (let j = i; j < n; j++) {
      if (!current.children.has(s[j])) {
        break;
      }

      current = current.children.get(s[j]);

      if (current.isEndOfWord) {
        result = Math.min(result, dfs(j + 1));
      }
    }
    dp[i] = result;

    return result;
  };

  return dfs(0);
};
