class Singleton {
  constructor() {
    if (!Singleton.instance) {
      this.value = Math.random();
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  getValue() {
    return this.value;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1.getValue()); // Example output: 0.123456
console.log(instance2.getValue()); // Same value as instance1
console.log(instance1 === instance2); // true
