/*
    The Singleton Pattern is a creational design pattern that restricts the instantiation of a class 
    to a single instance and provides a global point of access to that instance. This pattern is useful 
    when exactly one object is needed to coordinate actions across the system, such as a configuration 
    manager, logging service, or thread pool.

    Key Concepts of the Singleton Pattern:
    
    1. Singleton Class: The class that is designed to have only one instance. It provides a static 
       method to get the instance and ensures that no other instances can be created.
    2. Lazy Initialization: The instance of the Singleton class is created only when it is needed, 
       rather than at the time of class loading.
    3. Thread Safety: In multi-threaded environments, care must be taken to ensure that only one 
       instance is created, typically using locks or other synchronization mechanisms.

    Advantages of the Singleton Pattern:
    
    - Controlled Access: It controls the access to the instance, preventing multiple instantiations.
    - Global Access: Provides a global point of access to the instance.
    - Lazy Instantiation: Reduces resource consumption by creating the instance only when necessary.
*/

// Singleton class
class Singleton {
  // Private static variable to hold the instance
  static #instance = null;

  // Private constructor to prevent instantiation from outside
  constructor() {
    if (Singleton.#instance) {
      throw new Error("Cannot create another instance of Singleton class"); // Prevents multiple instances
    }
    // Initialize any properties here
  }

  // Static method to get the instance of the class
  static getInstance() {
    if (!Singleton.#instance) {
      Singleton.#instance = new Singleton(); // Creates the instance if it doesn't exist
    }
    return Singleton.#instance; // Returns the single instance
  }

  // Example method to demonstrate functionality
  showMessage() {
    console.log("Hello from the Singleton instance!"); // Method for demonstration
  }
}

// Example usage of the Singleton Pattern
try {
  const instance1 = Singleton.getInstance(); // Get the Singleton instance
  instance1.showMessage(); // Logs: Hello from the Singleton instance!

  const instance2 = Singleton.getInstance(); // Get the same Singleton instance
  console.log(instance1 === instance2); // Logs: true, both references point to the same instance

  // Uncommenting the following line will throw an error because the constructor is private
  // const instance3 = new Singleton(); // Throws Error: Cannot create another instance of Singleton class
} catch (error) {
  console.error(error.message); // Logs any errors
}
