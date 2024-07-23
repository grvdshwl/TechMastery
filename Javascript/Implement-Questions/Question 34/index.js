//* Object.assign
function customAssign(target, ...sources) {
  if (target === null || target === undefined) {
    throw new TypeError("Cannot convert undefined or null to object");
  }

  const to = Object(target);

  for (const source of sources) {
    if (source !== null && source !== undefined) {
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          to[key] = source[key];
        }
      }
    }
  }

  return to;
}

// Example usage:
const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { c: 5, d: 6 };

const result = customAssign(target, source1, source2);
console.log(result); // Output: { a: 1, b: 3, c: 5, d: 6 }
