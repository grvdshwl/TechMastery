//* find all pairs on integer array whose sum is equal to given number --->done
//* Time complexity ---> O(n)
function getPairsCount(arr, k) {
  let seen = {};
  let count = 0;

  for (let item of arr) {
    let diff = k - item;

    if (seen[diff]) {
      count += seen[diff];
    }

    seen[item] = (seen[item] || 0) + 1;
  }

  return count;
}

// Test cases
const testCases = [
  { arr: [1, 5, 7, -1, 5], k: 6 },
  { arr: [1, 1, 1, 1], k: 2 },
];

for (let testCase of testCases) {
  const { arr, k } = testCase;
  const result = getPairsCount(arr, k);
  console.log(`Pairs count : ${result}`);
}
