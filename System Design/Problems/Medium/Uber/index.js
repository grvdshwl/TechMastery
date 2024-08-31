//* https://www.youtube.com/watch?v=lsKU38RKQSo
//* https://app.diagrams.net/#G1ZyljfxKZ4ntVy_jRgnasqztqaYG-Gnrq#%7B%22pageId%22%3A%222ym2K8chmz79RotAsRRi%22%7D

// Uber Functional and Non-Functional Requirements

// Functional Requirements
// 1. User should be able to enter pickup and drop locations to get an estimate
// 2. Ride Booking based on estimate
// 3. Driver Matching, with drivers able to accept or decline and navigate to user
// 4. Ride Tracking

// Out of Scope
// 1. Car Types
// 2. Ratings of drivers and riders

// Non-Functional Requirements
// 1. Performance (especially in peak locations like a concert, event, or special holiday)
// 2. Scalability
// 3. Low Latency (matching in less than 1 min)
// 4. Consistency (one-to-one ride to driver match)
// 5. High Availability (excluding matching)

//* Core Entities
// 1. Driver
// 2. Rider
// 3. Ride
// 4. Location

//* Estimation of a ride
// POST /api/v1/rides/estimation
let estimationData = {
  pickupLocation: {},
  dropLocation: {},
};

// Example API Endpoint: Book a Ride
// POST /api/v1/rides/book
let bookRideData = {
  userId: "123456789",
  pickupLocation: {
    latitude: "37.7749",
    longitude: "-122.4194",
  },
  dropoffLocation: {
    latitude: "37.7849",
    longitude: "-122.4094",
  },
  rideType: "standard",
  paymentMethod: "credit_card",
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
};

//* Drivers acceptance or rejection of a ride
// POST /api/v1/ride/accept
let driverStatusData = {
  riderID: "string",
  status: "string",
};

// Ride Data Schema
let rideData = {
  rideId: "string",
  userId: "string",
  driverId: "string",
  pickupLocation: {
    latitude: "string",
    longitude: "string",
  },
  dropoffLocation: {
    latitude: "string",
    longitude: "string",
  },
  status: "string",
  fare: "number",
  createdAt: "date string",
  updatedAt: "date string",
};

// Capacity Estimation for 1 Million Active Users

// 1. Number of Users Booking Rides
// Total active users per day: 1,000,000
// Percentage of users booking rides: 10%
// Users booking rides: 1,000,000 * 0.10 = 100,000 users

// 2. Total Rides Booked per Day
// Average number of rides per user per day: 2 rides
// Total number of rides per day: 100,000 users * 2 rides = 200,000 rides

// 3. Data Generated per Ride
// Data per ride: 500 KB

// 4. Total Data Generated per Day
// Total data per day: 200,000 rides * 500 KB = 100,000,000 KB
// Convert to GB: 100,000,000 KB / 1,024 / 1,024 ≈ 95.37 GB

// 5. Monthly Data Usage
// Total data generated per month: 95.37 GB/day * 30 days ≈ 2.86 TB

// 6. Storage Considerations
// Raw storage requirement per month: 2.86 TB
// Redundancy (e.g., RAID, backups): Double the storage for redundancy and backups
// Total storage required per month: 2.86 TB * 2 ≈ 5.72 TB
