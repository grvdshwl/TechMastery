//* https://www.youtube.com/watch?v=iyLqwyFL0Zc
//* https://www.youtube.com/watch?v=tndzLznxq40

//* https://app.diagrams.net/#G1L656xK0S00eGEgniVbo74DD8ZvzR_rRP#%7B%22pageId%22%3A%22uXpgMk8L_QYsp7dRKy11%22%7D

//* Functional Requirements
// 1. Profile (Bio, Image)
// 2. Feed / Recommendation
// 3. Matching
// 4. Private Messaging with images and videos

//* Extra
// 1. Super Like
// 2. Monitoring and analytics
// 3. Subscription

//* Non-Functional Requirements
// 1. Scalability
// 2. Performance
// 3. Availability

//* Traffic
// 1. 50M users
// 2. 1 Million active users per day
// 3. 1 billion matches per day
// 4. 500k new users daily

//* Capacity Estimation

// 1. **User Storage**:
//    - Profile data:
//      - Bio: ~5KB
//      - Images: 6 images * 100KB = 600KB per user
//      - Total profile storage: ~605KB per user
//    - 50M users * 605KB = ~30.25TB storage required for existing user profiles.

//    **New Users Daily**:
//    - 500k new users * 605KB = ~288GB of new storage required daily for new profiles.

// 2. **Feed / Recommendation**:
//    - Assuming 20 recommendations per user, with each recommendation ~2KB.
//    - 50M users * 20 recommendations * 2KB = ~2TB daily recommendation data.

// 3. **Matching System**:
//    - 1 billion matches/day. If each match stores 1KB of data (user IDs, match time, etc.).
//    - 1 billion * 1KB = ~1TB per day.

// 4. **Messaging System**:
//    - Average message size ~1KB. Assuming 10 messages per active user per day.
//    - 1M active users * 10 messages * 1KB = ~10GB per day.
//    - For images/videos, assuming 100KB per image and 1MB per video, with 2 images and 1 video per active user daily.
//    - 1M * (2 images * 100KB + 1 video * 1MB) = ~3.2TB per day for media storage.

let userData = {
  userId: "98765",
  username: "dancequeen",
  bio: "Dancer & choreographer | Love to share my moves",
  age: 22,
  location: "Los Angeles, CA",
  profileImages: [],
  preferences: {
    lookingFor: "Friendship, Networking",
    ageRange: [18, 30],
    interests: ["Dance", "Choreography", "Fitness"],
  },
};

//* Recommendation Requirements

// 1. Filter inactive users
//    - Remove users who have not been active within a specified timeframe.

// 2. Filter users based on distance
//    - Only include users within a specified distance, e.g., 50km from the current user.

// 3. Adjust filtering based on match activity
//    - For users with high match activity: tighten filtering criteria to ensure higher quality matches.
//    - For users with low match activity: relax filtering criteria to increase the chance of finding matches.
