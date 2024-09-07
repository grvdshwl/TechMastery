//*  Example: Simple Fixed Window Rate Limiting in JavaScript

const RATE_LIMIT = 100; // maximum requests allowed
const TIME_WINDOW = 60 * 1000; // 1 minute in milliseconds

let requestCounts = {};

function rateLimit(user) {
  const currentTime = Date.now(); // get current time in milliseconds
  const userRequests = requestCounts[user] || {
    count: 0,
    startTime: currentTime,
  };

  if (currentTime - userRequests.startTime < TIME_WINDOW) {
    // If within the current time window
    if (userRequests.count < RATE_LIMIT) {
      // Allow the request if under the limit
      userRequests.count++;
      requestCounts[user] = userRequests;
      return true; // request allowed
    } else {
      // Deny the request if over the limit
      return false; // request denied
    }
  } else {
    // Reset the window and start a new count
    userRequests.count = 0;
    userRequests.startTime = currentTime;
    requestCounts[user] = userRequests;
    return true; // request allowed
  }
}

//*------------------------------------------------------------------------------------------------------------------------------------------------------

//* Sliding Window Rate Limiting Example in JavaScript

let MAX_REQUESTS = 100; // max requests
let WINDOW_SIZE = 60 * 1000; // 1 minute in milliseconds

let userRequests = {};

function slidingWindowRateLimit(user) {
  const currentTime = Date.now();
  const requestTimestamps = userRequests[user] || [];

  // Filter out timestamps that are older than the window size
  userRequests[user] = requestTimestamps.filter(
    (timestamp) => currentTime - timestamp < WINDOW_SIZE
  );

  if (userRequests[user].length < MAX_REQUESTS) {
    // Allow the request and record the timestamp
    userRequests[user].push(currentTime);
    return true; // request allowed
  } else {
    // Deny the request as the user has exceeded the rate limit
    return false; // request denied
  }
}

//*------------------------------------------------------------------------------------------------------------------------------------------------------

//* Token Bucket Rate Limiting Example in JavaScript

let BUCKET_CAPACITY = 100; // max tokens
let REFILL_RATE = 1; // tokens per second

let userBuckets = {};

function tokenBucketRateLimit(user) {
  const currentTime = Date.now();
  const lastRefill = userBuckets[user]?.lastRefill || currentTime;
  const tokens = userBuckets[user]?.tokens || BUCKET_CAPACITY;

  // Calculate the number of tokens to add since the last refill
  const tokensToAdd =
    Math.floor((currentTime - lastRefill) / 1000) * REFILL_RATE;

  // Calculate the new token count, ensuring it doesn't exceed the bucket capacity
  const newTokenCount = Math.min(tokens + tokensToAdd, BUCKET_CAPACITY);

  if (newTokenCount > 0) {
    // Allow the request and consume one token
    userBuckets[user] = { tokens: newTokenCount - 1, lastRefill: currentTime };
    return true; // request allowed
  } else {
    // Deny the request as there are no tokens left
    return false; // request denied
  }
}

//*------------------------------------------------------------------------------------------------------------------------------------------------------

//* Leaky Bucket Rate Limiting Example in JavaScript
const LEAKY_BUCKET_CAPACITY = 100; // Maximum number of requests the bucket can hold
const LEAK_RATE = 1; // Requests processed (leaked) per second
const MAX_REQUESTS_PER_SECOND = 5; // Maximum requests allowed per second (for stricter burst control)

const buckets = {}; // Stores the current load and last checked time for each user

function leakyBucketRateLimit(user) {
  const currentTime = Date.now(); // Current time
  const lastChecked = buckets[user]?.lastChecked || currentTime; // Last time the bucket was checked
  const currentLoad = buckets[user]?.currentLoad || 0; // Current load (requests in the bucket)

  // Calculate how many requests have leaked (been processed) since the last check
  const timeElapsed = (currentTime - lastChecked) / 1000; // Time elapsed in seconds
  const leakedAmount = Math.floor(timeElapsed * LEAK_RATE); // Requests leaked based on LEAK_RATE

  // Update the bucket's current load (cannot be negative)
  const newLoad = Math.max(currentLoad - leakedAmount, 0);

  // Calculate how many requests have been made in the last second
  const requestsThisSecond = buckets[user]?.requestsThisSecond || 0;

  // If the bucket is not full and rate limit for the second is not exceeded
  if (
    newLoad < LEAKY_BUCKET_CAPACITY &&
    requestsThisSecond < MAX_REQUESTS_PER_SECOND
  ) {
    // Increment the count for requests made in the current second
    const timeSinceLastChecked = Math.floor((currentTime - lastChecked) / 1000);
    const updatedRequestsThisSecond =
      timeSinceLastChecked > 0 ? 1 : requestsThisSecond + 1;

    // Update the bucket's state with the new load and current time
    buckets[user] = {
      currentLoad: newLoad + 1, // Add the new request
      lastChecked: currentTime,
      requestsThisSecond: updatedRequestsThisSecond, // Track requests in the current second
    };
    return true; // Request allowed
  } else {
    // Deny the request as either bucket is full or max rate per second is exceeded
    return false; // Request denied
  }
}
