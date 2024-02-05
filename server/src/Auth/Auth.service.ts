import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserLogin } from './dto/user-login';
import { UserService } from 'src/user/user.service';
import { PasswordManager } from '../shared/passwordManager.service';
import { UserRegister } from './dto/user-register';
import { authResponse } from 'src/common/helpers';

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
      throw new HttpException(
        'Email/Password is not correct!',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const isPasswordValid = await this.passwordManager.validatePassword(
      user.hashed_password,
      loginData.password,
    );

    if (!isPasswordValid) {
      throw new HttpException(
        'Email/Password is not correct!',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const access_token = this.jwtService.sign({
      user_id: user.id,
      time: new Date(),
    });

    return authResponse(access_token, user);
  }

  async register(registerData: UserRegister) {
    const userIsFound = await this.userService.findOne({
      email: registerData.email,
    });

    if (userIsFound) {
      throw new HttpException(
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

    const access_token = this.jwtService.sign({
      user_id: user.identifiers[0].id,
      time: new Date(),
    });

    return authResponse(access_token, {
      username: userData.username,
      role: registerData.role || 'CLIENT',
    });
  }
}
