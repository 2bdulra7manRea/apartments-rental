import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([User]), SharedModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
