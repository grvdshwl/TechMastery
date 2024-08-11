// Distributed Job Scheduler System Design
//* https://towardsdatascience.com/ace-the-system-design-interview-job-scheduling-system-b25693817950

// 1. **Job Queue:**
//    - Centralized or distributed queue that holds jobs waiting to be processed.
//    - **Priority Queues:** Implement priority levels to ensure critical jobs are processed first.
//    - **FIFO/LIFO Queues:** Depending on the use case, implement First-In-First-Out or Last-In-First-Out queues.

// 2. **Job Workers:**
//    - Distributed worker nodes that pull jobs from the queue and execute them.
//    - **Concurrency:** Workers should be able to handle multiple jobs concurrently.
//    - **Auto-Scaling:** Dynamically scale the number of worker nodes based on the load.

// 3. **Job Dispatching:**
//    - **Load Balancer:** Distributes jobs evenly across available workers to avoid overloading a single worker.
//    - **Job Assignment:** Assign jobs based on worker availability, priority, and resource requirements.

// 4. **Job Execution:**
//    - **Retry Mechanism:** Implement retry logic for failed jobs with exponential backoff.
//    - **Timeout Handling:** Set maximum execution time for jobs to prevent them from running indefinitely.
//    - **Idempotency:** Ensure that job executions are idempotent, meaning the same job can be executed multiple times without side effects.

// 5. **Job Tracking and Persistence:**
//    - **Job Status Tracking:** Track job statuses (e.g., pending, running, completed, failed).
//    - **Persistence:** Store job details in a persistent database to handle system restarts and crashes.
//    - **Result Storage:** Store the results of jobs for future reference and auditing.

// 6. **Fault Tolerance:**
//    - **Redundancy:** Duplicate job queues and workers across different nodes or data centers to handle failures.
//    - **Checkpointing:** Periodically save the state of long-running jobs to allow for recovery after failure.
//    - **Failure Detection:** Implement health checks and monitoring to detect and handle worker failures.

// 7. **Scalability:**
//    - **Horizontal Scaling:** Add more worker nodes to handle increased job loads.
//    - **Partitioning:** Partition the job queue to distribute the load across multiple queues and workers.

// 8. **Security:**
//    - **Authentication and Authorization:** Secure the job scheduler and workers to prevent unauthorized access.
//    - **Data Encryption:** Encrypt sensitive job data in transit and at rest.

// 9. **Monitoring and Logging:**
//    - **Real-Time Monitoring:** Track job execution times, success rates, and worker health in real-time.
//    - **Logging:** Maintain detailed logs for job executions, errors, and system events for debugging and auditing purposes.
//    - **Alerts:** Set up alerts for job failures, timeouts, or other anomalies.

// 10. **Job Dependencies and Scheduling:**
//    - **Dependency Management:** Support for defining job dependencies, where one job must complete before another starts.
//    - **Scheduled Jobs:** Support for time-based scheduling (e.g., cron jobs) to execute jobs at specific intervals.
