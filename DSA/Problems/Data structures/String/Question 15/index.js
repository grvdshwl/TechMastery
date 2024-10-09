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
  const result = [];
  const mainKey = getKey(p);
  const wordLimit = p.length;

  for (let i = 0; i <= s.length - wordLimit; i++) {
    const currentKey = getKey(s.slice(i, i + wordLimit));
    if (currentKey === mainKey) {
      result.push(i);
    }
  }
  return result;
};
