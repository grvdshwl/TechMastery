// ### Pipes in NestJS

// Pipes are a powerful feature in NestJS, used for transforming and validating data.
// They can be used either to modify incoming requests or to enforce rules on them before passing data to route handlers.

// #### How pipes work
// When a request is made to a route, any data in the request can be processed by pipes before it reaches the controller.
// Pipes have two typical use cases:

// 1. **Transformation**: Transform data into the desired form (e.g., converting a string to an integer).
// 2. **Validation**: Validate the data and throw an error if it doesn't meet specific criteria.

// #### Built-in pipes
// NestJS provides several built-in pipes for common use cases:

// - **ValidationPipe**: Automatically validates incoming request data using class-validator.
// - **ParseIntPipe**: Transforms string values into integers.
// - **ParseBoolPipe**: Transforms string values into booleans.
// - **ParseArrayPipe**: Validates and parses array data.
// - **DefaultValuePipe**: Assigns a default value if no value is provided.
// - **ParseUUIDPipe**: Validates and transforms UUID strings.

// These pipes are available in the `@nestjs/common` package.

// #### Using built-in pipes

// Pipes can be applied at different levels:

// 1. **Method-scoped**: Apply pipes to a specific route handler method.
// 2. **Controller-scoped**: Apply pipes to all route handlers within a controller.
// 3. **Global-scoped**: Apply pipes to the entire application.

// Example of using `ParseIntPipe`:

import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";

@Controller("cats")
export class CatsController {
  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return `This action returns a cat with ID: ${id}`; // Automatically converts 'id' to integer
  }
}

// In this example, `ParseIntPipe` ensures that the `id` parameter is converted to an integer.
// If the parameter cannot be converted, an error is thrown.

// #### Custom pipes
// If the built-in pipes do not meet your needs, you can create custom pipes.
// A custom pipe must implement the `PipeTransform` interface, which requires a `transform` method.

// Example of a custom pipe:

import { PipeTransform, Injectable, BadRequestException } from "@nestjs/common";

@Injectable()
export class UppercasePipe implements PipeTransform {
  transform(value: any) {
    if (typeof value !== "string") {
      throw new BadRequestException("Value must be a string"); // Throws error if the value is not a string
    }
    return value.toUpperCase(); // Transforms the value to uppercase
  }
}

// This pipe transforms the input value to uppercase and throws an error if the value is not a string.

// #### Applying custom pipes
// Custom pipes can be applied in the same way as built-in pipes:

import { Controller, Post, Body } from "@nestjs/common";
import { UppercasePipe } from "./uppercase.pipe";

@Controller("cats")
export class CatsController {
  @Post()
  create(@Body("name", UppercasePipe) name: string) {
    return `Created a cat with name: ${name}`; // Automatically converts 'name' to uppercase before processing
  }
}

// In this example, the `UppercasePipe` ensures that the `name` field in the request body
// is converted to uppercase before being processed.

// #### Global pipes
// To apply a pipe globally, use the `useGlobalPipes` method:

import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // Apply the ValidationPipe globally to all requests
  await app.listen(3000);
}
bootstrap();

// Global pipes apply to all incoming requests throughout the application.

// #### ValidationPipe
// The `ValidationPipe` is one of the most commonly used pipes.
// It works in conjunction with the `class-validator` and `class-transformer` packages to validate and transform incoming data.

// Example:

import { IsString, IsInt, MinLength, Min } from "class-validator";

export class CreateCatDto {
  @IsString()
  @MinLength(3)
  name: string; // Ensures 'name' is a string and has a minimum length of 3 characters

  @IsInt()
  @Min(1)
  age: number; // Ensures 'age' is an integer and greater than or equal to 1
}

// When used with the `ValidationPipe`, this DTO ensures that the incoming request data meets the specified constraints.
// If the data is invalid, an error response is sent automatically.

// Controller example:

import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { CreateCatDto } from "./create-cat.dto";

@Controller("cats")
export class CatsController {
  @Post()
  @UsePipes(new ValidationPipe()) // Apply ValidationPipe to validate
