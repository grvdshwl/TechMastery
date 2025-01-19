// Ads via Carbon
// Build your website for just $3.88/mth. More value and performance with Namecheap.
// Ads via Carbon

// Execution context
// Nest provides several utility classes that help make it easy to write applications
// that function across multiple application contexts (e.g., Nest HTTP server-based,
// microservices, and WebSockets application contexts). These utilities provide
// information about the current execution context which can be used to build generic
// guards, filters, and interceptors that can work across a broad set of controllers,
// methods, and execution contexts.

// We cover two such classes in this chapter: ArgumentsHost and ExecutionContext.

// ArgumentsHost class
// The ArgumentsHost class provides methods for retrieving the arguments being passed to
// a handler. It allows choosing the appropriate context (e.g., HTTP, RPC (microservice),
// or WebSockets) to retrieve the arguments from. The framework provides an instance of
// ArgumentsHost, typically referenced as a host parameter, in places where you may want
// to access it. For example, the catch() method of an exception filter is called with an
// ArgumentsHost instance.

// ArgumentsHost simply acts as an abstraction over a handler's arguments. For example,
// for HTTP server applications (when @nestjs/platform-express is being used), the host
// object encapsulates Express's [request, response, next] array, where request is the
// request object, response is the response object, and next is a function that controls
// the application's request-response cycle. On the other hand, for GraphQL applications,
// the host object contains the [root, args, context, info] array.

// Current application context
// When building generic guards, filters, and interceptors which are meant to run across
// multiple application contexts, we need a way to determine the type of application that
// our method is currently running in. Do this with the getType() method of ArgumentsHost:

/*
if (host.getType() === 'http') {
  // Do something that is only important in the context of regular HTTP requests (REST)
} else if (host.getType() === 'rpc') {
  // Do something that is only important in the context of Microservice requests
} else if (host.getType<GqlContextType>() === 'graphql') {
  // Do something that is only important in the context of GraphQL requests
}
*/

// Hint: The GqlContextType is imported from the @nestjs/graphql package.
// With the application type available, we can write more generic components.

// Host handler arguments
// To retrieve the array of arguments being passed to the handler, one approach is to use
// the host object's getArgs() method.

/*
const [req, res, next] = host.getArgs();
*/

// You can pluck a particular argument by index using the getArgByIndex() method:

/*
const request = host.getArgByIndex(0);
const response = host.getArgByIndex(1);
*/

// Instead of relying on indexes, make the code more robust by using utility methods to
// switch to the appropriate application context.

/*
host.switchToHttp(): HttpArgumentsHost;
host.switchToRpc(): RpcArgumentsHost;
host.switchToWs(): WsArgumentsHost;
*/

// Example: Switching to HTTP context
/*
const ctx = host.switchToHttp();
const request = ctx.getRequest<Request>();
const response = ctx.getResponse<Response>();
*/

// Similarly, WsArgumentsHost and RpcArgumentsHost have methods to return appropriate
// objects in the microservices and WebSockets contexts. Example methods:

/*
export interface WsArgumentsHost {
  getData<T>(): T;
  getClient<T>(): T;
}
*/

/*
export interface RpcArgumentsHost {
  getData<T>(): T;
  getContext<T>(): T;
}
*/

// ExecutionContext class
// ExecutionContext extends ArgumentsHost, providing additional details about the current
// execution process. It provides the following methods:

/*
export interface ExecutionContext extends ArgumentsHost {
  getClass<T>(): Type<T>;
  getHandler(): Function;
}
*/

// Example usage of getHandler() and getClass():
/*
const methodKey = ctx.getHandler().name; // "create"
const className = ctx.getClass().name; // "CatsController"
*/

// Reflection and metadata
// Nest provides the ability to attach custom metadata to route handlers through the
// @SetMetadata() decorator. Example:

/*
@Post()
@SetMetadata('roles', ['admin'])
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}
*/

// It's better to use a custom decorator for metadata:
/*
import { SetMetadata } from '@nestjs/common';
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
*/

// Accessing metadata using Reflector:
/*
@Injectable()
export class RolesGuard {
  constructor(private reflector: Reflector) {}
}
const roles = this.reflector.get<string[]>('roles', context.getHandler());
*/

// Extracting metadata at multiple levels:
/*
const roles = this.reflector.getAllAndOverride<string[]>('roles', [
  context.getHandler(),
  context.getClass(),
]);
const mergedRoles = this.reflector.getAllAndMerge<string[]>('roles', [
  context.getHandler(),
  context.getClass(),
]);
*/
