//* Functional Requirements
//* https://app.diagrams.net/#G1BGHmmPcq9qupu9VgEbNXIELYuaVqLCdi#%7B%22pageId%22%3A%22zWcUh6njZ5WM0uNPp3_M%22%7D

//* Browse Movies and Shows
//* Search for Movies, Shows, and Events
//* Book Tickets for Movies, Shows, and Events
//* Notification for ticket booking status.

//* Non-Functional Requirements
//* Scalability
//* Low Latency (Performance)
//* High Availability
//* Security (Payment and Personal Data)
//* Reliability

//* Capacity Estimation
//* 100M total users
//* 30M monthly active users
//* 10M daily searches
//* 5M daily bookings
//* 5M reviews per month

//* We will use a RelationalDB for storing fairly static data such as the number of theaters, halls, or seats in theaters, and shard them by geolocation.

//* We will use a NoSQLDB like Cassandra for storing dynamic data such as movies data, shows data, reviews, and artist information, as this data will not always be consistent.

let newUser = {
  mobileNumber: "",
  email: "",
  fullName: "",
  password: "",
  dob: "",
  location: "",
};

let newBooking = {
  userId: "",
  movieId: "",
  showId: "",
  eventId: "",
  bookingTime: "",
  numberOfTickets: "",
  paymentDetails: {},
  bookingStatus: "",
};

let newReview = {
  userId: "",
  movieId: "",
  showId: "",
  eventId: "",
  rating: "",
  reviewMessage: "",
  reviewDate: "",
};
