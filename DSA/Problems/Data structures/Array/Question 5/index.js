//* Move all the negative elements to one side of the array -done

const array = [-1, 2, 1, -3, -9, 0, -8];
//* Time complexity -- O(n)

const moveNegativeElements = (array) => {
  const left = [];
  const right = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...left, ...right];
};

const result = moveNegativeElements(array);
console.log(result);
