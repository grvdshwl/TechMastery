/**
 * Fault Tolerance in Microservices
 * --------------------------------
 * Fault tolerance is the ability of a system to continue operating properly even if some of its components fail.
 * In microservices architectures, where there are many distributed services interacting with each other, it's
 * crucial to ensure that the system remains operational even when some services experience failures.
 *
 * Key Concepts of Fault Tolerance:
 * --------------------------------
 * 1. **Graceful Degradation**: The system should continue to function at reduced capacity even if some services fail.
 * 2. **Redundancy**: Deploy multiple instances of a service to ensure that if one instance fails, others can take over.
 * 3. **Timeouts**: Set time limits for service calls to avoid indefinite waiting in case a service becomes unresponsive.
 * 4. **Retries**: Implement retry logic to reattempt a failed request after a certain interval.
 * 5. **Circuit Breakers**: Automatically stop calling a failing service after repeated failures to prevent cascading issues.
 * 6. **Bulkheads**: Isolate components so that a failure in one part of the system doesn’t affect the rest.
 * 7. **Failover**: Automatically switch to a backup service or instance if the primary one fails.
 * 8. **Monitoring & Alerts**: Continuously monitor services and set up alerts for failures, latency spikes, or downtime.
 * 9. **Fallback Mechanisms**: Provide alternative responses or services when the main service is unavailable (e.g., cached data).
 *
 * User Case for Fault Tolerance:
 * ------------------------------
 * Imagine a large e-commerce platform where multiple microservices like **Product Service**, **User Service**,
 * **Order Service**, and **Payment Service** interact to handle user requests.
 *
 * Scenario:
 * - **Payment Service** becomes temporarily unavailable due to high traffic or a server crash.
 * - Instead of the entire checkout process failing, the system should handle the failure gracefully.
 * - The **Order Service** could use a circuit breaker pattern to stop further requests to the **Payment Service**
 *   after repeated failures and notify the user that the payment process is delayed, while saving the order details.
 * - Once the **Payment Service** recovers, retry logic could automatically attempt to process pending payments.
 *
 * Example: Fault Tolerance with Circuit Breaker in Node.js
 * --------------------------------------------------------
 */

// Simulating a Payment Service and Order Service using the Circuit Breaker pattern

const express = require("express");
const axios = require("axios");
const CircuitBreaker = require("opossum"); // Circuit breaker library

const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Simulating a Payment Service that sometimes fails
const paymentService = (req, res) => {
  // Simulate a failure 50% of the time
  const isSuccess = Math.random() > 0.5;

  if (isSuccess) {
    res.json({
      status: "Payment successful",
      paymentId: Math.random().toString(36).substring(7),
    });
  } else {
    res.status(500).json({ message: "Payment Service is down" });
  }
};

// Simulating the Order Service with Circuit Breaker to handle the payment service failures
const orderService = express();

// Circuit breaker options
const circuitBreakerOptions = {
  timeout: 5000, // Timeout for the request (5 seconds)
  errorThresholdPercentage: 50, // Percentage of failures to open the circuit
  resetTimeout: 10000, // Time before trying the request again after the circuit is opened
};

// Function to call Payment Service with a circuit breaker
const paymentServiceBreaker = new CircuitBreaker(async (userId, orderData) => {
  const response = await axios.post("http://localhost:4001/payment", {
    userId,
    orderData,
  });
  return response.data;
}, circuitBreakerOptions);

// Fallback function if Payment Service fails
paymentServiceBreaker.fallback(() => {
  return {
    message:
      "Payment Service is currently unavailable. Your order has been saved, and we will retry the payment later.",
  };
});

// Endpoint to create an order, with payment handled by the Payment Service
orderService.post("/order", async (req, res) => {
  const { userId, orderData } = req.body;

  try {
    // Try to process the payment
    const paymentResponse = await paymentServiceBreaker.fire(userId, orderData);

    // Respond with order details and payment confirmation
    res.status(200).json({
      message: "Order placed successfully!",
      orderId: Math.random().toString(36).substring(7),
      payment: paymentResponse,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to place order", error: error.message });
  }
});

// Running the services (Payment Service on port 4001, Order Service on port 4000)
const paymentApp = express();
paymentApp.post("/payment", paymentService); // Simulating Payment Service
paymentApp.listen(4001, () =>
  console.log("Payment Service running on port 4001")
);

orderService.listen(4000, () =>
  console.log("Order Service running on port 4000")
);

/**
 * Explanation:
 * ------------
 * 1. **Payment Service**: Simulates a service that occasionally fails (50% chance of failure).
 * 2. **Circuit Breaker**: Used in the Order Service to handle failures from the Payment Service.
 *    - After a certain threshold of failures (50% in this case), the circuit opens, preventing more requests to the failing service.
 *    - After a reset timeout (10 seconds), the circuit tries calling the service again.
 *    - If the service is still unavailable, the circuit remains open.
 * 3. **Fallback**: If the Payment Service is down, the fallback function is triggered, providing an alternative response
 *    (in this case, notifying the user that the order is saved and payment will be retried later).
 * 4. **Retries**: In a more robust implementation, you could add retry logic for failed payments, processing them once the service recovers.
 *
 * Fault Tolerance Concepts Demonstrated:
 * --------------------------------------
 * - **Circuit Breaker**: Prevents cascading failures by cutting off access to a failing service after repeated errors.
 * - **Fallback Mechanism**: Provides a fallback response when a service is unavailable.
 * - **Graceful Degradation**: Ensures that the system continues functioning (e.g., saving the order) even if one part (Payment Service) fails.
 *
 * Advantages of Fault Tolerance:
 * ------------------------------
 * 1. **Improved Resilience**: Fault-tolerant systems can handle failures gracefully without crashing.
 * 2. **Increased Availability**: Ensures that the system can continue operating even when individual services are down.
 * 3. **Prevents Cascading Failures**: Protects the entire system from becoming unresponsive due to the failure of a single service.
 * 4. **Better User Experience**: Users receive alternative responses, such as cached data or fallback messages, rather than seeing failures.
 */
