// 1. What is Node.js?

// Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to write server-side code using JavaScript, which was traditionally a client-side language. Node.js is event-driven, non-blocking, and uses an asynchronous, single-threaded event loop architecture. This makes it suitable for building scalable and high-performance applications, particularly for I/O-heavy tasks like web servers, real-time communication, and APIs.

// 2. How does Node.js work?

// Node.js operates on a single-threaded event loop. When an I/O operation (like reading a file or querying a database) is performed, Node.js does not block the execution thread. Instead, it registers a callback and moves on to the next task. Once the I/O operation is complete, the callback function is executed. This asynchronous, non-blocking model allows Node.js to handle a large number of simultaneous connections efficiently without needing multiple threads.

// Example:
// If we perform a file read operation using fs.readFile(), the event loop allows other operations to continue while the file is being read in the background, and the callback is executed when the file is ready.

// 3. What are the key features of Node.js?

// - Non-blocking I/O: Node.js is built on asynchronous, non-blocking I/O operations, meaning tasks like reading files, querying a database, or handling HTTP requests don’t block the execution thread.
// - Single-threaded event loop: Node.js uses a single-threaded event loop to manage multiple connections, which helps reduce the overhead of managing threads.
// - Cross-platform: Node.js runs on various platforms, including Windows, Linux, and macOS, making it a versatile choice for application development.
// - Fast execution: Node.js is built on Google's V8 JavaScript engine, which compiles JavaScript directly into machine code, providing fast execution.
// - Built-in libraries: Node.js provides a wide range of built-in libraries, like `fs`, `http`, `url`, and `path`, to assist in building server-side applications.

// Example:
// With Node.js, developers can use JavaScript for both client-side and server-side scripting, reducing the need for context-switching between different languages.

// 4. What is the event loop in Node.js?

// The event loop is the core feature of Node.js that allows it to handle multiple operations concurrently without blocking the execution of other tasks. It continuously checks if there are any tasks or events to process and executes them. In Node.js, when a task (like reading a file or handling an HTTP request) is initiated, it’s passed to the event loop, which processes it asynchronously while other tasks continue to run in parallel.

// The event loop consists of multiple phases:
// - Timers: Executes callback functions scheduled by setTimeout() and setInterval().
// - I/O callbacks: Executes callbacks for completed I/O operations, such as reading from a file or making a network request.
// - Idle, prepare: Internal use; allows the system to handle some low-priority operations.
// - Poll: Retrieves new events and executes I/O callbacks.
// - Check: Executes callbacks scheduled by `setImmediate()`.
// - Close callbacks: Handles cleanup for closed resources.

// Example:
// You might observe that non-blocking operations like file I/O don’t halt the execution of your other code, which is a direct result of the event loop.

// 5. What is the difference between `require` and `import` in Node.js?

// - `require` is the older method used to import modules in Node.js. It is synchronous and loads the module into memory when it’s required.
// Example:
// const fs = require('fs');

// - `import` is part of the ECMAScript modules (ESM) specification and is an asynchronous, more modern way to import modules. It is used in recent versions of Node.js (version 12 and above), but Node.js requires setting the "type": "module" in the package.json file to enable ESM.
// Example:
// import fs from 'fs';

// Note: While `require` is widely supported in Node.js, `import` is still emerging as the default choice for modern JavaScript modules.

// 6. What is npm, and how is it used in Node.js?

// npm (Node Package Manager) is the default package manager for Node.js. It is used to install and manage third-party libraries or packages required by a Node.js application. npm allows developers to easily add, update, and remove dependencies from their project. It also provides a registry of over a million open-source packages.

// Example to install a package using npm:
// npm install express

// The `package.json` file is where dependencies are listed, and it can be created with:
// npm init

// npm can also be used to manage scripts, such as starting the application or running tests:
// npm start
// npm test

// 7. What is the difference between `app.listen()` and `server.listen()` in Node.js?

// - `app.listen()` is a method in Express.js, a popular web framework for Node.js, that starts the server and listens for incoming requests.
// Example:
// const app = express();
// app.listen(3000, () => console.log('Server is running on port 3000'));

// - `server.listen()` is a method provided by the core Node.js `http` module. It is used to create an HTTP server that listens on a specified port.
// Example:
// const http = require('http');
// const server = http.createServer((req, res) => res.end('Hello World'));
// server.listen(3000, () => console.log('Server is running on port 3000'));

// Both methods start a server, but `app.listen()` is used when working with Express.js, while `server.listen()` is for the core `http` module.

// 8. How do you handle errors in Node.js?

// In Node.js, errors can be handled in multiple ways:
// - Try-catch block for synchronous code:
// Example:
// try {
//   let result = someFunction();
// } catch (error) {
//   console.error('Error:', error);
// }

// - Error-first callbacks for asynchronous code:
// Example:
// fs.readFile('file.txt', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log('File contents:', data);
// });

// - Promises with .catch():
// Example:
// const myPromise = new Promise((resolve, reject) => {
//   reject('An error occurred');
// });
// myPromise.catch(error => console.error(error));

// 9. What is a callback function in Node.js?

// A callback function is a function that is passed as an argument to another function and is executed when that function completes its operation. In Node.js, callback functions are commonly used for handling asynchronous operations like reading files, making network requests, and interacting with databases.

// Example of a callback function:
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File contents:", data);
  }
});
// In this case, the anonymous function `(err, data) => { ... }` is the callback function.

// 10. What is the role of the `process` object in Node.js?

// The `process` object in Node.js provides information about and control over the current Node.js process. It allows developers to access command-line arguments, environment variables, and exit codes. It also allows for terminating the process or performing cleanup operations.

// Example:
// process.env.PORT = 3000; // Setting environment variable
// console.log(process.argv); // Accessing command-line arguments
// process.exit(0); // Terminating the process with exit code 0
