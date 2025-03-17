// Nest is database agnostic and supports SQL/NoSQL databases. 
// You can integrate using Node.js drivers or ORM libraries like MikroORM, Sequelize, Knex.js, TypeORM, and Prisma. 
// Nest provides out-of-the-box integration for TypeORM, Sequelize (@nestjs/typeorm, @nestjs/sequelize), and Mongoose (@nestjs/mongoose).

// To integrate TypeORM (example: MySQL), install dependencies:
// $ npm install --save @nestjs/typeorm typeorm mysql2

// Import TypeOrmModule in the root module:
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Database type
      host: 'localhost', // Host
      port: 3306, // Port
      username: 'root', // Username
      password: 'root', // Password
      database: 'test', // Database name
      entities: [], // Define entities here
      synchronize: true, // Auto-sync schema (NOT recommended in production)
    }),
  ],
})
export class AppModule {}

// The `synchronize: true` setting auto-syncs the schema but can lead to data loss in production.

// Additional TypeORM configuration options include:
// retryAttempts - Number of retries for connection (default: 10)
// retryDelay - Delay between retries in ms (default: 3000)
// autoLoadEntities - Auto-load registered entities (default: false)

// Injecting DataSource or EntityManager for global use:
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot()],
})
export class AppModule {
  constructor(private dataSource: DataSource) {} // Injects DataSource globally
}

// Example of defining an entity:
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number;
  @Column() firstName: string;
  @Column() lastName: string;
  @Column({ default: true }) isActive: boolean;
}

// Register entities in TypeOrmModule:
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      entities: [User], // Register User entity
      synchronize: true,
    }),
  ],
})
export class AppModule {}

// Use forFeature() to limit repositories to specific modules:
@Module({
  imports: [TypeOrmModule.forFeature([User])], // Specify User repository
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}

// Injecting a repository using @InjectRepository():
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>, // Inject User repository
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}

// Re-export repositories from a module for broader use:
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule], // Re-export repositories
})
export class UsersModule {}

// Define relationships using decorators:
// Example: User with multiple photos (OneToMany relation)
import { Entity, OneToMany } from 'typeorm';
import { Photo } from './photo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number;
  @OneToMany(() => Photo, (photo) => photo.user) photos: Photo[];
}

// Auto-load entities to avoid manual registration:
@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true, // Automatically loads entities registered with forFeature()
    }),
  ],
})
export class AppModule {}

// Transaction management with QueryRunner:
async createMany(users: User[]) {
  const queryRunner = this.dataSource.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();
  try {
    await queryRunner.manager.save(users[0]);
    await queryRunner.manager.save(users[1]);
    await queryRunner.commitTransaction();
  } catch (err) {
    await queryRunner.rollbackTransaction(); // Rollback on error
  } finally {
    await queryRunner.release(); // Release QueryRunner
  }
}

// Alternative transaction approach with DataSource.transaction():
async createMany(users: User[]) {
  await this.dataSource.transaction(async (manager) => {
    await manager.save(users[0]);
    await manager.save(users[1]);
  });
}

// Using subscribers to handle entity events:
import { DataSource, EntitySubscriberInterface, EventSubscriber, InsertEvent } from 'typeorm';
import { User } from './user.entity';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return User; // Subscribe to User entity
  }

  beforeInsert(event: InsertEvent<User>) {
    console.log('BEFORE USER INSERTED:', event.entity);
  }
}

// Register the subscriber:
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, UserSubscriber],
})
export class UsersModule {}

// Migrations:
// Use TypeORM CLI to generate, run, and revert migrations.
// Migration classes are managed by TypeORM CLI and don't support Nest-specific features.

// Multi-database setup example:
@Module({
  imports: [
    TypeOrmModule.forRoot({ name: 'usersConnection', ...userDbOptions }),
    TypeOrmModule.forRoot({ name: 'albumsConnection', ...albumDbOptions }),
  ],
})
export class AppModule {}
