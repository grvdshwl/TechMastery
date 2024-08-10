/**
 * An LRU (Least Recently Used) Cache is a data structure that maintains a limited
 * number of items and evicts the least recently used item when the cache reaches its capacity.
 *
 * Key Characteristics:
 * - **Capacity**: The maximum number of items the cache can hold. When this limit is reached,
 *   the least recently used item is removed to make space for a new item.
 *
 * - **Eviction Policy**: Items are evicted based on their usage history. The item that has not
 *   been used for the longest time is removed first.
 *
 * - **Access Operations**:
 *   - **Get**: Retrieves an item from the cache, marking it as recently used.
 *   - **Put**: Inserts or updates an item in the cache, potentially evicting the least recently used
 *     item if the cache is full.
 *
 * How It Works:
 * - **Data Structure**: Often implemented using a combination of a hash map (or object) and a doubly
 *   linked list:
 *   - The **hash map** provides O(1) time complexity for access and update operations.
 *   - The **doubly linked list** maintains the order of access, allowing efficient removal of the
 *     least recently used item and efficient insertion of new items.
 *
 * - **Operations**:
 *   - **Get Operation**: Look up the item in the hash map. If found, move the item to the front of
 *     the linked list to mark it as recently used. If not found, return an indication that the item
 *     is not in the cache.
 *   - **Put Operation**: Add the item to the hash map and insert it at the front of the linked list.
 *     If the cache exceeds its capacity, remove the item from the back of the linked list (the least
 *     recently used item) and also remove it from the hash map.
 *
 * Example Use Case:
 * - Memory management: Managing CPU cache or application memory.
 * - Database caching: Speeding up access to frequently queried data.
 */
