//* https://www.youtube.com/watch?v=lsKU38RKQSo
//* https://app.diagrams.net/#G1ZyljfxKZ4ntVy_jRgnasqztqaYG-Gnrq#%7B%22pageId%22%3A%222ym2K8chmz79RotAsRRi%22%7D

// Telegram Functional and Non-Functional Requirements

// Functional Requirements
// 1. Users should be able to send and receive messages.
// 2. Users should be able to create and join group chats.
// 3. Users should be able to share multimedia (images, videos, audio) in chats.
// 4. Users should be able to make voice and video calls.
// 5. Users should be able to use bots for various automated tasks.

// Out of Scope
// 1. In-depth analytics on user behavior.
// 2. Detailed customization of the app's appearance.

// Non-Functional Requirements
// 1. Performance (smooth operation even with high user activity).
// 2. Scalability (handling millions of users simultaneously).
// 3. Low Latency (messages delivered in real-time).
// 4. Security (end-to-end encryption for messages and calls).
// 5. High Availability (99.99% uptime).

// Core Entities
// 1. User
// 2. Message
// 3. Group
// 4. Media

// Example API Endpoint: Send a Message
// POST /api/v1/messages/send
let sendMessageData = {
  userId: "123456789",
  recipientId: "987654321",
  messageType: "text", // text, image, video, audio
  content: "Hello, World!",
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

// Message Data Schema
let messageData = {
  messageId: "string",
  senderId: "string",
  recipientId: "string",
  messageType: "string", // text, image, video, audio
  content: "string",
  timestamp: "date string",
};

// Capacity Estimation for 1 Million Active Users

// 1. Number of Users Sending Messages
// Total active users per day: 1,000,000
// Percentage of users sending messages: 80%
// Users sending messages: 1,000,000 * 0.80 = 800,000 users

// 2. Total Messages Sent per Day
// Average number of messages per user per day: 50 messages
// Total number of messages per day: 800,000 users * 50 messages = 40,000,000 messages

// 3. Data Generated per Message
// Data per message: 1 KB (assuming text messages)

// 4. Total Data Generated per Day
// Total data per day: 40,000,000 messages * 1 KB = 40,000,000 KB
// Convert to GB: 40,000,000 KB / 1,024 / 1,024 ≈ 38.15 GB

// 5. Monthly Data Usage
// Total data generated per month: 38.15 GB/day * 30 days ≈ 1.14 TB

// 6. Storage Considerations
// Raw storage requirement per month: 1.14 TB
// Redundancy (e.g., RAID, backups): Double the storage for redundancy and backups
// Total storage required per month: 1.14 TB * 2 ≈ 2.28 TB
