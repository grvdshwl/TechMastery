//* Find Peak Element --done

var findPeakElement = function (nums) {
  let n = nums.length;
  let left = 0;
  let right = n - 1;

  if (nums[0] > nums[1] || n === 1) {
    return 0;
  }

  if (nums[n - 1] > nums[n - 2]) {
    return n - 1;
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      return mid;
    } else if (nums[mid + 1] > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

let nums = [1, 2, 3, 1];

console.log(findPeakElement(nums));
