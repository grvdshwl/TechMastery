//* https://www.youtube.com/watch?v=mhUQe4BKZXs

// 1. Fixed Window Rate Limiting
// -----------------------------
// Description: Limits the number of requests per fixed time window (e.g., 100 requests per minute).
//
// Pros:
// - Simple to implement.
// - Works well when traffic is evenly distributed over time.
// - Suitable for APIs with predictable request patterns.
//
// Cons:
// - Bursts of requests at the edge of windows can cause spikes.
// - No fairness guarantee; some users may monopolize the quota.
// - Not ideal for high-traffic or unpredictable load patterns.

// 2. Sliding Window Rate Limiting
// -------------------------------
// Description: Uses a sliding time window to smooth out request limits. Combines elements of fixed window and sliding logs.
//
// Pros:
// - Smoother distribution of request limits.
// - Prevents spikes in traffic at window boundaries.
// - Provides better fairness over time.
//
// Cons:
// - More complex to implement than fixed window.
// - Slightly higher computational overhead due to window recalculations.
// - Still allows short bursts of traffic, though reduced compared to fixed window.

// 3. Token Bucket Rate Limiting
// -----------------------------
// Description: Tokens are generated at a fixed rate and stored in a bucket. Each request consumes a token, and the bucket refills over time.
//
// Pros:
// - Allows bursts within limits (up to the bucket size).
// - Simple to implement.
// - Smooths out request rate while accommodating temporary bursts.
//
// Cons:
// - Does not guarantee equal distribution of requests over time.
// - Limited by bucket size; larger bucket allows for more burst but increases risk of overload.
// - Need to balance token refill rate and bucket size carefully.

// 4. Leaky Bucket Rate Limiting
// -----------------------------
// Description: A leaky bucket limits the output rate of requests, regardless of the input rate. Excess requests are dropped.
//
// Pros:
// - Strictly enforces rate limits, even during bursts.
// - Smoother request flow compared to token bucket.
// - Easy to understand and implement.
//
// Cons:
// - Bursty traffic can lead to dropped requests.
// - Less flexible than token bucket in handling bursts.
// - Dropping requests may not be ideal for all applications (e.g., user experience could suffer).
