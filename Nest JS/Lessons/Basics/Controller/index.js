// ===============================
// What is a Controller?
// ===============================

// In NestJS, a Controller handles incoming HTTP requests and maps them to specific methods,
// which return appropriate responses. The @Controller decorator is used to define a controller class,
// while @Get, @Post, @Put, @Delete, etc., are used to define route handlers.

// ===============================
// Example 1: Basic Controller with Route Handler
// ===============================

import { Controller, Get } from "@nestjs/common";

@Controller("users")
export class UserController {
  @Get()
  getAllUsers() {
    return ["User1", "User2", "User3"];
  }
}

// ===============================
// Example 2: Handling Route Parameters
// ===============================

import { Controller, Get, Param } from "@nestjs/common";

@Controller("users")
export class UserController {
  // The @Param decorator retrieves a parameter from the route
  @Get(":id")
  getUserById(@Param("id") id: string) {
    return `User with ID: ${id}`;
  }
}

// Usage: Sending a GET request to /users/123 will return "User with ID: 123"

// ===============================
// Example 3: Handling Query Parameters
// ===============================

import { Controller, Get, Query } from "@nestjs/common";

@Controller("users")
export class UserController {
  // The @Query decorator retrieves query parameters from the request URL
  @Get("search")
  searchUsers(@Query("name") name: string) {
    return `Searching for user with name: ${name}`;
  }
}

// Usage: Sending a GET request to /users/search?name=John will return "Searching for user with name: John"

// ===============================
// Example 4: Using HTTP Status Codes
// ===============================

import { Controller, Get, HttpCode } from "@nestjs/common";

@Controller("users")
export class UserController {
  @Get("status")
  @HttpCode(204) // Returns a 204 No Content status code without any content in the response
  sendStatus() {
    return;
  }
}

// Usage: Sending a GET request to /users/status will return a 204 No Content response

// ===============================
// Example 5: Redirection
// ===============================

import { Controller, Get, Redirect } from "@nestjs/common";

@Controller("users")
export class UserController {
  @Get("redirect")
  @Redirect("https://example.com", 302) // Redirects to another URL with a 302 Found status
  redirectToExample() {
    return;
  }
}

// Usage: Sending a GET request to /users/redirect will redirect the client to https://example.com
