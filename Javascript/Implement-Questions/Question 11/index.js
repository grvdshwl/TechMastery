function mergeObjects(obj1, obj2) {
  let mergedObj = {};

  for (let key in obj1) {
    mergedObj[key] = obj1[key];
  }

  for (let key in obj2) {
    // If the key already exists in mergedObj, and it's an object, merge recursively
    if (
      mergedObj.hasOwnProperty(key) &&
      typeof obj2[key] === "object" &&
      !Array.isArray(obj2[key])
    ) {
      mergedObj[key] = { ...mergedObj[key], ...obj2[key] };
    } else {
      mergedObj[key] = obj2[key];
    }
  }

  return mergedObj;
}

// Example usage:
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };
const merged = mergeObjects(obj1, obj2);
console.log(merged);
