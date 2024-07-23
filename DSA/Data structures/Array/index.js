//* Array
// An array is a versatile data structure capable of holding a collection of values.
// They are capable of containing a mix of different data types, allowing storage
// of strings, booleans, numbers, or even objects within the same array.

// Arrays in JavaScript are resizable, meaning you don't need to specify their size
// upon creation. They follow zero-based indexing, where the first element is at index 0,
// and maintain the order of insertion.

// Additionally, arrays are iterable, enabling their use with 'for...of' loops,
// facilitating easy traversal and manipulation of array elements.

const arr = [1, 2, 3];
arr.push(4);
arr.unshift(0);
arr.pop();
arr.shift();

for (const item of arr) {
  console.log(item);
}
