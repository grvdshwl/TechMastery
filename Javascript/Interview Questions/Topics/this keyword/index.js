// * Explain this keyword in JavaScript

// The 'this' keyword in JavaScript refers to the context in which a function is called.
// Its value is determined by how a function is invoked, not where it is defined.

/*
Summary:

1. The mystery of this:
   - In JavaScript, "this" refers to the context of a function invocation, not necessarily the current object instance.
   - Four function invocation types: function invocation, method invocation, constructor invocation, and indirect invocation.
   - Understanding function invocation and its impact on the context is crucial.

2. Function invocation:
   - Occurs when a function is called normally with parentheses.
   - The context of "this" in function invocation is the global object, except in strict mode where it's undefined.

   Example:
   function showThis() {
       console.log(this);
   }
   showThis(); // In non-strict mode, logs the global object (window in browsers). In strict mode, it logs undefined.

3. Method invocation:
   - Occurs when a function is called as a property of an object.
   - "this" in method invocation refers to the object owning the method.

   Example:
   const obj = {
       name: 'Alice',
       greet: function() {
           console.log(`Hello, ${this.name}`);
       }
   };
   obj.greet(); // Logs: "Hello, Alice"

4. Constructor invocation:
   - Occurs when a function is called with the "new" keyword.
   - "this" in constructor invocation refers to the newly created object.

   Example:
   function Person(name) {
       this.name = name;
   }
   const person1 = new Person('Bob');
   console.log(person1.name); // Logs: "Bob"

5. Indirect invocation:
   - Occurs when a function is called using "call()" or "apply()" methods.
   - "this" in indirect invocation is determined by the first argument of "call()" or "apply()".

   Example:
   function greet() {
       console.log(`Hello, ${this.name}`);
   }
   const user = { name: 'Charlie' };
   greet.call(user); // Logs: "Hello, Charlie"

6. Bound function:
   - Created using the "bind()" method to bind a specific context and/or arguments to a function.
   - "this" in bound functions is predetermined and cannot be changed.

   Example:
   function greet() {
       console.log(`Hello, ${this.name}`);
   }
   const user = { name: 'Diana' };
   const greetUser = greet.bind(user);
   greetUser(); // Logs: "Hello, Diana"

7. Arrow function:
   - A concise way to declare functions with a lexical "this" binding.
   - "this" in arrow functions is inherited from the surrounding lexical context and cannot be modified.

   Example:
   const obj = {
       name: 'Eve',
       greet: () => {
           console.log(`Hello, ${this.name}`); // 'this' does not refer to obj
       }
   };
   obj.greet(); // Logs: "Hello, undefined" (since `this` is inherited from the global scope)

8. Common pitfalls:
   - Forgetting to use "new" with constructors.
   - Defining methods using arrow functions, which may lead to unexpected "this" behavior.

   Example of a common pitfall:
   const obj = {
       name: 'Frank',
       greet: () => {
           console.log(`Hello, ${this.name}`); // 'this' does not refer to obj
       }
   };
   obj.greet(); // Logs: "Hello, undefined"
   // Here, we should use a regular function to maintain the correct context.
   // Correct way:
   const objFixed = {
       name: 'Grace',
       greet: function() {
           console.log(`Hello, ${this.name}`); // Now 'this' refers to objFixed
       }
   };
   objFixed.greet(); // Logs: "Hello, Grace"

Overall, understanding the nuances of "this" in JavaScript is essential for writing robust and predictable code.
*/
