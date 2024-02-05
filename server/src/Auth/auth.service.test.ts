import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { PasswordManager } from '../shared/passwordManager.service';
import { UserLogin } from './dto/user-login';
import { UserRegister } from './dto/user-register';
import { HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './Auth.service';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
          },
        },
        {
          provide: UserService,
          useValue: {
            findOne: jest.fn(),
            create: jest.fn(),
          },
        },
        {
          provide: PasswordManager,
          useValue: {
            validatePassword: jest.fn(),
            hashPassword: jest.fn(),
          },
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  describe('login', () => {
    it('should throw UNAUTHORIZED exception for invalid user', async () => {
      const loginData: UserLogin = {
        email: 'invalid@example.com',
        password: 'password',
      };
      jest.spyOn(authService['userService'], 'findOne').mockResolvedValue(null);

      await expect(authService.login(loginData)).rejects.toThrowError(
        new HttpException(
          'Email/Password is not correct!',
          HttpStatus.UNAUTHORIZED,
        ),
      );
    });
  });

  describe('register', () => {
    it('should throw BAD_REQUEST exception for duplicate user', async () => {
      const registerData: UserRegister = {
        email: 'admin@admin.com',
        password: '1234',
        username: 'admin',
        role: 'CLIENT',
      };
      jest
        .spyOn(authService['userService'], 'findOne')
        .mockResolvedValue({} as any);

      await expect(authService.register(registerData)).rejects.toThrowError(
        new HttpException(
          'Email/Username Already Taken',
          HttpStatus.BAD_REQUEST,
        ),
      );
    });
  });
});
