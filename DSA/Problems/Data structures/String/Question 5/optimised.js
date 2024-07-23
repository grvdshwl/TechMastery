//* Group Anangram

//* Time complexity ---> O(n*m)

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];

const groupAnagrams = function (strs) {
  const anagramsMap = {};

  for (let str of strs) {
    const charCount = Array(26).fill(0); // Assuming lowercase English letters

    for (let char of str) {
      const charIndex = char.charCodeAt(0) - "a".charCodeAt(0);
      charCount[charIndex]++;
    }

    const key = charCount.join(",");

    if (!anagramsMap[key]) {
      anagramsMap[key] = [];
    }

    anagramsMap[key].push(str);
  }

  return Object.values(anagramsMap);
};
const result = groupAnagrams(input);
console.log(result);
