//* Group Anangram
//* Time complexity ---> O(n*m*log m)

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];

const groupAnagrams = function (strs) {
  const anagramsMap = {};

  for (let str of strs) {
    const sortedStr = str.split("").sort().join("");

    if (!anagramsMap[sortedStr]) {
      anagramsMap[sortedStr] = [];
    }

    anagramsMap[sortedStr].push(str);
  }

  return Object.values(anagramsMap);
};

const result = groupAnagrams(input);
console.log(result);
