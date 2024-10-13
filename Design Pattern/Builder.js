/*
    The Builder Pattern is a creational design pattern that provides a flexible solution for constructing complex objects. 
    It allows you to create an object step by step, enabling the construction process to create different representations 
    of the object. This pattern is particularly useful when an object requires several parameters for its initialization, 
    making it cumbersome to use constructors with many arguments.

    Key Concepts of the Builder Pattern:
    
    1. Builder: An interface or abstract class that defines methods for creating different parts of the object.
    2. Concrete Builder: A class that implements the Builder interface and constructs the product by providing 
       specific implementations for the methods defined in the Builder interface.
    3. Director: A class that constructs an object using the Builder interface. It knows the order in which 
       to call the builder's methods.
    4. Product: The final object that is constructed by the builder.

    Advantages of the Builder Pattern:
    
    - Separation of Concerns: The construction process is separated from the representation of the object.
    - Immutability: Allows you to create immutable objects since the builder can set values step by step before 
      the object is finally created.
    - Fluent Interface: Often provides a fluent interface, allowing for method chaining and improving readability.
*/

// Product class representing the complex object to be built
class Car {
  constructor(builder) {
    this.make = builder.make; // Make of the car
    this.model = builder.model; // Model of the car
    this.year = builder.year; // Year of the car
    this.color = builder.color; // Color of the car
    this.engineType = builder.engineType; // Engine type of the car
  }
}

// Builder class that constructs the Car object
class CarBuilder {
  constructor(make, model) {
    this.make = make; // required parameter: make of the car
    this.model = model; // required parameter: model of the car
    this.year = null; // optional parameter: year of the car
    this.color = null; // optional parameter: color of the car
    this.engineType = null; // optional parameter: engine type of the car
  }

  // Method to set the year of the car
  setYear(year) {
    this.year = year; // sets the year of the car
    return this; // returns the builder instance for chaining
  }

  // Method to set the color of the car
  setColor(color) {
    this.color = color; // sets the color of the car
    return this; // returns the builder instance for chaining
  }

  // Method to set the engine type of the car
  setEngineType(engineType) {
    this.engineType = engineType; // sets the engine type of the car
    return this; // returns the builder instance for chaining
  }

  // Method to construct and return the Car object
  build() {
    return new Car(this); // constructs and returns the Car object
  }
}

// Example usage of the Builder Pattern
const myCar = new CarBuilder("Toyota", "Corolla") // creates a new CarBuilder with required parameters
  .setYear(2023) // sets the year to 2023
  .setColor("Blue") // sets the color to Blue
  .setEngineType("Hybrid") // sets the engine type to Hybrid
  .build(); // builds the Car object

console.log(myCar); // Logs the constructed Car object
