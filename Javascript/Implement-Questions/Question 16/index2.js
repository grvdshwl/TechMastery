//* Write a function that deep clones a object
let user = {
  name: "Gaurav",
  age: 30,
  skills: { frontend: true, backend: false },
  tags: ["Developer", "FE", "BE"],
  sayHello: () => {
    return `Hi ${this.name}! ${this.age}`;
  },
};
