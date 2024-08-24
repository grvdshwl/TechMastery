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

const LEAKY_BUCKET_CAPACITY = 100; // max capacity of the bucket (in requests)
const LEAK_RATE = 1; // rate at which the bucket leaks (in requests per second)

const buckets = {};

function leakyBucketRateLimit(user) {
  const currentTime = Date.now();
  const lastChecked = buckets[user]?.lastChecked || currentTime;
  const currentLoad = buckets[user]?.currentLoad || 0;

  // Calculate how much the bucket has leaked since the last check
  const timeElapsed = (currentTime - lastChecked) / 1000; // convert milliseconds to seconds
  const leakedAmount = Math.floor(timeElapsed * LEAK_RATE);

  // Calculate the new load in the bucket, ensuring it doesn't drop below 0
  const newLoad = Math.max(currentLoad - leakedAmount, 0);

  if (newLoad < LEAKY_BUCKET_CAPACITY) {
    // Allow the request and add one unit to the current load
    buckets[user] = { currentLoad: newLoad + 1, lastChecked: currentTime };
    return true; // request allowed
  } else {
    // Deny the request as the bucket is full
    return false; // request denied
  }
}
