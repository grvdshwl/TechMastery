// Given an unsorted array arr[] of size N having both negative and positive integers. ---done
//  The task is place all negative element at the end of array without changing the
//  order of positive element and negative element.

// You don't need to read input or print anything. Your task is to complete
// the function segregateElements() which takes the array arr[] and its size N
// as inputs and store the answer in the array arr[] itself.

function segregateElements(arr) {
  let temp = [...arr];
  let left = 0;
  for (let i = 0; i < arr.length; i++) {
    if (temp[i] >= 0) {
      arr[left] = temp[i];
      left++;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (temp[i] < 0) {
      arr[left] = temp[i];
      left++;
    }
  }
}
let input = [1, -1, 3, 2, -7, -5, 11, 6];
const result = segregateElements(input);
console.log(input);
