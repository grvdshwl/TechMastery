// Property Decorator: Custom getter and setter for the "name" property
function observable(target, key) {
  let value = target[key]; // Access the current property value

  const getter = () => value;
  const setter = (newValue) => {
    console.log(`Setting ${key} to ${newValue}`);
    value = newValue; // Update the property value
  };

  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}

// Class with observable property
class PersonWithObservable {
  @observable // Applying the property decorator to "name"
  name;

  constructor(name) {
    this.name = name;
  }
}

const person3 = new PersonWithObservable("John");
person3.name = "Alice"; // Output: Setting name to Alice
