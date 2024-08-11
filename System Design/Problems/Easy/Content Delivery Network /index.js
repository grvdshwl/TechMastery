// CDN System Design
//* https://www.youtube.com/watch?v=8zX0rue2Hic

// 1. **Edge Servers:**
//    - These are geographically distributed servers that cache content close to the user.
//    - **Load Balancing:** Distribute traffic across multiple edge servers to optimize load and minimize latency.
//    - **Caching Strategy:** Implement strategies like LRU (Least Recently Used) to manage the cache efficiently.
//    - **Purging:** Mechanism to remove outdated content from the cache.

// 2. **Origin Server:**
//    - Central server where the original content resides.
//    - Edge servers pull content from here when a cache miss occurs.
//    - **Redundancy:** Use multiple origin servers in different regions to prevent single points of failure.

// 3. **DNS Load Balancer:**
//    - Directs user requests to the nearest or most optimal edge server.
//    - **Geo-DNS:** Routes traffic based on the user's location.
//    - **Failover:** Redirects to another edge server if one fails.

// 4. **Content Invalidation and Propagation:**
//    - **Real-time Propagation:** When content is updated, invalidate the cache and propagate changes across all edge servers.
//    - **API:** Provide an API for content owners to trigger cache invalidation.

// 5. **Security:**
//    - **SSL Termination:** Edge servers handle SSL termination to offload this from the origin server.
//    - **DDoS Protection:** Implement mechanisms to detect and mitigate DDoS attacks at the edge.
//    - **Token Authentication:** Use signed URLs or tokens to restrict access to content.

// 6. **Monitoring and Analytics:**
//    - **Real-time Monitoring:** Track the health and performance of edge servers.
//    - **Analytics:** Provide content owners with data on cache hits, latency, bandwidth usage, etc.
//    - **Alerts:** Trigger alerts for anomalies like server downtime, high latency, or cache misses.

// 7. **Content Optimization:**
//    - **Compression:** Compress content (e.g., gzip, Brotli) to reduce bandwidth usage.
//    - **Image Optimization:** Serve images in formats like WebP and adjust quality based on the user's device and connection speed.
//    - **Edge Computing:** Execute code at the edge to personalize or optimize content before serving.

// 8. **Log Management:**
//    - **Centralized Logging:** Collect logs from all edge servers in a centralized location for analysis.
//    - **Retention Policy:** Define how long logs are stored, considering privacy and storage costs.
//    - **Compliance:** Ensure that logging practices comply with relevant regulations like GDPR.

// 9. **Scalability and Redundancy:**
//    - **Auto-Scaling:** Automatically scale edge servers based on demand to handle traffic spikes.
//    - **Multi-Region Redundancy:** Deploy edge servers across multiple regions to ensure high availability.
