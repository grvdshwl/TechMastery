// Interceptors in NestJS
// Interceptors are a type of middleware that can transform outgoing responses, modify request/response streams, and handle cross-cutting concerns.
// They allow for the following functionalities:
// - Logging requests and responses
// - Mapping and transforming responses
// - Handling exceptions
// - Modifying or overriding streams

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  UseInterceptors,
  Controller,
  Get,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { tap, map, catchError } from "rxjs/operators";

// 1. Basic Logging Interceptor
// This interceptor logs the time taken to handle a request.
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log("Before request handling...");

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() =>
          console.log(`After request handling... ${Date.now() - now}ms`)
        )
      );
  }
}

// 2. Response Mapping Interceptor
// This interceptor maps the response to a consistent format.
@Injectable()
export class ResponseMappingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => ({
        success: true,
        data,
      }))
    );
  }
}

// 3. Exception Mapping Interceptor
// This interceptor catches errors and returns a custom error message.
@Injectable()
export class ExceptionMappingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err) => {
        console.error("Error intercepted:", err.message);
        throw new Error("An error occurred while processing the request");
      })
    );
  }
}

// 4. Stream Overriding Interceptor
// This interceptor modifies the outgoing stream.
@Injectable()
export class StreamOverrideInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(map((data) => data + " - Stream modified by interceptor"));
  }
}

// Controller to demonstrate interceptors
// This controller uses the LoggingInterceptor and ResponseMappingInterceptor.
@Controller("example")
@UseInterceptors(LoggingInterceptor, ResponseMappingInterceptor)
export class ExampleController {
  @Get("hello")
  // This route returns a simple message.
  sayHello(): string {
    return "Hello from NestJS!";
  }

  @Get("error")
  // This route triggers an error to demonstrate error handling.
  triggerError(): string {
    throw new Error("Simulated error");
  }
}

/* Output Example:
    Request to /example/hello
     Before request handling...
     After request handling... 50ms
    Response: {
      success: true,
      data: 'Hello from NestJS!'
    }
  
    Request to /example/error
     Before request handling...
     Error intercepted: Simulated error
    Response: { success: false, message: 'An error occurred while processing the request' }
  */
