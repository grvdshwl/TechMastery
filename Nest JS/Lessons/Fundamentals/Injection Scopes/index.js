// Injection Scopes in NestJS
//
// Overview:
// - In NestJS, almost everything is shared across requests by default (e.g., singleton services, database connection pools).
// - This is safe because Node.js operates in a single-threaded, event-driven model.
// - However, some use cases (e.g., per-request caching, request tracking, multi-tenancy) require custom provider lifecycles.
// - Injection scopes allow providers to have different lifecycles: DEFAULT, REQUEST, and TRANSIENT.
//
// Provider Scopes:
// 1. DEFAULT (Singleton):
//    - A single instance of the provider is shared across the entire application.
//    - Instance lifetime is tied to the application lifecycle.
//    - Used by default and suitable for most use cases.
//
//    Example:
import { Injectable } from '@nestjs/common';
@Injectable()
export class CatsService {}

// 2. REQUEST:
//    - A new instance of the provider is created for each incoming request.
//    - The instance is garbage-collected after the request completes processing.
//    - Useful for request-specific data, like caching or tracking.
//
//    Example:
import { Injectable, Scope } from '@nestjs/common';
@Injectable({ scope: Scope.REQUEST })
export class CatsService {}

// 3. TRANSIENT:
//    - A new instance of the provider is created for each injection.
//    - Instances are not shared between consumers.
//    - Suitable for temporary utilities or unique instances required by multiple consumers.
//
//    Example:
{
  provide: 'CACHE_MANAGER',
  useClass: CacheManager,
  scope: Scope.TRANSIENT,
}

// Controller Scopes:
// - Like providers, controllers can also have scoped lifetimes.
// - For a request-scoped controller, a new instance is created for every incoming request.
// - Garbage collection occurs when the request completes.
//
//    Example:
import { Controller, Scope } from '@nestjs/common';
@Controller({ path: 'cats', scope: Scope.REQUEST })
export class CatsController {}

// Scope Hierarchy:
// - Request scope propagates up the dependency chain.
//   For example: If a request-scoped CatsService is injected into a CatsController,
//   the controller becomes request-scoped.
//
// - Transient scope does not propagate. For example: If a singleton DogsService injects a transient LoggerService,
//   DogsService remains singleton-scoped.
//
// Request Provider:
// - To access the incoming request object, inject the REQUEST object.
//
//    HTTP Example:
import { Injectable, Scope, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
@Injectable({ scope: Scope.REQUEST })
export class CatsService {
  constructor(@Inject(REQUEST) private request: Request) {}
}

//    GraphQL Example:
import { Injectable, Scope, Inject } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';
@Injectable({ scope: Scope.REQUEST })
export class CatsService {
  constructor(@Inject(CONTEXT) private context) {}
}

// Inquirer Provider:
// - To determine the class where a provider was constructed (e.g., for logging or metrics),
//   use the INQUIRER token.
//
//    Example:
import { Injectable, Inject, Scope } from '@nestjs/common';
import { INQUIRER } from '@nestjs/core';
@Injectable({ scope: Scope.TRANSIENT })
export class HelloService {
  constructor(@Inject(INQUIRER) private parentClass: object) {}

  sayHello(message: string) {
    console.log(`${this.parentClass?.constructor?.name}: ${message}`);
  }
}
