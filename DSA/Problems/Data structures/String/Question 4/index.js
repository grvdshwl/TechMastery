//* Valid Anagram
//* Time complexity ---> O(n)

const input1 = "cat";
const input2 = "act";

const validAnagram = function (string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  const charMap = {};

  for (let char of string1) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  for (let char of string2) {
    if (!charMap[char]) {
      return false;
    } else {
      charMap[char]--;
    }
  }

  return true;
};

const result = validAnagram(input1, input2);
console.log(result);
