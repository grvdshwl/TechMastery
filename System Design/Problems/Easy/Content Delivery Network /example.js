// CDN Example: Simple Caching Mechanism

class EdgeServer {
  constructor(originServer) {
    this.cache = new Map(); // Cache storage
    this.originServer = originServer; // Reference to the origin server
    this.cacheTTL = 60 * 60 * 1000; // Cache time-to-live (e.g., 1 hour)
  }

  // Function to simulate request handling
  handleRequest(url) {
    const currentTime = Date.now();

    // Check if the content is in cache and still valid
    if (this.cache.has(url)) {
      const cachedContent = this.cache.get(url);
      if (currentTime - cachedContent.timestamp < this.cacheTTL) {
        console.log("Cache Hit:", url);
        return cachedContent.data;
      } else {
        // Cache expired
        this.cache.delete(url);
        console.log("Cache Expired:", url);
      }
    }

    // Cache miss: Fetch content from the origin server
    console.log("Cache Miss:", url);
    const content = this.originServer.fetchContent(url);
    this.cache.set(url, { data: content, timestamp: currentTime });
    return content;
  }

  // Function to purge cache
  purgeCache(url) {
    if (this.cache.has(url)) {
      this.cache.delete(url);
      console.log("Cache Purged:", url);
    }
  }
}

class OriginServer {
  // Simulate fetching content from the origin server
  fetchContent(url) {
    // Simulate different content for different URLs
    return `Content from ${url} at ${new Date().toISOString()}`;
  }
}

// Example usage:

// Create an origin server
const originServer = new OriginServer();

// Create an edge server with a reference to the origin server
const edgeServer = new EdgeServer(originServer);

// Simulate user requests
console.log(edgeServer.handleRequest("https://example.com/index.html"));
console.log(edgeServer.handleRequest("https://example.com/index.html")); // Should hit the cache
console.log(edgeServer.handleRequest("https://example.com/about.html"));

// Purge cache example
edgeServer.purgeCache("https://example.com/index.html");
console.log(edgeServer.handleRequest("https://example.com/index.html")); // Should fetch from origin again
