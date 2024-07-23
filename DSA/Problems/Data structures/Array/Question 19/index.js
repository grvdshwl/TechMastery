//* find common elements In 3 sorted arrays ---> done

const input1 = [1, 5, 10, 20, 40, 80, 20];
const input2 = [6, 7, 20, 80, 100, 20];
const input3 = [3, 4, 15, 20, 30, 70, 80, 120, 20];

//* Time complexity O(n+m)

function findIntersectionWithDuplicates(arr1, arr2) {
  const count = new Map();
  const intersection = [];

  for (let item of arr1) {
    count.set(item, (count.get(item) || 0) + 1);
  }

  for (let item of arr2) {
    if (count.has(item) && count.get(item) > 0) {
      intersection.push(item);
      count.set(item, count.get(item) - 1);
    }
  }

  return intersection;
}

const commonElements = (array1, array2, array3) => {
  const firstIntersection = findIntersectionWithDuplicates(array1, array2);

  const answer = findIntersectionWithDuplicates(firstIntersection, array3);
  return answer;
};

const result = commonElements(input1, input2, input3);

console.log(result);
