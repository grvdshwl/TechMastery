// TCP stands for Transmission Control Protocol.
// It is one of the core protocols of the Internet Protocol Suite, used for reliable, ordered, and error-checked delivery of data between applications running on hosts in a network.

// Key features and components of TCP:

// 1. Connection-Oriented:
//    - TCP is connection-oriented, meaning a connection is established between the client and server before data can be sent.
//    - This connection is maintained until all data has been exchanged and the connection is closed.

// 2. Three-Way Handshake:
//    - TCP uses a three-way handshake process to establish a connection.
/*
  SYN: The client sends a synchronization (SYN) packet to the server to initiate a connection.
  SYN-ACK: The server responds with a synchronization-acknowledgment (SYN-ACK) packet.
  ACK: The client sends an acknowledgment (ACK) packet to confirm the connection.
*/

// Example of a three-way handshake:
/*
Client:  SYN (Sequence number = x)
Server:  SYN-ACK (Sequence number = y, Acknowledgment number = x+1)
Client:  ACK (Sequence number = x+1, Acknowledgment number = y+1)
*/

// 3. Reliable Data Transfer:
//    - TCP ensures reliable data transfer by using acknowledgments (ACKs) and retransmissions.
//    - If a packet is lost or corrupted, it is retransmitted until it is correctly received and acknowledged.

// 4. Ordered Delivery:
//    - TCP guarantees that data is delivered in the same order it was sent.
//    - Sequence numbers are used to keep track of the order of packets.

// 5. Flow Control:
//    - TCP uses flow control to prevent the sender from overwhelming the receiver with too much data at once.
//    - The receiver advertises a window size, indicating the amount of data it can accept, and the sender adjusts its transmission rate accordingly.

// 6. Congestion Control:
//    - TCP uses congestion control mechanisms to prevent network congestion by adjusting the rate of data transmission based on network conditions.
//    - Common algorithms include TCP Reno, TCP Tahoe, and TCP Cubic.

// Example of TCP packet structure:
/*
+-----------------------+
|      Source Port      |
+-----------------------+
|    Destination Port   |
+-----------------------+
|  Sequence Number      |
+-----------------------+
| Acknowledgment Number |
+-----------------------+
| Data Offset | Flags   |
+-----------------------+
|   Window Size         |
+-----------------------+
|  Checksum             |
+-----------------------+
|   Urgent Pointer      |
+-----------------------+
|      Options          |
+-----------------------+
|        Data           |
+-----------------------+
*/

// How TCP works in practice:

// 1. Connection Establishment:
//    - The client and server perform the three-way handshake to establish a connection.

// 2. Data Transfer:
//    - Data is sent in segments, with each segment containing a sequence number and an acknowledgment number.
//    - The receiver acknowledges each segment, and the sender retransmits any segments that are not acknowledged.

// 3. Connection Termination:
//    - After data transfer is complete, the connection is terminated using a four-way handshake.
/*
  FIN: The sender sends a finish (FIN) packet to the receiver.
  ACK: The receiver acknowledges the FIN packet.
  FIN: The receiver sends a FIN packet to the sender.
  ACK: The sender acknowledges the receiver's FIN packet.
*/

// Benefits of TCP:
// - Reliable and ordered delivery of data.
// - Error checking and retransmission ensure data integrity.
// - Flow control and congestion control optimize network performance.

// TCP is widely used in applications where reliability is crucial, such as web browsing (HTTP/HTTPS),
// email (SMTP), file transfer (FTP), and remote administration (SSH).
