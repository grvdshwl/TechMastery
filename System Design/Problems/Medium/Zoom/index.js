//* https://www.youtube.com/watch?v=G32ThJakeHk

//U https://app.diagrams.net/?src=about#G1MY8L__LoIUc0EAm37qjRYXpvtQv53liW%23%7B%22pageId%22%3A%22mCXRlBBDBFRknkiu0M_9%22%7D
// Zoom Functional and Non-Functional Requirements

// Functional Requirements
// 1. Users should be able to create and join video meetings.
// 2. Users should be able to do  one on one calls.
// 3. Users should be able to share screens during meetings.
// 4. Users should be able to record meetings.

// Out of Scope
// 1. Chat during calls
// 2. Schedule the calls.

// Non-Functional Requirements
// 1. Performance (smooth video and audio quality even with high user activity).
// 2. Scalability (handling thousands of simultaneous meetings).
// 3. Low Latency (minimal lag in video and audio).
// 4. Security (end-to-end encryption for meetings).
// 5. High Availability (99.99% uptime).

// Core Entities
// 1. User
// 2. Meeting
// 3. Message
// 4. Recording

// Example API Endpoint: Create a Meeting
// POST /api/v1/meetings/create
let createMeetingData = {
  userId: "123456789",
  meetingTitle: "Project Update",
  startTime: "2024-08-31T12:00:00Z",
  duration: 60, // in minutes
  participants: ["987654321", "1122334455"],
  settings: {
    video: true,
    audio: true,
    screenShare: true,
    record: false,
  },
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

// Meeting Data Schema
let meetingData = {
  meetingId: "string",
  hostId: "string",
  title: "string",
  startTime: "date string",
  duration: "number", // in minutes
  participants: ["array of userIds"],
  settings: {
    video: "boolean",
    audio: "boolean",
    screenShare: "boolean",
    record: "boolean",
  },
  createdAt: "date string",
  updatedAt: "date string",
};

// Capacity Estimation for 1 Million Active Users

// 1. Number of Users Hosting Meetings
// Total active users per day: 1,000,000
// Percentage of users hosting meetings: 20%
// Users hosting meetings: 1,000,000 * 0.20 = 200,000 users

// 2. Total Meetings Held per Day
// Average number of meetings per user per day: 2 meetings
// Total number of meetings per day: 200,000 users * 2 meetings = 400,000 meetings

// 3. Data Generated per Meeting
// Data per meeting: 100 MB (assuming 1-hour meeting with average video quality)

// 4. Total Data Generated per Day
// Total data per day: 400,000 meetings * 100 MB = 40,000,000 MB
// Convert to TB: 40,000,000 MB / 1,024 / 1,024 ≈ 38.15 TB

// 5. Monthly Data Usage
// Total data generated per month: 38.15 TB/day * 30 days ≈ 1,144.5 TB

// 6. Storage Considerations
// Raw storage requirement per month: 1,144.5 TB
// Redundancy (e.g., RAID, backups): Double the storage for redundancy and backups
// Total storage required per month: 1,144.5 TB * 2 ≈ 2,289 TB
