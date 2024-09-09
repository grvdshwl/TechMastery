/**
 * Data Redundancy
 * ---------------
 * Data redundancy refers to the practice of storing multiple copies of the same data in different places to ensure
 * availability, fault tolerance, and data integrity. In distributed systems, data redundancy is essential to avoid
 * data loss in the event of hardware failure, network issues, or disaster scenarios.
 *
 * Key Points:
 * -----------
 * 1. **Improved Reliability**: Data redundancy ensures that if one copy of the data is lost or corrupted, another
 *    copy can be accessed, improving overall system reliability.
 * 2. **Fault Tolerance**: Redundant copies help systems to continue functioning even if part of the infrastructure
 *    fails. This is crucial in distributed systems where nodes can go offline.
 * 3. **Data Replication**: A common method of achieving data redundancy is by replicating data across multiple
 *    servers, data centers, or regions.
 * 4. **RAID (Redundant Array of Independent Disks)**: RAID is a technique to store redundant data across multiple
 *    disks to ensure data is not lost in case of hardware failure.
 * 5. **Cloud Storage**: Cloud services often implement redundancy by replicating data across different regions, ensuring
 *    that data is accessible even if one region experiences failure.
 * 6. **Trade-offs**: While redundancy improves availability and fault tolerance, it also consumes more storage space
 *    and increases complexity in data management.
 *
 * Types of Data Redundancy:
 * -------------------------
 * 1. **Physical Redundancy**: Multiple physical copies of the data are stored on different devices or locations.
 * 2. **Logical Redundancy**: Data is stored logically across different nodes in a distributed database or system.
 * 3. **Synchronous vs Asynchronous Replication**:
 *    - Synchronous replication ensures that all copies of data are updated immediately when changes occur.
 *    - Asynchronous replication allows some delay in updating secondary copies, but is often more efficient.
 *
 * Use Case: Data Redundancy in a Web Application
 * ----------------------------------------------
 * Scenario:
 * - A global e-commerce application needs to ensure that customer data is always available, even in case of a server failure.
 *
 * Solution:
 * - The system replicates customer data across multiple data centers located in different regions. If one data center
 *   goes down, the application can retrieve data from another center, ensuring no disruption in service.
 * - The application uses asynchronous replication to keep latency low while ensuring eventual consistency across data centers.
 *
 * Example: Data Redundancy in a Distributed Storage System (Node.js)
 * -----------------------------------------------------------------
 */

const primaryStorage = {}; // Primary data storage (e.g., in a data center)
const backupStorage = {}; // Backup data storage (e.g., in a different data center)

// Function to save data with redundancy (storing in both primary and backup storage)
function saveDataWithRedundancy(key, value) {
  // Save data to primary storage
  primaryStorage[key] = value;
  console.log(`Data saved in primary storage: ${key} => ${value}`);

  // Save data to backup storage (replication)
  backupStorage[key] = value;
  console.log(`Data replicated to backup storage: ${key} => ${value}`);
}

// Function to retrieve data, attempting recovery from backup storage if primary fails
function retrieveData(key) {
  if (primaryStorage[key]) {
    console.log(
      `Data retrieved from primary storage: ${key} => ${primaryStorage[key]}`
    );
    return primaryStorage[key];
  } else if (backupStorage[key]) {
    console.log(
      `Primary storage failed, data retrieved from backup storage: ${key} => ${backupStorage[key]}`
    );
    return backupStorage[key];
  } else {
    console.log("Data not found in any storage.");
    return null;
  }
}

// Simulate data saving and retrieval
saveDataWithRedundancy("customer1", { name: "Alice", orders: [101, 102] });
saveDataWithRedundancy("customer2", { name: "Bob", orders: [201, 202] });

// Simulate retrieval with primary storage available
retrieveData("customer1");

// Simulate primary storage failure and retrieve from backup
delete primaryStorage["customer1"];
retrieveData("customer1");

/**
 * Explanation:
 * ------------
 * 1. The `saveDataWithRedundancy` function simulates saving data to both primary and backup storage, ensuring data redundancy.
 * 2. The `retrieveData` function attempts to retrieve data from primary storage first, and if it fails, it recovers from backup storage.
 * 3. In the example, data is first saved redundantly. When primary storage fails (simulated by deleting the data), the system
 *    successfully retrieves data from the backup.
 *
 * User Case: Data Redundancy in Cloud Storage
 * -------------------------------------------
 * Scenario:
 * - A video streaming platform like Netflix stores its user data and media assets across multiple geographical regions
 *   using cloud storage (e.g., AWS S3 or Google Cloud Storage).
 *
 * Solution:
 * - The platform implements data redundancy by replicating video files and user account data across different regions.
 *   If one region experiences downtime, the data is still accessible from other regions, ensuring uninterrupted service.
 * - Redundancy also helps balance the load by directing user requests to the nearest available server, optimizing
 *   performance and latency.
 *
 * Benefits of Data Redundancy:
 * ----------------------------
 * 1. **High Availability**: Ensures that data is always accessible, even if one storage location becomes unavailable due
 *    to failure or disaster.
 * 2. **Fault Tolerance**: Multiple copies of data ensure that the system can continue to function smoothly even if part
 *    of the infrastructure fails.
 * 3. **Data Integrity**: In the event of data corruption, redundant copies ensure that valid data can be recovered.
 * 4. **Disaster Recovery**: Data redundancy plays a key role in disaster recovery plans by allowing systems to restore
 *    from backup copies quickly.
 * 5. **Load Balancing**: Data stored in multiple locations can help distribute user requests across servers, reducing
 *    latency and avoiding bottlenecks.
 *
 * Real-World Scenario: Google Cloud Data Redundancy
 * ------------------------------------------------
 * - **Google Cloud Storage** implements multi-regional redundancy, replicating data across multiple locations to ensure
 *   high availability and durability.
 * - If a storage node in one region fails, the redundant copies in other regions ensure that the data remains accessible
 *   with minimal disruption to users.
 * - This model ensures a **99.999999999%** durability rate, meaning that the likelihood of data loss is extremely low.
 */
