//* Word Search II
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

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
}

var findWords = function (board, words) {
  let ROWS = board.length;
  let COLS = board[0].length;

  let visited = new Set();

  const trie = new Trie();
  const root = trie.root;
  for (let word of words) {
    trie.insert(word);
  }

  const result = new Set();

  function dfs(r, c, node, word) {
    if (
      r < 0 ||
      c < 0 ||
      r >= ROWS ||
      c >= COLS ||
      visited.has(`${r}-${c}`) ||
      !node.children[board[r][c]]
    ) {
      return;
    }

    word += board[r][c];
    node = node.children[board[r][c]];

    if (node.isEndOfWord) {
      result.add(word);
      trie.delete(word);
    }

    visited.add(`${r}-${c}`);

    dfs(r + 1, c, node, word);
    dfs(r - 1, c, node, word);
    dfs(r, c + 1, node, word);
    dfs(r, c - 1, node, word);

    visited.delete(`${r}-${c}`);
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      dfs(r, c, root, "");
    }
  }

  return [...result];
};
