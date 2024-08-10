// Simulated Job Queue
class JobQueue {
  constructor() {
    this.queue = [];
  }

  // Add job to the queue
  enqueue(job) {
    this.queue.push(job);
    console.log("Job Enqueued:", job.id);
  }

  // Remove and return the next job in the queue
  dequeue() {
    return this.queue.shift();
  }

  // Check if the queue is empty
  isEmpty() {
    return this.queue.length === 0;
  }
}

// Simulated Worker Node
class Worker {
  constructor(id) {
    this.id = id;
    this.isBusy = false;
  }

  // Process a job
  async processJob(job) {
    this.isBusy = true;
    console.log(`Worker ${this.id} is processing job ${job.id}`);
    try {
      await job.execute();
      console.log(`Job ${job.id} completed by Worker ${this.id}`);
    } catch (error) {
      console.log(`Job ${job.id} failed on Worker ${this.id}`);
    } finally {
      this.isBusy = false;
    }
  }
}

// Simulated Job Scheduler
class JobScheduler {
  constructor(workers) {
    this.workers = workers; // Array of Worker instances
    this.jobQueue = new JobQueue();
  }

  // Schedule a new job
  scheduleJob(job) {
    this.jobQueue.enqueue(job);
    this.dispatchJobs();
  }

  // Dispatch jobs to available workers
  dispatchJobs() {
    for (const worker of this.workers) {
      if (!worker.isBusy && !this.jobQueue.isEmpty()) {
        const job = this.jobQueue.dequeue();
        worker.processJob(job);
      }
    }
  }

  // Monitor and retry failed jobs (basic retry mechanism)
  monitorJobs() {
    // In a real system, this would monitor job statuses and retry failed jobs
    console.log("Monitoring jobs...");
  }
}

// Example Job
class Job {
  constructor(id, executionTime) {
    this.id = id;
    this.executionTime = executionTime; // Simulate job duration
  }

  // Simulate job execution
  execute() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate random job failure
        Math.random() > 0.2 ? resolve() : reject();
      }, this.executionTime);
    });
  }
}

// Example usage:

// Create workers
const worker1 = new Worker(1);
const worker2 = new Worker(2);
const worker3 = new Worker(3);

// Create job scheduler with workers
const scheduler = new JobScheduler([worker1, worker2, worker3]);

// Schedule jobs
scheduler.scheduleJob(new Job("Job1", 1000));
scheduler.scheduleJob(new Job("Job2", 500));
scheduler.scheduleJob(new Job("Job3", 2000));
scheduler.scheduleJob(new Job("Job4", 1500));

// Simulate monitoring
scheduler.monitorJobs();
