//* https://www.youtube.com/watch?v=psQzyFfsUGU

//* https://app.diagrams.net/#G1H8NOIj1Ked9VuzEgaUQyGk-CXjbWt201#%7B%22pageId%22%3A%22yoAWsqJnff1mNc_AJXSw%22%7D

// Functional Requirements:

// 1. User Registration and Authentication
// 2. User Profiles
// 3. Content Browsing and Discovery
// 4. Content Playback
// 5. Recommendations Engine
// 6. Content Creators can upload the video

// Non-Functional Requirements:

// 1. Performance
// 2. Scalability
// 3. Security
// 4. Reliability
//5. High availibility low constitency

//* Assumption
// 100M  monthly active users

//* Request payload
let requestPayload = {
  userId: "1234567890",
  movieId: "abcdef123456",
  requestType: "stream", // or "download"
  playbackSettings: {
    quality: "HD", // Options: "SD", "HD", "4K"
    language: "en", // Language preference
    subtitles: {
      enabled: true,
      language: "es", // Subtitle language
    },
    audioDescription: false, // Whether audio description is enabled
  },
  device: {
    type: "smartTV", // Device type (e.g., "smartphone", "tablet", "smartTV")
    os: "Tizen", // Operating system of the device
    appVersion: "5.6.1", // Version of the streaming app
  },
  network: {
    bandwidthMbps: 25, // User's current network bandwidth in Mbps
  },
};
