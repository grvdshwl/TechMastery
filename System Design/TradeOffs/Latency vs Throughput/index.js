/**
 * System Design: Latency vs. Throughput
 *
 * Latency:
 * - Latency is the time taken for a request to travel from the source to the destination and receive a response.
 * - It measures the delay between sending a request and receiving a result.
 *
 * Characteristics:
 * - Typically measured in milliseconds (ms).
 * - Represents the speed of individual operations in the system.
 * - Affected by network delays, processing time, and system load.
 *
 * Example:
 * - A database query with 100ms latency means it takes 100ms from the time the query is sent to when the result is returned.
 *
 * Advantages of Low Latency:
 * - Faster response time for real-time systems.
 * - Improves user experience in applications that require quick feedback (e.g., gaming, financial trading systems).
 *
 * Disadvantages of High Latency:
 * - Can cause sluggish performance, especially in interactive or time-sensitive systems.
 * - Impacts the efficiency of synchronous operations where every operation depends on previous ones.
 *
 * Use Cases:
 * - Real-time applications such as online gaming, video conferencing, or stock trading platforms where immediate feedback is crucial.
 */

/**
 * Throughput:
 * - Throughput is the amount of data or number of operations that a system can process within a given time frame.
 * - It measures the system's overall capacity to handle requests over time.
 *
 * Characteristics:
 * - Typically measured in requests per second (RPS) or data throughput in megabytes/second (MBps).
 * - Represents the volume of work a system can handle, not the speed of individual operations.
 * - Affected by factors like hardware performance, system architecture, and concurrency.
 *
 * Example:
 * - A web server with a throughput of 1000 RPS can handle 1000 requests per second, regardless of the latency of each request.
 *
 * Advantages of High Throughput:
 * - Increases system efficiency, especially for large-scale applications.
 * - Improves scalability as the system can handle more requests concurrently.
 *
 * Disadvantages of Low Throughput:
 * - Limits the system’s capacity to handle concurrent users or operations, leading to bottlenecks.
 * - May lead to slower overall performance as the system gets overloaded with too many requests.
 *
 * Use Cases:
 * - Applications that require processing large amounts of data, such as video streaming services, file transfer systems, or big data processing.
 */

/**
 * Latency vs. Throughput:
 * - Latency focuses on how fast a single operation can be completed.
 * - Throughput focuses on how many operations can be processed in a given time.
 *
 * Trade-offs:
 * - Lowering latency can sometimes reduce throughput, as prioritizing fast response times may limit the number of requests the system can handle simultaneously.
 * - Increasing throughput can sometimes lead to higher latency, as the system processes more requests concurrently, causing some delays.
 *
 * Balancing Act:
 * - Systems should aim for both low latency and high throughput, but achieving this balance often depends on the specific use case.
 * - Real-time systems prioritize low latency, while large-scale data processing systems prioritize high throughput.
 */
