/**
 * System Design: Long-Polling vs. WebSockets
 *
 * Long-Polling:
 * - Long-polling is a communication pattern where the client sends an HTTP request to the server and holds the connection open until there is new data to send back.
 * - If no data is available, the server keeps the connection alive until a timeout occurs or new data becomes available.
 * - Once the server responds, the client immediately sends a new request to re-establish the connection.
 *
 * Characteristics:
 * - HTTP-based: Built on top of traditional HTTP, so it's compatible with existing infrastructure.
 * - Simulates real-time communication by maintaining the connection as long as possible.
 * - Higher latency compared to WebSockets due to HTTP overhead and reconnection delays.
 *
 * Example:
 * - A chat application using long-polling would keep sending repeated requests to the server and wait for new messages.
 *
 * Advantages:
 * - Simple to implement using HTTP, with broad support across servers and browsers.
 * - No special server or client configuration is needed beyond what’s required for standard HTTP.
 *
 * Disadvantages:
 * - Inefficient: Repeated HTTP requests create significant overhead, especially when there is no new data.
 * - Delayed responses: The server cannot push data instantly; it has to wait for the next client request.
 * - Server load: Constantly open connections and re-establishing new ones increase server resource consumption.
 *
 * Use Cases:
 * - Systems where real-time interaction is needed but WebSocket support is not available.
 * - Applications with low-frequency updates where polling is sufficient (e.g., stock price updates, notifications).
 */

/**
 * WebSockets:
 * - WebSockets provide full-duplex communication over a single, long-lived connection between the client and server.
 * - Unlike HTTP, WebSockets allow both the client and the server to send data to each other at any time without needing to re-establish the connection.
 * - WebSockets are initiated via an HTTP handshake, then upgraded to a WebSocket connection for persistent communication.
 *
 * Characteristics:
 * - Full-duplex: Allows real-time, two-way communication without the overhead of multiple HTTP requests.
 * - Lower latency compared to long-polling due to continuous connection.
 * - Stateful protocol, meaning the connection is maintained unless explicitly closed by the client or server.
 *
 * Example:
 * - A real-time collaborative editing tool (e.g., Google Docs) uses WebSockets to instantly sync updates between users.
 *
 * Advantages:
 * - Real-time communication: Data can be pushed from server to client instantly, without the client needing to request it.
 * - Efficient: Reduces network overhead by maintaining a persistent connection and avoiding repeated HTTP requests.
 * - Scalable: Better suited for applications with high-frequency data exchanges (e.g., online games, live chat).
 *
 * Disadvantages:
 * - More complex to implement compared to long-polling, requiring WebSocket servers and infrastructure.
 * - Not all environments fully support WebSockets (e.g., certain firewalls or proxies may block connections).
 *
 * Use Cases:
 * - Applications requiring low-latency, real-time updates, such as live chat, gaming, financial trading platforms.
 * - IoT (Internet of Things) systems where devices need continuous communication with a central server.
 */

/**
 * Long-Polling vs. WebSockets:
 * - Long-Polling: Simulates real-time communication by continuously sending requests, but introduces higher overhead and delays.
 * - WebSockets: Provides true real-time, two-way communication with lower overhead and latency.
 *
 * Trade-offs:
 * - **Long-Polling** is easier to set up and can work in environments where WebSockets are restricted.
 * - **WebSockets** are more efficient for real-time communication, especially for high-frequency updates, but require more complex server setup.
 *
 * Choosing Between the Two:
 * - **Long-Polling** is suitable for simpler systems or where real-time communication is not critical.
 * - **WebSockets** are preferred for high-performance, real-time applications that demand instant data transmission.
 */
