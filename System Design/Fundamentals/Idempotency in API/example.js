/**
 * Implementing Idempotency with Idempotency Keys
 *
 * Idempotency ensures that an API operation yields the same result,
 * even if the same request is made multiple times. This is critical
 * for operations like payment processing, where duplicate actions
 * can cause issues.
 *
 * Technique: Using Idempotency Keys
 * - The client generates a unique idempotency key for each request.
 * - The server uses this key to recognize and handle duplicate requests.
 *
 * Steps:
 * 1. **Client-side**:
 *    - Generate a unique idempotency key (e.g., a UUID).
 *    - Include this key in the request header.
 *
 * 2. **Server-side**:
 *    - On receiving a request, check if the idempotency key has been used before:
 *      - If yes, return the stored response associated with that key.
 *      - If no, process the request, store the response, and link it with the key.
 *
 * 3. **Storage**:
 *    - Store the idempotency keys and their corresponding responses
 *      for a period that covers potential retries.
 *
 * Example:
 */

// Client-side: Generate and use an idempotency key for a payment request
const idempotencyKey = generateUUID(); // Example key: '123e4567-e89b-12d3-a456-426614174000'

fetch('/api/payments', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Idempotency-Key': idempotencyKey
  },
  body: JSON.stringify({ amount: 100, currency: 'USD' })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

/**
 * Server-side: Handle requests with idempotency
 */
app.post('/api/payments', (req, res) => {
  const idempotencyKey = req.headers['idempotency-key'];
  const existingResponse = database.get(idempotencyKey);
  
  if (existingResponse) {
    // If the key exists, return the stored response to prevent duplication
    res.json(existingResponse);
  } else {
    // Process the payment and store the response
    const newPayment = processPayment(req.body);
    database.set(idempotencyKey, newPayment);
    res.json(newPayment);
  }
});

/**
 * This approach ensures that a request with the same idempotency key
 * is processed only once, making the system resilient to duplicate
 * requests and network issues.
 */
