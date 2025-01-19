/**
 * Dynamic Modules in NestJS
 * -------------------------
 * Dynamic modules allow customization of module behavior at runtime, 
 * unlike static modules, which are configured during development.
 * 
 * Use Case:
 * - Suitable for generic modules that require different configurations for different use cases.
 * - Example: A configuration module that reads settings from different folders based on the environment.
 */

/**
 * Static Modules Example
 * -----------------------
 * UsersModule provides and exports UsersService.
 */
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

/**
 * AuthModule imports UsersModule, enabling access to UsersService.
 */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}

/**
 * Injecting UsersService into AuthService:
 */
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
}

/**
 * Dynamic Module Use Case
 * -----------------------
 * - Static modules cannot be influenced by consuming modules.
 * - Dynamic modules allow passing options (e.g., folder paths) at runtime 
 *   for more flexible configurations.
 */

/**
 * ConfigModule Example
 * --------------------
 * Static Implementation:
 */
import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/**
 * Dynamic Implementation:
 * - Uses ConfigModule.register() to pass runtime options.
 */
import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule.register({ folder: './config' })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/**
 * Creating a Dynamic Module:
 * - Define a static method (e.g., register) returning a DynamicModule object.
 */
import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({})
export class ConfigModule {
  static register(options: Record<string, any>): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        { provide: 'CONFIG_OPTIONS', useValue: options },
        ConfigService,
      ],
      exports: [ConfigService],
    };
  }
}

/**
 * Injecting Dynamic Configuration:
 * - Use the @Inject() decorator for injecting runtime options.
 */
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class ConfigService {
  constructor(@Inject('CONFIG_OPTIONS') private options: Record<string, any>) {}
}

/**
 * Using ConfigurableModuleBuilder:
 * - Simplifies creation of highly configurable modules.
 */
import { ConfigurableModuleBuilder } from '@nestjs/common';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder().build();

/**
 * Extending ConfigurableModuleClass:
 * - Automatically adds methods like register() and registerAsync().
 */
@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule extends ConfigurableModuleClass {}

/**
 * Customizing Dynamic Modules:
 * - Change method names (e.g., forRoot) or factory methods using builder configuration.
 */
