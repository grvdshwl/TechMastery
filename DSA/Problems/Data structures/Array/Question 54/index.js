// Problem statement --done

// You have been given an array/list 'ARR' of integers. Your task is to find the second largest element present in the 'ARR'.
function printSecondLargest(arr) {
  if (arr.length < 2) {
    console.log("Invalid Input");
    return;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    }
    if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  if (secondLargest === -Infinity) {
    console.log("There is no second largest element");
  } else {
    console.log("The second largest element is " + secondLargest);
  }
}

// Driver program to test the function
let arr = [12, 33, 1, 10, 34, 1];
printSecondLargest(arr);
