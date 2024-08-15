class ECommerceSystem {
  constructor() {
    this.products = [];
    this.recommendations = [];
    this.searchResults = [];
    this.cart = [];
    this.wishlist = [];
    this.orders = [];
    this.users = [];
  }

  // Add a product to the products array
  addProduct(product) {
    this.products.push(product);
    console.log(`Product added: ${product.name}`);
  }

  // Set product recommendations (e.g., based on popular products or user preferences)
  setRecommendations(recommendations) {
    this.recommendations = recommendations;
    console.log("Product recommendations updated.");
  }

  // Homepage - Display product recommendations
  displayRecommendations() {
    console.log("Product Recommendations:", this.recommendations);
  }

  // Search Page - Allow users to search for products
  searchProducts(query) {
    this.searchResults = this.products.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    console.log("Search Results:", this.searchResults);
  }

  // Add to Cart - Functionality to add products to the shopping cart
  addToCart(product) {
    const cartItem = this.cart.find((item) => item.product.id === product.id);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
    console.log(`${product.name} added to cart`);
  }

  // Remove from Cart - Functionality to remove products from the shopping cart
  removeFromCart(productId) {
    this.cart = this.cart.filter((item) => item.product.id !== productId);
    console.log(`Product with id ${productId} removed from cart`);
  }

  // Wishlist - Allow users to add products to their wishlist
  addToWishlist(product) {
    if (!this.wishlist.find((item) => item.id === product.id)) {
      this.wishlist.push(product);
      console.log(`${product.name} added to wishlist`);
    } else {
      console.log(`${product.name} is already in the wishlist`);
    }
  }

  // Remove from Wishlist - Functionality to remove products from the wishlist
  removeFromWishlist(productId) {
    this.wishlist = this.wishlist.filter((item) => item.id !== productId);
    console.log(`Product with id ${productId} removed from wishlist`);
  }

  // Order Processing - Handle order placement and processing
  processOrder(userId) {
    if (this.cart.length === 0) {
      console.log("Cart is empty");
      return;
    }

    const order = {
      id: this.orders.length + 1,
      userId,
      items: [...this.cart],
      date: new Date(),
      status: "Processing",
    };

    this.orders.push(order);
    this.cart = []; // Clear the cart after order is placed
    console.log("Order placed:", order);
  }

  // Payment - Process payments securely
  processPayment(orderId, paymentDetails) {
    const order = this.orders.find((order) => order.id === orderId);
    if (!order) {
      console.log("Order not found");
      return;
    }

    // Example payment processing logic
    order.status = "Paid";
    order.paymentDetails = paymentDetails;
    console.log("Payment processed for order:", order);
  }

  // View Past Orders - Allow users to view their past orders
  viewPastOrders(userId) {
    const userOrders = this.orders.filter((order) => order.userId === userId);
    console.log("Past Orders for user:", userOrders);
  }

  // User Management - Add a new user
  addUser(user) {
    this.users.push(user);
    console.log(`User added: ${user.name}`);
  }

  // User Management - Get user details
  getUser(userId) {
    return this.users.find((user) => user.id === userId);
  }
}

// Example usage:
const ecommerce = new ECommerceSystem();

// Adding products
ecommerce.addProduct({
  id: 1,
  name: "Product 1",
  description: "Description of product 1",
  price: 50,
});
ecommerce.addProduct({
  id: 2,
  name: "Product 2",
  description: "Description of product 2",
  price: 75,
});

// Setting recommendations
ecommerce.setRecommendations([ecommerce.products[0], ecommerce.products[1]]);

// Displaying recommendations
ecommerce.displayRecommendations();

// Searching for products
ecommerce.searchProducts("Product 1");

// Adding to cart
ecommerce.addToCart(ecommerce.products[0]);
ecommerce.addToCart(ecommerce.products[0]); // Increase quantity
ecommerce.addToCart(ecommerce.products[1]);

// Removing from cart
ecommerce.removeFromCart(1);

// Adding to wishlist
ecommerce.addToWishlist(ecommerce.products[0]);

// Removing from wishlist
ecommerce.removeFromWishlist(1);

// Adding users
ecommerce.addUser({ id: 1, name: "User 1", email: "user1@example.com" });
ecommerce.addUser({ id: 2, name: "User 2", email: "user2@example.com" });

// Processing order
ecommerce.processOrder(1);

// Processing payment
ecommerce.processPayment(1, { method: "Credit Card", amount: 125 });

// Viewing past orders
ecommerce.viewPastOrders(1);
