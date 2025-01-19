// **Decorator Basics in JavaScript**

/*
  A **decorator** is a function that is used to modify or enhance the behavior of a class, method, property, or parameter.
  Decorators are not natively supported in JavaScript as of now but are available through experimental features or in TypeScript.
  A decorator allows you to add additional behavior to a function or class without modifying its original code directly.
  
  The basic syntax for a decorator is:
  @decoratorName
  class SomeClass { ... }

  Decorators can be applied to:
  1. **Classes**
  2. **Methods**
  3. **Properties**
  4. **Getters/Setters**
*/

// --- 1. **Class Decorators**
// A class decorator is a function that modifies or adds behavior to a class.
function addHelloMethod(target) {
  // `target` refers to the class constructor that is being decorated
  target.prototype.sayHello = function () {
    console.log("Hello from the decorated class!");
  };
}

// Applying the class decorator
@addHelloMethod // This decorator adds a method to the class
class Person {
  constructor(name) {
    this.name = name;
  }
}

const person = new Person("Alice");
person.sayHello(); // Output: Hello from the decorated class!

// --- 2. **Method Decorators**
// A method decorator modifies the behavior of a method within a class.
function log(target, name, descriptor) {
  // `target` is the prototype of the class
  // `name` is the name of the method
  // `descriptor` is an object describing the method's properties (e.g., value, writable)

  const originalMethod = descriptor.value; // Save the original method

  // Modify the method's behavior by wrapping the original method
  descriptor.value = function (...args) {
    console.log(`Calling method ${name} with arguments:`, args);
    return originalMethod.apply(this, args); // Execute the original method
  };

  return descriptor; // Return the modified descriptor
}

// Applying the method decorator
class PersonWithLogging {
  constructor(name) {
    this.name = name;
  }

  @log // This decorator logs the method calls and arguments
  sayHello(name) {
    console.log(`Hello, ${name}!`);
  }
}

const personWithLogging = new PersonWithLogging("John");
personWithLogging.sayHello("Alice"); // Output: Calling method sayHello with arguments: [ 'Alice' ]
//         Hello, Alice!

// --- 3. **Property Decorators**
// Property decorators modify the behavior of properties in a class, such as adding custom getter/setter.
function observable(target, key) {
  let value = target[key]; // Access the current value of the property

  // Custom getter
  const getter = () => value;

  // Custom setter with logging
  const setter = (newValue) => {
    console.log(`Setting ${key} to ${newValue}`);
    value = newValue;
  };

  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}

// Applying the property decorator
class PersonWithObservable {
  @observable // This decorator adds custom getter and setter for the property "name"
  name;

  constructor(name) {
    this.name = name;
  }
}

const personWithObservable = new PersonWithObservable("John");
personWithObservable.name = "Alice"; // Output: Setting name to Alice

// --- 4. **Accessor (Getter/Setter) Decorators**
// Decorators can also be applied to getter/setter methods to modify how a property is accessed or modified.
function validate(target, key, descriptor) {
  const originalSetter = descriptor.set; // Get the original setter

  descriptor.set = function (value) {
    if (value < 0) {
      console.log("Value cannot be negative");
    } else {
      originalSetter.call(this, value); // Call the original setter if the value is valid
    }
  };

  return descriptor; // Return the modified descriptor
}

// Applying the accessor (getter/setter) decorator
class Product {
  constructor(price) {
    this._price = price;
  }

  @validate // This decorator adds validation to the setter method
  set price(value) {
    this._price = value;
  }

  get price() {
    return this._price;
  }
}

const product = new Product(100);
product.price = -10; // Output: Value cannot be negative
