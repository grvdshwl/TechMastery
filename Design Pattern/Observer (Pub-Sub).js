/*
    The Observer Pattern is a behavioral design pattern that establishes a one-to-many relationship between 
    objects. When one object (the subject) changes its state, all its dependents (observers) are notified 
    and updated automatically. This pattern is particularly useful for implementing distributed event 
    handling systems, where changes in one part of a system need to trigger updates in other parts.

    Key Concepts of the Observer Pattern:
    
    1. Subject: The object that maintains a list of its observers and provides methods to add, 
       remove, and notify them.
    2. Observer: An interface or abstract class that defines the method to be called when the 
       subject's state changes.
    3. Concrete Subject: A class that implements the Subject interface and contains the state 
       that observers are interested in.
    4. Concrete Observer: A class that implements the Observer interface and reacts to changes 
       in the subject.

    Advantages of the Observer Pattern:
    
    - Loose Coupling: The subject and observers are loosely coupled, meaning changes in one do not require 
      changes in the other.
    - Dynamic Relationships: Observers can be added or removed at runtime, allowing for flexible interactions.
    - Automatic Updates: Observers are automatically notified when the subject's state changes, ensuring 
      consistent behavior.
*/

// Subject class
class Subject {
  constructor() {
    this.observers = []; // Array to hold observers
  }

  // Method to add an observer
  addObserver(observer) {
    this.observers.push(observer); // Adds an observer to the list
  }

  // Method to remove an observer
  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer); // Removes an observer from the list
  }

  // Method to notify all observers of a state change
  notifyObservers(data) {
    this.observers.forEach((observer) => observer.update(data)); // Calls update method on each observer
  }
}

// Observer interface
class Observer {
  update(data) {
    throw new Error("This method should be overridden!"); // Placeholder for overriding
  }
}

// Concrete Subject class
class WeatherStation extends Subject {
  constructor() {
    super();
    this.temperature = 0; // Initial temperature
  }

  // Method to set the temperature and notify observers
  setTemperature(newTemperature) {
    this.temperature = newTemperature; // Update the temperature
    this.notifyObservers(this.temperature); // Notify all observers of the new temperature
  }
}

// Concrete Observer class
class Display extends Observer {
  constructor(name) {
    this.name = name; // Name of the display
  }

  // Implementation of the update method
  update(data) {
    console.log(`${this.name} updated with new temperature: ${data}°C`); // Displays the new temperature
  }
}

// Example usage of the Observer Pattern
const weatherStation = new WeatherStation(); // Create a new WeatherStation instance

const display1 = new Display("Display 1"); // Create observers
const display2 = new Display("Display 2");

weatherStation.addObserver(display1); // Add observers to the subject
weatherStation.addObserver(display2);

weatherStation.setTemperature(25); // Set a new temperature, which notifies observers
// Logs:
// Display 1 updated with new temperature: 25°C
// Display 2 updated with new temperature: 25°C

weatherStation.removeObserver(display1); // Remove an observer

weatherStation.setTemperature(30); // Set a new temperature, which notifies remaining observers
// Logs:
// Display 2 updated with new temperature: 30°C
