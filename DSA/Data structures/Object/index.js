// ===============================
//* Object Overview
// ===============================
// An object in JavaScript represents an unordered collection of key-value pairs.

// -------------------------------
//* Object Key-Value Characteristics
// -------------------------------
// - Key Restrictions: Keys must be strings or symbols, while values can be of any data type.
// - Accessing Values: Values are retrieved using corresponding keys, accessible through dot or bracket notation.

// -------------------------------
//* Object Iterability
// -------------------------------
// - Non-Iterable: Objects cannot be directly used with 'for...of' loops due to their non-iterable nature.

const obj = {
  name: "Heisenberg",
  age: 25,
  "key-three": true,
  sayMyName: function () {
    console.log(this.name);
  },
};
obj.hobby = "football";
delete obj.hobby;
