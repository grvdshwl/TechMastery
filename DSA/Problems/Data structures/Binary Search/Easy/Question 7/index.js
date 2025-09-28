//* Single Element in a Sorted Array -done

var singleNonDuplicate = function (nums) {
  let n = nums.length;
  let left = 0;
  let right = n - 1;

  if (nums[0] !== nums[1]) {
    return nums[0];
  }

  if (nums[n - 1] !== nums[n - 2]) {
    return nums[n - 1];
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid - 1] !== nums[mid] && nums[mid + 1] !== nums[mid]) {
      return nums[mid];
    } else if (
      (mid % 2 === 0 && nums[mid] === nums[mid + 1]) ||
      (mid % 2 === 1 && nums[mid - 1] === nums[mid])
    ) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};
