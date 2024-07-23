// K Closest Number
var findClosestElements = function (arr, k, x) {
  let left = 0;
  let right = arr.length - 1;

  while (right - left + 1 > k) {
    const calcLeft = Math.abs(arr[left] - x);
    const calcRight = Math.abs(arr[right] - x);

    if (calcLeft < calcRight || calcLeft === calcRight) {
      right--;
    } else {
      left++;
    }
  }

  return arr.slice(left, right + 1);
};
