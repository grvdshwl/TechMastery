/*
  This is the basic setup for a NestJS application using the concepts of 
  Module, Controller, and Service.

  1. **Module**: A Module is a class that serves as a container for related components 
     like controllers, services, and other modules. Every NestJS app has at least one 
     module (the root module, AppModule).
  
  2. **Controller**: A Controller is responsible for handling incoming HTTP requests. 
     It interacts with services to handle the business logic and then returns 
     appropriate responses to the client.

  3. **Service**: A Service contains the business logic of the application. It is 
     injected into the controller and provides the functionality needed to process 
     the requests.

  --- Basic Setup in NestJS ---
*/

// Step 1: Install NestJS CLI globally
// npm install -g @nestjs/cli

// Step 2: Create a new project using NestJS CLI
// nest new my-nest-app

// Step 3: Navigate to the project directory and run the app
// cd my-nest-app
// npm run start
