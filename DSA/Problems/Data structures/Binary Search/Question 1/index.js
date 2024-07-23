//* Search a 2D Matrix ---done

var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  let left = 0;
  let right = m * n - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let r = Math.floor(mid / n);
    let c = mid % n;

    let value = matrix[r][c];
    if (target === value) {
      return true;
    } else if (target < value) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};
let matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
k = 3;

console.log(searchMatrix(matrix, 3));
