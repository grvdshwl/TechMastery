// In NestJS, a Service is a class that is responsible for handling business logic, data processing, or communication with external APIs.
// Services are usually marked as providers and injected into controllers or other services using NestJS's Dependency Injection system.

// Importing the necessary decorator from NestJS
import { Injectable } from '@nestjs/common';

// @Injectable() decorator marks this class as a service that can be injected into other parts of the application
@Injectable()
export class MyService {
  // A private property to store some data (could be from a database, API, etc.)
  private data = ['Item1', 'Item2', 'Item3'];

  // A method in the service to retrieve data
  getData() {
    return this.data;
  }

  // A method to add new data
  addData(item: string) {
    this.data.push(item);
  }

  // A method to simulate business logic or data transformation
  processData() {
    return this.data.map(item => item.toUpperCase());
  }
}

// Services are typically injected into controllers to manage the request and response lifecycle.
// Here’s how we can use the service in a controller:

import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  // Injecting the service into the controller through the constructor
  constructor(private readonly myService: MyService) {}

  // A GET route handler to retrieve the data from the service
  @Get()
  getItems() {
    return this.myService.getData();
  }

  // A POST route handler to add new data to the service
  @Post()
  addItem(@Body('item') item: string) {
    this.myService.addData(item);
    return { message: 'Item added successfully!' };
  }

  // A route to process data using the service's method
  @Get('process')
  processItems() {
    return this.myService.processData();
  }
}

// Services are registered in modules, which allow them to be injected into controllers or other services
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ItemsController], // Registering the controller that uses the service
  providers: [MyService], // Registering the service as a provider within this module
})
export class AppModule {}

// Now, the service (`MyService`) is available within the AppModule, and can be injected into other parts of the app (e.g., controllers, other services).
