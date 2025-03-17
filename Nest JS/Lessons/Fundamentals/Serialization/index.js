// Serialization is the process of converting an object into a format 
// suitable for transmission over a network or saving to a file.
// In web applications, serialization happens before sending data to the client. 
// It ensures:
// 1. Sanitization: Removing sensitive information (e.g., passwords).
// 2. Transformation: Formatting data properties to match client expectations.

// Why Serialization?
// Manually transforming/sanitizing data can be tedious, error-prone, and inconsistent.
// Serialization provides a systematic approach to enforce rules and ensure consistency.

// Nest.js simplifies serialization using ClassSerializerInterceptor, powered by the class-transformer package.
// This interceptor applies transformations automatically using decorators on entity/DTO classes.

//// How It Works:
// 1. ClassSerializerInterceptor intercepts the response.
// 2. Applies instanceToPlain() function from class-transformer.
// 3. Rules are defined using decorators like @Exclude(), @Expose(), and @Transform().

// Note: Serialization does not apply to StreamableFile responses.

//// Excluding Properties
// Use @Exclude() decorator to exclude sensitive properties like passwords.

import { Exclude } from 'class-transformer';

export class UserEntity {
  id;          // User ID
  firstName;   // User's first name
  lastName;    // User's last name

  @Exclude()   // Exclude password property from responses
  password;

  constructor(partial) {
    Object.assign(this, partial); // Assign partial data to this object
  }
}

// Controller Example
import { UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';

@UseInterceptors(ClassSerializerInterceptor)
@Get()
findOne() {
  return new UserEntity({
    id: 1,
    firstName: 'Kamil',
    lastName: 'Mysliwiec',
    password: 'password',
  });
}

// When the above endpoint is called, the client receives:
// {
//   "id": 1,
//   "firstName": "Kamil",
//   "lastName": "Mysliwiec"
// }
// The "password" property is excluded because of the @Exclude() decorator.

// Warning: Always return an instance of the class (e.g., new UserEntity()).
// Returning plain objects (e.g., { user: new UserEntity() }) bypasses serialization.

//// Exposing Properties
// Use @Expose() decorator to:
// 1. Alias properties with new names.
// 2. Add computed properties using getter functions.

import { Expose } from 'class-transformer';

export class UserEntity {
  firstName;
  lastName;

  @Expose() // Expose a computed property
  get fullName() {
    return `${this.firstName} ${this.lastName}`; // Combine firstName and lastName
  }
}

// Response:
// {
//   "firstName": "Kamil",
//   "lastName": "Mysliwiec",
//   "fullName": "Kamil Mysliwiec"
// }

//// Transforming Properties
// Use @Transform() decorator to transform values before sending them to the client.

import { Transform } from 'class-transformer';

export class UserEntity {
  @Transform(({ value }) => value.name) // Send only the name property of RoleEntity
  role;
}

// Example: If role = { id: 1, name: 'Admin' }, the response is:
// {
//   "role": "Admin"
// }

//// Customizing Serialization Options
// Use @SerializeOptions() decorator to override default serialization behavior.

import { SerializeOptions } from '@nestjs/common';

@SerializeOptions({
  excludePrefixes: ['_'], // Exclude properties that start with "_"
})
@Get()
findOne() {
  return new UserEntity({
    id: 1,
    firstName: 'Kamil',
    lastName: 'Mysliwiec',
    _internalField: 'hidden', // This field will be excluded
  });
}

// Response:
// {
//   "id": 1,
//   "firstName": "Kamil",
//   "lastName": "Mysliwiec"
// }

//// Benefits of Using ClassSerializerInterceptor
// 1. Centralized Control: Define transformation rules in entity/DTO classes.
// 2. Consistency: Ensures all instances of a class are transformed uniformly.
// 3. Extensibility: Add custom transformations using decorators.
// 4. Declarative Syntax: Easy to read, maintain, and extend.

