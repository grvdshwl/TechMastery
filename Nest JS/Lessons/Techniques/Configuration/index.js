// Configuration in Node.js Applications
// Applications often run in different environments (e.g., local, production).
// Each environment may require different configuration settings (e.g., database credentials).

// Example: Using dotenv for managing configuration in Node.js
/*
  DATABASE_USER=test
  DATABASE_PASSWORD=test
*/

// In Node.js, we access environment variables via `process.env`.
// This can be combined with `.env` files to manage environment-specific configurations.

// Install the @nestjs/config package
// $ npm i --save @nestjs/config

// Import the ConfigModule and use it in the root module.
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
})
export class AppModule {}

// By default, it loads `.env` from the root directory and merges it with `process.env`.
// Example `.env` content:
// DATABASE_USER=test
// DATABASE_PASSWORD=secure_password

// Customizing the .env file path
ConfigModule.forRoot({
  envFilePath: '.development.env',
});

// Example: Loading multiple .env files (priority: first file listed)
ConfigModule.forRoot({
  envFilePath: ['.env.development.local', '.env.development'],
});

// Disable loading `.env` and rely on runtime variables
ConfigModule.forRoot({
  ignoreEnvFile: true,
});

// Make ConfigModule global to avoid importing it in every module
ConfigModule.forRoot({
  isGlobal: true,
});

// Example: Using a custom configuration file
// Define a custom configuration file
export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
});

// Load the custom configuration file
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
})
export class AppModule {}

// Example: Loading YAML configuration files
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = 'config.yaml';

export default () => {
  return yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as Record<string, any>;
};

// Access configuration values via ConfigService
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {
    const dbUser = this.configService.get<string>('DATABASE_USER');
    const dbHost = this.configService.get<string>('database.host');
    console.log(`Database User: ${dbUser}, Host: ${dbHost}`);
  }
}

// Use TypeScript interfaces for better typing with ConfigService
interface DatabaseConfig {
  host: string;
  port: number;
}

const dbConfig = this.configService.get<DatabaseConfig>('database');
console.log(`DB Host: ${dbConfig.host}, Port: ${dbConfig.port}`);

// Define default values
const dbHost = this.configService.get<string>('database.host', 'localhost');

// Validate environment variables with Joi
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),
        PORT: Joi.number().default(3000),
      }),
    }),
  ],
})
export class AppModule {}

// Example: Custom validation with class-validator
import { plainToInstance } from 'class-transformer';
import { IsEnum, IsNumber, validateSync } from 'class-validator';

enum Environment {
  Development = "development",
  Production = "production",
  Test = "test",
  Provision = "provision",
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsNumber()
  PORT: number;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(
    EnvironmentVariables,
    config,
    { enableImplicitConversion: true },
  );
  const errors = validateSync(validatedConfig, { skipMissingProperties: false });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}

// Register the validate function in ConfigModule
@Module({
  imports: [
    ConfigModule.forRoot({
      validate,
    }),
  ],
})
export class AppModule {}

// Add custom getter functions for cleaner usage
@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  get isAuthEnabled(): boolean {
    return this.configService.get('AUTH_ENABLED') === 'true';
  }
}

// Use the custom getter function
@Injectable()
export class AppService {
  constructor(private apiConfigService: ApiConfigService) {
    if (apiConfigService.isAuthEnabled) {
      console.log('Authentication is enabled');
    }
  }
}
