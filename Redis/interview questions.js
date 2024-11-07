// 1. How do you set and get a key-value pair in Redis?

// Redis Command to set a key-value pair:

// SET name "Alice"

/* Expected Output:
OK
*/

// Redis Command to get the value of the key:

// GET name

/* Expected Output:
"Alice"
*/

// 2. How can you check if a key exists in Redis?

// Redis Command to check if a key exists:

// EXISTS name

/* Expected Output:
1 // If the key exists
*/

// 3. How do you set a key with an expiration time?

// Redis Command to set a key with expiration (in seconds):

// SETEX session 60 "session_data"

/* Expected Output:
OK // Key 'session' will expire in 60 seconds
*/

// Redis Command to check the time-to-live (TTL) for the key:

// TTL session

/* Expected Output:
59 // Remaining seconds before expiration
*/

// 4. How do you increment the value of a key in Redis?

// Redis Command to increment a key value:

// INCR counter

/* Expected Output:
1 // If 'counter' was initially non-existent or zero, it starts at 1
*/

// Redis Command to increment the value again:

// INCR counter

/* Expected Output:
2 // Counter increments by 1 each time
*/

// 5. How can you use Redis for storing data in lists?

// Redis Command to push items to the left of a list:

// LPUSH users "Alice" "Bob" "Charlie"

/* Expected Output:
3 // Length of the list after pushing the items
*/

// Redis Command to retrieve all items in the list:

// LRANGE users 0 -1

/* Expected Output:
["Charlie", "Bob", "Alice"] // Returns items in reverse order due to LPUSH
*/

// 6. How do you use sets in Redis to store unique values?

// Redis Command to add items to a set (duplicate entries will be ignored):

// SADD countries "USA" "Canada" "USA" "India"

/* Expected Output:
3 // Only unique values are stored, so USA will not be duplicated
*/

// Redis Command to retrieve all items in the set:

// SMEMBERS countries

/* Expected Output:
["USA", "Canada", "India"] // Order of elements in sets is not guaranteed
*/

// 7. How do you perform a basic pub/sub (publish/subscribe) operation in Redis?

// Redis Command to subscribe to a channel (run this in a separate client):

// SUBSCRIBE notifications

/* Expected Output:
1) "subscribe"
2) "notifications"
3) (number of subscribers)
*/

// Redis Command to publish a message to the channel (in another client):

// PUBLISH notifications "New message received"

/* Expected Output (for subscribers):
1) "message"
2) "notifications"
3) "New message received"
*/

// 8. How do you use hash data structures in Redis?

// Redis Command to set multiple fields in a hash:

// HSET user:100 name "Alice" age "30" location "USA"

/* Expected Output:
3 // Number of fields added to the hash
*/

// Redis Command to retrieve all fields and values in the hash:

// HGETALL user:100

/* Expected Output:
{
  "name": "Alice",
  "age": "30",
  "location": "USA"
}
*/

// 9. How do you perform a transaction in Redis?

// Redis Command to execute a transaction:

// MULTI
// SET user:200 "John"
// INCR counter
// EXEC

/* Expected Output:
1) "OK" // Confirmation of SET command
2) (integer reply, e.g., 3) // Result of INCR command if counter was 2 before
*/

// 10. How do you use sorted sets (zsets) for ranking in Redis?

// Redis Command to add members with scores to a sorted set:

// ZADD leaderboard 100 "Alice" 150 "Bob" 120 "Charlie"

/* Expected Output:
3 // Number of elements added to the sorted set
*/

// Redis Command to retrieve the sorted set in descending order:

// ZREVRANGE leaderboard 0 -1 WITHSCORES

/* Expected Output:
[
  "Bob", "150",
  "Charlie", "120",
  "Alice", "100"
]
*/
