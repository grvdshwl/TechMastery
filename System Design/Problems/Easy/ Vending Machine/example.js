// Define a Product class
class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

// Define the Inventory class
class Inventory {
  constructor() {
    this.products = new Map(); // Use a Map for easy product lookup
  }

  // Add a product to inventory
  addProduct(product) {
    this.products.set(product.id, product);
  }

  // Check if a product is available
  isProductAvailable(productId) {
    const product = this.products.get(productId);
    return product && product.quantity > 0;
  }

  // Reduce the quantity of the product by 1
  dispenseProduct(productId) {
    const product = this.products.get(productId);
    if (product && product.quantity > 0) {
      product.quantity -= 1;
      console.log(`------Dispensing :- ${product.name}------`);
    }
  }

  // Display available products
  displayProducts() {
    console.log("Available Products:");
    this.products.forEach((product) => {
      if (product.quantity > 0) {
        console.log(`${product.id}: ${product.name} - $${product.price}`);
      }
    });
  }
}

class PaymentSystem {
  constructor() {
    // Randomly set the initial balance between 1 and 10 dollars
    this.balance = Math.floor(Math.random() * 10) + 1;
    console.log(`Initial balance: $${this.balance}`);
  }

  // Process payment (additional payment added by the user)
  processPayment(amount) {
    this.balance += amount;
    console.log(
      `Payment of $${amount} received. New balance: $${this.balance}`
    );
    return true;
  }

  // Check if the user has sufficient balance
  hasSufficientBalance(amount) {
    return this.balance >= amount;
  }

  // Deduct the amount from the balance
  deductBalance(amount) {
    this.balance -= amount;
    console.log(`$${amount} deducted. Remaining balance: $${this.balance}`);
  }
}

// Define the VendingMachineController class
class VendingMachineController {
  constructor(inventory, paymentSystem) {
    this.inventory = inventory;
    this.paymentSystem = paymentSystem;
  }

  // Handle product selection
  selectProduct(productId) {
    if (this.inventory.isProductAvailable(productId)) {
      const product = this.inventory.products.get(productId);
      console.log(`You selected: ${product.name} - $${product.price}`);
      return product;
    } else {
      console.log("Product is unavailable.");
      return null;
    }
  }

  // Handle purchase
  purchaseProduct(productId) {
    console.log("-----------------------------------------");

    const product = this.selectProduct(productId);
    if (product) {
      if (this.paymentSystem.hasSufficientBalance(product.price)) {
        this.paymentSystem.deductBalance(product.price);
        this.inventory.dispenseProduct(productId);
        console.log("Thank you for your purchase!");
      } else {
        console.log("Insufficient funds.");
      }
    }
  }
}

// Example usage:

// Create products
const cola = new Product(1, "Cola", 1.5, 10);
const chips = new Product(2, "Chips", 2.0, 5);
const candy = new Product(3, "Candy", 1.0, 0); // Candy is out of stock

// Create inventory and add products
const inventory = new Inventory();
inventory.addProduct(cola);
inventory.addProduct(chips);
inventory.addProduct(candy);

// Display products
inventory.displayProducts();

// Create payment system
const paymentSystem = new PaymentSystem();

// Create vending machine controller
const vendingMachine = new VendingMachineController(inventory, paymentSystem);

// Purchase product
vendingMachine.purchaseProduct(1); // Purchasing Cola
vendingMachine.purchaseProduct(3); // Attempting to purchase Candy (out of stock)
