// ModuleRef in NestJS
//
// Definition:
// - The `ModuleRef` class allows navigation of the internal list of providers
//   to retrieve a reference to any provider using its injection token as a lookup key.
// - It also allows dynamic instantiation of both static and scoped providers.
//
// Import:
// - `ModuleRef` is imported from the `@nestjs/core` package.
//
// Injecting ModuleRef:
// - You can inject `ModuleRef` into a service like this:
import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class CatsService {
  constructor(private moduleRef: ModuleRef) {}
}

// Retrieving Instances:
// - Use the `get()` method of `ModuleRef` to retrieve a provider, controller, or injectable.
// - Example:
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class CatsService implements OnModuleInit {
  private service: Service;

  constructor(private moduleRef: ModuleRef) {}

  onModuleInit() {
    this.service = this.moduleRef.get(Service);
  }
}

// Warning:
// - You cannot retrieve scoped providers (transient or request-scoped) with the `get()` method.
// - Use the `resolve()` method to dynamically retrieve scoped providers.
//
// Retrieving from Global Context:
// - Use `{ strict: false }` to retrieve a provider from the global context:
this.moduleRef.get(Service, { strict: false });

// Resolving Scoped Providers:
// - Use the `resolve()` method to retrieve transient or request-scoped providers.
// - Example:
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class CatsService implements OnModuleInit {
  private transientService: TransientService;

  constructor(private moduleRef: ModuleRef) {}

  async onModuleInit() {
    this.transientService = await this.moduleRef.resolve(TransientService);
  }
}

// Unique Instances:
// - The `resolve()` method creates unique instances for each call.
// - Example:
@Injectable()
export class CatsService implements OnModuleInit {
  constructor(private moduleRef: ModuleRef) {}

  async onModuleInit() {
    const transientServices = await Promise.all([
      this.moduleRef.resolve(TransientService),
      this.moduleRef.resolve(TransientService),
    ]);
    console.log(transientServices[0] === transientServices[1]); // false
  }
}

// Shared Instances Across Calls:
// - Use `ContextIdFactory.create()` to create a context ID to share instances:
import { ContextIdFactory } from '@nestjs/core';

@Injectable()
export class CatsService implements OnModuleInit {
  constructor(private moduleRef: ModuleRef) {}

  async onModuleInit() {
    const contextId = ContextIdFactory.create();
    const transientServices = await Promise.all([
      this.moduleRef.resolve(TransientService, contextId),
      this.moduleRef.resolve(TransientService, contextId),
    ]);
    console.log(transientServices[0] === transientServices[1]); // true
  }
}

// Registering a REQUEST Object:
// - For a manually created DI sub-tree, register a custom REQUEST object:
const contextId = ContextIdFactory.create();
this.moduleRef.registerRequestByContextId(/* YOUR_REQUEST_OBJECT */, contextId);

// Getting Current Sub-tree:
// - To resolve a request-scoped provider within a request context, obtain the current context ID.
// - Example:
import { Injectable, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';

@Injectable()
export class CatsService {
  constructor(
    @Inject(REQUEST) private request: Record<string, unknown>,
  ) {}
}

const contextId = ContextIdFactory.getByRequest(this.request);
const catsRepository = await this.moduleRef.resolve(CatsRepository, contextId);

// Dynamically Instantiating Custom Classes:
// - Use the `create()` method to dynamically instantiate a class not registered as a provider:
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class CatsService implements OnModuleInit {
  private catsFactory: CatsFactory;

  constructor(private moduleRef: ModuleRef) {}

  async onModuleInit() {
    this.catsFactory = await this.moduleRef.create(CatsFactory);
  }
}

// Notes:
// - The `create()` method is useful for conditionally instantiating classes outside the framework container.
