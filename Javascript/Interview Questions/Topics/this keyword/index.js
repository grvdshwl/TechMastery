// Question 1: Variable vs property

// What logs to console the following code snippet:
const object = {
  message: "Hello, World!",

  getMessage() {
    const message = "Hello, Earth!";
    return this.message;
  },
};

console.log(object.getMessage()); // What is logged?
// Expand answer

// Question 2: Cat name

// What logs to console the following code snippet:
function Pet(name) {
  this.name = name;

  this.getName = () => this.name;
}

const cat = new Pet("Fluffy");

console.log(cat.getName()); // What is logged?

const { getName } = cat;
console.log(getName()); // What is logged?
// Expand answer

// Question 3: Delayed greeting

// What logs to console the following code snippet:
const object2 = {
  message: "Hello, World!",

  logMessage() {
    console.log(this.message); // What is logged?
  },
};

setTimeout(object2.logMessage, 1000);
// Expand answer

// Question 4: Artificial method

// How can you call logMessage function so that it logs "Hello, World!"?
const object3 = {
  message: "Hello, World!",
};

function logMessage() {
  console.log(this.message); // "Hello, World!"
}

// Expand answer

// Question 5: Greeting and farewell

// What logs to console the following code snippet:
const object4 = {
  who: "World",

  greet() {
    return `Hello, ${this.who}!`;
  },

  farewell: () => {
    return `Goodbye, ${this.who}!`;
  },
};

console.log(object4.greet()); // What is logged?
console.log(object4.farewell()); // What is logged?
// Expand answer

// Question 6: Tricky length

// What logs to console the following code snippet:
var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}

const object5 = {
  length: 5,
  method(callback) {
    callback();
  },
};

object5.method(callback, 1, 2);
// Expand answer

// Question 7: Calling arguments

// What logs to console the following code snippet:
var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}

const object6 = {
  length: 5,
  method() {
    arguments[0]();
  },
};

object6.method(callback, 1, 2);
