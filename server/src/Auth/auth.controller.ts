import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './Auth.service';
import { UserLogin } from './dto/user-login';
import { UserRegister } from './dto/user-register';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  login(@Body() loginData: UserLogin) {
    return this.authService.login(loginData);
  }

  @Post('/register')
  register(@Body() userData: UserRegister) {
    return this.authService.register(userData);
  }
}
