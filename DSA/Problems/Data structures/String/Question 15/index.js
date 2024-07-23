//* Find all anagram in a string

const getKey = (str) => {
  let key = new Array(26).fill(0);

  for (let i = 0; i < str.length; i++) {
    let index = str.charCodeAt(i) - "a".charCodeAt(0);
    key[index]++;
  }

  return key.join(",");
};
var findAnagrams = function (s, p) {
  let key = getKey(p);

  let result = [];
  let n = p.length;

  let set = new Set(p.split(""));
  for (let i = 0; i < s.length; i++) {
    if (!set.has(s[i])) {
      continue;
    }
    let newKey = getKey(s.slice(i, i + n));

    if (key === newKey) {
      result.push(i);
    }
  }

  return result;
};
