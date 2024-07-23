//* Execution Context

/*
Environment in which where ia piece of javcript is executed and stores all the necessary information for execution of the code.

WHAT'S INSIDE EXECUTION CONTEXT?
Variable Environment
- Holds let, const, and var declarations
- Contains function arguments object
- argument keyword (except for arrow function)
Scope chain
this keyword (except for arrow function)

*/

//* Scoping

/* 
* Scoping asks the question "Where do variables live?" or "Where can we access a certain variable, and where not?";

* There are 3 types of scope in JavaScript: the global scope, scopes defined by functions, and scopes defined by blocks;

* Only let and const variables are block-scoped. Variables declared with var end up in the closest function scope;

* In JavaScript, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the code 
* functions and blocks are written;

* Every scope always has access to all the variables from all its outer scopes. This is the scope chain!

* When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it's looking for. 

* The scope chain is a one-way street: a scope will never, ever have access to the variables of an inner scope;

* The scope chain in a certain scope is equal to adding together all the variable environments of all parent scopes;
*/
