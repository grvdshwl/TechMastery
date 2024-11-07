// 1. How do you create a basic HTTP server in Node.js?

// Node.js Code to create an HTTP server:
const http = require("http");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});
server.listen(3000, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3000/");
});
/* Expected Output:
Server running at http://127.0.0.1:3000/
*/

// When accessing http://127.0.0.1:3000 in a browser:
("Hello World");

// 2. How do you read a file using Node.js?

// Node.js Code to read a file asynchronously:
const fs = require("fs");
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
/* Expected Output:
Content of 'example.txt' // Assuming 'example.txt' exists in the same directory
*/

// 3. How do you write data to a file using Node.js?

// Node.js Code to write data to a file asynchronously:
fs.writeFile("output.txt", "This is a test message.", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File has been written.");
  }
});
/* Expected Output:
File has been written. // If successful, 'output.txt' will contain "This is a test message."
*/

// 4. How do you create and use a simple Express.js route?

// Node.js Code to create an Express.js route:
const express = require("express");
const app2 = express();
app2.get("/", (req, res) => {
  res.send("Hello Express");
});
app2.listen(3000, () => {
  console.log("Server running at http://127.0.0.1:3000/");
});
/* Expected Output:
Server running at http://127.0.0.1:3000/
*/

// When accessing http://127.0.0.1:3000 in a browser:
("Hello Express");

// 5. How do you handle errors in asynchronous code using Node.js?

// Node.js Code using Promises with .catch() for error handling:
const myPromise = new Promise((resolve, reject) => {
  let isError = true;
  if (isError) {
    reject("Something went wrong");
  } else {
    resolve("Success!");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
/* Expected Output:
Something went wrong // Because the promise was rejected
*/

// 6. How do you use middleware in Express.js?

// Node.js Code to use middleware in Express.js:
const app = express();
app.use((req, res, next) => {
  console.log("Middleware is running");
  next();
});
app.get("/", (req, res) => {
  res.send("Hello from Express");
});
app.listen(3000, () => {
  console.log("Server running at http://127.0.0.1:3000/");
});
/* Expected Output:
Middleware is running // This will appear in the console before "Hello from Express" is returned to the client
*/

// When accessing http://127.0.0.1:3000 in a browser:
("Hello from Express");

// 7. How do you handle POST requests in Express.js?

// Node.js Code to handle POST requests in Express.js:
app.post("/submit", express.json(), (req, res) => {
  console.log(req.body); // Logs the parsed JSON body from the request
  res.send("Data received");
});
/* Expected Output:
{ key: "value" } // Assuming the POST request sends a JSON body like { "key": "value" }
*/

// 8. How do you work with environment variables in Node.js?

// Node.js Code to access environment variables:
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
/* Expected Output:
Server running at http://127.0.0.1:3000/ // If the PORT environment variable is not set
*/

// You can set the PORT environment variable like this:
process.env.PORT = 5000;
// Now, it will output:
// Server running at http://127.0.0.1:5000/

// 9. How do you use Node.js streams?

// Node.js Code to use Readable streams:
const readableStream = fs.createReadStream("example.txt", "utf8");
readableStream.on("data", (chunk) => {
  console.log(chunk);
});
/* Expected Output:
Content of 'example.txt' // Logs chunks of data as the file is read
*/

// 10. How do you handle query parameters in Express.js?

// Node.js Code to handle query parameters:
app.get("/search", (req, res) => {
  const { query } = req.query; // Extract query parameter
  res.send(`Searching for: ${query}`);
});
/* Expected Output:
Searching for: nodejs // If accessed with http://127.0.0.1:3000/search?query=nodejs
*/
