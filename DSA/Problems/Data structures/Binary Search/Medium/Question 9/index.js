//* Allocate Minimum Number of Pages from N books to M students --done

function countStudents(arr, maxPagesPerStudent) {
  let students = 1;
  let pagesAllocated = 0;

  for (const pages of arr) {
    if (pagesAllocated + pages <= maxPagesPerStudent) {
      pagesAllocated += pages;
    } else {
      students++;
      pagesAllocated = pages;
    }
  }

  return students;
}

function findPages(arr, n, m) {
  if (m > n) return -1;

  let left = Math.max(...arr);
  let right = arr.reduce((sum, pages) => sum + pages, 0);
  let result = Infinity;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let requiredStudents = countStudents(arr, mid);

    if (requiredStudents > m) {
      left = mid + 1;
    } else {
      result = Math.min(result, mid);
      right = mid - 1;
    }
  }

  return result;
}

var arr = [12, 34, 67, 90];
var n = 4;
var m = 2;
var ans = findPages(arr, n, m);
console.log("The answer is: " + ans);
