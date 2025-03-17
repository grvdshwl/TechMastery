// TASK SCHEDULING IN NESTJS

// Task scheduling automates the execution of code at specific times or intervals.
// It supports:
// 1. Fixed execution at a specific time/date.
// 2. Recurring intervals (e.g., every minute).
// 3. Single execution after a delay (e.g., 5 seconds).

// For Node.js, use the @nestjs/schedule package, which integrates with the cron package.

// INSTALLATION:
// $ npm install --save @nestjs/schedule
// $ npm install --save-dev @types/cron

// INITIALIZATION:
// Import ScheduleModule and use the forRoot() method in AppModule.
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot()], // Activates the scheduler
})
export class AppModule {}

// DECLARATIVE SCHEDULING

// 1. CRON JOBS:
// Use the @Cron() decorator to schedule a recurring task.
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  @Cron('45 * * * * *') // Executes every minute at the 45th second
  handleCron() {
    this.logger.debug('Runs when the second is 45');
  }

  @Cron(CronExpression.EVERY_30_SECONDS) // Executes every 30 seconds
  handleCronEvery30Seconds() {
    this.logger.debug('Runs every 30 seconds');
  }
}

// CRON PATTERN SYNTAX:
// * * * * * *
// | | | | | |
// | | | | | day of the week
// | | | | months
// | | | day of the month
// | | hours
// | minutes
// seconds (optional)

// Common Examples:
// '* * * * * *'  -> Every second
// '45 * * * * *' -> Every minute, at the 45th second
// '0 10 * * * *' -> Every hour, at the 10th minute
// '0 */30 9-17 * * *' -> Every 30 minutes between 9 AM and 5 PM

// 2. DECLARATIVE INTERVALS:
// Use the @Interval() decorator for recurring execution at a specific interval.
@Interval(10000) // Executes every 10 seconds
handleInterval() {
  this.logger.debug('Runs every 10 seconds');
}

// 3. DECLARATIVE TIMEOUTS:
// Use the @Timeout() decorator for a one-time execution after a delay.
@Timeout(5000) // Executes once after 5 seconds
handleTimeout() {
  this.logger.debug('Runs once after 5 seconds');
}

// DYNAMIC SCHEDULING USING SchedulerRegistry
// Use SchedulerRegistry to create, retrieve, delete, or list tasks at runtime.
constructor(private schedulerRegistry: SchedulerRegistry) {}

// ACCESSING A CRON JOB:
const job = this.schedulerRegistry.getCronJob('notifications');
job.stop(); // Stops the job
job.start(); // Restarts the job

// CREATING A DYNAMIC CRON JOB:
addCronJob(name, seconds) {
  const job = new CronJob(`${seconds} * * * * *`, () => {
    this.logger.warn(`Job ${name} triggered at second ${seconds}`);
  });
  this.schedulerRegistry.addCronJob(name, job);
  job.start();
}

// DELETING A CRON JOB:
deleteCron(name) {
  this.schedulerRegistry.deleteCronJob(name);
  this.logger.warn(`Job ${name} deleted`);
}

// LISTING ALL CRON JOBS:
getCrons() {
  const jobs = this.schedulerRegistry.getCronJobs();
  jobs.forEach((value, key) => {
    const nextDate = value.nextDates().toDate();
    this.logger.log(`Job: ${key}, Next Execution: ${nextDate}`);
  });
}

// DYNAMIC INTERVALS:
// Use SchedulerRegistry for runtime management of intervals.

// ACCESSING AN INTERVAL:
const interval = this.schedulerRegistry.getInterval('notifications');
clearInterval(interval); // Stops the interval

// CREATING A DYNAMIC INTERVAL:
addInterval(name, milliseconds) {
  const interval = setInterval(() => {
    this.logger.warn(`Interval ${name} triggered`);
  }, milliseconds);
  this.schedulerRegistry.addInterval(name, interval);
}

// DELETING AN INTERVAL:
deleteInterval(name) {
  this.schedulerRegistry.deleteInterval(name);
  this.logger.warn(`Interval ${name} deleted`);
}

// LISTING ALL INTERVALS:
getIntervals() {
  const intervals = this.schedulerRegistry.getIntervals();
  intervals.forEach(key => this.logger.log(`Interval: ${key}`));
}

// DYNAMIC TIMEOUTS:
// Use SchedulerRegistry for runtime management of timeouts.

// ACCESSING A TIMEOUT:
const timeout = this.schedulerRegistry.getTimeout('notifications');
clearTimeout(timeout); // Stops the timeout

// CREATING A DYNAMIC TIMEOUT:
addTimeout(name, milliseconds) {
  const timeout = setTimeout(() => {
    this.logger.warn(`Timeout ${name} triggered`);
  }, milliseconds);
  this.schedulerRegistry.addTimeout(name, timeout);
}

// DELETING A TIMEOUT:
deleteTimeout(name) {
  this.schedulerRegistry.deleteTimeout(name);
  this.logger.warn(`Timeout ${name} deleted`);
}

// LISTING ALL TIMEOUTS:
getTimeouts() {
  const timeouts = this.schedulerRegistry.getTimeouts();
  timeouts.forEach(key => this.logger.log(`Timeout: ${key}`));
}
