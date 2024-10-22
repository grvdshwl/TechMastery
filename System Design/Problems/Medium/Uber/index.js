//* https://www.youtube.com/watch?v=lsKU38RKQSo
//* https://app.diagrams.net/#G1ZyljfxKZ4ntVy_jRgnasqztqaYG-Gnrq#%7B%22pageId%22%3A%222ym2K8chmz79RotAsRRi%22%7D

// Uber Functional and Non-Functional Requirements

// Functional Requirements
// 1. Users should be able to request rides.
// 2. Drivers should be able to accept or decline ride requests.
// 3. Users should be able to track their ride in real-time.
// 4. Users should be able to rate drivers and provide feedback after a ride.
// 5. Users should be able to pay for rides through multiple payment methods.
// 6. Drivers should be able to view their ride history and earnings.

// Out of Scope
// 1. In-depth analytics on user preferences and patterns.
// 2. Customization of the app’s appearance (themes, skins, etc.).

// Non-Functional Requirements
// 1. Performance: Fast response times even during peak ride requests.
// 2. Scalability: Able to handle millions of concurrent users (riders and drivers).
// 3. Reliability: Ensure 99.99% uptime for the service.
// 4. Security: Ensure user data (payment info, personal details) is encrypted.
// 5. Low Latency: Quick pickup response times, real-time location tracking.
// 6. Availability: The service should be available globally, across multiple regions.

// Core Entities
// 1. User (rider and driver)
// 2. Ride (ride details, fare, pickup and drop-off locations)
// 3. Payment (payment methods, transaction history)
// 4. Rating (user and driver feedback)

// Example API Endpoint: Request a Ride
// POST /api/v1/rides/request
let requestRideData = {
  userId: "123456789",
  pickupLocation: { lat: 37.7749, long: -122.4194 }, // San Francisco
  dropoffLocation: { lat: 37.3382, long: -121.8863 }, // San Jose
  rideType: "standard", // or 'premium', 'shared', etc.
  paymentMethodId: "987654321",
  timestamp: "2024-08-31T12:34:56Z",
};

// User Data Schema
let userData = {
  userId: "string",
  username: "string",
  email: "string",
  phoneNumber: "string",
  profilePicture: "string",
  createdAt: "date string",
  updatedAt: "date string",
  userType: "string", // rider or driver
};

// Ride Data Schema
let rideData = {
  rideId: "string",
  riderId: "string",
  driverId: "string",
  pickupLocation: {
    lat: "number",
    long: "number",
  },
  dropoffLocation: {
    lat: "number",
    long: "number",
  },
  fare: "number", // in the local currency
  rideStatus: "string", // requested, accepted, in-progress, completed, canceled
  timestamp: "date string",
};

// Capacity Estimation for 1 Million Active Users

// 1. Number of Users Requesting Rides
// Total active users per day: 1,000,000
// Percentage of users requesting rides: 50%
// Users requesting rides: 1,000,000 * 0.50 = 500,000 users

// 2. Total Rides Requested per Day
// Average number of rides per user per day: 2 rides
// Total number of rides per day: 500,000 users * 2 rides = 1,000,000 rides

// 3. Data Generated per Ride Request
// Data per ride: 2 KB (ride details including location, user, driver, fare)

// 4. Total Data Generated per Day
// Total data per day: 1,000,000 rides * 2 KB = 2,000,000 KB
// Convert to GB: 2,000,000 KB / 1,024 / 1,024 ≈ 1.91 GB

// 5. Monthly Data Usage
// Total data generated per month: 1.91 GB/day * 30 days ≈ 57.3 GB

// 6. Storage Considerations
// Raw storage requirement per month: 57.3 GB
// Redundancy (e.g., RAID, backups): Double the storage for redundancy and backups
// Total storage required per month: 57.3 GB * 2 ≈ 114.6 GB
