import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user';
import { UpdateUserDto } from './dto/update-user';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hashSync } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    const users = this.userRepository.find({});
    return users;
  }

  create(createUserDto: CreateUserDto) {
    const hashedPassword = hashSync(createUserDto.password, 10);

    const user = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });

    return this.userRepository.save(user);
  }

  async update(
    user_id: string | number,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const id = typeof user_id === 'string' ? parseInt(user_id) : user_id;
    const user = await this.userRepository.findOne({
      where: { id },
    });
    this.userRepository.merge(user, updateUserDto);
    return this.userRepository.save(user);
  }

  async findOne(user_id: string | number): Promise<User> {
    const id = typeof user_id === 'string' ? parseInt(user_id) : user_id;
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) throw new HttpException('User not found', 404);
    return {
      ...user,
    };
  }

  async delete(user_id: string | number) {
    const id = typeof user_id === 'string' ? parseInt(user_id) : user_id;
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) throw new HttpException('User not found', 404);
    return this.userRepository.remove(user);
  }
}
