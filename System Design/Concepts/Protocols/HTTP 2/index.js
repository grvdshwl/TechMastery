// HTTP/2 is a major revision of the HTTP protocol, designed to improve performance and efficiency
// over its predecessor, HTTP/1.1.

// Key features of HTTP/2 include:

// 1. Binary Protocol:
//    - HTTP/2 uses a binary format instead of the text-based format used by HTTP/1.1.
//    - This makes parsing more efficient and less error-prone.

// 2. Multiplexing:
//    - Multiple requests and responses can be sent over a single TCP connection simultaneously.
//    - This eliminates the need for multiple connections and reduces latency.

// 3. Header Compression:
//    - HTTP/2 uses HPACK compression to reduce the size of HTTP headers.
//    - This decreases overhead and improves performance, especially with repeated headers.

// 4. Stream Prioritization:
//    - Clients can assign priority levels to different streams (requests).
//    - The server can use this information to optimize resource allocation.

// 5. Server Push:
//    - The server can push resources (e.g., CSS, JavaScript files) to the client before the client requests them.
//    - This reduces the number of round-trips needed to load a web page.

// 6. Flow Control:
//    - HTTP/2 includes flow control mechanisms to manage data transfer rates between the client and server.
//    - This ensures efficient use of network resources and prevents congestion.

// Example of an HTTP/2 request and response:
// In HTTP/2, the structure of requests and responses is similar to HTTP/1.1, but in a binary format.

/*
// HTTP/2 Request (binary frame representation)
+------------------------------------+
| Frame Header                       |
| (Length, Type, Flags, Stream ID)   |
+------------------------------------+
| Frame Payload                      |
| (HTTP headers, data, etc.)         |
+------------------------------------+

// HTTP/2 Response (binary frame representation)
+------------------------------------+
| Frame Header                       |
| (Length, Type, Flags, Stream ID)   |
+------------------------------------+
| Frame Payload                      |
| (HTTP headers, data, etc.)         |
+------------------------------------+
*/

// Benefits of HTTP/2:
// - Reduced latency due to multiplexing and server push.
// - Better performance through header compression and binary framing.
// - More efficient use of network resources with flow control and stream prioritization.

// HTTP/2 is backward-compatible with HTTP/1.1, meaning that servers can support both protocols
// and fall back to HTTP/1.1 if the client does not support HTTP/2.

// To use HTTP/2, both the client (e.g., web browser) and server must support the protocol.
// Modern browsers and web servers typically have built-in support for HTTP/2.
