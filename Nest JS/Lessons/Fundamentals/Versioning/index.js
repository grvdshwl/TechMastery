// Versioning in NestJS
// Versioning enables you to run multiple versions of controllers or individual routes
// within the same application. This is useful when breaking changes are introduced
// but you still need to support previous versions.

// Types of Versioning
// NestJS supports four types of versioning:
// 1. URI Versioning: The version is passed within the URI (e.g., /v1/route, /v2/route).
// 2. Header Versioning: A custom request header specifies the version.
// 3. Media Type Versioning: The Accept header specifies the version.
// 4. Custom Versioning: A custom function determines the version from any aspect of the request.

//// URI Versioning
// This is the default versioning type. Versions are added to the URI, such as:
// https://example.com/v1/route or https://example.com/v2/route.

// Enabling URI Versioning:
import { VersioningType } from "@nestjs/common";
const app = await NestFactory.create(AppModule);
app.enableVersioning({
  type: VersioningType.URI,
});
await app.listen(3000);

// Note: By default, the version is prefixed with "v". To customize or remove the prefix:
app.enableVersioning({
  type: VersioningType.URI,
  prefix: false, // Disable prefix
});

//// Header Versioning
// Uses a custom request header to specify the version (e.g., Custom-Header: 1).

// Enabling Header Versioning:
app.enableVersioning({
  type: VersioningType.HEADER,
  header: "Custom-Header", // Specify the custom header name
});

//// Media Type Versioning
// Specifies the version using the Accept header.
// Format: Accept: application/json;v=2 (where "v=2" indicates the version).

// Enabling Media Type Versioning:
app.enableVersioning({
  type: VersioningType.MEDIA_TYPE,
  key: "v=", // The key for the version in the Accept header
});

//// Custom Versioning
// Uses any aspect of the request to determine the version, defined by an extractor function.
// Example extractor for Fastify:
const extractor = (request) =>
  [request.headers["custom-versioning-field"] ?? ""]
    .flatMap((v) => v.split(","))
    .filter((v) => !!v)
    .sort()
    .reverse();

app.enableVersioning({
  type: VersioningType.CUSTOM,
  extractor, // Custom function to extract the version
});

//// Versioning Usage
// Versioning can be applied at the controller level, route level, or both.

//// Controller Versioning
// Apply a version to all routes in a controller:
@Controller({
  version: "1", // Version for this controller
})
export class CatsController {
  @Get("cats")
  findAll(): string {
    return "This action returns all cats for version 1";
  }
}

//// Route Versioning
// Apply a version to an individual route. Overrides the controller version.
@Controller()
export class CatsController {
  @Version("1")
  @Get("cats")
  findAllV1(): string {
    return "This action returns all cats for version 1";
  }

  @Version("2")
  @Get("cats")
  findAllV2(): string {
    return "This action returns all cats for version 2";
  }
}

//// Multiple Versions
// Apply multiple versions to a controller or route.
@Controller({
  version: ["1", "2"], // Supports both versions
})
export class CatsController {
  @Get("cats")
  findAll(): string {
    return "This action returns all cats for version 1 or 2";
  }
}

//// Version Neutral
// Some controllers or routes can work across all versions.
import { VERSION_NEUTRAL } from "@nestjs/common";
@Controller({
  version: VERSION_NEUTRAL, // Neutral to all versions
})
export class CatsController {
  @Get("cats")
  findAll(): string {
    return "This action returns all cats regardless of version";
  }
}

//// Global Default Version
// Set a default version for all routes/controllers without explicitly specifying one:
app.enableVersioning({
  defaultVersion: "1", // Default version is 1
  // or
  defaultVersion: ["1", "2"], // Supports multiple default versions
  // or
  defaultVersion: VERSION_NEUTRAL, // Neutral default
});

//// Middleware Versioning
// Apply middleware to specific versions of a route:
consumer
  .apply(LoggerMiddleware)
  .forRoutes({ path: "cats", method: RequestMethod.GET, version: "2" });
// In this example, LoggerMiddleware is applied only to version '2' of the /cats endpoint.
