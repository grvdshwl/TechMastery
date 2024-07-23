//*  Implement a function that determines if two values are deep equal.

function deepEqual(value1, value2) {
  if (typeof value1 !== typeof value2) {
    return false;
  }

  // If the values are objects
  if (
    typeof value1 === "object" &&
    value1 !== null &&
    typeof value2 === "object" &&
    value2 !== null
  ) {
    const keys1 = Object.keys(value1);
    const keys2 = Object.keys(value2);

    // Check if the number of keys is different
    if (keys1.length !== keys2.length) {
      return false;
    }

    // Check each key and value recursively
    for (let key of keys1) {
      if (!keys2.includes(key) || !deepEqual(value1[key], value2[key])) {
        return false;
      }
    }

    return true;
  }

  return value1 === value2;
}

// Example usage:
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = { a: 1, b: { c: 3 } };

console.log(deepEqual(obj1, obj2)); // Output: true
console.log(deepEqual(obj1, obj3)); // Output: false
