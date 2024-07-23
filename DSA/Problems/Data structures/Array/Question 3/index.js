//* Find the "Kth" max and min element of an array -done

function findKthMaxMin(arr, k) {
  if (arr.length === 0 || k < 1 || k > arr.length) {
    return null; // If the array is empty or k is out of range, return null
  }

  // Sort the array
  arr.sort((a, b) => a - b);

  const kthMin = arr[k - 1]; // Kth minimum
  const kthMax = arr[arr.length - k]; // Kth maximum

  return { kthMin, kthMax };
}

// Example array
const myArray = [3, 7, 1, 9, 4, 5, 8];
const k = 3; // Finding the 3rd max and min elements

// Call the function to find Kth max and min
const { kthMin, kthMax } = findKthMaxMin(myArray, k);
console.log(`The ${k}th minimum element is: ${kthMin}`);
console.log(`The ${k}th maximum element is: ${kthMax}`);
