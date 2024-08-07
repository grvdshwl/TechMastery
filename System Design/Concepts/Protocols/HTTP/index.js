// HTTP stands for HyperText Transfer Protocol
// It is the foundation of data communication on the World Wide Web.

// The HTTP protocol works as a request-response protocol between a client and a server.

// Here's how it generally works:

// 1. A client (usually a web browser) sends an HTTP request to the server.
//    Example: The user enters a URL in the browser's address bar and presses enter.

// 2. The HTTP request consists of:
//    - A request line: Method (GET, POST, etc.), URL, and HTTP version (e.g., HTTP/1.1).
//    - Headers: Key-value pairs providing additional information (e.g., User-Agent, Accept).
//    - (Optional) Body: Data sent with the request (e.g., form data in POST requests).

// Example of an HTTP request:
/*
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html
*/

// 3. The server processes the request and sends back an HTTP response.

// The HTTP response consists of:
//    - A status line: HTTP version, status code (e.g., 200 OK, 404 Not Found), and reason phrase.
//    - Headers: Key-value pairs providing additional information (e.g., Content-Type, Content-Length).
//    - (Optional) Body: The data requested (e.g., HTML content, JSON data).

// Example of an HTTP response:
/*
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1234

<!DOCTYPE html>
<html>
<head>
  <title>Example</title>
</head>
<body>
  <h1>Hello, world!</h1>
</body>
</html>
*/

// Common HTTP methods include:
// - GET: Retrieve data from the server (e.g., loading a webpage).
// - POST: Send data to the server (e.g., submitting a form).
// - PUT: Update existing data on the server.
// - DELETE: Remove data from the server.

// HTTP status codes indicate the result of the request:
// - 1xx: Informational (e.g., 101 Switching Protocols).
// - 2xx: Success (e.g., 200 OK, 204 No Content).
// - 3xx: Redirection (e.g., 301 Moved Permanently, 302 Found).
// - 4xx: Client Error (e.g., 400 Bad Request, 404 Not Found).
// - 5xx: Server Error (e.g., 500 Internal Server Error, 502 Bad Gateway).

// HTTP/2 and HTTP/3 are newer versions of the protocol designed to improve performance
// and efficiency, with features like multiplexing, header compression, and enhanced security.
