// System Design for Book My Show  in js comments.Also generate a code example separately
// https://app.diagrams.net/#G1BGHmmPcq9qupu9VgEbNXIELYuaVqLCdi#%7B%22pageId%22%3A%22zWcUh6njZ5WM0uNPp3_M%22%7D

//**************************************
// Functional Requirements
//**************************************

/**
 * - Browse Movies/Shows: Filter by genre, language, ratings, etc.
 * - Search: Autocomplete and advanced filters (by actor, location, etc.).
 * - Book Tickets: Real-time seat availability, multiple payment options, and booking confirmation.
 * - Notifications: Booking status updates via SMS, email, or push notifications.
 */

//**************************************
// Non-Functional Requirements
//**************************************

/**
 * - Scalability: Microservices architecture, horizontal scaling.
 * - Low Latency: Caching (Redis), fast searches, and seat updates.
 * - High Availability: Multi-region failover, active-passive replication.
 * - Security: PCI compliance, encryption, token-based authentication.
 * - Reliability: Error handling, retries for payments, monitoring.
 */

//**************************************
// Capacity Estimation
//**************************************

/**
 * - 100M total users.
 * - 30M monthly active users.
 * - 10M daily searches.
 * - 5M daily bookings.
 * - 5M reviews per month.
 */

//**************************************
// Database Design
//**************************************

/**
 * - Relational DB: Static data (theaters, seating), sharded by geolocation.
 * - NoSQL (Cassandra): Dynamic data (movies, reviews), high write throughput.
 */

let newUser = {
  mobileNumber: "1234567890",
  email: "user@example.com",
  fullName: "John Doe",
  password: "hashed_password", // Ensure passwords are stored securely with hashing (e.g., bcrypt)
  dob: "1990-01-01",
  location: "New York",
};

let newBooking = {
  userId: "user123", // User's ID from the database
  movieId: "movie123", // Movie ID if booking a movie
  showId: "show123", // Show ID if booking a show
  eventId: "", // Event ID if booking an event
  bookingTime: "2024-10-10T15:30:00Z",
  numberOfTickets: 2,
  paymentDetails: {
    paymentMethod: "credit_card",
    amount: 20.0,
    transactionId: "txn_123456",
  },
  bookingStatus: "confirmed", // Could be 'pending', 'confirmed', 'canceled'
};
