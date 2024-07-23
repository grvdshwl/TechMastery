//* Given Array of size n and a number k, find all elements that
//* appear more than n/k times  ---done

// Input: arr[] = {3, 1, 2, 2, 1, 2, 3, 3}, k = 4
// Output: {2, 3}
// Explanation: Here n/k is 8/4 = 2, therefore 2 appears 3 times
// in the array that is greater than 2 and 3 appears 3 times in the
// array that is greater than 2

// Input: arr[] = {9, 8, 7, 9, 2, 9, 7}, k = 3
// Output: {9}
// Explanation: Here n/k is 7/3 = 2, therefore 9 appears 3 times in
//  the array that is greater than 2.

const findElementsWithFrequencyGreaterThanK = (array, k) => {
  const n = array.length;
  const frequency = Math.floor(n / k);
  const result = [];
  const frequencyMap = {};

  for (const item of array) {
    frequencyMap[item] = (frequencyMap[item] || 0) + 1;

    if (frequencyMap[item] > frequency) {
      result.push(item);
    }
  }

  return result;
};

const inputArray = [3, 1, 2, 2, 1, 2, 3, 3];
const kValue = 4;
const result = findElementsWithFrequencyGreaterThanK(inputArray, kValue);
console.log(result);
