// In NestJS, Providers are the fundamental building blocks of the application.
// They are used for handling business logic, such as services, repositories, and other data handling entities.

// Importing the required modules from NestJS
import { Injectable } from '@nestjs/common';

// @Injectable() decorator marks this class as a provider that can be injected into other classes
@Injectable()
export class MyService {
  // Defining a property within the service
  private users = ['Alice', 'Bob', 'Charlie'];

  // A method that provides some business logic
  getUsers() {
    return this.users;
  }
}

// Providers can be injected into other classes, such as controllers or other services.
// Let's define a Controller that injects the above service

import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  // The service is injected through the constructor
  constructor(private readonly myService: MyService) {}

  // A route handler that uses the service to fetch data
  @Get()
  findAll() {
    // Calling the method from the service to get the users
    return this.myService.getUsers();
  }
}

// In NestJS, providers are registered in modules. A module is like a container for services, controllers, and other components.

// Importing the required module from NestJS
import { Module } from '@nestjs/common';

// Registering the service and controller in a module
@Module({
  imports: [],
  controllers: [UsersController],  // Associating the controller with this module
  providers: [MyService],  // Registering the provider (service) within this module
})
export class AppModule {}

// The provider (`MyService`) is now available globally throughout the app,
// and can be injected into any component (controller, another provider, etc.) within the module.
