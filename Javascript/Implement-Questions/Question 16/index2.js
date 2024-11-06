//* Write a function that deep clones a object
function deepClone(obj) {
  // Handle null, undefined, or non-object types
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle arrays
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  // Handle objects
  const clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

// Usage
let user = {
  name: "Gaurav",
  age: 30,
  skills: { frontend: true, backend: false },
  tags: ["Developer", "FE", "BE"],
  sayHello: function () {
    return `Hi ${this.name}! ${this.age}`;
  },
};

let clonedUser = deepClone(user);
console.log(clonedUser);
