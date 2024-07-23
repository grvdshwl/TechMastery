//* Product Of Array Except Self --->done

// Given an integer array nums, return an array answer such that
// answer[i] is equal to the product of all the elements of nums except nums[i].

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1); // Initialize result array with 1s

  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] *= leftProduct;
    leftProduct *= nums[i];
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
}

// Example usage:
const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // Output: [24, 12, 8, 6]
