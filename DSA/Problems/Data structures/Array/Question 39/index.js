//* sort a string alphabetically --done
function sortAlphabetically(input) {
  const key = new Array(26).fill(0);
  let result = "";
  for (let i = 0; i < input.length; i++) {
    let index = input.charCodeAt(i) - "a".charCodeAt(0);
    key[index]++;
  }

  for (let i = 0; i < key.length; i++) {
    for (let j = 0; j < key[i]; j++) {
      result += String.fromCharCode("a".charCodeAt(0) + i);
    }
  }

  return result;
}

const result = sortAlphabetically("leetcode");
console.log(result);
