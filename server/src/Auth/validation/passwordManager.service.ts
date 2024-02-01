import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordManager {
  constructor(@Inject(ConfigService) private readonly config: ConfigService) {}

  async validatePassword(
    hashed_password: string,
    password: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hashed_password);
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(parseInt(this.config.get('SALT_ROUNDS')));
    return bcrypt.hash(password, salt);
  }
}
