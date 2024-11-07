// 2xx Success Codes:
// Indicates that the request was successfully processed by the server.
/*
| **Status Code** | **Description**                                                                                         | **Example**                                                                                         |
|-----------------|---------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| **200 OK**      | The request has succeeded. The meaning of the success depends on the HTTP method used.                   | A GET request successfully returns the requested resource.                                          |
| **201 Created** | The request has been fulfilled and resulted in the creation of a new resource.                          | A POST request successfully creates a new resource, such as a new user or product.                  |
| **202 Accepted** | The request has been accepted for processing, but the processing has not been completed.               | A background process or job is initiated by a POST request but isn't finished immediately.          |
| **204 No Content** | The server successfully processed the request, but there is no content to return.                     | A DELETE request successfully removes a resource without returning any content.                     |
*/

// 3xx Redirection Codes:
// These codes indicate that further action is needed by the client to complete the request, typically redirection to another URL.
/*
| **Status Code** | **Description**                                                                                         | **Example**                                                                                         |
|-----------------|---------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| **300 Multiple Choices** | The request has more than one possible response. The user or user agent may choose one of them.          | A GET request for a resource that has multiple formats or locations (e.g., a webpage with multiple versions). |
| **301 Moved Permanently** | The requested resource has been permanently moved to a new location. The new URL is given in the response. | A page has been permanently moved to a new URL (e.g., oldwebsite.com → newwebsite.com).             |
| **302 Found**   | The requested resource resides temporarily under a different URL.                                        | A resource is temporarily located at a different URL. The client should use the original URL in future requests. |
| **303 See Other** | The response to the request can be found under a different URL using the GET method.                     | A POST request may be redirected to a GET request at a different URL, typically after a form submission. |
| **304 Not Modified** | The resource has not been modified since the last request. The client can use its cached copy.           | A GET request is sent with a conditional header (like `If-Modified-Since`), but the resource hasn't changed. |
| **307 Temporary Redirect** | The request should be repeated with another URI, but future requests should still use the original URI.  | A temporary redirect to a different URL while keeping the same HTTP method for subsequent requests.  |
| **308 Permanent Redirect** | The resource has been permanently moved to a new location, similar to 301 but with the same method for future requests. | A resource has been permanently moved, and future requests should use the new URL, keeping the same HTTP method. |
*/

// 4xx Client Error Codes:
// These codes indicate that the client has made an error, often due to invalid request parameters or missing authentication.
/*
| **Status Code** | **Description**                                                                                         | **Example**                                                                                         |
|-----------------|---------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| **400 Bad Request** | The server cannot process the request due to malformed syntax or invalid parameters.                   | A request with missing or incorrect parameters, such as an invalid query string or malformed JSON body. |
| **401 Unauthorized** | The request requires authentication, but the client has not provided valid credentials.               | A request to a protected resource without a valid token or credentials.                            |
| **402 Payment Required** | Reserved for future use; generally not implemented yet.                                               | N/A (Currently not widely used).                                                                   |
| **403 Forbidden** | The server understands the request, but the client does not have permission to access the resource.     | A user without admin privileges trying to access an admin-only page.                              |
| **404 Not Found** | The server could not find the requested resource.                                                       | A request for a URL that does not exist, like `/api/nonexistent`.                                 |
| **405 Method Not Allowed** | The method specified in the request is not allowed for the resource.                                 | A PUT request to a resource that only supports GET.                                                |
| **406 Not Acceptable** | The server cannot produce a response matching the list of acceptable values according to the request's `Accept` header. | A browser requesting a resource that only supports JSON when the server only responds with HTML.  |
| **407 Proxy Authentication Required** | The client must authenticate with a proxy before making the request.                                 | A request through a proxy that requires authentication.                                            |
| **408 Request Timeout** | The server timed out waiting for the request.                                                           | A request that takes too long, causing a timeout error.                                            |
| **409 Conflict** | The request could not be completed due to a conflict with the current state of the target resource.     | Trying to create a resource that already exists, such as adding a user with an existing username.   |
| **410 Gone**      | The requested resource is no longer available and will not be available again.                          | A resource was intentionally removed, like a deprecated API version.                               |
| **411 Length Required** | The server requires the `Content-Length` header to be set for the request.                            | A request with a body (like POST) but without a specified content length.                          |
| **412 Precondition Failed** | One of the preconditions in the request headers was not met.                                         | A request with an `If-Match` or `If-None-Match` header that does not match the resource's current state. |
| **413 Payload Too Large** | The request is larger than the server is willing or able to process.                                  | A file upload exceeds the server's file size limit.                                                |
| **414 URI Too Long** | The URI provided in the request is too long for the server to process.                                 | A URL with too many query parameters or a very long path.                                           |
| **415 Unsupported Media Type** | The media type of the request is not supported by the server.                                       | A request with a body of type `text/plain` to an endpoint expecting `application/json`.             |
| **416 Range Not Satisfiable** | The server cannot fulfill the request range specified in the `Range` header.                         | A request for a byte range outside of the resource’s size.                                          |
| **417 Expectation Failed** | The server cannot meet the requirements of the `Expect` header in the request.                       | A client sends an `Expect: 100-continue` header, but the server cannot process the request.         |
*/

// 5xx Server Error Codes:
// These codes indicate that the server failed to fulfill a valid request due to an error on the server-side.
/*
| **Status Code** | **Description**                                                                                         | **Example**                                                                                         |
|-----------------|---------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| **500 Internal Server Error** | A generic error message indicating that an unexpected condition occurred on the server.              | The server encounters an error while processing a request, such as a database connection failure.   |
| **502 Bad Gateway** | The server, while acting as a gateway or proxy, received an invalid response from the upstream server.   | A reverse proxy server (like Nginx) receives an invalid response from an upstream server or service. |
| **503 Service Unavailable** | The server is temporarily unable to handle the request, usually due to being overloaded or undergoing maintenance. | The server is down for maintenance, or there is too much load on the server to process the request. |
| **504 Gateway Timeout** | The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server. | A reverse proxy server times out while waiting for a response from another service.                |
*/
