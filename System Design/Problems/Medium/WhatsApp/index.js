//* https://www.youtube.com/watch?v=vvhC64hQZMk

/**
 * Functional Requirements
 * 1. User Authentication
 * 2. Messaging
 * 3. Group Chats
 * 4. Sent + Delivered + Read Acknowledgement
 * 5. Online + Last Seen
 * 6. Multimedia Sharing
 * 7. Chat Temporary or permanent
 */

/**
 * Nonfunctional Requirements
 * 1. Availability
 * 2. Scalability
 * 3. Performance
 * 4. Security
 */

/**
 * Request Structure for Sending a Message in JSON
 */
const sendMessageRequest = {
  action: "sendMessage",
  senderId: "user_id",
  receiverId: "receiver_id",
  message: "Hello, this is a message!",
  timestamp: "2024-08-18T12:00:00Z",
};

/**
 * Request Structure for Multimedia Sharing in JSON
 */
const multimediaSharingRequest = {
  action: "shareMultimedia",
  senderId: "user_id",
  receiverId: "receiver_id",
  mediaType: "image",
  mediaUrl: "https://example.com/media.jpg",
  timestamp: "2024-08-18T12:00:00Z",
};

/**
 * Request Structure for Acknowledgements in JSON
 */
const messageAcknowledgementRequest = {
  action: "messageAcknowledgement",
  messageId: "message_id",
  status: "delivered", // "sent" or "read"
  timestamp: "2024-08-18T12:00:00Z",
};

/**
 * Request Structure for Online Status in JSON
 */
const onlineStatusRequest = {
  action: "updateStatus",
  userId: "user_id",
  status: "online", // "offline" or "last seen"
  lastSeen: "2024-08-18T12:00:00Z",
};
