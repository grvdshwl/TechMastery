// ===============================
//* Object vs Map Comparison
// ===============================
// Objects and maps in JavaScript have distinct characteristics:

// -------------------------------
//* Object Characteristics
// -------------------------------
// - Unordered: Objects lack a defined order for their properties.
// - Key Restriction: Keys in objects are limited to strings or symbols.
// - Prototype & Default Keys: Objects have a prototype and default keys that may conflict with user-defined keys.
// - Non-Iterable: Objects are not inherently iterable.
// - Manual Counting: The item count in an object requires manual calculation.
// - Functionality Extension: Objects support attaching functionality along with storing data.

// -------------------------------
//* Map Characteristics
// -------------------------------
// - Ordered: Maps maintain insertion order for their entries.
// - Key Variety: Maps accept keys of any data type.
// - No Default Keys: Maps don't contain predefined keys.
// - Iterable: Maps are iterable data structures.
// - Size Property: Maps have a 'size' property providing the number of entries.
// - Data Storage: Maps are primarily used for data storage, lacking support for added functionality.

const map = new Map([
  ["john", 20],
  ["mac", 21],
  ["larry", 3],
]);
map.set("penny", 25);
map.delete("john");

console.log(map.has("john"));

console.log(map.size);

console.log(map.clear());

for (const [key, value] of map) {
  console.log(key, value);
}
