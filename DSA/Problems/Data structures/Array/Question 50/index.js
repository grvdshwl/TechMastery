// Title: Remove Duplicates from Sorted Array II --done
// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5,
// with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k

function removeDuplicates(nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1] && nums[i + 1] === nums[i + 2]) {
      continue;
    }
    nums[k] = nums[i];
    k++;
  }
  return k;
}

// Test case
const inputArray = [1, 1, 1, 2, 2, 3];
const resultLength = removeDuplicates(inputArray);

console.log(resultLength);
