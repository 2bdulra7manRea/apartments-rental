import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config'; // Import ConfigService for getting environment variables
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('JWT_SECRET'), // Get the secret key from environment variables
    });
  }

  async validate(payload: any) {
    const user = await this.userService.findOne({ id: payload.user_id });

    if (!user || !user.id) {
      throw new UnauthorizedException('Invalid token');
    }

    return payload; // Adjust based on your user entity
  }
}
