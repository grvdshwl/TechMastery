//* Merge 2 sorted arrays with using Extra space.
//* Time complexity -- O(n+m) and space complexity -O(n) -done

const mergeTwoSortedArray = (array1, array2) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    result.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    result.push(array2[j]);
    j++;
  }
  return result;
};

let array1 = [1, 3, 5, 7];
let array2 = [0, 2, 6, 8, 9];

const result = mergeTwoSortedArray(array1, array2);

console.log(result);
