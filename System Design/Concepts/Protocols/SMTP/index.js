// SMTP stands for Simple Mail Transfer Protocol.
// It is a protocol used for sending and routing emails between mail servers and clients over the Internet.

// Key features and components of SMTP:

// 1. Purpose:
//    - SMTP is used to send email messages from a client to a server or between servers.
//    - It handles the sending and relaying of email but not the retrieval or storage of emails.

// 2. Basic Operation:
//    - SMTP operates over TCP, typically using port 25 (or port 587 for secure SMTP with STARTTLS).
//    - It uses a command-response model where the client sends commands and the server responds with status codes.

// 3. Email Transmission:
//    - SMTP transmits email messages by establishing a connection between the sending client and the receiving mail server.
//    - The client sends the email message using SMTP commands, and the server acknowledges the receipt of the message.

// Example of SMTP Commands:
//    - HELO/EHLO: Initializes the conversation with the server and identifies the client.
//    - MAIL FROM: Specifies the sender's email address.
//    - RCPT TO: Specifies the recipient's email address.
//    - DATA: Starts the email message body transmission.
//    - QUIT: Ends the SMTP session.

// Example of SMTP Communication:
/*
Client: HELO example.com
Server: 250 Hello example.com
Client: MAIL FROM:<sender@example.com>
Server: 250 OK
Client: RCPT TO:<recipient@example.com>
Server: 250 OK
Client: DATA
Server: 354 End data with <CR><LF>.<CR><LF>
Client: Subject: Test email
Client: This is a test email message.
Client: .
Server: 250 OK: Message accepted
Client: QUIT
Server: 221 Bye
*/

// 4. Status Codes:
//    - SMTP uses status codes to communicate the result of commands.
//    - Common status codes include:
//      - 250: Requested action completed successfully.
//      - 354: Start mail input; end with <CR><LF>.<CR><LF>.
//      - 421: Service not available, closing transmission channel.
//      - 550: Requested action not taken: mailbox unavailable.

// 5. Authentication and Security:
//    - SMTP by itself does not provide authentication or encryption.
//    - To secure SMTP communications, extensions like STARTTLS can be used to encrypt the communication channel.
//    - SMTP AUTH can be used to authenticate clients to the server.

// How SMTP works in practice:

// 1. Connection Establishment:
//    - The client establishes a TCP connection with the SMTP server on the appropriate port (25 or 587).

// 2. Command and Response Exchange:
//    - The client sends SMTP commands to the server, and the server responds with status codes indicating success or failure.

// 3. Message Transmission:
//    - The client sends the email message including headers and body using the DATA command.
//    - The server acknowledges receipt of the message and processes it for delivery.

// 4. Connection Termination:
//    - The client ends the SMTP session using the QUIT command.
//    - The server closes the connection after sending a final response.

// Benefits of SMTP:
// - Reliable and standardized protocol for sending email.
// - Widely supported by email clients and servers.
// - Supports routing of email between different servers.

// Limitations of SMTP:
// - SMTP alone does not handle the retrieval or storage of email (handled by protocols like IMAP or POP3).
// - SMTP does not provide built-in security features; external mechanisms are needed for encryption and authentication.

// SMTP is essential for email communication, enabling the sending and routing of email messages between clients and servers.
