// In JavaScript, we can define properties and methods with different access levels:

class Person {
  // Public property: 'name' is public by default.
  // It can be accessed from anywhere, both inside and outside the class.
  name;

  // Private property: private fields use '#' symbol in modern JS.
  // This means 'name' can only be accessed inside the class, not from outside.
  #privateName;

  // Constructor to initialize the properties
  constructor(name) {
    this.name = name; // Public: Accessible from outside
    this.#privateName = name; // Private: Accessible only within this class
  }

  // Public method: Can be accessed from outside the class
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }

  // Private method: This is only accessible within the class
  #privateGreet() {
    console.log(`Hello from private method, my name is ${this.#privateName}`);
  }

  // Method that demonstrates calling the private method inside the class
  showPrivateGreeting() {
    this.#privateGreet(); // Valid, since it's within the class
  }
}

// Public access:
const person = new Person("Alice");
console.log(person.name); // 'name' is public, can be accessed outside the class
person.greet(); // Public method, can be called from outside

// Private access:
// console.log(person.#privateName);  // Error: Private field '#privateName' must be declared in an enclosing class
// person.#privateGreet();  // Error: Private method '#privateGreet' is not accessible outside the class

// Protected (simulated in JS):
// JavaScript doesn't have a native 'protected' access modifier.
// We can simulate protected members by using the '_' naming convention, but it still won't be enforced.
class Student extends Person {
  constructor(name, grade) {
    super(name);
    this._grade = grade; // Simulating protected using '_', it’s convention-based and not enforced
  }

  // Access protected field '_grade' inside subclass
  displayGrade() {
    console.log(`Grade: ${this._grade}`);
  }
}

const student = new Student("Bob", "A");
student.displayGrade(); // Valid: Protected field '_grade' is accessible in subclass
student.greet(); // Valid: Inherited public method 'greet' is accessible

// The '_grade' field is not truly protected, it is publicly accessible (convention only).
// console.log(student._grade);  // Accessing '_grade' outside the class (publicly accessible).
