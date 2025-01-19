/**
 * Lifecycle Events
 * A Nest application and its elements have a lifecycle managed by Nest. Lifecycle hooks provide visibility into key lifecycle events and allow registered code to act during these events.
 */

/**
 * Lifecycle sequence
 * Nest's application lifecycle consists of three phases: initializing, running, and terminating.
 * These events allow proper initialization, connection management, and graceful shutdown of the application.
 */

/**
 * Lifecycle events
 * These events occur during application bootstrapping and shutdown.
 * Hooks such as `onModuleDestroy`, `beforeApplicationShutdown`, and `onApplicationShutdown` are triggered
 * when `app.close()` is called or a system termination signal (e.g., SIGTERM) is received.
 *
 * Note: Shutdown hooks must be explicitly enabled (see below for details).
 */

/**
 * Lifecycle Hook Methods:
 *
 * - onModuleInit(): Triggered after the host module's dependencies are resolved.
 * - onApplicationBootstrap(): Triggered after all modules are initialized but before listening for connections.
 * - onModuleDestroy(): Triggered after receiving a termination signal.
 * - beforeApplicationShutdown(): Triggered after `onModuleDestroy()` handlers complete.
 * - onApplicationShutdown(): Triggered after all connections are closed.
 *
 * Warning:
 * Request-scoped classes are not tied to the lifecycle hooks and are garbage-collected after a response is sent.
 */

/**
 * Usage
 * Register lifecycle hooks by implementing the appropriate interfaces. This provides strong typing and editor tooling.
 */

import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class UsersService implements OnModuleInit {
  onModuleInit() {
    console.log(`The module has been initialized.`);
  }
}

/**
 * Asynchronous initialization
 * Lifecycle hooks like `onModuleInit` and `onApplicationBootstrap` support asynchronous operations.
 */

async onModuleInit(): Promise<void> {
  await this.fetch();
}

/**
 * Application shutdown
 * Shutdown hooks like `onModuleDestroy`, `beforeApplicationShutdown`, and `onApplicationShutdown` are triggered
 * during the termination phase (e.g., when `app.close()` is called or upon receiving a system signal like SIGTERM).
 *
 * To enable shutdown hooks:
 */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable shutdown hooks
  app.enableShutdownHooks();

  await app.listen(3000);
}
bootstrap();

/**
 * Warning:
 * On Windows, shutdown hooks have limited support. Signals like SIGINT work, but SIGTERM does not.
 * Refer to Node.js and libuv documentation for platform-specific limitations.
 */

/**
 * Example: Registering onApplicationShutdown hook
 */

@Injectable()
class UsersService implements OnApplicationShutdown {
  onApplicationShutdown(signal: string) {
    console.log(signal); // e.g., "SIGINT"
  }
}

/**
 * Note:
 * - Calling `app.close()` triggers `onModuleDestroy` and `onApplicationShutdown` hooks but does not terminate the Node process.
 * - Ensure long-running tasks or intervals are terminated manually to allow the process to exit.
 */
