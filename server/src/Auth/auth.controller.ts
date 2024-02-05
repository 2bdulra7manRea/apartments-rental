import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './Auth.service';
import { UserLogin } from './dto/user-login';
import { UserRegister } from './dto/user-register';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorator/public.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('/login')
  login(@Body() loginData: UserLogin) {
    return this.authService.login(loginData);
  }

  @Public()
  @Post('/register')
  register(@Body() userData: UserRegister) {
    return this.authService.register(userData);
  }
}
