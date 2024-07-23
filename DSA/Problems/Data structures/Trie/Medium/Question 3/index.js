//*Design Add And Search Words Data Structure
class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let cur = this.root;
    for (let char of word) {
      if (!cur.children[char]) {
        cur.children[char] = new TrieNode();
      }
      cur = cur.children[char];
    }
    cur.isEnd = true;
  }

  search(word) {
    function dfs(j, root) {
      let cur = root;
      for (let i = j; i < word.length; i++) {
        let c = word[i];
        if (c === ".") {
          for (let child of Object.values(cur.children)) {
            if (dfs(i + 1, child)) {
              return true;
            }
          }
          return false;
        } else {
          if (!cur.children[c]) return false;
          cur = cur.children[c];
        }
      }
      return cur.isEnd;
    }
    return dfs(0, this.root);
  }
}
