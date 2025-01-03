// Classes and Objects Example
class Car {
  constructor(brand, model) {
    this.brand = brand; // Public field
    this.model = model; // Public field
  }

  displayInfo() {
    console.log(`Car: ${this.brand} ${this.model}`);
  }
}
const car1 = new Car("Toyota", "Corolla");
car1.displayInfo(); // Output: Car: Toyota Corolla

// Constructor and Destructor Example
class User {
  constructor(name) {
    this.name = name;
    console.log(`${this.name} has been created`);
  }

  destroy() {
    // Simulated destructor
    console.log(`${this.name} has been destroyed`);
  }
}
const user = new User("Alice"); // Output: Alice has been created
user.destroy(); // Output: Alice has been destroyed

// Access Modifiers Example
class Account {
  #balance = 0; // Private field

  constructor(owner) {
    this.owner = owner; // Public field
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`${this.owner} deposited $${amount}`);
  }

  getBalance() {
    return this.#balance;
  }
}
const acc = new Account("John");
acc.deposit(100); // Output: John deposited $100
console.log(acc.getBalance()); // Output: 100

// Static Members Example
class Calculator {
  static add(a, b) {
    return a + b;
  }
}
console.log(Calculator.add(5, 3)); // Output: 8

// Inner/Nested Classes Example
class OuterClass {
  constructor(name) {
    this.name = name;
  }

  displayOuter() {
    console.log(`Outer class: ${this.name}`);
  }

  static InnerClass = class {
    displayInner() {
      console.log("This is the inner class");
    }
  };
}
const outer = new OuterClass("OuterObject");
outer.displayOuter(); // Output: Outer class: OuterObject
const inner = new OuterClass.InnerClass();
inner.displayInner(); // Output: This is the inner class

// Abstract Class Example
class Animal {
  constructor(name) {
    if (new.target === Animal) {
      throw new Error("Cannot instantiate an abstract class");
    }
    this.name = name;
  }

  makeSound() {
    throw new Error("Method 'makeSound()' must be implemented");
  }
}
class Dog extends Animal {
  makeSound() {
    console.log(`${this.name} barks`);
  }
}
const dog = new Dog("Buddy");
dog.makeSound(); // Output: Buddy barks

// Interface Simulation Example
class VehicleInterface {
  startEngine() {
    throw new Error("Method 'startEngine()' must be implemented");
  }

  stopEngine() {
    throw new Error("Method 'stopEngine()' must be implemented");
  }
}
class CarInterface extends VehicleInterface {
  startEngine() {
    console.log("Engine started");
  }

  stopEngine() {
    console.log("Engine stopped");
  }
}
const carInterface = new CarInterface();
carInterface.startEngine(); // Output: Engine started
carInterface.stopEngine(); // Output: Engine stopped
