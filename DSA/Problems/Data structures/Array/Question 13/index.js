//* Find duplicate in an array of N+1 Integers -done
//* Array will include numbers from 1 to N and length will always be N+1
//* It means there is always one duplicate number

const arr = [1, 2, 3, 2, 4];

const findDuplicate = (array) => {
  for (let i = 0; i < array.length; i++) {
    let index = Math.abs(array[i]);

    if (array[index] < 0) {
      return index;
    }
    array[index] = -array[index];
  }
};

const result = findDuplicate(arr);

console.log(result);
