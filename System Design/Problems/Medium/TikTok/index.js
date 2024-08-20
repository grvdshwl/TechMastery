//* https://www.youtube.com/watch?v=Z-0g_aJL5Fw
//* https://app.diagrams.net/#G1CpbYJx8jV9GHrDLd3Gc0DFoBiUXTmkU5#%7B%22pageId%22%3A%22mlvWj5oRsfZ8X1Zpc05c%22%7D

// Functional Requirements

// 1. Video Upload (30s to 1m)
// 2. Video Feed and Discovery (Followed + Recommendations)
// 3. Like, Comment

// Non-Functional Requirements

// 1. Performance
// 2. Scalability
// 3. Low Latency

// POST /api/v1/videos/upload

let uploadData = {
  userId: "123456789",
  video: {
    file: "<binary data>",
    title: "My Awesome Video",
    description: "Check out this!",
    size: "1mb",
    format: "mp4",
  },
};

let userData = {
  userId: "string",
  username: "string",
  email: "string",
  phoneNumber: "string",
  profilePicture: "string",
  createdAt: " date string",
  updatedAt: " date string",
};

let videoTableData = {
  videoId: "string",
  userId: "string",
  title: "string",
  description: "string",
  size: "string",
  format: "string",
  fileUrl: "string",
  thumbnailUrl: "string",
  createdAt: " date string",
  updatedAt: " date string",
};

// Capacity Estimation for 1 Million Active Users

// 1. Number of Users Uploading Videos
// Total active users per day: 1,000,000
// Percentage of users uploading videos: 5%
// Users uploading videos: 1,000,000 * 0.05 = 50,000 users

// 2. Total Data Uploaded per Day
// Average number of uploads per user per day: 2 videos
// Video size per upload: 25 MB
// Total number of uploads per day: 50,000 users * 2 videos = 100,000 uploads
// Total data uploaded per day: 100,000 * 25 MB = 2,500,000 MB
// Convert to terabytes (TB): 2,500,000 MB / 1024 ≈ 2.44 TB

// 3. Monthly Data Usage
// Total data uploaded per month: 2.44 TB/day * 30 days ≈ 73.2 TB

// 4. Storage Considerations
// Raw storage requirement per month: 73.2 TB
// Redundancy (e.g., RAID, backups): Double the storage for redundancy and backups
// Total storage required per month: 73.2 TB * 2 ≈ 146.4 TB
