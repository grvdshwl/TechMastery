//* Hoisting

// Hoisting moves variable and function declarations to the top of their scope during the compilation phase,
// making them accessible before their actual declaration in the code.

// |            | HOISTED | INITIAL VALUE |     SCOPE       |            In strict mode. Otherwise: function!              |
// |------------|----------|---------------|-----------------|--------------------------------------------------------------|
// | Function   |   YES    | Actual function| Block           |                                                              |
// | declarations|          |               |                 |                                                              |
// |------------|----------|---------------|-----------------|--------------------------------------------------------------|
// | var        |   YES    | undefined     | Function        | Technically, yes. But not in practice                        |
// | variables  |          |               |                 |                                                              |
// |------------|----------|---------------|-----------------|--------------------------------------------------------------|
// | let and    |    NO    | <uninitialized>, TDZ | Block      | Depends if using var or let/const                             |
// | const      |          |               |                 |                                                              |
// |------------|----------|---------------|-----------------|--------------------------------------------------------------|
// | Function   |    NO    | 2x C 5:45 /11:00 | Temporal Dead Zone |                                                         |
// | expressions|          |               |                 |                                                              |
// | and arrows |          |               |                 |                                                              |

//* Note - let and const are technically hoisted however present in TDZ

//* TDZ

// Temporal Dead Zone (TDZ) is a period between entering scope
// and the actual declaration of a let or const variable, during which accessing the variable results in a ReferenceError.

//  TDZ exists to enforce strict variable initialization rules.

const myName = "Jonas";
if (myName === "Jonas") {
  //* TDZ for job variable
  console.log(`Jonas is a ${job}`); //* ReferenceError: Cannot access 'job' before initialization,
  const age = 2037 - 1989;
  console.log(age);
  //* Above is TDZ for job variable
  const job = "teacher";
  console.log(x); //*   ReferenceError: x is not defined
}

//* Why TDZ is needed

// Makes it easier to avoid and catch errors: accessing variables before declaration is bad practice and should be avoided;

// Makes const variables actually work

/*
|          | var                            | let                           | const                        |
|----------|--------------------------------|-------------------------------|------------------------------|
| Scope    | Function scope                | Block scope                   | Block scope                  |
| Hoisting | Yes, declaration is hoisted   | No, variable is not hoisted  | No, variable is not hoisted |
| Reassign | Yes                            | Yes                           | No                           |
| Redeclare| Yes                            | No                            | No                           |
| Value    | Can be reassigned and updated | Can be reassigned and updated| Can't be reassigned          |
|          | throughout the program        | within the block it is       |                              |
|          |                                | declared in                  |                              |
*/
