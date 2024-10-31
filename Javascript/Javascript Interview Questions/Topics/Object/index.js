// 1. JavaScript Objects
// JavaScript objects are collections of key-value pairs, allowing us to group related data.
const person = {
  name: "John",
  age: 30,
  isEmployed: true,
};
console.log(person.name); // Output: "John"

// 2. JSON.stringify and JSON.parse
// `JSON.stringify` converts an object to a JSON string.
// `JSON.parse` converts a JSON string back to an object.
const obj = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // Output: '{"name":"Alice","age":25}'

const parsedObj = JSON.parse(jsonString);
console.log(parsedObj); // Output: { name: "Alice", age: 25 }

// 3. JavaScript Destructuring in Objects
// Destructuring allows us to extract values from objects into individual variables.
const person2 = { name: "Bob", age: 30 };
const { name, age } = person2;
console.log(name); // Output: "Bob"
console.log(age); // Output: 30

// 4. Shallow Copy vs. Deep Copy
// Shallow Copy: Copies only the top-level properties.
// Deep Copy: Copies all nested objects, ensuring no reference to the original.
const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };
shallowCopy.b.c = 3;
console.log(original.b.c); // Output: 3 (affected by change)

const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.c = 4;
console.log(original.b.c); // Output: 3 (not affected by change)

// 5. Function to Deep Clone an Object
// This function creates a deep copy of an object.
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const obj1 = { a: 1, b: { c: 2 } };
const clonedObj = deepClone(obj1);
clonedObj.b.c = 3;
console.log(obj1.b.c); // Output: 2

// 6. Output of Duplicate Property in Object
// In JavaScript objects, if a key is duplicated, the last definition overwrites the previous one.
const obj2 = {
  a: "one",
  b: "two",
  a: "three",
};
console.log(obj2); // Output: { a: "three", b: "two" }

// 7. Output of Object Key as a Non-String
// Non-string keys in objects are converted to strings. Both `b` and `c` here become "[object Object]".
const a = {};
const b = { key: "b" };
const c = { key: "c" };
a[b] = 123;
a[c] = 456;
console.log(a[b]); // Output: 456

// 8. Output of Spread Operator on String
// The spread operator converts each character of a string into an element in an array.
console.log([..."Javascript"]); // Output: ["J", "a", "v", "a", "s", "c", "r", "i", "p", "t"]

// 9. Output of Comparing Objects
// In JavaScript, objects are compared by reference, not by value. Even if two objects have identical properties, they are not equal.
let objectOne = { a: 1 };
let objectTwo = { a: 1 };

console.log(objectOne == objectTwo); // Output: false
console.log(objectOne === objectTwo); // Output: false

// 10. Output When Setting Object to `null`
// Setting `person` to `null` doesn’t affect `members`, which still holds a reference to the original `person` object.
let person3 = { name: "Lydia" };
const members = [person3];
person3 = null;
console.log(members); // Output: [{ name: "Lydia" }]

// 11. Output of Function with Default Parameter
// Each time `multiply` is called without an argument, a new object `{ ...value }` is used as the default.
// Passing `value` directly affects the original `value` object.
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply(); // Output: 20
multiply(); // Output: 20
multiply(value); // Output: 20
multiply(value); // Output: 40

// 12. Output of Object Method Using `this`
// The `diameter` method works because it uses a standard function and accesses `this`.
// The `perimeter` arrow function fails because `this` inside an arrow function is lexically bound and does not refer to the `shape` object.
const shape = {
  radius: 10,

  diameter() {
    return this.radius * 2;
  },

  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); // Output: 20
console.log(shape.perimeter()); // Output: NaN (this.radius is undefined)
