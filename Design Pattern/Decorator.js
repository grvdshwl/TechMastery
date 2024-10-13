/*
    The Decorator Pattern is a structural design pattern that allows behavior to be added to individual objects, 
    either statically or dynamically, without affecting the behavior of other objects from the same class. 
    This pattern is particularly useful when you want to extend the functionality of classes in a flexible 
    and reusable way.

    Key Concepts of the Decorator Pattern:
    
    1. Component: An interface or abstract class that defines the methods that can be decorated.
    2. Concrete Component: A class that implements the Component interface and provides the basic functionality.
    3. Decorator: An abstract class that implements the Component interface and has a reference to a Component object. 
       It delegates the calls to the component and can add additional behavior before or after delegating.
    4. Concrete Decorators: Classes that extend the Decorator class and add additional behavior or responsibilities 
       to the component.

    Advantages of the Decorator Pattern:
    
    - Single Responsibility Principle: You can add responsibilities to objects without modifying their classes.
    - Flexible Object Composition: You can mix and match decorators to achieve different combinations of behaviors.
    - Open/Closed Principle: You can add new decorators without changing the existing code.
*/

// Component interface defining methods
class Coffee {
  cost() {
    return 5; // Base cost of coffee
  }
}

// Concrete Component implementing the Component interface
class SimpleCoffee extends Coffee {
  cost() {
    return super.cost(); // Returns the base cost of the coffee
  }
}

// Decorator abstract class
class CoffeeDecorator extends Coffee {
  constructor(coffee) {
    super();
    this.coffee = coffee; // Holds a reference to a Coffee object
  }

  cost() {
    return this.coffee.cost(); // Delegates the call to the component
  }
}

// Concrete Decorator adding milk
class MilkDecorator extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 1; // Adds the cost of milk
  }
}

// Concrete Decorator adding sugar
class SugarDecorator extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 0.5; // Adds the cost of sugar
  }
}

// Example usage of the Decorator Pattern
let myCoffee = new SimpleCoffee(); // Create a simple coffee
console.log("Cost of simple coffee: $" + myCoffee.cost()); // Logs the cost of simple coffee

myCoffee = new MilkDecorator(myCoffee); // Add milk to the coffee
console.log("Cost of coffee with milk: $" + myCoffee.cost()); // Logs the cost with milk

myCoffee = new SugarDecorator(myCoffee); // Add sugar to the coffee
console.log("Cost of coffee with milk and sugar: $" + myCoffee.cost()); // Logs the cost with milk and sugar
