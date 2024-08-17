//* https://www.youtube.com/watch?v=VJpfO6KdyWE

//* https://app.diagrams.net/#G1NnTOzXg0Bb-FNkqOtcIBYKqGY11OxPVz#%7B%22pageId%22%3A%22GRSbobaCsmlOT7Ue3IxG%22%7D

// Functional Requirements

// 1. User Registration and Authentication
// 2. User Profile Management
// 3. Content Upload and Sharing
// 4. Feed and Content Discovery
// 5. Stories
// 6. Direct Messaging
// 7. Notifications
// 8. Search and Explore
// 9. Privacy and Security
// 10. Analytics and Insights

// Non-Functional Requirements

// 1. Performance
// 2. Scalability
// 3. Reliability and Availability
// 4. Security
// 5. Compliance

//* Capacity Estimation of 10 millions active users uploading 2 photos 5 mb  every month.
//* 10,000,000 * 5  * 2 = 100,000,000 MB = 100 TB = 0.1 PB storage every month

let userData = {
  id: "",
  name: "",
  username: "",
  phone: "",
};

let imageData = {
  id: "",
  userID: "",
  url: "",
  location: "",
  caption: "",
};

let followers = {
  [userId]: [],
};
