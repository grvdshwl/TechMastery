//* 4 Sum
//* Given an array nums of n integers, return an array of all the unique quadruplets
//*  [nums[a], nums[b], nums[c], nums[d]] such that:

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

let nums = [2, 2, 2, 2, 2];
let target = 8;

var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b); // Sort the array

  let result = [];
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    // Skip duplicates for the first number
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < n; j++) {
      // Skip duplicates for the second number
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;

          // Skip duplicates for the third number
          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }

          // Skip duplicates for the fourth number
          while (left < right && nums[right] === nums[right + 1]) {
            right--;
          }
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
};

const answer = fourSum(nums, target);
console.log(answer);
