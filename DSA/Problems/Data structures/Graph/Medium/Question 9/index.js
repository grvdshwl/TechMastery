//* 	Open The Lock

var openLock = function (deadends, target) {
    if (deadends.includes("0000")) {
      return -1;
    }
  
    function dfs(pattern) {
      let result = [];
      for (let i = 0; i < 4; i++) {
        let digit1 = String((+pattern[i] + 1) % 10);
        let patternPlus = pattern.slice(0, i) + digit1 + pattern.slice(i + 1);
        result.push(patternPlus);
        let digit2 = String((+pattern[i] - 1 + 10) % 10);
        let patternMinus = pattern.slice(0, i) + digit2 + pattern.slice(i + 1);
        result.push(patternMinus);
      }
  
      return result;
    }
    let queue = [["0000", 0]];
    let visited = new Set(deadends);
  
    while (queue.length) {
      const [pattern, turns] = queue.shift();
      if (pattern === target) {
        return turns;
      }
  
      const children = dfs(pattern);
  
      for (let child of children) {
        if (!visited.has(child)) {
          visited.add(child);
          queue.push([child, turns + 1]);
        }
      }
    }
  
    return -1;
  };
  