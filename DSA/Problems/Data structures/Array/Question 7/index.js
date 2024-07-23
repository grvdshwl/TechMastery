//* Write a program to cyclically rotate an array by one.  -done

function cyclicallyRotate(arr) {
  const lastElement = arr[arr.length - 1];

  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = lastElement;

  return arr;
}

// Example usage:
const arrayToRotate = [1, 2, 3, 4, 5];
console.log("Original Array:", arrayToRotate);

const rotatedArray = cyclicallyRotate(arrayToRotate);
console.log("Rotated Array:", rotatedArray);
