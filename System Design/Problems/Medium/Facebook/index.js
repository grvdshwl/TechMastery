//* Functional Requirements
//* https://app.diagrams.net/#G1ZkpHRxHjVNuoTCLg-1dVoMOWfEyhrItq
//* Functional Requirements
//* 1. User Registration and Profile Creation
//*    - Users can register using email, phone number, or third-party authentication and create profiles.
//* 2. Post Creation (Text, Image, Video)
//*    - Users can create and share text, image, and video posts on their timeline.
//* 3. Friend Requests and Connections
//*    - Users can send friend requests, accept requests, and connect with others.
//* 4. News Feed
//*    - Users can view posts and updates from friends and pages they follow.
//* 5. Messaging (Chat and Video Calls)
//*    - Users can send messages and initiate video/audio calls through Messenger.
//* 6. Notifications
//*    - Users receive notifications for friend requests, comments, likes, and messages.
//* 7. Comments and Likes
//*    - Users can comment on and like posts shared by others.
//* 8. Groups and Pages
//*    - Users can create or join groups and pages to connect with communities or businesses.
//* 9. Events
//*    - Users can create and participate in events, and invite others.
//* 10. Ads and Sponsored Content
//*    - Businesses can run ads targeted at specific user demographics and interests.

//* Non-Functional Requirements
//* 1. Scalability
//*    - The platform must handle billions of users and posts per day.
//* 2. Low Latency (Performance)
//*    - Minimize delays in loading the news feed, sending messages, and viewing posts.
//* 3. High Availability
//*    - Ensure the platform is available 24/7 globally with minimal downtime.
//* 4. Security and Privacy
//*    - Ensure robust security for user data, including secure authentication and encryption.
//* 5. Reliability
//*    - The system should handle a massive volume of user interactions consistently and reliably.
//* 6. Data Integrity
//*    - Ensure consistency in data across different services such as posts, likes, and messages.

//* Capacity Estimation
//* 1. 2.9B total users (as of 2023)
//* 2. 1.9B daily active users
//* 3. Billions of posts per day
//* 4. Millions of real-time messages sent per minute
//* 5. Millions of active business pages and ads running daily

//* Database Strategy
//* 1. RelationalDB
//*    - Used for structured and transactional data such as user account information and friendship relations.
//* 2. NoSQLDB (Cassandra, HBase)
//*    - Used for highly dynamic and non-transactional data like user posts, comments, and messages.

//* Example User Object
let newUser = {
  userId: "", // Unique ID for the user
  fullName: "", // User's full name
  email: "", // User's email address
  mobileNumber: "", // User's mobile number
  password: "", // User's password
  dob: "", // Date of birth
  profilePicture: "", // URL of the user's profile picture
  friends: [], // Array of friend user IDs
  createdAt: "", // Account creation date
};

//* Example Post Object
let newPost = {
  postId: "", // Unique ID of the post
  userId: "", // ID of the user who created the post
  content: "", // Text content of the post
  mediaUrl: "", // URL of the image or video (if applicable)
  likes: 0, // Number of likes on the post
  comments: [], // Array of comment objects
  createdAt: "", // Date and time the post was created
};

//* Example Comment Object
let newComment = {
  commentId: "", // Unique ID of the comment
  postId: "", // ID of the post the comment belongs to
  userId: "", // ID of the user who wrote the comment
  commentText: "", // Text content of the comment
  createdAt: "", // Date and time the comment was made
};
