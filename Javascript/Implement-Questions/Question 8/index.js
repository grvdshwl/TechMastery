//* Polyfill- call,apply,bind

// Polyfill for bind
Function.prototype.customBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "It's not callable");
  }
  context.fn = this;

  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

// Polyfill for apply
Function.prototype.customApply = function (context = {}, argsArray = []) {
  if (typeof this !== "function") {
    throw new Error(this + "It's not callable");
  }

  if (!Array.isArray(argsArray)) {
    throw new Error("Args should be array");
  }

  context.fn = this;

  return context.fn(...argsArray);
};

// Polyfill for call
Function.prototype.customCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "It's not callable");
  }

  context.fn = this;

  return context.fn(...args);
};

function greet(greeting, punctuation) {
  return `${greeting} ${this.name}${punctuation}`;
}

const person = {
  name: "John",
};

const boundFn = greet.customBind(person, "Hello");
console.log(boundFn("!")); // Output: "Hello John!"

const appliedFn = greet.customApply(person, ["Hi", "!"]);
console.log(appliedFn); // Output: "Hi John!"

const calledFn = greet.customCall(person, "Hola", "!");
console.log(calledFn); // Output: "Hola John!"
