// FTP stands for File Transfer Protocol.
// It is a protocol used to transfer files between a client and a server over a network.
// FTP is commonly used for uploading, downloading, and managing files on remote servers.

// Key features and components of FTP:

// 1. Protocol and Ports:
//    - FTP operates over TCP/IP and uses two separate channels: the command channel and the data channel.
//    - The command channel uses port 21 by default.
//    - The data channel uses port 20 by default for active mode, but can use other ports in passive mode.

// 2. Modes of Operation:
//    - Active Mode:
//      - The client opens a port and listens for incoming data connections from the server.
//      - The server connects to the client to transfer data, which can be a security concern due to firewall issues.
//    - Passive Mode:
//      - The server opens a port and listens for incoming data connections from the client.
//      - The client connects to the server for data transfer, which is more firewall-friendly.

// 3. FTP Commands:
//    - FTP uses a set of commands to manage file transfers and server interactions.
//    - Some common FTP commands include:
//      - USER: Specifies the username for authentication.
//      - PASS: Specifies the password for authentication.
//      - LIST: Lists files and directories in the current directory.
//      - RETR: Retrieves (downloads) a file from the server.
//      - STOR: Stores (uploads) a file to the server.
//      - DELE: Deletes a file on the server.
//      - CWD: Changes the working directory on the server.
//      - PWD: Prints the current working directory on the server.
//      - QUIT: Ends the FTP session.

// Example of FTP Command Sequence:
/*
Client: USER username
Server: 331 Password required
Client: PASS password
Server: 230 User logged in
Client: LIST
Server: 150 Opening data connection
Server: 226 Transfer complete
Client: RETR file.txt
Server: 150 Opening data connection
Server: 226 Transfer complete
Client: QUIT
Server: 221 Goodbye
*/

// 4. Authentication:
//    - FTP supports username and password authentication for access control.
//    - Anonymous FTP is also supported, where users can log in with a generic username (usually "anonymous") and their email address as a password.

// 5. Security Considerations:
//    - Traditional FTP is not secure, as it transmits data, including usernames and passwords, in plaintext.
//    - For secure file transfers, protocols such as FTPS (FTP Secure) and SFTP (SSH File Transfer Protocol) are used.
//      - FTPS adds SSL/TLS encryption to FTP, protecting data in transit.
//      - SFTP operates over SSH, providing a secure channel for file transfers.

// How FTP works in practice:

// 1. Connection Establishment:
//    - The client establishes a connection to the FTP server on port 21.
//    - The server responds and the client sends authentication commands (USER and PASS).

// 2. Command and Response Exchange:
//    - The client sends FTP commands to interact with the server, and the server responds with status codes and data.
//    - Commands are used to navigate directories, upload and download files, and manage files.

// 3. Data Transfer:
//    - In active mode, the client opens a data port and the server connects to it for data transfer.
//    - In passive mode, the server opens a data port and the client connects to it for data transfer.

// 4. Connection Termination:
//    - The client ends the FTP session using the QUIT command.
//    - The server closes the connection after sending a final response.

// Benefits of FTP:
// - Simple and widely supported protocol for file transfers.
// - Provides basic file management capabilities (e.g., list, delete, rename).

// Limitations of FTP:
// - Lacks built-in security; data is transmitted in plaintext.
// - Passive mode can be complex to configure in some network environments.

// FTP remains a popular protocol for file transfers, but secure alternatives like FTPS and SFTP are preferred for sensitive data.
