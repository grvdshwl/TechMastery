// =====================================
// 1. Encapsulation
// =====================================
// Encapsulation means bundling the data (properties) and methods (functions) that operate on the data into a single unit (object).
// It helps in protecting the internal state of an object and exposes only specific functionalities through methods.

class Person {
  // Constructor to initialize properties
  constructor(name, age) {
    this.name = name; // Public property
    this._age = age; // Conventionally, properties starting with _ are considered private
  }

  // Public method to get the age (getter)
  getAge() {
    return this._age;
  }

  // Public method to set the age (setter)
  setAge(newAge) {
    if (newAge > 0) {
      // Simple validation
      this._age = newAge;
    } else {
      console.log("Age must be positive");
    }
  }

  // Method to display the person's details
  display() {
    console.log(`Name: ${this.name}, Age: ${this._age}`);
  }
}

const person1 = new Person("Alice", 25);
person1.display(); // Output: Name: Alice, Age: 25
person1.setAge(30);
console.log(person1.getAge()); // Output: 30

// =====================================
// 2. Inheritance
// =====================================
// Inheritance allows one class to inherit the properties and methods of another class.
// It helps in code reuse and establishing a relationship between classes.

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the constructor of the parent class
    this.jobTitle = jobTitle;
  }

  // Overriding the display method to add job title
  display() {
    console.log(
      `Name: ${this.name}, Age: ${this._age}, Job Title: ${this.jobTitle}`
    );
  }
}

const employee1 = new Employee("Bob", 30, "Software Engineer");
employee1.display(); // Output: Name: Bob, Age: 30, Job Title: Software Engineer

// =====================================
// 3. Polymorphism
// =====================================
// Polymorphism means 'many forms' – the ability of a method to behave differently based on the object calling it.
// In JavaScript, this is achieved by method overriding.

person1.display(); // Calls display() of Person class
employee1.display(); // Calls display() of Employee class

// =====================================
// 4. Abstraction
// =====================================
// Abstraction is the process of hiding the implementation details and showing only the essential features.
// In JavaScript, we can achieve abstraction by using methods to hide internal logic and using ES6 classes or closures.

class Vehicle {
  constructor(type) {
    this.type = type;
  }

  // Abstract method (just simulating, as JavaScript doesn't have real abstract methods)
  startEngine() {
    throw new Error("startEngine() must be implemented by subclasses");
  }
}

class Car extends Vehicle {
  constructor(type, brand) {
    super(type);
    this.brand = brand;
  }

  // Implementation of the abstract method
  startEngine() {
    console.log(`${this.brand} car engine started`);
  }
}

const myCar = new Car("Sedan", "Toyota");
myCar.startEngine(); // Output: Toyota car engine started

// =====================================
// 5. Example combining all OOP concepts
// =====================================

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks`);
  }
}

const animal = new Animal("Generic Animal");
const dog = new Dog("Buddy", "Golden Retriever");

animal.speak(); // Output: Generic Animal makes a sound
dog.speak(); // Output: Buddy barks

// =====================================
// Summary:
// 1. Encapsulation: Bundling of data and methods.
// 2. Inheritance: One class inherits from another class.
// 3. Polymorphism: Method behaves differently for different classes.
// 4. Abstraction: Hiding implementation details and exposing only necessary functionalities.
// =====================================
