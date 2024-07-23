// Object-oriented programming (OOP) is a programming paradigm based on the concept of objects;
// E.g. user or todo list item
// * We use objects to model (describe) real-world or abstract features;
// Objects may contain data (properties) and code (methods). By using objects, we
// pack data and the corresponding behavior into one block;
// * In OOP, objects are self-contained pieces/blocks of code;
// Objects are building blocks of applications, and interact with one another;
// Interactions happen through a public interface (API): methods that the code outside of the object can access and use to
// communicate with the object;
// OOP was developed with the goal of organizing code, to make it more flexible and easier to maintain (avoid "spaghetti code").

//* 4 Pillars of OOPS :-

// Abstraction: Ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we're implementing,
// instead of messing with details that don't really matter to our implementation.

// Encapsulation: Keeping properties and methods private inside the class, so they are not accessible from outside the class.
// Some methods can be exposed as a public interface (API).

// Inheritance: Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship
// between classes. This allows us to reuse common logic and to model real-world relationships.

// Polymorphism: A child class can overwrite a method it inherited from a parent class lit's more complex that that, but enough for
//  our purposes].

// "How do we actually create prototypes? And how do we link objects to prototypes? How can we create new objects, without having classes?"

// 1. Constructor functions
// Technique to create objects from a function;
// This is how built-in objects like Arrays, Maps or Sets are actually implemented.

// 2. ES6 Classes
// * Modern alternative to constructor function syntax;
// "Syntactic sugar": behind the scenes, ES classes work exactly like constructor functions;
// * ES6 classes do NOT behave like classes in "classical OOP" (last lecture).

// 3. Object. create ()
// The easiest and most straightforward way of linking an object to a prototype object.

//* Constructor functions

"use strict";

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //* Never to this as it will create multiple copy the same method in each instance.
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

//* Right way to declare instance method
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

//* Static Method
Person.hey = function () {
  console.log("Hey !");
};

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const jonas = new Person("Jonas", 1991);

console.log(jonas);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person("Matilda", 2017);

const jack = new Person("Jack", 1975);

console.log(matilda, jack);
console.log(jonas instanceof Person);
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));

console.log(jonas.hasOwnProperty("firstName"));

//* Polymorphism
Array.prototype.unique = function () {
  return [...new Set(this)];
};
