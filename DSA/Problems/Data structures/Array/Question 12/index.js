//* Merge 2 sorted arrays without using Extra space. Important
//* Time complexity -- O(n*m) and space complexity -O(1)
const mergeTwoSortedArray = (array1, array2) => {
  let i = 0;
  let j = 0;
  while (i < array1.length) {
    if (array1[i] > array2[j]) {
      let temp = array1[i];
      array1[i] = array2[j];
      array2[j] = temp;
      fixSecondArray(array2);
    }
    i++;
  }

  return [array1, array2];
};

const fixSecondArray = (array) => {
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      [array[i - 1], array[i]] = [array[i], array[i - 1]];
    }
  }
};

let array1 = [4, 5, 7];
let array2 = [0, 2, 6, 8, 9];

const result = mergeTwoSortedArray(array1, array2);

console.log(result);
