//* https://www.youtube.com/watch?v=nHh3DnjnPig
//* https://app.diagrams.net/#G11rmJonBnliUKaVLEQDnswcjx4cds8Zwa#%7B%22pageId%22%3A%22wYuGbLEXMrmzDVs2OPs0%22%7D

//* Food Delivery App Design

//* Functional Requirements
//* 1. Restaurants can upload menus: Restaurants should be able to upload their menu items, including details like name, description, price, and images.
//* 2. Users can search for restaurants or dishes: Users should be able to search for restaurants or specific dishes based on various criteria like location, cuisine, ratings, and price.
//* 3. Users can place orders: Users should be able to select items from a menu, add them to a cart, and place an order for delivery or pickup.
//* 4. Match a delivery partner and   track their order: Users should be able to track the status of their order in real-time, from preparation to delivery.
//* 5. Delivery personnel can manage deliveries: Delivery personnel should be able to view and manage their assigned deliveries, update the delivery status, and navigate to delivery locations.

//* Non-Functional Requirements
//* 1. Scalability: The app should be able to handle a large number of users, restaurants, and orders simultaneously, with an architecture that supports scaling both vertically and horizontally.
//* 2. Low Latency (Performance): The app should provide quick responses to user interactions, especially during search and order placement.
//* 3. High Availability: The app should be available 24/7 with minimal downtime, ensuring continuous access to users and restaurants.
//* 4. Data Consistency: Data consistency should be maintained across the system, especially for order processing and status updates.

//* Capacity Estimation
//* Total Users: 50M users
//* Monthly Active Users: 15M users

//* Storage Estimation
//* Number of Restaurants: 1M restaurants, with each restaurant having an average of 50 menu items.
//* Menu Storage: Each menu item is approximately 100 KB in size.
//* Total storage for all menu items: 1M * 50 * 100 KB = 5 TB

//* Order History Storage:
//* Assuming each order record is approximately 1 KB in size.
//* Monthly order volume: 15M users * 10 orders per month = 150M orders.
//* Monthly storage for order history: 150M * 1 KB = 150 GB

//* Data Models

//* User Model
let newUser = {
  username: "",
  email: "",
  password: "",
  fullName: "",
  dateOfBirth: "",
  gender: "",
  location: "",
  preferredCuisines: [],
  orderHistory: [],
  savedAddresses: [],
};

//* Restaurant Model
let newRestaurant = {
  restaurantId: "",
  name: "",
  location: "",
  cuisineType: "",
  menu: [],
  rating: "",
  reviews: [],
  contactInfo: "",
};

//* Menu Item Model
let menuItem = {
  menuItemId: "",
  restaurantId: "",
  name: "",
  description: "",
  price: "",
  imageUrl: "",
  category: "",
};

//* Order Model
let newOrder = {
  orderId: "",
  userId: "",
  restaurantId: "",
  items: [
    {
      menuItemId: "",
      quantity: 1,
    },
  ],
  totalPrice: "",
  deliveryAddress: "",
  status: "",
  orderTime: "",
  deliveryTime: "",
};
