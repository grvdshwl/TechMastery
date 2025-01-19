// In NestJS, guards can be applied at three levels: controller-scoped, method-scoped, and global-scoped.
// This gives developers flexibility in choosing where the guard should apply.

// 1. Controller-scoped Guard:
// The @UseGuards() decorator is used to attach guards to a controller. You can apply a guard to all routes within the controller or to specific methods.

import { Controller, UseGuards } from "@nestjs/common";
import { RolesGuard } from "./roles.guard";

@Controller("cats")
// Applying the RolesGuard to all routes in the 'cats' controller
@UseGuards(RolesGuard)
export class CatsController {
  // Route handlers go here
}

// 2. Method-scoped Guard:
// You can also apply a guard to a single method within a controller, which gives you more granular control over which route handlers need the guard.

import { Controller, Get, UseGuards } from "@nestjs/common";

@Controller("cats")
export class CatsController {
  @Get()
  // Applying the RolesGuard to only the 'getCats' method
  @UseGuards(RolesGuard)
  getCats() {
    // Handler logic
  }
}

// 3. Global-scoped Guard:
// To apply a guard globally (for every route and controller in the app), use the useGlobalGuards() method on the application instance.
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { RolesGuard } from "./roles.guard";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Applying RolesGuard globally across all controllers and methods
  app.useGlobalGuards(new RolesGuard());
  await app.listen(3000);
}

bootstrap();

// Note: In hybrid applications (using both HTTP & WebSockets or microservices),
// the useGlobalGuards() method does not apply the guards to gateways or microservices by default.

// 4. Setting up Global Guards with Dependency Injection:
// When applying a global guard that requires dependency injection, use the following method within a module.

import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { RolesGuard } from "./roles.guard";

@Module({
  providers: [
    {
      provide: APP_GUARD, // Register the guard globally within the app
      useClass: RolesGuard, // Define the guard class
    },
  ],
})
export class AppModule {}

// 5. Important Notes:
// - The @UseGuards() decorator accepts both class references (RolesGuard) or instances (new RolesGuard()).
// - When applying a global guard with useGlobalGuards(), it won't automatically inject dependencies unless you configure it as shown in the AppModule example above.
// - Guards, like pipes and exception filters, are executed after middleware and before interceptors or pipes.
