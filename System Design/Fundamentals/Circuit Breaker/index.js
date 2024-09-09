/**
 * Circuit Breaker Pattern
 * -----------------------
 * The Circuit Breaker pattern is a design pattern used to prevent a system from repeatedly trying to execute an operation
 * that is likely to fail, thereby avoiding cascading failures. It's commonly applied in microservices and distributed systems
 * to handle network failures or service outages gracefully.
 *
 * Key Points:
 * -----------
 * 1. **Failure Detection**: The circuit breaker monitors the number of failed attempts to connect to a service.
 * 2. **Open, Half-Open, Closed States**:
 *    - **Closed**: Normal operation. Requests are allowed to flow to the service.
 *    - **Open**: Requests are blocked for a period of time after a threshold of failures is reached.
 *    - **Half-Open**: After the timeout, a limited number of requests are allowed through to test if the service has recovered.
 * 3. **Threshold for Failures**: After a set number of failures, the circuit breaker will “trip” and open the circuit, stopping further calls.
 * 4. **Timeout**: The circuit breaker stays open for a set period (timeout) before transitioning to a half-open state to test recovery.
 * 5. **Graceful Degradation**: The circuit breaker allows the system to degrade gracefully by failing fast when a service is unavailable,
 *    returning fallback responses or error messages instead of making expensive and futile calls.
 * 6. **Retry Logic**: Once the timeout expires, a few requests are sent to check if the service has recovered.
 * 7. **Resilience**: The circuit breaker improves system resilience by preventing unnecessary stress on failing services.
 *
 * Use Case: Protecting Microservices from Service Failures
 * --------------------------------------------------------
 * Scenario:
 * - A microservice A depends on a microservice B to retrieve user information.
 * - If service B becomes unavailable, service A would continue sending requests, causing more load on service B and
 *   possibly overwhelming it.
 *
 * Solution:
 * - Implement a circuit breaker between microservice A and B. When service B fails repeatedly, the circuit breaker opens,
 *   preventing A from making further requests to B. After a timeout, the circuit breaker will allow some requests to test
 *   if B has recovered.
 *
 * Example: Circuit Breaker Implementation in JavaScript
 * -----------------------------------------------------
 */

class CircuitBreaker {
  constructor(maxFailures, timeout) {
    this.maxFailures = maxFailures; // Maximum number of failures before the circuit opens
    this.timeout = timeout; // Timeout in milliseconds before retrying
    this.failureCount = 0; // Current number of failures
    this.state = "CLOSED"; // Circuit state (CLOSED, OPEN, HALF-OPEN)
    this.lastFailureTime = null; // Time of the last failure
  }

  // Simulate making a request
  async makeRequest(requestFn) {
    if (this.state === "OPEN") {
      const now = new Date().getTime();
      if (now - this.lastFailureTime > this.timeout) {
        this.state = "HALF-OPEN"; // After timeout, move to HALF-OPEN state
      } else {
        console.log("Circuit is OPEN. Requests are being blocked.");
        return "Fallback response: Service is temporarily unavailable";
      }
    }

    try {
      const response = await requestFn(); // Attempt the request
      this.reset(); // On success, reset the circuit breaker
      console.log("Request successful:", response);
      return response;
    } catch (error) {
      this.recordFailure(); // On failure, record it
      console.log("Request failed:", error.message);

      if (this.failureCount >= this.maxFailures) {
        this.openCircuit(); // Open circuit if failure threshold is reached
      }

      return "Fallback response: Service failed";
    }
  }

  // Open the circuit
  openCircuit() {
    this.state = "OPEN";
    this.lastFailureTime = new Date().getTime();
    console.log("Circuit is now OPEN. Blocking further requests.");
  }

  // Reset the circuit on success
  reset() {
    this.failureCount = 0;
    this.state = "CLOSED";
    console.log("Circuit is now CLOSED. Requests are allowed.");
  }

  // Record a failure
  recordFailure() {
    this.failureCount += 1;
  }
}

// Example usage
async function unreliableService() {
  // Simulate a 50% chance of failure
  if (Math.random() > 0.5) {
    throw new Error("Service is unavailable");
  } else {
    return "Service response";
  }
}

// Instantiate a Circuit Breaker with max 3 failures and a timeout of 5000ms
const breaker = new CircuitBreaker(3, 5000);

// Simulate making multiple requests
(async function simulateRequests() {
  for (let i = 0; i < 10; i++) {
    console.log(`Request ${i + 1}`);
    const response = await breaker.makeRequest(unreliableService);
    console.log("Response:", response);
    await new Promise((r) => setTimeout(r, 1000)); // 1 second delay between requests
  }
})();

/**
 * Explanation:
 * ------------
 * 1. The `CircuitBreaker` class monitors requests to a service and opens the circuit when the number of failures exceeds a
 *    predefined threshold (`maxFailures`).
 * 2. If the circuit is open, no new requests are sent to the service, and a fallback response is returned.
 * 3. After a timeout period (`timeout`), the circuit moves to a "half-open" state where a limited number of requests are allowed
 *    to test if the service has recovered.
 * 4. If the service responds successfully, the circuit is closed, allowing normal requests to flow again.
 *
 * User Case: Circuit Breaker for a Payment Service
 * -----------------------------------------------
 * Scenario:
 * - An e-commerce platform relies on a third-party payment gateway for processing payments.
 * - The payment gateway becomes slow or starts failing intermittently due to high load.
 *
 * Solution:
 * - A circuit breaker is implemented between the e-commerce platform and the payment gateway.
 * - When the number of payment failures exceeds a threshold, the circuit breaker opens, and the platform stops sending requests
 *   to the gateway for a set period (timeout).
 * - After the timeout, the circuit breaker allows a few requests to check if the payment gateway has recovered, ensuring the platform
 *   doesn't overload the gateway.
 * - While the circuit is open, users are shown a message that the payment system is temporarily unavailable, and fallback options
 *   (like retrying later) are provided.
 *
 * Benefits of the Circuit Breaker Pattern:
 * ----------------------------------------
 * 1. **Fault Isolation**: Prevents a failure in one part of the system from spreading to other parts by "breaking the circuit."
 * 2. **Reduced Load on Failing Services**: Stops sending unnecessary requests to a service that is already failing, giving it
 *    time to recover.
 * 3. **Graceful Degradation**: Allows the system to degrade gracefully by returning fallback responses instead of waiting
 *    for a failing service.
 * 4. **Improved Resilience**: Increases overall system resilience by managing failures more efficiently.
 * 5. **Better User Experience**: Users receive immediate feedback (e.g., fallback messages) instead of waiting for a service
 *    to time out, improving the user experience during outages.
 *
 * Real-World Scenario: Netflix Circuit Breaker
 * --------------------------------------------
 * - **Netflix** uses the Circuit Breaker pattern to manage communication between its various microservices.
 * - If one service starts failing (e.g., the recommendation service), the circuit breaker trips, stopping requests to the service
 *   and returning fallback responses to users.
 * - After a timeout, Netflix will gradually test the service to see if it has recovered, preventing overload on a failing system.
 */
