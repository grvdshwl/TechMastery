//* Aggregate array of objects on the given keys (Medium).

function aggregateArrayObjects(arr, keys) {
  return arr.reduce((acc, obj) => {
    // Generate a unique key based on the values of the specified keys
    const key = keys.map((key) => obj[key]).join("_");

    // Initialize an empty object in the accumulator if it doesn't exist
    acc[key] = acc[key] || {};
    // Merge the current object into the accumulator object
    Object.assign(acc[key], obj);

    return acc;
  }, {});
}

// Example usage:
const data = [
  { id: 1, name: "John", age: 30, city: "New York" },
  { id: 2, name: "Alice", age: 25, city: "Los Angeles" },
  { id: 3, name: "Bob", age: 35, city: "New York" },
];

// Aggregate on keys 'city' and 'age'
const aggregatedData = aggregateArrayObjects(data, ["city", "age"]);
console.log(aggregatedData);
