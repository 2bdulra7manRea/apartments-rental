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
    return this.userRepository.find({
      select: ['email', 'username', 'role', 'id'],
    });
  }

  async findOne(filter: any) {
    return this.userRepository.findOne({ where: filter });
  }

  update(id: number, updated: any) {
    return this.userRepository.update(id, updated);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
