//* 	Repeated DNA Sequences ---done

// Example 1:

// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]

// Example 2:

// Input: s = "AAAAAAAAAAAAA"
// Output: ["AAAAAAAAAA"]

var findRepeatedDnaSequences = function (s) {
  let left = 0;
  let right = 9;
  let n = s.length;

  let map = {};
  let set = new Set();

  while (right < n) {
    let str = s.slice(left, right + 1);
    if (map[str]) {
      set.add(str);
    } else {
      map[str] = true;
    }
    left++;
    right++;
  }

  return [...set];
};
