// Circular Dependency in NestJS
//
// Definition:
// - A circular dependency occurs when two classes depend on each other.
//   Example: Class A needs Class B, and Class B also needs Class A.
// - Circular dependencies can arise between modules and between providers.
//
// Notes:
// - While circular dependencies should be avoided, they are sometimes unavoidable.
// - Nest provides two techniques to resolve circular dependencies between providers:
//   1. Using forward referencing (`forwardRef()`).
//   2. Using the `ModuleRef` class to retrieve a provider from the DI container.
//
// - Circular dependencies between modules can also be resolved with `forwardRef()`.
//
// Warning:
// - Circular dependencies may arise when using "barrel files" (e.g., `index.ts`) to group imports.
// - Avoid using barrel files for module/provider imports within the same directory.
// - Example: `cats/cats.controller` should not use `cats/index.ts` to import `cats/cats.service`.
//
// Forward Reference:
// - The `forwardRef()` utility function allows Nest to reference classes that aren't yet defined.
//
// Example:
// - If `CatsService` and `CommonService` depend on each other, use `forwardRef()` on both sides.
//
// cats.service.ts
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CommonService } from './common.service';

/**
 * CatsService depends on CommonService, resolved using forwardRef().
 */
@Injectable()
export class CatsService {
  constructor(
    @Inject(forwardRef(() => CommonService))
    private commonService: CommonService,
  ) {}
}

// common.service.ts
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CatsService } from './cats.service';

/**
 * CommonService depends on CatsService, resolved using forwardRef().
 */
@Injectable()
export class CommonService {
  constructor(
    @Inject(forwardRef(() => CatsService))
    private catsService: CatsService,
  ) {}
}

// Warning:
// - The order of instantiation for circular dependencies is indeterminate.
// - Ensure your code does not rely on which constructor is called first.
// - Avoid using request-scoped providers (Scope.REQUEST) in circular dependencies, as this can lead to undefined dependencies.
//
// ModuleRef Class Alternative:
// - Instead of using `forwardRef()`, you can refactor the code and use the `ModuleRef` class.
// - This allows you to retrieve a provider from the DI container explicitly.
//
// Module Forward Reference:
// - Circular dependencies between modules can also be resolved using `forwardRef()`.
//
// Example:
// common.module.ts
import { Module, forwardRef } from '@nestjs/common';
import { CatsModule } from './cats.module';

/**
 * CommonModule depends on CatsModule, resolved using forwardRef().
 */
@Module({
  imports: [forwardRef(() => CatsModule)],
})
export class CommonModule {}

// cats.module.ts
import { Module, forwardRef } from '@nestjs/common';
import { CommonModule } from './common.module';

/**
 * CatsModule depends on CommonModule, resolved using forwardRef().
 */
@Module({
  imports: [forwardRef(() => CommonModule)],
})
export class CatsModule {}
