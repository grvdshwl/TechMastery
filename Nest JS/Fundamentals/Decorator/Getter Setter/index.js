// Accessor Decorator: Validates the value before setting it
function validate(target, key, descriptor) {
  const originalSetter = descriptor.set;

  descriptor.set = function (value) {
    if (value < 0) {
      console.log("Value cannot be negative");
    } else {
      originalSetter.call(this, value); // Call the original setter if valid
    }
  };

  return descriptor; // Return the modified descriptor
}

// Class with price property and validation
class Product {
  constructor(price) {
    this._price = price;
  }

  @validate // Apply the validate decorator to the setter
  set price(value) {
    this._price = value;
  }

  get price() {
    return this._price;
  }
}

const product = new Product(100);
product.price = -10; // Output: Value cannot be negative
