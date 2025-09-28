//* Find First And Last Position of Element In Sorted Array --done

function binarySearch(nums, target, isLeft) {
  let left = 0;
  let right = nums.length - 1;
  let index = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target === nums[mid]) {
      index = mid;
      if (isLeft) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return index;
}
var searchRange = function (nums, target) {
  const leftIndex = binarySearch(nums, target, true);
  const rightIndex = binarySearch(nums, target, false);

  return [leftIndex, rightIndex];
};
