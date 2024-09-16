/**
 * System Design: TCP vs. UDP
 *
 * TCP (Transmission Control Protocol):
 * - TCP is a connection-oriented protocol that ensures reliable, ordered, and error-checked delivery of data between applications.
 * - It establishes a connection between the sender and receiver before any data transfer takes place, maintaining this connection for the entire communication session.
 *
 * Characteristics:
 * - **Connection-Oriented**: Requires a connection to be established and maintained between sender and receiver before communication.
 * - **Reliable Delivery**: Ensures all data packets are delivered without loss, duplication, or corruption (via error-checking and acknowledgment).
 * - **Ordered Delivery**: Guarantees that packets are delivered in the correct sequence.
 * - **Flow Control and Congestion Control**: Uses mechanisms to prevent network congestion and ensure the sender doesn’t overwhelm the receiver.
 * - **3-Way Handshake**: Establishes connections via a three-step handshake (SYN, SYN-ACK, ACK).
 *
 * Examples:
 * - **HTTP/HTTPS**: Websites and web services (e.g., browsers communicating with servers).
 * - **FTP**: File Transfer Protocol for transferring files.
 * - **SMTP**: Email communication.
 *
 * Advantages of TCP:
 * - **Reliable and Error-Free**: Data integrity is maintained, ensuring error-free, complete, and ordered delivery.
 * - **Connection-Oriented**: Suitable for applications requiring continuous communication between client and server.
 * - **Congestion Control**: TCP automatically adjusts to the available bandwidth, reducing the chance of network overload.
 *
 * Disadvantages of TCP:
 * - **Higher Overhead**: Due to connection setup, error-checking, and acknowledgment, TCP has more overhead compared to UDP.
 * - **Slower Performance**: The need to establish a connection and handle reliability mechanisms can lead to higher latency.
 * - **Heavy for Real-Time Applications**: TCP’s error correction can introduce delays, making it unsuitable for real-time applications.
 *
 * Use Cases for TCP:
 * - **Web Applications**: Websites, APIs, where data integrity is crucial.
 * - **File Transfers**: Applications that require complete and correct data (e.g., file-sharing systems).
 * - **Email Protocols**: Where message completeness is critical (e.g., sending emails via SMTP).
 */

/**
 * UDP (User Datagram Protocol):
 * - UDP is a connectionless protocol that sends data without ensuring delivery, order, or error checking.
 * - It is used in scenarios where low-latency transmission is more important than reliability.
 *
 * Characteristics:
 * - **Connectionless**: No connection needs to be established between the sender and receiver; each packet is sent independently.
 * - **Unreliable**: Does not guarantee packet delivery, order, or error checking.
 * - **Low Latency**: UDP has minimal overhead, resulting in faster data transmission.
 * - **No Congestion Control**: UDP sends packets as fast as the network allows, without regard to network congestion.
 *
 * Examples:
 * - **DNS**: Domain Name System (queries to resolve domain names to IP addresses).
 * - **VoIP**: Voice-over-IP for real-time voice communication.
 * - **Video Streaming**: Streaming services where minor data loss is acceptable to reduce latency.
 * - **Online Gaming**: Real-time multiplayer games where speed is more important than packet loss.
 *
 * Advantages of UDP:
 * - **Low Overhead**: No need for connection setup, error correction, or acknowledgments.
 * - **Fast Transmission**: Ideal for real-time applications that prioritize speed and can tolerate some data loss.
 * - **Efficient for Small Packets**: Great for sending small packets like real-time messages or lightweight data.
 *
 * Disadvantages of UDP:
 * - **Unreliable**: No guarantees of packet delivery, ordering, or error correction.
 * - **No Flow Control or Congestion Management**: Can overwhelm the network or receiver if sent too quickly.
 * - **No Acknowledgment**: The sender doesn’t know if the packet was successfully received, leading to potential data loss.
 *
 * Use Cases for UDP:
 * - **Real-Time Communication**: Video conferencing, VoIP, online gaming, where minimal delay is more important than guaranteed delivery.
 * - **Broadcast and Multicast**: Streaming or sending data to multiple recipients simultaneously.
 * - **DNS Queries**: Quick resolution of domain names where speed is crucial, and packet loss is tolerable.
 */

/**
 * TCP vs. UDP: Trade-offs
 * - **TCP**: Reliable, ordered delivery with error checking, but comes with more overhead and slower performance.
 * - **UDP**: Fast, lightweight, but unreliable and prone to data loss, making it suitable for real-time and low-latency applications.
 *
 * Choosing Between TCP and UDP:
 * - **TCP**: Choose TCP when data reliability and correctness are crucial, and latency is not a primary concern (e.g., web apps, file transfers).
 * - **UDP**: Choose UDP when real-time performance and low latency are more important than data integrity (e.g., streaming, gaming, VoIP).
 */
