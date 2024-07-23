//* https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/

//* https://dmitripavlutin.com/javascript-this-interview-questions/

//* this keyword

/*
Summary:

1. The mystery of this:
   - In JavaScript, "this" refers to the context of a function invocation, not necessarily the current object instance.
   - Four function invocation types: function invocation, method invocation, constructor invocation, and indirect invocation.
   - Understanding function invocation and its impact on the context is crucial.

2. Function invocation:
   - Occurs when a function is called normally with parentheses.
   - The context of "this" in function invocation is the global object, except in strict mode where it's undefined.

3. Method invocation:
   - Occurs when a function is called as a property of an object.
   - "this" in method invocation refers to the object owning the method.

4. Constructor invocation:
   - Occurs when a function is called with the "new" keyword.
   - "this" in constructor invocation refers to the newly created object.

5. Indirect invocation:
   - Occurs when a function is called using "call()" or "apply()" methods.
   - "this" in indirect invocation is determined by the first argument of "call()" or "apply()".

6. Bound function:
   - Created using the "bind()" method to bind a specific context and/or arguments to a function.
   - "this" in bound functions is predetermined and cannot be changed.

7. Arrow function:
   - A concise way to declare functions with a lexical "this" binding.
   - "this" in arrow functions is inherited from the surrounding lexical context and cannot be modified.

8. Common pitfalls:
   - Forgetting to use "new" with constructors.
   - Defining methods using arrow functions, which may lead to unexpected "this" behavior.

Overall, understanding the nuances of "this" in JavaScript is essential for writing robust and predictable code.
*/
