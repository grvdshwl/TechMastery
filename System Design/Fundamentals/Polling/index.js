/**
 * Short Polling, Long Polling, and WebSockets:
 *
 * These are techniques used to enable real-time communication between a client
 * and a server. Each has its own characteristics and use cases.
 *
 * 1. Short Polling:
 *    - Definition: The client repeatedly sends requests to the server at regular
 *      intervals to check for updates.
 *    - Mechanism: The client sends an HTTP request to the server at fixed intervals
 *      (e.g., every few seconds). The server responds immediately, whether or not
 *      there is new data.
 *    - Pros:
 *      - Simple to implement.
 *      - Works with any server that supports HTTP.
 *    - Cons:
 *      - Inefficient: Frequent requests can cause high server load and network traffic.
 *      - Latency: Updates are only received as frequently as the polling interval.
 *    - Use Case: Suitable for applications where real-time updates are not critical,
 *      such as periodically updating a news feed.
 *
 * 2. Long Polling:
 *    - Definition: The client sends a request to the server, and the server holds
 *      the request open until there is new data to send back to the client.
 *    - Mechanism: The client sends an HTTP request to the server. The server holds
 *      the request open until new data is available or a timeout occurs. Once the
 *      client receives the response, it immediately sends another request.
 *    - Pros:
 *      - More efficient than short polling: Reduces the number of requests by keeping
 *        the connection open.
 *      - Lower latency: Clients receive updates as soon as they are available.
 *    - Cons:
 *      - Resource-intensive: Holding connections open can consume server resources.
 *      - Complexity: More complex to implement than short polling.
 *    - Use Case: Suitable for applications that require near-real-time updates but
 *      can tolerate some delay, such as chat applications or notifications.
 *
 * 3. WebSockets:
 *    - Definition: WebSockets provide a full-duplex communication channel over a
 *      single, long-lived connection, allowing for real-time, bi-directional communication
 *      between the client and the server.
 *    - Mechanism: The client and server establish a WebSocket connection using an
 *      HTTP handshake. Once established, the connection remains open, allowing both
 *      the client and server to send messages to each other at any time.
 *    - Pros:
 *      - Real-time communication: Provides instant updates with low latency.
 *      - Efficiency: Reduces overhead compared to HTTP-based polling by maintaining
 *        a single open connection.
 *      - Bi-directional: Both client and server can send and receive messages at any time.
 *    - Cons:
 *      - Complexity: More complex to implement and manage compared to polling techniques.
 *      - Compatibility: Requires WebSocket support on both the client and server.
 *    - Use Case: Ideal for applications requiring real-time, low-latency updates, such
 *      as online gaming, live chat, real-time collaboration tools, and financial trading
 *      platforms.
 *
 * Summary:
 * - Short Polling: Simple but inefficient, with higher latency. Suitable for less
 *   frequent updates.
 * - Long Polling: More efficient than short polling, with lower latency. Suitable for
 *   near-real-time updates.
 * - WebSockets: Most efficient and lowest latency, providing real-time, bi-directional
 *   communication. Suitable for real-time applications.
 */
