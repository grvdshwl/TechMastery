// Question 1: Variable vs Property
const object1 = {
  message: "Hello, World!",

  getMessage() {
    const message = "Hello, Earth!";
    return this.message; // Returns the property of the object
  },
};

console.log(object1.getMessage()); // Output: "Hello, World!"
// Explanation: `this.message` refers to the object's property "Hello, World!", while `message` is a local variable.

///////////////////////////////////////////////////////////////////////////////////////////

// Question 2: Cat Name
function Pet(name) {
  this.name = name;

  this.getName = () => this.name; // Arrow function captures 'this' from the context
}

const cat = new Pet("Fluffy");

console.log(cat.getName()); // Output: "Fluffy"

const { getName } = cat; // Destructuring to get the method
console.log(getName()); // Output: "Fluffy"
// Explanation: Both calls return "Fluffy" because `getName` correctly references `this` in the context of `cat`.

///////////////////////////////////////////////////////////////////////////////////////////

// Question 3: Flower Name (using method syntax)
function Flower(name) {
  this.name = name;

  this.getFlowerName = function () {
    return this.name; // Regular function, 'this' refers to the Flower instance
  };
}

const rose = new Flower("Rose");

console.log(rose.getFlowerName()); // Output: "Rose"

const { getFlowerName } = rose; // Destructuring to get the method
console.log(getFlowerName()); // Output: undefined
// Explanation: `getFlowerName` loses its context when called as a standalone function, leading to 'this.name' being undefined.

///////////////////////////////////////////////////////////////////////////////////////////

// Question 4: Delayed Greeting
const object2 = {
  message: "Hello, World!",

  logMessage() {
    console.log(this.message); // Output: ?
  },
};

setTimeout(object2.logMessage, 1000); // Output: undefined
// Explanation: `this` is lost in the timeout callback. Use `setTimeout(() => object2.logMessage(), 1000)` or `setTimeout(object2.logMessage.bind(object2), 1000)` to preserve context.

///////////////////////////////////////////////////////////////////////////////////////////

// Question 5: Artificial Method
const object3 = {
  message: "Hello, World!",
};

function logMessage() {
  console.log(this.message); // "Hello, World!"
}

// Answer: Use `call` or `apply` to set `this` to `object3`:
// logMessage.call(object3); // or logMessage.apply(object3);

///////////////////////////////////////////////////////////////////////////////////////////

// Question 6: Greeting and Farewell
const object4 = {
  who: "World",

  greet() {
    return `Hello, ${this.who}!`; // Regular function
  },

  farewell: () => {
    return `Goodbye, ${this.who}!`; // Arrow function
  },
};

console.log(object4.greet()); // Output: "Hello, World!"
console.log(object4.farewell()); // Output: "Goodbye, undefined!"
// Explanation: 'greet' uses 'this' from 'object4', while 'farewell' uses 'this' from the global context, resulting in 'undefined' for 'who'.

///////////////////////////////////////////////////////////////////////////////////////////

// Question 7: Tricky Length Other
var length = 4;

function callback() {
  console.log(this.length); // Output: ?
}

const object7 = {
  length: 5,
  method: (callback) => {
    callback(); // Calls the callback
  },
};

object7.method(callback, 1, 2); // Logs: 4
// Explanation: 'callback' is called without context, setting 'this' to the global scope where length is 4.

///////////////////////////////////////////////////////////////////////////////////////////

// Question 8: Tricky Length
var length = 4;

function callback() {
  console.log(this.length); // Output: ?
}

const object5 = {
  length: 5,
  method(callback) {
    callback(); // Calls the callback
  },
};

object5.method(callback, 1, 2); // Logs: 4
// Explanation: Similar to Question 7, 'callback' is called without context.

///////////////////////////////////////////////////////////////////////////////////////////

// Question 9: Calling Arguments
var length = 4;

function callback() {
  console.log(this.length); // Output: ?
}

const object6 = {
  length: 5,
  method() {
    arguments[0](); // Calls the first argument
  },
};

object6.method(callback, 1, 2); // Logs: 3
// Explanation: Calling 'arguments[0]()' invokes 'callback' with 'this' bound to the 'arguments' object, which has a length of 3.
