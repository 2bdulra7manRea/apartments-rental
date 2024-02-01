import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserLogin {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
