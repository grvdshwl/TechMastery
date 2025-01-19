// Method Decorator: Logs method calls and arguments
function log(target, name, descriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args) {
    console.log(`Calling method ${name} with arguments:`, args);
    return originalMethod.apply(this, args); // Call the original method
  };

  return descriptor; // Returning the modified descriptor
}

// Class with method using the decorator
class PersonWithLogging {
  constructor(name) {
    this.name = name;
  }

  @log // Applying the log decorator
  sayHello(name) {
    console.log(`Hello, ${name}!`);
  }
}

const person2 = new PersonWithLogging("John");
person2.sayHello("Alice");
// Output: Calling method sayHello with arguments: [ 'Alice' ]
//         Hello, Alice!
