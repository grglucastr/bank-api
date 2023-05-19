import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../database/database.module.ts';

describe('UsersService', () => {
  let service: UsersService;
  let userId: number;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([User]), DatabaseModule],
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Pre Cleanup', async () => {
    const users = await service.findAll();
    users.map(async (user) => {
      service.delete(user.id);
    });
  });

  describe('User', () => {
    it('should create a user', async () => {
      const email = 'test@test.com';
      const password = 'password123';
      const createUser: User = await service.create({
        email,
        password,
      });
      userId = createUser.id;
      expect(createUser).toBeDefined();
      expect(createUser.email).toEqual(email);
    });

    it('should find a user', async () => {
      const user = await service.findOne(userId);

      expect(user).toBeDefined();
      expect(user.id).toEqual(userId);
      expect(user.password).toBeUndefined();
    });

    it('should update user', async () => {
      const email = 'updated@test.com';
      const user = await service.update(userId, {
        email,
      });

      expect(user).toBeDefined();
      expect(user.email).toEqual(email);
    });
  });

  describe('Users', () => {
    it('should find all users', async () => {
      const users = await service.findAll();

      expect(users).toBeDefined();
    });
  });

  describe('Cleanup', () => {
    it('should remove user', async () => {
      const user = await service.delete(userId);

      expect(user).toBeDefined();
    });
  });
});
