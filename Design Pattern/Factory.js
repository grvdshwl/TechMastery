/*
    The Factory Pattern is a creational design pattern that provides an interface for creating objects 
    in a superclass but allows subclasses to alter the type of created objects. 
    This pattern is useful when the exact type of the object to be created is determined by the input 
    parameters or configuration, thus providing a way to encapsulate object creation logic.

    Key Concepts of the Factory Pattern:
    
    1. Factory Method: A method that is responsible for creating objects. It may be defined in an interface 
       or an abstract class, allowing subclasses to provide their own implementation.
    2. Product: An interface or abstract class that defines the object that the factory method creates.
    3. Concrete Products: Classes that implement the Product interface and define specific types of products.
    4. Concrete Factory: A class that implements the factory method to create instances of concrete products.

    Advantages of the Factory Pattern:
    
    - Encapsulation of Object Creation: The logic for object creation is encapsulated in one place, making 
      the code cleaner and easier to manage.
    - Decoupling: The client code is decoupled from the concrete classes of the objects it creates, allowing 
      for easier maintenance and flexibility.
    - Flexibility and Extensibility: New product types can be added without changing existing code.
*/

// Product interface defining common behavior
class Shape {
  draw() {
    throw new Error("This method should be overridden!");
  }
}

// Concrete Product: Circle
class Circle extends Shape {
  draw() {
    return "Drawing a Circle"; // Implements the draw method for Circle
  }
}

// Concrete Product: Square
class Square extends Shape {
  draw() {
    return "Drawing a Square"; // Implements the draw method for Square
  }
}

// Concrete Factory
class ShapeFactory {
  // Factory method to create shapes based on the provided type
  createShape(type) {
    switch (type) {
      case "circle":
        return new Circle(); // Returns a new Circle object
      case "square":
        return new Square(); // Returns a new Square object
      default:
        throw new Error("Shape type not supported!"); // Handles unsupported shape types
    }
  }
}

// Example usage of the Factory Pattern
const shapeFactory = new ShapeFactory(); // Create an instance of the factory

const shape1 = shapeFactory.createShape("circle"); // Create a Circle
console.log(shape1.draw()); // Logs: Drawing a Circle

const shape2 = shapeFactory.createShape("square"); // Create a Square
console.log(shape2.draw()); // Logs: Drawing a Square

// Uncommenting the following line will throw an error because the shape type is not supported
// const shape3 = shapeFactory.createShape('triangle'); // Throws Error: Shape type not supported!
