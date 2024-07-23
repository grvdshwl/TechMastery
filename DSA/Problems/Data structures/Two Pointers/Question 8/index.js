//* Array With Elements Not Equal to Average of Neighbors

var rearrangeArray = function (nums) {
  nums.sort((a, b) => a - b);

  let array = [];
  let left = 0;
  let right = nums.length - 1;
  while (nums.length !== array.length) {
    array.push(nums[left]);
    left++;

    if (nums.length !== array.length) {
      array.push(nums[right]);
      right--;
    }
  }

  return array;
};
