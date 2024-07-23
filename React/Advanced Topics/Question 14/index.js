//* Fetch Advanced Topics

fetch("https://api.example.com/data", options)
  .then((response) => {
    // Handle the response
  })
  .catch((error) => {
    // Handle errors
  });

//* Options

//* Method
//* The method option specifies the HTTP method for the request.
//* It can be 'GET', 'POST', 'PUT', 'DELETE',
//* or any other valid HTTP method. The default is 'GET'.

fetch("https://api.example.com/data", {
  method: "POST",
  // other options...
});

//* Headers:
//*  The headers option is an object containing headers to include in the request.
//* Headers are used to provide additional information about the request,
//*  such as the content type.

fetch("https://api.example.com/data", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer your_token_here",
  },
  // other options...
});

//* Body:

//* The body option contains the data to be sent with the request.
//*  It can be a Blob, BufferSource, FormData, URLSearchParams,
//*  USVString (for textual data), or ReadableStream.

fetch("https://api.example.com/data", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ key: "value" }),
  // other options...
});

//* Mode

//* The mode option determines the mode of the request.
//* Possible values include 'cors', 'no-cors', and 'same-origin'.

fetch("https://api.example.com/data", {
  method: "GET",
  mode: "cors",
  // other options...
});

//* credentials:
//* The credentials option specifies whether to include credentials in a cross-origin request.
//*  Possible values are 'same-origin', 'include', or 'omit'.
fetch("https://api.example.com/data", {
  method: "GET",
  credentials: "include",
  // other options...
});

// Server-side code (e.g., Node.js with Express)

app.use((req, res, next) => {
  // Allow requests from any origin with credentials
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

//* cache:

//* The cache option defines the cache mode for the request.
//* Values can be 'default', 'no-store', 'reload', 'force-cache',
//* or 'only-if-cached'.

fetch("https://api.example.com/data", {
  method: "GET",
  cache: "no-store",
  // other options...
});

//* redirect:

// The redirect option determines how redirect responses are handled.
// Values include 'follow', 'error', or 'manual'.
fetch("https://api.example.com/data", {
  method: "GET",
  redirect: "follow",
  // other options...
});

//* Priority:-

//* Priority of the request -High ,medium or low respective to other request.
