//* What are javascript objects with example?
//* What are JSON.stringify and JSON.parse  with example ?
//* What is javascript destructing in object ?
//* What is shallow copy vs deep copy with example?
//* Write a function to deep clone another  object ?

//* What is the output of below ?
const obj = {
  a: "one",
  b: "two",
  a: "three",
};

//* What is the output of below ?

const a = {};

const b = { key: "b" };
const c = { key: "c" };
a[b] = 123;
a[c] = 456;

//*
console.log([..."Javascript"]);

//*

let objectOne = { a: 1 };
let objectTwo = { a: 1 };

console.log(objectOne == objectTwo);
console.log(objectOne === objectTwo);

//*
let person = { name: "Lydia" };
const members = [person];
person = null;
console.log(members);

//*
const value = { number: 10 };

const mulitply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

mulitply();
mulitply();
mulitply(value);
mulitply(value);

//*

const shape = {
  radius: 10,

  diameter() {
    return this.radius * 2;
  },

  perimeter: () => 2 * PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());
