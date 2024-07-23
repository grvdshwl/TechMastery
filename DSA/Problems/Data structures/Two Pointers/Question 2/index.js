/*
Title: Two Sum II - Input Array is Sorted --- done
Time Complexity: O(n)
*/

var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[right] + numbers[left];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};

// Test Case:

// Test Case 1
let numbers1 = [2, 7, 11, 15];
let target1 = 9;
console.log(twoSum(numbers1, target1)); // Output: [1, 2]

// Test Case 2
let numbers2 = [3, 6, 8, 11, 15];
let target2 = 14;
console.log(twoSum(numbers2, target2)); // Output: [1, 4]

// Test Case 3
let numbers3 = [-1, 0, 3, 5, 9, 12];
let target3 = 8;
console.log(twoSum(numbers3, target3)); // Output: [3, 4]
