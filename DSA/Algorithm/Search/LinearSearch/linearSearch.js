// ===============================
// * Linear Search
// ===============================
// Solution - Time Complexity: O(n)

// Steps:
// - Loop through the array.
// - If the target is found, return its index.
// - If the entire array is looped and the element is not found, return -1.

const arr = [-5, 2, 10, 4, 6];

const linearSearch = (arr, target) => {
  const targetArray = [...arr];

  for (let i = 0; i < targetArray.length; i++) {
    if (targetArray[i] === target) {
      return i;
    } else {
      continue;
    }
  }
  return -1;
};

let resultOne = linearSearch(arr, 10);
let resultTwo = linearSearch(arr, 6);
let resultThree = linearSearch(arr, 20);

console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);
