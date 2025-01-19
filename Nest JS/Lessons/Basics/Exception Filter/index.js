// ### Exception Filters in NestJS

// #### Built-in Exception Layer
// NestJS comes with a built-in exception handling layer that processes all unhandled exceptions across the application. 
// If an exception is not explicitly handled in the application code, it is caught by this layer, which automatically sends a user-friendly response.

// By default, a global exception filter handles exceptions of type `HttpException` (and its subclasses). 
// If an unrecognized exception is encountered, the built-in filter generates the following JSON response:
{
  "statusCode": 500,
  "message": "Internal server error"
}

// #### HttpException Class
// The `HttpException` class is provided by the `@nestjs/common` package. It allows developers to throw exceptions with custom HTTP status codes and messages.

@Get()
async findAll() {
  throw new HttpException('Forbidden', HttpStatus.FORBIDDEN); // Throws a custom HttpException with a 403 Forbidden status
}

// Response:
{
  "statusCode": 403,
  "message": "Forbidden"
}

// The `HttpException` constructor takes two required arguments:
// 1. **response**: Defines the JSON response body (string or object).
// 2. **status**: Defines the HTTP status code.

// Optionally, a third argument `options` can be provided to include an error cause, useful for logging.

@Get()
async findAll() {
  try {
    await this.service.findAll();
  } catch (error) {
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'This is a custom message'
    }, HttpStatus.FORBIDDEN, { cause: error }); // Custom message and error cause
  }
}

// Response:
{
  "status": 403,
  "error": "This is a custom message"
}

// #### Custom Exceptions
// Custom exceptions can be created by extending the `HttpException` class.

export class ForbiddenException extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN); // Custom ForbiddenException class
  }
}

@Get()
async findAll() {
  throw new ForbiddenException(); // Throws custom ForbiddenException
}

// #### Built-in HTTP Exceptions
// NestJS provides several built-in exception classes that extend `HttpException`:
// - `BadRequestException`
// - `UnauthorizedException`
// - `NotFoundException`
// - `ForbiddenException`
// - `RequestTimeoutException`
// - `ConflictException`
// - `InternalServerErrorException`
// - `ServiceUnavailableException`

// Example:
throw new BadRequestException('Invalid input', { cause: new Error(), description: 'Validation failed' });

// Response:
{
  "message": "Invalid input",
  "error": "Validation failed",
  "statusCode": 400
}

// #### Custom Exception Filters
// To implement custom exception handling logic, create an exception filter by implementing the `ExceptionFilter<T>` interface.

import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url // Include timestamp and path info in the response
      });
  }
}

// #### Binding Filters
// Filters can be applied at different levels: method-scoped, controller-scoped, or globally.

// **Method-scoped filter**:
@Post()
@UseFilters(new HttpExceptionFilter())
async create(@Body() createCatDto: CreateCatDto) {
  throw new ForbiddenException(); // Method scoped filter handling the exception
}

// **Controller-scoped filter**:
@UseFilters(HttpExceptionFilter)
export class CatsController {}

// **Global filter**:
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter()); // Global filter for handling exceptions in all controllers
  await app.listen(3000);
}
bootstrap();

// For dependency injection in global filters:
@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter // Registering global filter with dependency injection
    }
  ]
})
export class AppModule {}

// #### Catch-All Exception Filter
// To catch all unhandled exceptions, leave the `@Catch()` decorator's parameter list empty.

import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus() // Get status of HttpException
        : HttpStatus.INTERNAL_SERVER_ERROR; // Default to 500 for unknown exceptions

    const responseBody = {
      statusCode: httpStatus,
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest()) // Include request path in response
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus); // Send formatted response
  }
}

// #### Extending BaseExceptionFilter
// For advanced use cases, extend `BaseExceptionFilter` and override its behavior.

import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    super.catch(exception, host); // Custom behavior can be added here
  }
}

// Global registration:
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter)); // Using the custom AllExceptionsFilter globally
  await app.listen(3000);
}
bootstrap();
