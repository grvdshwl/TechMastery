// Hotstar Functional and Non-Functional Requirements
//* https://www.youtube.com/watch?v=G32ThJakeHk

//* Important Discussions
//* https://www.youtube.com/watch?v=36N1Bz7qW0A

// Functional Requirements
// 1. Users should be able to browse and search for content (movies, TV shows, sports).
// 2. Users should be able to play video content on demand.
// 3. Users should be able to create and manage profiles.
// 4. Users should be able to create and manage a watchlist.
// 5. Users should be able to rate and review content.
// 6. Users should be able to stream live sports events.

// Out of Scope
// 1. Detailed analytics on user behavior.
// 2. In-depth customization of the app's appearance beyond standard settings.

// Non-Functional Requirements
// 1. Performance (smooth streaming without buffering).
// 2. Scalability (handling millions of concurrent users).
// 3. Low Latency (minimal delay in live streams).
// 4. Security (protecting content from unauthorized access).
// 5. High Availability (99.99% uptime).

// Core Entities
// 1. User
// 2. Content
// 3. Profile
// 4. Watchlist
// 5. Review

// Example API Endpoint: Play Content
// POST /api/v1/content/play
let playContentData = {
  userId: "123456789",
  contentId: "987654321",
  profileId: "456789123",
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
};

// Content Data Schema
let contentData = {
  contentId: "string",
  title: "string",
  description: "string",
  genre: "string",
  duration: "number", // in minutes
  releaseDate: "date string",
  rating: "number", // average rating
  reviews: ["array of reviewIds"],
  createdAt: "date string",
  updatedAt: "date string",
};

// Capacity Estimation for 1 Million Active Users

// 1. Number of Users Streaming Content
// Total active users per day: 1,000,000
// Percentage of users streaming content: 50%
// Users streaming content: 1,000,000 * 0.50 = 500,000 users

// 2. Total Content Streams per Day
// Average number of streams per user per day: 3 streams
// Total number of streams per day: 500,000 users * 3 streams = 1,500,000 streams

// 3. Data Generated per Stream
// Data per stream: 2.5 GB (assuming HD quality, 2-hour stream)

// 4. Total Data Generated per Day
// Total data per day: 1,500,000 streams * 2.5 GB = 3,750,000 GB
// Convert to TB: 3,750,000 GB / 1,024 ≈ 3,662.11 TB

// 5. Monthly Data Usage
// Total data generated per month: 3,662.11 TB/day * 30 days ≈ 109,863.3 TB

// 6. Storage Considerations
// Raw storage requirement per month: 109,863.3 TB
// Redundancy (e.g., RAID, backups): Double the storage for redundancy and backups
// Total storage required per month: 109,863.3 TB * 2 ≈ 219,726.6 TB
