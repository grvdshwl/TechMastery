/*
    The Strategy Pattern is a behavioral design pattern that enables selecting an algorithm's 
    behavior at runtime. It defines a family of algorithms, encapsulates each one, and makes 
    them interchangeable. This pattern allows the algorithm to vary independently from clients 
    that use it, promoting cleaner code and flexibility.

    Key Concepts of the Strategy Pattern:
    
    1. Context: The class that uses a Strategy to perform a specific operation. It holds a reference 
       to a Strategy object and can change it dynamically.
    2. Strategy: An interface or abstract class that defines a method for executing a specific algorithm.
    3. Concrete Strategies: Classes that implement the Strategy interface and provide specific algorithms.

    Advantages of the Strategy Pattern:
    
    - Flexibility: Algorithms can be changed at runtime without modifying the context.
    - Separation of Concerns: It separates the implementation of algorithms from their usage, making 
      the code easier to understand and maintain.
    - Open/Closed Principle: New strategies can be added without altering existing code, promoting scalability.
*/

// Strategy interface
class Strategy {
  execute(a, b) {
    throw new Error("This method should be overridden!"); // Placeholder for overriding
  }
}

// Concrete Strategy: Addition
class AdditionStrategy extends Strategy {
  execute(a, b) {
    return a + b; // Implements addition
  }
}

// Concrete Strategy: Subtraction
class SubtractionStrategy extends Strategy {
  execute(a, b) {
    return a - b; // Implements subtraction
  }
}

// Concrete Strategy: Multiplication
class MultiplicationStrategy extends Strategy {
  execute(a, b) {
    return a * b; // Implements multiplication
  }
}

// Context class that uses the Strategy
class Calculator {
  constructor(strategy) {
    this.strategy = strategy; // Holds a reference to a Strategy object
  }

  // Method to perform the calculation using the strategy
  calculate(a, b) {
    return this.strategy.execute(a, b); // Calls the strategy's execute method
  }

  // Method to change the strategy at runtime
  setStrategy(strategy) {
    this.strategy = strategy; // Changes the current strategy
  }
}

// Example usage of the Strategy Pattern
const calculator = new Calculator(new AdditionStrategy()); // Initialize with AdditionStrategy
console.log(calculator.calculate(5, 3)); // Logs: 8 (5 + 3)

calculator.setStrategy(new SubtractionStrategy()); // Change strategy to SubtractionStrategy
console.log(calculator.calculate(5, 3)); // Logs: 2 (5 - 3)

calculator.setStrategy(new MultiplicationStrategy()); // Change strategy to MultiplicationStrategy
console.log(calculator.calculate(5, 3)); // Logs: 15 (5 * 3)
