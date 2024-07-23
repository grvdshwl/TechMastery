//* Find the Union and Intersection of the two sorted arrays. -done
//* Time complexity -- O(n+m)
const findUnionAndIntersection = (array1, array2) => {
  const union = new Set();
  const intersection = new Set();

  for (let i = 0; i < array1.length; i++) {
    union.add(array1[i]);
  }

  for (let j = 0; j < array2.length; j++) {
    if (union.has(array2[j])) {
      intersection.add(array2[j]);
    } else {
      union.add(array2[j]);
    }
  }

  return {
    union: Array.from(union),
    intersection: Array.from(intersection),
  };
};

const array1 = [-2, -1, 4, 0, 4, 8];
const array2 = [0, 3, 4, 5, 4, 4, 9, 10];

const result = findUnionAndIntersection(array1, array2);
console.log(result);
