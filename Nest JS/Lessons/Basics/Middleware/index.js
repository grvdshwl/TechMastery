// In NestJS, Middleware are functions that are executed before the route handler (controller method) is invoked.
// They can perform tasks such as logging, request validation, authentication, and modifying the request or response objects.
// Middleware in NestJS is similar to Express middleware but follows NestJS's structure and dependency injection system.

// Importing necessary modules from NestJS
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

// The @Injectable() decorator marks this class as a middleware that can be injected into the application.
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  // The use() method is where the middleware logic is implemented
  use(req: Request, res: Response, next: NextFunction) {
    console.log("Request...");
    // Proceeding to the next middleware or route handler
    next();
  }
}

// Middleware is registered within the module, so that it can be used globally or for specific routes.
// Here’s how to register it within a module:

import { Module, MiddlewareConsumer, NestModule } from "@nestjs/common";

@Module({
  imports: [], // Modules to be imported into this module
  controllers: [], // Controllers to be registered for this module
  providers: [LoggerMiddleware], // Middleware is registered as a provider
})
export class AppModule implements NestModule {
  // The configure() method allows you to configure middleware for specific routes
  configure(consumer: MiddlewareConsumer) {
    // Apply the LoggerMiddleware globally (to all routes)
    consumer.apply(LoggerMiddleware).forRoutes("*");
    // You can also apply middleware only to specific routes, like so:
    // consumer.apply(LoggerMiddleware).forRoutes('users'); // Only apply to /users routes
  }
}

// Another example of using middleware for authentication:

import { Injectable } from "@nestjs/common";
import { NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Simulate authentication check
    const isAuthenticated =
      req.headers["authorization"] === "Bearer valid-token";

    if (!isAuthenticated) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    next(); // Proceed to the route handler if authenticated
  }
}

// Registering the authentication middleware in a specific route
@Module({
  imports: [],
  controllers: [SomeController],
  providers: [AuthMiddleware],
})
export class SomeModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Apply the AuthMiddleware only to the 'protected' route
    consumer.apply(AuthMiddleware).forRoutes("protected");
  }
}
