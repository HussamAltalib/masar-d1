import { Inject, Injectable, UnauthorizedException,forwardRef  } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './types/Auth.service';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(forwardRef(() => AuthService)) private authService: AuthService,) {
    super({
      usernameField: 'Username',
    });
  }
  async validate(Username: string, password: string): Promise<User> {
    const user = await this.authService.validateUser(Username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}