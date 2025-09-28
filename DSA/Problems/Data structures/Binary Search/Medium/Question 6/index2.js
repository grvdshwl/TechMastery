// Find Peak element II

var findPeakGrid = function (matrix) {
  let n = matrix.length;

  const maxValueIndex = (array) => {
    let max = 0;

    for (let i = 1; i < array.length; i++) {
      if (array[i] > array[max]) {
        max = i;
      }
    }

    return max;
  };

  let left = 0;
  let right = n - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    let colIndex = maxValueIndex(matrix[mid]);

    if (matrix[mid][colIndex] < matrix[mid + 1][colIndex]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return [left, maxValueIndex(matrix[left])];
};
