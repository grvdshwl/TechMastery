// Custom Route Decorators in NestJS
// NestJS uses decorators, a language feature introduced in ES2016, for defining routes, middleware, and other aspects of an application.
// Decorators allow attaching metadata to classes, methods, and properties.

// 1. Creating a Custom Param Decorator
// This custom decorator extracts the 'user' object from the request.
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  }
);

// 2. Using the Custom Decorator in a Controller
// This controller demonstrates how to use the @User() decorator to extract the user object.
@Controller("users")
export class UserController {
  @Get("profile")
  async getUserProfile(@User() user: any) {
    console.log("User:", user);
    return user;
  }
}

// Output Example:
// Request to /users/profile
// User: { id: 101, firstName: 'Alan', lastName: 'Turing', email: 'alan@email.com' }

// 3. Passing Data to the Custom Decorator
// This custom decorator extracts a specific property from the user object based on the provided key.
export const UserProperty = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    return data ? user?.[data] : user;
  }
);

// Controller using the @UserProperty() decorator
@Controller("users")
export class UserPropertyController {
  @Get("firstname")
  async getUserFirstName(@UserProperty("firstName") firstName: string) {
    console.log(`Hello ${firstName}`);
    return `Hello ${firstName}`;
  }
}

// Output Example:
// Request to /users/firstname
// Hello Alan

// 4. Composing Multiple Decorators
// NestJS provides a helper function called applyDecorators to combine multiple decorators into one.
import { applyDecorators, UseGuards, SetMetadata } from "@nestjs/common";
import { AuthGuard, RolesGuard } from "./guards";
import { ApiBearerAuth, ApiUnauthorizedResponse } from "@nestjs/swagger";

export function Auth(...roles: string[]) {
  return applyDecorators(
    SetMetadata("roles", roles),
    UseGuards(AuthGuard, RolesGuard),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({ description: "Unauthorized" })
  );
}

// Using the composed @Auth() decorator
@Controller("admin")
export class AdminController {
  @Get("dashboard")
  @Auth("admin")
  getAdminDashboard() {
    return "Admin Dashboard";
  }
}

// Output Example:
// Request to /admin/dashboard
// Response: 'Admin Dashboard'

// Hint:
// When using pipes with custom decorators, set the 'validateCustomDecorators' option to true in ValidationPipe for proper validation.
