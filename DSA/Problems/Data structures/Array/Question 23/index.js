//* Find All Numbers Disappeared in An Array -done

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// Example 2:

// Input: nums = [1,1]
// Output: [2]

function findDisappearedNumbers(nums) {
  const result = [];

  // Mark each number's corresponding index as negative
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }

  // Check which indices were not marked as negative
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
}

// Example 1
const nums1 = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums1)); // Output: [5, 6]

// Example 2
const nums2 = [1, 1];
console.log(findDisappearedNumbers(nums2)); // Output: [2]
