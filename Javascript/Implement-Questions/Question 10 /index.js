//* Implement a function to convert all the keys in an object to camel case.

const toCamelCase = (string) => {
  let str = "";

  str += string[0];

  for (let i = 1; i < string.length; i++) {
    if (string[i] === " ") {
      continue;
    } else {
      if (string[i - 1] === " ") {
        str += string[i].toUpperCase();
      } else {
        str += string[i];
      }
    }
  }

  return str;
};

const convertToCamelCase = (obj) => {
  let newObject = {};

  for (let key in obj) {
    let newKey = toCamelCase(key);
    newObject[newKey] = obj[key];
  }

  return newObject;
};

let obj = {
  "one number": 1,
  "two number": 2,
  "three number": 3,
};

let result = convertToCamelCase(obj);
console.log(result);
