// =====================================
// 1. Private Members
// =====================================
// Private members in JavaScript are variables or methods that are accessible only within the class.
// They are declared using the '#' symbol before the property or method name.

class BankAccount {
  // Private fields
  #accountNumber;
  #balance;

  constructor(accountNumber, initialBalance) {
    this.#accountNumber = accountNumber;
    this.#balance = initialBalance;
  }

  // Public method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}`);
    } else {
      console.log("Deposit amount must be positive");
    }
  }

  // Public method to check balance
  checkBalance() {
    console.log(
      `Account Number: ${this.#accountNumber}, Balance: $${this.#balance}`
    );
  }
}

const myAccount = new BankAccount("1234567890", 1000);
myAccount.deposit(500); // Output: Deposited: $500
myAccount.checkBalance(); // Output: Account Number: 1234567890, Balance: $1500
// myAccount.#balance = 5000;    // Error: Private field '#balance' cannot be accessed from outside the class

// =====================================
// 2. Static Members
// =====================================
// Static members are properties and methods that belong to the class itself rather than to any specific instance.
// They are accessed using the class name, not the instance.

class MathUtils {
  // Static method
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

console.log(MathUtils.add(10, 20)); // Output: 30
console.log(MathUtils.multiply(5, 6)); // Output: 30

const math = new MathUtils();
// math.add(10, 20);  // Error: Static methods are not accessible through instances

// =====================================
// 3. Getters and Setters
// =====================================
// Getters and setters are special methods that allow you to access and modify private or protected properties indirectly.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Getter for area
  get area() {
    return this.width * this.height;
  }

  // Setter for width with validation
  set width(value) {
    if (value > 0) {
      this._width = value;
    } else {
      console.log("Width must be positive");
    }
  }

  get width() {
    return this._width;
  }
}

const rect = new Rectangle(10, 20);
console.log(rect.area); // Output: 200
rect.width = 30; // Updates width
console.log(rect.area); // Output: 600

// =====================================
// 4. Inheritance with 'super' keyword
// =====================================
// The 'super' keyword is used to call the parent class's constructor or methods.

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  // Overriding the speak method
  speak() {
    super.speak(); // Call the parent class method
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Max", "Labrador");
dog.speak();
// Output:
// Max makes a noise
// Max barks

// =====================================
// 5. Class Fields (Public and Private)
// =====================================
// Public fields are directly accessible, while private fields (prefixed with '#') are accessible only within the class.

class Counter {
  count = 0; // Public field
  #maxCount = 100; // Private field

  increment() {
    if (this.count < this.#maxCount) {
      this.count++;
    } else {
      console.log("Max count reached");
    }
  }

  getMaxCount() {
    return this.#maxCount;
  }
}

const counter = new Counter();
counter.increment();
console.log(counter.count); // Output: 1
// console.log(counter.#maxCount);   // Error: Private field '#maxCount' cannot be accessed

// =====================================
// 6. Method Chaining
// =====================================
// Method chaining allows you to call multiple methods on the same object in a single statement.

class Calculator {
  constructor() {
    this.value = 0;
  }

  add(number) {
    this.value += number;
    return this; // Return the instance for chaining
  }

  subtract(number) {
    this.value -= number;
    return this;
  }

  multiply(number) {
    this.value *= number;
    return this;
  }

  divide(number) {
    if (number !== 0) {
      this.value /= number;
    } else {
      console.log("Cannot divide by zero");
    }
    return this;
  }

  getResult() {
    return this.value;
  }
}

const calc = new Calculator();
const result = calc.add(10).subtract(2).multiply(5).divide(4).getResult();
console.log(result); // Output: 10

// =====================================
// 7. Polymorphism (Revisited)
// =====================================
// Polymorphism allows methods to be used in different ways depending on the context or the object calling them.

class Shape {
  area() {
    console.log("Area method should be implemented by subclasses");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }
}

const shapes = [new Circle(5), new Square(4)];

shapes.forEach((shape) => {
  console.log(`Area: ${shape.area()}`);
});
// Output:
// Area: 78.53981633974483
// Area: 16
