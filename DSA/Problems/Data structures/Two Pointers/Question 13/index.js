//* Find minimum number of merge operations to make an array palindrome --done
//* Time complexity -- O(n) && Space complexity --- O(1)
// Input : arr[] = {15, 4, 15}
// Output : 0
// Array is already a palindrome. So we
// do not need any merge operation.
// Input : arr[] = {11, 14, 15, 99}
// Output : 3
// We need to merge all elements to make
// a palindrome.

const input = [1, 4, 5, 9, 1];
const minimumMoves = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  let minMoves = 0;
  while (left < right) {
    if (nums[left] === nums[right]) {
      left++;
      right--;
    } else if (nums[left] < nums[right]) {
      left++;
      nums[left] += nums[left - 1];
      minMoves++;
    } else {
      right--;
      nums[right] += nums[right + 1];
      minMoves++;
    }
  }

  return minMoves;
};

const result = minimumMoves(input);

console.log(result);
