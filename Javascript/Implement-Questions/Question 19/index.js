//* Implement a function that returns a new object after squashing the input object.

function squashObject(obj, prefix = "") {
  let squashedObj = {};

  for (let key in obj) {
    let newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof obj[key] === "object" && obj[key] !== null) {
      const nestedObj = squashObject(obj[key], newKey);
      squashedObj = { ...squashedObj, ...nestedObj };
    } else {
      squashedObj[newKey] = obj[key];
    }
  }

  return squashedObj;
}

// Example usage:
const inputObject = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    postal: 10001,
  },
  hobbies: ["reading", "traveling"],
  contact: {
    email: "john@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321",
    },
  },
};

const squashedObject = squashObject(inputObject);
console.log(squashedObject);
