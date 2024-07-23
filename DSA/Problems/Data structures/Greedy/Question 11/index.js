//* Given an array arr of size n and an integer X.
//* Find if there's a triplet in the array which sums up to the given integer X.
function findTriplet(arr, target) {
  const result = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (sum === target) {
        result.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result.length;
}

// Example usage:
const arr = [1, 4, 45, 6, 10, 8];
const targetSum = 22;

const triplets = findTriplet(arr, targetSum);
console.log("Triplets found:", triplets);
