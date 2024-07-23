//* Custom typeof operator implementation
function customTypeOf(value) {
  if (value === null) {
    return "null";
  }
  // Use constructors to determine the type
  const type = Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

  if (type === "number" && isNaN(value)) {
    return "nan";
  }

  return type;
}

// Example usage:
console.log(customTypeOf(5)); // Output: 'number'
console.log(customTypeOf("Hello")); // Output: 'string'
console.log(customTypeOf(true)); // Output: 'boolean'
console.log(customTypeOf(null)); // Output: 'null'
console.log(customTypeOf([])); // Output: 'array'
console.log(customTypeOf({})); // Output: 'object'
console.log(customTypeOf(new Date())); // Output: 'date'
console.log(customTypeOf(NaN)); // Output: 'nan'
