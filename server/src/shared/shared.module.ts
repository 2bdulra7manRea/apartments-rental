import { Module } from '@nestjs/common';
import { PasswordManager } from './passwordManager.service';

@Module({
  imports: [],
  controllers: [],
  providers: [PasswordManager],
  exports: [PasswordManager],
})
export class SharedModule {}
