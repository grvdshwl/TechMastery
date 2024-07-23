const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let numberToInsert = array[i];
    let j = i - 1;

    while (j >= 0 && arr[j] < numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    array[j + 1] = numberToInsert;
  }
};

const arr = [-6, 20, 8, -2, 4];
let result = insertionSort(arr);

console.log(arr);
