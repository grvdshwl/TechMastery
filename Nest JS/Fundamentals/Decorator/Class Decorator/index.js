// Class Decorator: Adds a "sayHello" method to the class
function addHelloMethod(target) {
  target.prototype.sayHello = function () {
    console.log("Hello!");
  };
}

// Applying the decorator to the class
@addHelloMethod
class Person {
  constructor(name) {
    this.name = name;
  }
}

// Creating an instance of the class
const person = new Person("John");
// Calling the method added by the decorator
person.sayHello(); // Output: Hello!
