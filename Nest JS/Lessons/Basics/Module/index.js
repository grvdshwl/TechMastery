// In NestJS, Modules are used to organize the application into cohesive blocks of functionality.
// A module is a class annotated with the @Module() decorator, which defines the components (controllers, providers, and services)
// that belong to the module and how they interact with each other.

// Importing the necessary decorator from NestJS
import { Module } from "@nestjs/common";

// Importing the components (services and controllers) to be used within the module
import { MyService } from "./my.service"; // Importing the service
import { ItemsController } from "./items.controller"; // Importing the controller

// The @Module() decorator defines the module and its components
@Module({
  imports: [], // This property defines other modules that this module depends on (empty here for simplicity)
  controllers: [ItemsController], // Registering the controllers in this module
  providers: [MyService], // Registering the providers (services) in this module
})
export class AppModule {
  // The AppModule is the root module of the application, where we register the main controllers and services
  // Modules help structure the application in a modular way and can be used to group related functionality
}

// Another example of a feature-specific module to demonstrate the flexibility of modules

import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
  imports: [], // Additional modules can be imported here (e.g., shared services, database modules)
  controllers: [UsersController], // Registering controllers for handling user-related routes
  providers: [UsersService], // Registering services for handling user data and logic
})
export class UsersModule {
  // This module is specific to user-related functionality and can be imported into the main app module or other modules
}

// In larger applications, we can break the app into multiple modules to ensure better scalability and organization.
// For example, the `AppModule` can import the `UsersModule`, and the `UsersModule` can import other modules (like database modules or third-party integrations).
