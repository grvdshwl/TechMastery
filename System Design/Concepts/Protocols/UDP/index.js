// UDP stands for User Datagram Protocol.
// It is one of the core protocols of the Internet Protocol Suite, used for sending short messages called datagrams between devices on a network.

// Key features and components of UDP:

// 1. Connectionless Protocol:
//    - UDP is connectionless, meaning it does not establish a connection before sending data.
//    - Each packet (datagram) is sent independently, without any guarantee of order or delivery.

// 2. Simple Structure:
//    - UDP has a simple packet structure with minimal overhead.
//    - The header consists of only four fields: source port, destination port, length, and checksum.

// Example of UDP packet structure:
/*
+-----------------------+
|      Source Port      |
+-----------------------+
|    Destination Port   |
+-----------------------+
|       Length          |
+-----------------------+
|      Checksum         |
+-----------------------+
|        Data           |
+-----------------------+
*/

// 3. No Reliability:
//    - UDP does not provide mechanisms for ensuring reliable data delivery.
//    - There are no acknowledgments, retransmissions, or error recovery features.

// 4. No Flow Control or Congestion Control:
//    - UDP does not have flow control or congestion control mechanisms.
//    - The sender can transmit data at any rate, regardless of the receiver's capacity or network conditions.

// 5. Low Latency:
//    - Due to the lack of reliability and control mechanisms, UDP has lower latency compared to TCP.
//    - This makes it suitable for real-time applications where speed is critical.

// How UDP works in practice:

// 1. Data Transmission:
//    - The sender encapsulates data in a UDP packet with the necessary header fields.
//    - The packet is then sent to the destination IP address and port number specified in the header.

// Example of UDP data transmission:
/*
Sender: [UDP Packet] -> Network -> Receiver
*/

// 2. Data Reception:
//    - The receiver extracts the data from the received UDP packet.
//    - If any packets are lost or arrive out of order, it is up to the application to handle these issues.

// Benefits of UDP:
// - Low latency and minimal overhead.
// - Suitable for real-time applications such as video streaming, online gaming, and VoIP (Voice over IP).
// - Simple implementation and lower resource usage.

// Use cases for UDP:

// 1. Streaming Media:
//    - UDP is often used for live audio and video streaming, where timely delivery is more important than reliability.
//    - Examples include live broadcasts and IPTV (Internet Protocol Television).

// 2. Online Gaming:
//    - Many online multiplayer games use UDP to minimize latency and ensure fast-paced gameplay.
//    - Game developers implement their own mechanisms for handling packet loss and synchronization.

// 3. VoIP (Voice over IP):
//    - VoIP applications use UDP to transmit voice data with low latency.
//    - Lost packets are typically not retransmitted, as late delivery would degrade the call quality.

// 4. DNS (Domain Name System):
//    - DNS queries and responses are often sent using UDP due to the protocol's simplicity and low overhead.
//    - If a query or response is lost, the client can simply retry the request.

// Limitations of UDP:
// - No guarantee of data delivery, order, or integrity.
// - Lack of flow control and congestion control can lead to packet loss and network congestion.

// Despite its limitations, UDP is widely used in scenarios where speed and efficiency are prioritized
// over reliability, and where the application can tolerate or handle some degree of packet loss.
