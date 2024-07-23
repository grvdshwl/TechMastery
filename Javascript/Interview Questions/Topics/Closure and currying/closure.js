//* Closure

// Closures in JavaScript allow inner functions to access variables
//  from their outer scope, even after the outer function has finished executing.

// Currying in Javascript
// Question 1 - sum (2) (6) (1)

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Ques 2: Write a function that would allow you to do this
function createBase(num) {
  return function (num2) {
    console.log(num + num2);
  };
}

var addSix = createBase(6);
addSix(10);
addSix(20);

// Ques 3: Block scope and setTimeout
for (var i = 0; i < 3; i++) {
  function inner(index) {
    setTimeout(function () {
      console.log(index);
    }, i * 1000);
  }
  inner(i);
}

// Ques 4: What is Module Pattern?
var Module = (function () {
  function privateMethod() {
    // do something
  }
  return {
    publicMethod: function () {
      // can call privateMethod();
    },
  };
})();

// Ques 5: Time Optimization

function closureFind() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function (i) {
    return a[i];
  };
}

let find = closureFind();
console.time("6");
find(6);
console.timeEnd("6");
console.time("12");
find(12);
console.timeEnd("12");
