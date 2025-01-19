/**
 * Dependency Injection (DI) Overview
 * -----------------------------------
 * DI is a technique where the responsibility of instantiating dependencies
 * is delegated to the IoC (Inversion of Control) container. NestJS uses DI 
 * extensively for managing providers and their dependencies.
 *
 * Let's walk through key concepts and custom provider examples.
 */

// Example: Standard Provider
// --------------------------
// The @Injectable() decorator marks a class as a provider that can be 
// managed by the NestJS IoC container.
@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  findAll(): Cat[] {
    return this.cats;
  }
}

// The controller requests the provider through constructor injection.
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}

// Finally, the provider is registered in the module.
@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class AppModule {}

/**
 * Custom Providers
 * ----------------
 * Custom providers allow greater flexibility in how dependencies are
 * created, managed, and injected. Several types are available:
 */

// 1. Value Providers: `useValue`
// Injects a constant or mock object.
const mockCatsService = { /* Mock implementation */ };

@Module({
  providers: [
    {
      provide: CatsService,
      useValue: mockCatsService, // CatsService resolves to mockCatsService
    },
  ],
})
export class AppModule {}

// 2. Non-Class Tokens
// You can use strings or symbols as tokens for non-class-based providers.
@Module({
  providers: [
    {
      provide: 'CONNECTION', // A string token
      useValue: connection,  // Predefined connection object
    },
  ],
})
export class AppModule {}

// 3. Class Providers: `useClass`
// Dynamically decide which class to use based on runtime conditions.
const configServiceProvider = {
  provide: ConfigService,
  useClass: process.env.NODE_ENV === 'development'
    ? DevelopmentConfigService
    : ProductionConfigService,
};

@Module({
  providers: [configServiceProvider],
})
export class AppModule {}

// 4. Factory Providers: `useFactory`
// Create a provider dynamically using a factory function.
const connectionProvider = {
  provide: 'CONNECTION',
  useFactory: (optionsProvider: OptionsProvider) => {
    const options = optionsProvider.get();
    return new DatabaseConnection(options);
  },
  inject: [OptionsProvider], // Inject dependencies into the factory
};

@Module({
  providers: [connectionProvider, OptionsProvider],
})
export class AppModule {}

// 5. Alias Providers: `useExisting`
// Create aliases for existing providers.
const loggerAliasProvider = {
  provide: 'AliasedLoggerService', // Alias token
  useExisting: LoggerService,      // Resolves to LoggerService
};

@Module({
  providers: [LoggerService, loggerAliasProvider],
})
export class AppModule {}

// 6. Exporting Custom Providers
// Custom providers must be exported to make them available in other modules.
const connectionFactory = {
  provide: 'CONNECTION',
  useFactory: (optionsProvider: OptionsProvider) => {
    const options = optionsProvider.get();
    return new DatabaseConnection(options);
  },
  inject: [OptionsProvider],
};

@Module({
  providers: [connectionFactory],
  exports: ['CONNECTION'], // Export by token
})
export class AppModule {}

/**
 * Summary
 * -------
 * - Standard providers use `@Injectable()` for dependency injection.
 * - Custom providers like `useValue`, `useClass`, `useFactory`, and `useExisting`
 *   allow advanced customization of the DI process.
 * - Proper exporting of providers ensures they are accessible across modules.
 */
