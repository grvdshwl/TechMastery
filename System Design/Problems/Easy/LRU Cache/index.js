// LRU Cache System Design

// 1. **Core Functionality:**
//    - **Caching:** Store a limited number of items, evicting the least recently used items when the cache exceeds its capacity.
//    - **Accessing Items:** Retrieve items from the cache quickly based on keys.
//    - **Updating Items:** Update items in the cache to reflect the most recent access.

// 2. **Data Structures:**
//    - **Doubly Linked List:** Use a doubly linked list to maintain the order of item access. The most recently used item is at the head, and the least recently used item is at the tail.
//    - **Hash Map:** Use a hash map (or dictionary) to store key-value pairs with pointers to the nodes in the doubly linked list for O(1) access time.

// 3. **Cache Operations:**
//    - **Get Operation:** Retrieve an item by key, update its position in the list to the head (most recently used), and return the item.
//    - **Put Operation:** Add a new item or update an existing item. If adding a new item exceeds the capacity, remove the least recently used item (the tail node).

// 4. **Capacity Management:**
//    - **Fixed Capacity:** Define a fixed capacity for the cache, ensuring that it does not exceed a specified number of items.
//    - **Eviction Policy:** Implement an eviction policy that removes the least recently used item when the cache reaches its capacity.

// 5. **Efficiency Considerations:**
//    - **Time Complexity:** Ensure that both get and put operations have O(1) time complexity by using hash maps and doubly linked lists.
//    - **Space Complexity:** Use space efficiently by only storing the necessary data and maintaining the linked list for order.

// 6. **Concurrency:**
//    - **Thread Safety:** If using in a multi-threaded environment, implement thread-safe mechanisms (e.g., locks) to handle concurrent access and updates to the cache.

// 7. **Error Handling:**
//    - **Invalid Key:** Handle cases where a key is not found in the cache by returning appropriate error messages or default values.
//    - **Capacity Exceeded:** Manage capacity constraints to prevent adding items beyond the predefined limit.

// 8. **Testing and Validation:**
//    - **Unit Tests:** Write unit tests to validate the correctness of cache operations, including edge cases like cache hits, cache misses, and evictions.
//    - **Performance Testing:** Test the cache under high load to ensure it meets performance requirements and handles capacity constraints effectively.

// 9. **Extensibility:**
//    - **Configurable Capacity:** Allow configuration of cache capacity to adapt to different use cases and requirements.
//    - **Custom Eviction Policies:** Provide options for custom eviction policies if needed (e.g., LRU, FIFO, etc.).
