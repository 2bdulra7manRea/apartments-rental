import { Injectable } from '@nestjs/common';
import { UserRegister } from 'src/Auth/dto/user-register';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(user: { username: string; email: string; hashed_password: string }) {
    return this.userRepository.insert(user);
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(filter: any) {
    return this.userRepository.findOne({ where: filter });
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
