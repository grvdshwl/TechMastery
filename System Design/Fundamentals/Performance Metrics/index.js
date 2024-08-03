/*
 * Performance Metrics in System Design:
 *
 * - Definition:
 *   Performance metrics are quantitative measures used to evaluate the efficiency, responsiveness, and stability of a system.
 *   They help in understanding how well a system performs under various conditions and guide improvements and optimizations.
 *
 * - Key Performance Metrics:
 *
 *   - Latency:
 *     - Definition: The time it takes for a request to travel from the client to the server and back.
 *     - Example: The time taken for a user to receive a response after clicking a button.
 *     - Measurement: Often measured in milliseconds (ms).
 *     - Importance: Low latency is crucial for a responsive user experience.
 *
 *   - Throughput:
 *     - Definition: The number of requests a system can handle in a given period.
 *     - Example: The number of transactions processed per second by a database.
 *     - Measurement: Often measured in requests per second (RPS) or transactions per second (TPS).
 *     - Importance: High throughput is essential for handling large volumes of traffic.
 *
 *   - Scalability:
 *     - Definition: The ability of a system to handle increased load by adding resources.
 *     - Example: Adding more servers to handle more users.
 *     - Measurement: Can be vertical (adding more power to existing servers) or horizontal (adding more servers).
 *     - Importance: Scalability ensures the system can grow to meet demand.
 *
 *   - Availability:
 *     - Definition: The proportion of time a system is operational and accessible.
 *     - Example: A web service that is up and running 99.99% of the time.
 *     - Measurement: Often measured as a percentage (e.g., 99.99% uptime).
 *     - Importance: High availability is critical for reliability and user trust.
 *
 *   - Reliability:
 *     - Definition: The ability of a system to operate correctly over time without failure.
 *     - Example: A service that processes payments accurately without errors.
 *     - Measurement: Can be measured using mean time between failures (MTBF) or failure rate.
 *     - Importance: Reliable systems maintain functionality and prevent data loss.
 *
 *   - Response Time:
 *     - Definition: The total time it takes for a system to respond to a request.
 *     - Example: The time from when a search query is submitted to when the results are displayed.
 *     - Measurement: Often measured in milliseconds (ms).
 *     - Importance: Short response times improve user satisfaction.
 *
 *   - Resource Utilization:
 *     - Definition: The efficiency with which a system uses its resources (CPU, memory, disk I/O, network).
 *     - Example: The percentage of CPU usage during peak load.
 *     - Measurement: Typically measured as a percentage of total available resources.
 *     - Importance: Efficient resource utilization ensures cost-effectiveness and performance.
 *
 *   - Error Rate:
 *     - Definition: The frequency of errors occurring in the system.
 *     - Example: The number of failed API requests per 1000 requests.
 *     - Measurement: Often measured as a percentage or as errors per thousand requests.
 *     - Importance: Low error rates indicate a stable and reliable system.
 *
 *   - Capacity:
 *     - Definition: The maximum load a system can handle while maintaining acceptable performance levels.
 *     - Example: The maximum number of concurrent users a web application can support.
 *     - Measurement: Often measured in terms of users, requests, or transactions.
 *     - Importance: Understanding capacity helps in planning for future growth and avoiding bottlenecks.
 *
 * - Example Implementation (Pseudo Code):
 *
 *   // Measuring Latency
 *   const startTime = Date.now();
 *   sendRequestToServer(() => {
 *     const endTime = Date.now();
 *     const latency = endTime - startTime;
 *     console.log(`Latency: ${latency} ms`);
 *   });
 *
 *   // Measuring Throughput
 *   let requestCount = 0;
 *   const startTime = Date.now();
 *   setInterval(() => {
 *     sendRequestToServer(() => {
 *       requestCount++;
 *     });
 *   }, 100); // Send a request every 100 ms
 *
 *   setTimeout(() => {
 *     const endTime = Date.now();
 *     const throughput = requestCount / ((endTime - startTime) / 1000); // Requests per second
 *     console.log(`Throughput: ${throughput} RPS`);
 *   }, 10000); // Measure for 10 seconds
 */
