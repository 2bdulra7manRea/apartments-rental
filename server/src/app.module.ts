import { Module } from '@nestjs/common';
import { ApartmentModule } from './apartment/apartment.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from './configs/database';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './Auth/Auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: DatabaseConfigService }),
    AuthModule,
    ApartmentModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
