// 1. Setup and Installation

// Install the required dependencies:
// npm install @nestjs/mongoose mongoose
// - @nestjs/mongoose: Integration package for NestJS.
// - mongoose: ODM library for MongoDB.

// 2. Connecting to MongoDB

// Basic connection setup in AppModule:
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
})
export class AppModule {}

// Replace 'mongodb://localhost/nest' with your MongoDB URI.

// Advanced connection options can also be provided:
MongooseModule.forRoot('mongodb://localhost/nest', {
  useNewUrlParser: true,      // Enables the new MongoDB connection string parser.
  useUnifiedTopology: true,  // Enables the new topology engine.
});

// 3. Defining Schemas and Models

// Schema defines the structure of MongoDB documents.
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// Define a type for the document.
export type CatDocument = HydratedDocument<Cat>;

@Schema() // Marks the class as a schema.
export class Cat {
  @Prop() name: string;  // Name of the cat.
  @Prop() age: number;   // Age of the cat.
  @Prop() breed: string; // Breed of the cat.
}

// Create a Mongoose schema from the class.
export const CatSchema = SchemaFactory.createForClass(Cat);

// Use the schema in a module:
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schemas/cat.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]), // Register schema.
  ],
})
export class CatsModule {}

// 4. Injecting and Using Models

// Use @InjectModel to work with the model.
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat, CatDocument } from './schemas/cat.schema';

@Injectable()
export class CatsService {
  // Inject the Cat model.
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  // Create a new cat document.
  async create(createCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save(); // Save to the database.
  }

  // Retrieve all cats.
  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec(); // Execute the find query.
  }
}

// 5. Advanced Features

// Define relationships using ref.
@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
owner: Owner; // This property references the Owner schema.

// Middleware (hooks) for executing logic before/after an operation.
MongooseModule.forFeatureAsync([
  {
    name: Cat.name,
    useFactory: () => {
      const schema = CatSchema;
      schema.pre('save', function () {
        console.log('Before saving the document');
      });
      return schema;
    },
  },
]);

// Plugins can be applied to schemas.
schema.plugin(require('mongoose-autopopulate')); // Example plugin for auto-population.

// Apply plugins globally using connection factory:
MongooseModule.forRoot('mongodb://localhost/nest', {
  connectionFactory: (connection) => {
    connection.plugin(require('mongoose-autopopulate')); // Global plugin.
    return connection;
  },
});

// Use discriminators for schema inheritance.
@Schema({ discriminatorKey: 'kind' }) // Base schema.
export class Event {
  @Prop() kind: string; // Discriminator key.
  @Prop() time: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);

// Define a child schema for discriminators.
@Schema()
export class ClickedLinkEvent {
  @Prop() url: string; // URL property specific to this schema.
}

export const ClickedLinkEventSchema = SchemaFactory.createForClass(ClickedLinkEvent);

// Register discriminators in MongooseModule.
MongooseModule.forFeature([
  {
    name: Event.name,
    schema: EventSchema,
    discriminators: [
      { name: ClickedLinkEvent.name, schema: ClickedLinkEventSchema },
    ],
  },
]);

// 6. Multiple Databases

// Support for multiple connections:
MongooseModule.forRoot('mongodb://localhost/cats', { connectionName: 'cats' }); // Cats DB.
MongooseModule.forRoot('mongodb://localhost/users', { connectionName: 'users' }); // Users DB.

// Specify which connection to use for schemas:
MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }], 'cats'); // Use 'cats' connection.

// Inject models for a specific connection:
@InjectModel(Cat.name, 'cats') private catModel: Model<Cat>;

// 7. Testing

// Mock models in unit tests using getModelToken().
{
  provide: getModelToken(Cat.name),
  useValue: mockCatModel, // Provide a mocked model.
}

// 8. Dynamic and Async Configuration

// Use forRootAsync for dynamic configuration.
MongooseModule.forRootAsync({
  useFactory: async () => ({
    uri: 'mongodb://localhost/nest', // Dynamic URI.
  }),
});

// Inject dependencies in dynamic configuration:
MongooseModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (configService) => ({
    uri: configService.get('MONGODB_URI'), // Use value from ConfigService.
  }),
  inject: [ConfigService], // Inject ConfigService.
});
