// Functional vs Non-Functional Requirements

// Functional Requirements
// -----------------------
// Functional requirements define what the system should do. They describe the behavior or functions of the system.
// Examples include:

// 1. User Authentication: The system must allow users to log in using a username and password.
function authenticateUser(username, password) {
  // Authentication logic here
}

// 2. Data Processing: The system must process user data and generate reports.
function processData(userData) {
  // Data processing logic here
}

// 3. Transaction Management: The system must allow users to create, update, and delete transactions.
function manageTransaction(transaction) {
  // Transaction management logic here
}

// 4. Search Functionality: The system must enable users to search for items using keywords.
function searchItems(keyword) {
  // Search logic here
}

// 5. Notifications: The system must send email notifications to users for certain events.
function sendNotification(userEmail, event) {
  // Notification logic here
}

// Non-Functional Requirements
// ---------------------------
// Non-functional requirements define how the system performs a task rather than the specific behaviors. They are often referred to as quality attributes of a system.
// Examples include:

// 1. Performance: The system must handle 1000 transactions per second.
// Ensuring performance might involve optimizing code, using efficient algorithms, etc.

// 2. Scalability: The system must be able to scale to support 10,000 concurrent users.
// Scalability might involve using load balancers, scaling databases, etc.

// 3. Reliability: The system must have 99.9% uptime.
// Reliability might involve implementing failover mechanisms, redundant systems, etc.

// 4. Security: The system must encrypt sensitive data in transit and at rest.
// Security measures might include using SSL/TLS, encryption algorithms, etc.

// 5. Usability: The system must be user-friendly and intuitive, with a maximum of 3 clicks to perform any major function.
// Usability might involve user interface design, user experience testing, etc.

// 6. Compliance: The system must comply with GDPR regulations.
// Compliance might involve data protection measures, user consent mechanisms, etc.
