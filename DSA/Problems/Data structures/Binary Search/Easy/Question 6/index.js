//* Sqrt(x) ---done

var mySqrt = function (x) {
  if (x < 2) return x;
  let left = 0,
    right = x;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (mid * mid <= x && x < (mid + 1) * (mid + 1)) {
      return mid;
    } else if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
