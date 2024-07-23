const quickSort = (array) => {
  const length = array.length;

  if (length < 2) {
    return array;
  }
  const pivot = array[length - 1];
  const leftArray = [];
  const rightArray = [];

  for (let i = 0; i < length - 1; i++) {
    let element = array[i];
    if (element > pivot) {
      leftArray.push(element);
    } else {
      rightArray.push(element);
    }
  }
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
};

const arr = [-6, 20, 8, -2, 4];
const result = quickSort(arr);

console.log(result);
