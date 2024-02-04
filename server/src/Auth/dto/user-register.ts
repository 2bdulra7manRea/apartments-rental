import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserRegister {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  role: string;
}
