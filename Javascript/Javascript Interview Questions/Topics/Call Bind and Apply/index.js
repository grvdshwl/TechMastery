// JavaScript Callbacks and `this` Binding

//* 1. Understanding `call`, `apply`, and `bind`

// `call` and `apply` are used to invoke functions with a specified `this` value.
// `bind` returns a new function, permanently setting `this` to the provided object.

const user = { name: "Piyush" };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(user, 23)); // call immediately invokes, output: "Piyush is 23"
console.log(sayHi.bind(user, 27)()); // bind returns a new function, output: "Piyush is 27"

//* 2. Implicit vs Explicit Binding

// Implicit Binding - `this` refers to the object calling the method.
var person = {
  name: "Piyush",
  age: 20,
  getAge: function () {
    return this.age;
  },
};

console.log(person.getAge()); // Implicitly bound to `person`, output: 20

// Explicit Binding - `this` is explicitly set using `call`.
var person2 = { age: 24 };
console.log(person.getAge.call(person2)); // `this` bound to `person2`, output: 24

//* 3. Output and Explanation for `this` in Nested Functions

var status = "Hi";

setTimeout(() => {
  const status = "Hello";

  const data = {
    status: "Bye",
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus()); // Implicit binding, output: "Bye"
  console.log(data.getStatus.call(this)); // `this` refers to global context, output: "Hi"
}, 0);

//* 4. Looping with `call` to Bind `this` in Each Iteration

const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Queen" },
];

function printAnimals(i) {
  console.log(`#${i} ${this.species}: ${this.name}`);
}

for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i); // `this` refers to each animal in turn
}

//* 5. Array Manipulation using `apply`

// Append one array to another using `apply`
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
Array.prototype.push.apply(arr1, arr2); // Mutates arr1, appending arr2
console.log(arr1); // output: [1, 2, 3, 4, 5, 6]

// Find min and max using `apply`
let numbers = [10, 5, 8, 1, 4];
console.log(Math.min.apply(null, numbers)); // output: 1
console.log(Math.max.apply(null, numbers)); // output: 10

//* 6. `this` in Bound Functions

function f() {
  console.log(this);
}

let object = {
  g: f.bind(null),
};

object.g(); // Bound to `null`, `this` becomes `null` in strict mode or global in non-strict mode

// The reasoning behind this behavior is JavaScript’s loose handling of this in non-strict mode.
//  When this is set to null or undefined in non-strict mode, it assumes you didn’t specify an object,
//  so it defaults to the global object. In strict mode, JavaScript follows the this binding exactly as specified,
//  so if null is bound, this remains null.

//* 7. Handling `this` in Callbacks with `bind`

function checkPassword(success, failed) {
  let password = prompt("Password?", "");
  if (password === "Roadside Coder") {
    success();
  } else {
    failed();
  }
}

let userObject = {
  name: "Piyush Agarwal",
  loginSuccessful() {
    console.log(`${this.name} logged in`);
  },
  loginFailed() {
    console.log(`${this.name} failed to log in`);
  },
};

// Ensure `this` points to the correct object in callbacks
checkPassword(
  userObject.loginSuccessful.bind(userObject),
  userObject.loginFailed.bind(userObject)
);

//* 8. Arrow Functions vs Regular Functions in `this` Context

const userAge = 10;

var person = {
  name: "Piyush",
  userAge: 20,
  getAgeArrow: () => console.log(this.userAge), // Arrow function
  getAge: function () {
    console.log(this.userAge); // Regular function
  },
};

var person2 = { userAge: 24 };

// Calling methods
person.getAge.call(person2); // Regular function, `this` bound to `person2`, output: 24
person.getAgeArrow.call(person2); // Arrow function, `this` is lexical, output: undefined

//* Explicit Binding do not effect arrow functions
function Person() {
  this.age = 25;
  // Regular function
  this.growOld = function () {
    console.log(this.age);
  };
  // Arrow function
  this.growOlder = () => {
    console.log(this.age);
  };
}

const person = new Person();

// Explicit binding
const growOldBound = person.growOld.bind({ age: 50 });
growOldBound(); // 50, `this` is bound to { age: 50 }

const growOlderBound = person.growOlder.bind({ age: 50 });
growOlderBound(); // 25, `this` is still bound to the `Person` instance
