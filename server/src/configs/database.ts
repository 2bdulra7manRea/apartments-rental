import { Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Apartment } from 'src/apartment/entities/apartment.entity';
import { User } from 'src/user/entities/user.entity';

export class DatabaseConfigService implements TypeOrmOptionsFactory {
  constructor(@Inject(ConfigService) private readonly config: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'mysql',
      host: this.config.get('DB_HOST'),
      port: this.config.get('DB_PORT'),
      username: this.config.get('MYSQL_DATABASE_USER_NAME'),
      password: this.config.get('MYSQL_ROOT_PASSWORD'),
      database: this.config.get('MYSQL_DATABASE'),
      entities: [Apartment, User],
      synchronize: true,
      logging: true,
    };
  }
}
