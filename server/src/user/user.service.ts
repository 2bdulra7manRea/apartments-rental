import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PasswordManager } from 'src/shared/passwordManager.service';
import { UserRegister } from 'src/Auth/dto/user-register';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly passwordManager: PasswordManager,
  ) {}

  create(user: { username: string; email: string; hashed_password: string }) {
    return this.userRepository.insert(user);
  }

  async addNewUser(registerData: UserRegister) {
    try {
      const userIsFound = await this.findOne({
        email: registerData.email,
      });

      if (userIsFound) {
        return new HttpException(
          'Email/Username Already Taken',
          HttpStatus.BAD_REQUEST,
        );
      }

      const hashed_password = await this.passwordManager.hashPassword(
        registerData.password,
      );

      const userData = {
        hashed_password,
        email: registerData.email,
        username: registerData.username,
        role: registerData.role,
      };

      await this.create(userData);
      return { message: 'new user added' };
    } catch (error) {
      return new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
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
