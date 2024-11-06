// 1. Browser Rendering Behavior
// -----------------------------
// Rendering is the process by which a browser converts HTML, CSS, and JavaScript into a visual webpage.
// Understanding this behavior helps optimize page load times and provides a smoother user experience.
//
// - **Rendering Steps**:
//   1. **Parsing HTML**: The browser parses the HTML document and constructs the **DOM (Document Object Model)**.
//      Each HTML element becomes a node in the DOM tree.
//   2. **Parsing CSS**: The browser then parses CSS, building the **CSSOM (CSS Object Model)** to apply styles to DOM elements.
//   3. **JavaScript Execution**: JavaScript execution can manipulate the DOM/CSSOM,
//      potentially altering the structure or styles of the page.
//   4. **Render Tree Construction**: The browser combines the DOM and CSSOM to create a **render tree**,
//      which determines what elements will be visible and how they will look.
//   5. **Layout/Flow**: The render tree is used to calculate the position and size of each element on the page,
//      a process known as "layout" or "reflow".
//   6. **Painting**: Finally, the browser paints the pixels onto the screen to display the content.
//
// - **Optimizations**:
//   * **Minimize CSS and JavaScript**: Since parsing large CSS/JS files can block rendering, minifying these files helps.
//   * **Defer Non-Critical JS**: By deferring non-critical JavaScript, the initial rendering can complete faster.
//   * **Reduce Reflows and Repaints**: Minimizing DOM updates (e.g., by batching them) prevents repeated layout and paint calculations.
//   * **Use CSS animations for smoother effects**: CSS animations are typically more performant than JavaScript-based ones.

// 2. Network Performance
// ----------------------
// Network performance refers to the speed and efficiency of data transfers between the client and server.
// Improving network performance reduces page load times and enhances the user experience.
//
// - **Key Network Concepts**:
//   * **Latency**: The time it takes for data to travel from the client to the server and back. Low latency
//     is crucial for fast response times, especially in real-time applications.
//   * **Bandwidth**: The volume of data that can be transmitted over a network in a given time period. Higher
//     bandwidth means faster data transfer but is limited by network infrastructure.
//   * **HTTP Requests**: Each resource (CSS, JS, images) requires an HTTP request. Reducing the number
//     of requests can improve load time.
//
// - **Optimization Techniques**:
//   * **Minify and Combine Assets**: Compress CSS, JavaScript, and HTML files. Combining multiple files reduces
//     the number of HTTP requests.
//   * **Use Content Delivery Networks (CDNs)**: CDNs cache static content (images, CSS, JS) on servers closer
//     to the user, reducing latency and speeding up delivery.
//   * **Image Optimization**: Compress images, use modern formats (e.g., WebP), and set appropriate sizes to reduce data load.
//   * **Lazy Loading**: Load images, videos, or other heavy content only when they come into the viewport.
//   * **Prefetching/Preloading**: Fetch critical resources or pages in advance to reduce load time when users
//     navigate to them.
//   * **Reduce Redundant Requests**: Avoid unnecessary API requests or load only the required data with
//     GraphQL or REST query optimizations.

// 3. Caching Strategies
// ---------------------
// Caching strategies reduce redundant network requests by storing previously loaded resources on the client
// or intermediary servers. This improves load times, reduces bandwidth, and enhances overall performance.
//
// - **Types of Caching**:
//   * **Browser Cache**: The browser temporarily stores resources (HTML, CSS, JS, images) so they can be loaded
//     from local storage on repeat visits.
//   * **Service Workers**: These allow developers to cache files for offline access and to control which
//     files get cached and when they are updated.
//   * **CDN Cache**: CDNs cache content on servers closer to the user. CDNs are ideal for static assets (images, CSS, JS).
//   * **Server-Side Caching**: Servers can cache database query results, computed data, or API responses
//     to avoid redundant processing on every request.
//
// - **Caching Headers**:
//   * **Cache-Control**: Defines caching policies. Options include `public` (cacheable by any cache),
//     `private` (cacheable only by the browser), `no-cache`, and `max-age` (time the resource is cacheable).
//   * **ETags**: Provides a unique identifier for each version of a resource. Browsers validate the ETag
//     with the server to check if the resource has changed.
//   * **Expires**: Specifies a fixed date/time for the cached resource to expire (less flexible than max-age).
//
// - **Common Caching Strategies**:
//   * **Cache First**: Load from cache if available, otherwise fetch from the network (good for static assets).
//   * **Network First**: Always try fetching from the network first, falling back to cache if the network fails (useful for APIs).
//   * **Stale-While-Revalidate**: Use the cache for faster load, then check the network in the background for updates
//     (provides up-to-date content without blocking load).
//   * **Offline Fallback**: Show cached content if the network is unavailable, often used for progressive web apps (PWAs).
