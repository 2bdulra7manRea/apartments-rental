import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserLogin } from './dto/user-login';
import { UserService } from 'src/user/user.service';
import { PasswordManager } from './validation/passwordManager.service';
import { UserRegister } from './dto/user-register';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly userService: UserService,
    private readonly passwordManager: PasswordManager,
  ) {}

  async login(loginData: UserLogin) {
    const user = await this.userService.findOne({ email: loginData.email });
    if (!user) {
      return new HttpException(
        'Email/Password is not correct!',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const isPasswordValid = await this.passwordManager.validatePassword(
      user.hashed_password,
      loginData.password,
    );

    if (!isPasswordValid) {
      return new HttpException(
        'Email/Password is not correct!',
        HttpStatus.UNAUTHORIZED,
      );
    }

    return {
      access_token: this.jwtService.sign({
        user_id: user.id,
        time: new Date(),
      }),
    };
  }

  async register(registerData: UserRegister) {
    const userIsFound = await this.userService.findOne({
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

    const user = await this.userService.create(userData);
    return {
      access_token: this.jwtService.sign({
        user_id: user.identifiers[0].id,
        time: new Date(),
      }),
    };
  }
}
