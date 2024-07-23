//* CORS in details along with preflight
//* https://medium.com/iocscan/cross-origin-resource-sharing-cors-65b536b361ae
//*  https://medium.com/@reemshakes/how-does-cors-work-f7488acf09f4
/*
CORS (Cross-Origin Resource Sharing) in Detail:

1. CORS is a security feature implemented in web browsers to restrict cross-origin HTTP requests initiated from scripts.
2. It allows resources on a web page to be requested from another domain outside the domain from which the resource originated.
3. CORS involves browser and server communication to determine if a cross-origin request is allowed.

Server-side Considerations:
- The server must include specific HTTP headers in its response to indicate which origins are allowed to access the resources.
- The primary header is 'Access-Control-Allow-Origin', which specifies the origins that are permitted to access the resource.
- Servers can also include additional headers like 'Access-Control-Allow-Methods', 'Access-Control-Allow-Headers', etc., to define allowed methods and headers for cross-origin requests.

Client-side Considerations:
- Browsers enforce CORS policies, blocking cross-origin requests unless the server explicitly allows them.
- When a client makes a cross-origin request, the browser first sends a preflight request to the server to determine if the actual request is safe to send.
- The preflight request uses the HTTP OPTIONS method and includes the 'Access-Control-Request-Method' and 'Access-Control-Request-Headers' headers to inquire about allowed methods and headers.

Preflight Request in Detail:

1. Triggered by the browser for cross-origin requests that use methods other than GET, POST, or HEAD or include custom headers.
2. The browser sends an OPTIONS request to the server with the necessary CORS headers.
3. The server responds to the OPTIONS request with the appropriate CORS headers indicating whether the actual request is permitted.
4. If the server approves the request, the browser proceeds with the actual request. Otherwise, it blocks the request and raises an error.

Example Preflight Request:
OPTIONS /resource HTTP/1.1
Host: example.com
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Content-Type

Example Preflight Response:
HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://client.example.com
Access-Control-Allow-Methods: POST
Access-Control-Allow-Headers: Content-Type

Note: CORS is essential for protecting web applications from unauthorized cross-origin requests and ensuring secure data transmission.
*/
