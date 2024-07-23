//*  Implement a function that performs a deep copy of a value,
//* but also handles circular references.

function deepCopyWithCircular(obj, clonedObjects = {}) {
  // Handle non-object types
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Check if obj has already been cloned
  if (clonedObjects[obj]) {
    // If yes, return the cloned copy
    return clonedObjects[obj];
  }

  // Create a new copy
  const copy = Array.isArray(obj) ? [] : {};

  // Save copy to clonedObjects
  clonedObjects[obj] = copy;

  // Copy properties recursively
  for (let key in obj) {
    copy[key] = deepCopyWithCircular(obj[key], clonedObjects);
  }

  return copy;
}

// Example usage
const obj = { a: 1, b: { c: 2 } };
obj.circularRef = obj; // Adding circular reference

const copiedObj = deepCopyWithCircular(obj);
console.log(copiedObj);
