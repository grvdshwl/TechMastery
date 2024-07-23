//*   Implement a function to recursively transform values.

function recursiveTransform(obj, transformer) {
  if (typeof obj !== "object" || obj === null) {
    // Base case: If the value is not an object, apply the transformation function and return it
    return transformer(obj);
  }

  // If the value is an object, iterate through its properties
  const transformedObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    // Recursively call the function for each property value
    transformedObj[key] = recursiveTransform(obj[key], transformer);
  }
  return transformedObj;
}

// Example usage:
const obj = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4, { e: 5 }],
  },
};

// Define a transformation function (e.g., adding 10 to each value)
function addTen(value) {
  if (typeof value === "number") {
    return value + 10;
  }
  return value;
}

const transformedObj = recursiveTransform(obj, addTen);
console.log(transformedObj);
