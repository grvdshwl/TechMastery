//* Batch Processing vs Stream Processing

/**
 * System Design: Batch Processing vs. Stream Processing
 *
 * Batch Processing:
 * - Batch processing is a technique where data is collected and processed in large chunks (batches) at specific intervals.
 * - The system processes the entire batch at once, rather than processing each individual event in real time.
 * - It is commonly used for data analysis, reporting, or operations where real-time processing is not critical.
 *
 * Characteristics:
 * - **Large Data Sets**: Works with large volumes of data that are processed periodically (e.g., hourly, daily).
 * - **Scheduled Execution**: Processing occurs at scheduled intervals or when a batch is ready.
 * - **Latency**: Higher latency since the system waits until a batch is complete before processing it.
 * - **Example**: Processing payroll data at the end of the month or generating end-of-day financial reports.
 *
 * Example:
 * - A system that collects website logs throughout the day and processes them every night to generate reports.
 *
 * Advantages of Batch Processing:
 * - **Efficiency**: Handles large volumes of data in bulk, which can be optimized for performance.
 * - **Reduced System Load**: Spreads out resource usage by processing data at off-peak times.
 * - **Simpler Architecture**: Easier to implement than real-time systems, especially for non-time-sensitive tasks.
 *
 * Disadvantages of Batch Processing:
 * - **Higher Latency**: Not suitable for scenarios requiring immediate results, as data is processed after the batch completes.
 * - **Resource Intensive**: Requires significant computational power during batch processing windows.
 * - **Data Staleness**: Data insights are delayed, as the system processes past data rather than real-time information.
 *
 * Use Cases for Batch Processing:
 * - Systems where real-time data processing is not critical (e.g., end-of-day reporting, financial reconciliation).
 * - Data warehousing and analytics platforms that process large data sets periodically.
 * - Applications with predictable workloads (e.g., billing, payroll).
 */

/**
 * Stream Processing:
 * - Stream processing is a technique where data is processed in real time as it is generated or received.
 * - Each event or record is processed immediately, allowing for near-instantaneous insights and actions.
 * - It is used for real-time analytics, monitoring, and applications where immediate response to events is required.
 *
 * Characteristics:
 * - **Real-Time Data**: Processes data continuously and almost instantly as it arrives.
 * - **Low Latency**: Designed for scenarios where low-latency processing is critical.
 * - **Event-Driven**: Often event-driven, with systems reacting to new data or events as they occur.
 * - **Example**: Fraud detection systems that monitor financial transactions in real time.
 *
 * Example:
 * - A system that monitors social media for mentions of a brand and provides real-time analytics on user sentiment.
 *
 * Advantages of Stream Processing:
 * - **Low Latency**: Provides near-instantaneous processing, allowing systems to react quickly to new data.
 * - **Real-Time Insights**: Continuously processes data, giving up-to-the-minute insights and trends.
 * - **Scalability**: Designed to handle high-velocity data streams, making it suitable for large-scale real-time applications.
 *
 * Disadvantages of Stream Processing:
 * - **Complexity**: More complex to implement and maintain due to the need for real-time data ingestion and processing pipelines.
 * - **High Resource Consumption**: Requires significant compute and memory resources to process data in real-time.
 * - **Fault Tolerance**: Real-time systems need to handle failures and ensure data consistency across distributed nodes.
 *
 * Use Cases for Stream Processing:
 * - Real-time monitoring systems (e.g., financial transaction monitoring, fraud detection).
 * - IoT (Internet of Things) applications that need to process sensor data in real-time.
 * - Real-time analytics (e.g., stock price monitoring, social media sentiment analysis).
 */

/**
 * Batch Processing vs. Stream Processing:
 * - **Batch Processing**: Suitable for large, periodic jobs that don't require immediate action; processes data at intervals.
 * - **Stream Processing**: Suitable for real-time applications where data needs to be processed immediately as it arrives.
 *
 * Trade-offs:
 * - **Batch Processing**: Higher latency but more efficient for large-scale, periodic data workloads.
 * - **Stream Processing**: Low latency with real-time insights but at the cost of complexity and resource usage.
 *
 * Choosing Between the Two:
 * - **Batch Processing**: Best for applications where data can be processed in bulk after accumulation and real-time insights are not needed.
 * - **Stream Processing**: Best for real-time systems where low-latency data processing is critical to business or operational needs.
 */
