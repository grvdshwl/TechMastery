import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { ConflictException, NotFoundException, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginDto } from './dto/login.dto';

// Mock data
const mockUser: User = {
  id: 1,
  email: 'test@example.com',
  password: 'hashedPassword',
  name: 'Test User',
  role: 'user',
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
};

const mockAdmin: User = {
  id: 2,
  email: 'admin@example.com',
  password: 'hashedPassword',
  name: 'Admin User',
  role: 'admin',
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
};

// Mock repository
const mockRepository = {
  findOne: jest.fn(),
  find: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
  remove: jest.fn(),
  clear: jest.fn(),
  count: jest.fn(),
  createQueryBuilder: jest.fn(),
};

// Mock JWT service
const mockJwtService = {
  sign: jest.fn(),
  verify: jest.fn(),
  verifyAsync: jest.fn(),
};

describe('UserService', () => {
  let service: UserService;
  let repository: Repository<User>;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
        {
          provide: JwtService,
          useValue: mockJwtService,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    repository = module.get<Repository<User>>(getRepositoryToken(User));
    jwtService = module.get<JwtService>(JwtService);

    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  describe('create', () => {
    const createUserDto: CreateUserDto = {
      email: 'newuser@example.com',
      password: 'password123',
      name: 'New User',
      role: 'user',
    };

    it('should create a new user successfully', async () => {
      mockRepository.findOne.mockResolvedValue(null);
      mockRepository.create.mockReturnValue(mockUser);
      mockRepository.save.mockResolvedValue(mockUser);
      jest.spyOn(bcrypt, 'hash').mockResolvedValue('hashedPassword' as never);

      const result = await service.create(createUserDto);

      expect(mockRepository.findOne).toHaveBeenCalledWith({
        where: { email: createUserDto.email },
      });
      expect(bcrypt.hash).toHaveBeenCalledWith(createUserDto.password, 12);
      expect(mockRepository.create).toHaveBeenCalledWith({
        ...createUserDto,
        password: 'hashedPassword',
      });
      expect(mockRepository.save).toHaveBeenCalled();
      expect(result).toEqual(mockUser);
    });

    it('should throw ConflictException if user already exists', async () => {
      mockRepository.findOne.mockResolvedValue(mockUser);

      await expect(service.create(createUserDto)).rejects.toThrow(ConflictException);
      expect(mockRepository.findOne).toHaveBeenCalledWith({
        where: { email: createUserDto.email },
      });
    });

    it('should hash password with correct salt rounds', async () => {
      mockRepository.findOne.mockResolvedValue(null);
      mockRepository.create.mockReturnValue(mockUser);
      mockRepository.save.mockResolvedValue(mockUser);
      jest.spyOn(bcrypt, 'hash').mockResolvedValue('hashedPassword' as never);

      await service.create(createUserDto);

      expect(bcrypt.hash).toHaveBeenCalledWith(createUserDto.password, 12);
    });
  });

  describe('login', () => {
    const loginDto: LoginDto = {
      email: 'test@example.com',
      password: 'password123',
    };

    it('should login successfully with valid credentials', async () => {
      const token = 'jwt-token';
      mockRepository.findOne.mockResolvedValue(mockUser);
      jest.spyOn(bcrypt, 'compare').mockResolvedValue(true as never);
      mockJwtService.sign.mockReturnValue(token);

      const result = await service.login(loginDto);

      expect(mockRepository.findOne).toHaveBeenCalledWith({
        where: { email: loginDto.email, isActive: true },
      });
      expect(bcrypt.compare).toHaveBeenCalledWith(loginDto.password, mockUser.password);
      expect(mockJwtService.sign).toHaveBeenCalledWith({
        id: mockUser.id,
        email: mockUser.email,
        role: mockUser.role,
      });
      expect(result).toEqual({
        token,
        user: mockUser,
        expiresIn: '24h',
      });
    });

    it('should throw UnauthorizedException if user not found', async () => {
      mockRepository.findOne.mockResolvedValue(null);

      await expect(service.login(loginDto)).rejects.toThrow(UnauthorizedException);
    });

    it('should throw UnauthorizedException if user is inactive', async () => {
      const inactiveUser = { ...mockUser, isActive: false };
      mockRepository.findOne.mockResolvedValue(inactiveUser);

      await expect(service.login(loginDto)).rejects.toThrow(UnauthorizedException);
    });

    it('should throw UnauthorizedException if password is invalid', async () => {
      mockRepository.findOne.mockResolvedValue(mockUser);
      jest.spyOn(bcrypt, 'compare').mockResolvedValue(false as never);

      await expect(service.login(loginDto)).rejects.toThrow(UnauthorizedException);
    });
  });

  describe('findAll', () => {
    const mockQueryBuilder = {
      where: jest.fn().mockReturnThis(),
      andWhere: jest.fn().mockReturnThis(),
      skip: jest.fn().mockReturnThis(),
      take: jest.fn().mockReturnThis(),
      orderBy: jest.fn().mockReturnThis(),
      getManyAndCount: jest.fn(),
    };

    beforeEach(() => {
      mockRepository.createQueryBuilder.mockReturnValue(mockQueryBuilder);
    });

    it('should return paginated users', async () => {
      const users = [mockUser, mockAdmin];
      const total = 2;
      mockQueryBuilder.getManyAndCount.mockResolvedValue([users, total]);

      const result = await service.findAll({ page: 1, limit: 10 });

      expect(mockRepository.createQueryBuilder).toHaveBeenCalledWith('user');
      expect(mockQueryBuilder.where).toHaveBeenCalledWith('user.isActive = :isActive', { isActive: true });
      expect(result).toEqual({
        data: users,
        pagination: {
          page: 1,
          limit: 10,
          total: 2,
          totalPages: 1,
        },
      });
    });

    it('should filter by role', async () => {
      const adminUsers = [mockAdmin];
      mockQueryBuilder.getManyAndCount.mockResolvedValue([adminUsers, 1]);

      await service.findAll({ page: 1, limit: 10, role: 'admin' });

      expect(mockQueryBuilder.andWhere).toHaveBeenCalledWith('user.role = :role', { role: 'admin' });
    });

    it('should search by name or email', async () => {
      const searchTerm = 'test';
      mockQueryBuilder.getManyAndCount.mockResolvedValue([[mockUser], 1]);

      await service.findAll({ page: 1, limit: 10, search: searchTerm });

      expect(mockQueryBuilder.andWhere).toHaveBeenCalledWith(
        '(LOWER(user.name) LIKE LOWER(:search) OR LOWER(user.email) LIKE LOWER(:search))',
        { search: `%${searchTerm}%` },
      );
    });

    it('should calculate correct pagination', async () => {
      mockQueryBuilder.getManyAndCount.mockResolvedValue([[mockUser], 15]);

      const result = await service.findAll({ page: 2, limit: 5 });

      expect(mockQueryBuilder.skip).toHaveBeenCalledWith(5);
      expect(mockQueryBuilder.take).toHaveBeenCalledWith(5);
      expect(result.pagination.totalPages).toBe(3);
    });
  });

  describe('findOne', () => {
    it('should return user if found and active', async () => {
      mockRepository.findOne.mockResolvedValue(mockUser);

      const result = await service.findOne(1);

      expect(mockRepository.findOne).toHaveBeenCalledWith({
        where: { id: 1, isActive: true },
      });
      expect(result).toEqual(mockUser);
    });

    it('should throw NotFoundException if user not found', async () => {
      mockRepository.findOne.mockResolvedValue(null);

      await expect(service.findOne(999)).rejects.toThrow(NotFoundException);
    });

    it('should throw NotFoundException if user is inactive', async () => {
      const inactiveUser = { ...mockUser, isActive: false };
      mockRepository.findOne.mockResolvedValue(inactiveUser);

      await expect(service.findOne(1)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    const updateUserDto: UpdateUserDto = {
      name: 'Updated Name',
      email: 'updated@example.com',
    };

    const requestingAdmin = {
      id: 2,
      email: 'admin@example.com',
      role: 'admin',
    };
    const requestingUser = { id: 1, email: 'test@example.com', role: 'user' };

    beforeEach(() => {
      jest.spyOn(service, 'findOne').mockResolvedValue(mockUser);
    });

    it('should update user successfully by admin', async () => {
      mockRepository.findOne.mockResolvedValue(null); // No email conflict
      const updatedUser = { ...mockUser, ...updateUserDto };
      mockRepository.save.mockResolvedValue(updatedUser);

      const result = await service.update(1, updateUserDto, requestingAdmin);

      expect(service.findOne).toHaveBeenCalledWith(1);
      expect(mockRepository.save).toHaveBeenCalled();
      expect(result).toEqual(updatedUser);
    });

    it('should allow user to update own profile', async () => {
      mockRepository.findOne.mockResolvedValue(null);
      const updatedUser = { ...mockUser, ...updateUserDto };
      mockRepository.save.mockResolvedValue(updatedUser);

      const result = await service.update(1, updateUserDto, requestingUser);

      expect(result).toEqual(updatedUser);
    });

    it('should prevent user from updating other users', async () => {
      await expect(service.update(2, updateUserDto, requestingUser)).rejects.toThrow(ForbiddenException);
    });

    it('should prevent email conflicts', async () => {
      mockRepository.findOne.mockResolvedValue(mockAdmin); // Email already exists

      await expect(service.update(1, updateUserDto, requestingAdmin)).rejects.toThrow(ConflictException);
    });

    it('should allow same user to keep their email', async () => {
      const sameEmailUpdate = { name: 'New Name' };
      mockRepository.save.mockResolvedValue({
        ...mockUser,
        ...sameEmailUpdate,
      });

      const result = await service.update(1, sameEmailUpdate, requestingUser);

      expect(result.name).toBe('New Name');
    });

    it('should prevent non-admin from changing roles', async () => {
      const roleUpdate = { role: 'admin' };

      await expect(service.update(1, roleUpdate, requestingUser)).rejects.toThrow(ForbiddenException);
    });

    it('should allow admin to change roles', async () => {
      const roleUpdate = { role: 'admin' };
      mockRepository.findOne.mockResolvedValue(null);
      const updatedUser = { ...mockUser, role: 'admin' };
      mockRepository.save.mockResolvedValue(updatedUser);

      const result = await service.update(1, roleUpdate, requestingAdmin);

      expect(result.role).toBe('admin');
    });
  });

  describe('remove', () => {
    const requestingAdmin = {
      id: 2,
      email: 'admin@example.com',
      role: 'admin',
    };
    const requestingUser = { id: 1, email: 'test@example.com', role: 'user' };

    beforeEach(() => {
      jest.spyOn(service, 'findOne').mockResolvedValue(mockUser);
    });

    it('should soft delete user by admin', async () => {
      const deletedUser = {
        ...mockUser,
        isActive: false,
        deletedAt: new Date(),
      };
      mockRepository.save.mockResolvedValue(deletedUser);

      await service.remove(1, requestingAdmin);

      expect(service.findOne).toHaveBeenCalledWith(1);
      expect(mockRepository.save).toHaveBeenCalledWith(
        expect.objectContaining({
          isActive: false,
          deletedAt: expect.any(Date),
        }),
      );
    });

    it('should prevent non-admin from deleting users', async () => {
      await expect(service.remove(1, requestingUser)).rejects.toThrow(ForbiddenException);
    });
  });

  describe('findProfile', () => {
    it('should return user profile', async () => {
      jest.spyOn(service, 'findOne').mockResolvedValue(mockUser);

      const result = await service.findProfile(1);

      expect(service.findOne).toHaveBeenCalledWith(1);
      expect(result).toEqual(mockUser);
    });
  });

  describe('utility methods', () => {
    describe('findByEmail', () => {
      it('should find user by email', async () => {
        mockRepository.findOne.mockResolvedValue(mockUser);

        const result = await service.findByEmail('test@example.com');

        expect(mockRepository.findOne).toHaveBeenCalledWith({
          where: { email: 'test@example.com' },
        });
        expect(result).toEqual(mockUser);
      });

      it('should return null if user not found', async () => {
        mockRepository.findOne.mockResolvedValue(null);

        const result = await service.findByEmail('nonexistent@example.com');

        expect(result).toBeNull();
      });
    });

    describe('count', () => {
      it('should return count of active users', async () => {
        mockRepository.count.mockResolvedValue(5);

        const result = await service.count();

        expect(mockRepository.count).toHaveBeenCalledWith({
          where: { isActive: true },
        });
        expect(result).toBe(5);
      });
    });

    describe('clearAll', () => {
      it('should clear all users', async () => {
        await service.clearAll();

        expect(mockRepository.clear).toHaveBeenCalled();
      });
    });
  });
});
