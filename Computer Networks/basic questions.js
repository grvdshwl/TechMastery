//* DNS Resolution

// When you type Google(.)com into your browser, the first step is to resolve the domain
// name to an IP address. Your computer checks its local DNS cache to see if it has the IP
// address for Google(.)com stored. If found in the cache, it can skip the DNS server query
// and directly use the cached IP address, reducing the need for a DNS lookup.

//* DNS Query

// If the IP address for Google(.)com is not found in the cache or if the cached entry has
// expired, your computer sends a DNS query to a DNS server, requesting the IP address
// associated with the domain name Google(.)com

//* DNS Server Response

// The DNS server, which may be operated by your Internet service provider (ISP) or a
// public DNS service, responds with the IP address for Google(.)com. This response is then
// cached on your local machine for future use.

//* Establishing a Connection

// With the IP address in hand, your computer initiates a connection to the Google server at
// that IP address, using the Internet and the specified protocol, such as HTTP or HTTPS.

//* Sending a Request

// Your browser sends an HTTP(S) request to the Google server, specifying the desired
// webpage. This request includes information about the webpage, your browser, and other
// relevant details.

//* Processing the Request

// Google's server receives the request and processes it, identifying the requested page, in
// this case, the Google homepage.

//* Generating a Response

// Google's server generates an HTML response for the Google homepage, including all the
// content that makes up the page, such as text, images, links, and more.

//* Sending the Response

// The server sends the HTML response back to your computer over the internet.

//* Rendering the Page

// Your web browser receives the HTML response and starts rendering the Google homepage.
// This process involves interpreting the HTML, loading and displaying images, and
// executing any JavaScript code included on the page.

//* Displaying the Page

// Finally, your web browser displays the Google homepage on your screen, allowing you to
// interact with it, perform searches, and navigate the web.

// As previously mentioned, the DNS cache plays a crucial role in optimizing the process,
// as cached entries can reduce the need for repeated DNS queries, which helps improve
// performance and reduce latency in browsing.
