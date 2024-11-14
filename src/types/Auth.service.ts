import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { AccessToken } from './entities/AccessToken';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}
  async validateUser(Username: string, password: string): Promise<User> {
    const user: User = await this.usersService.findOneByUsername(Username);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    const isMatch: boolean = bcrypt.compareSync(password, user.Password);
    if (!isMatch) {
      throw new BadRequestException('Password does not match');
    }
    return user;
  }
  async login(user: User): Promise<AccessToken> {
    const payload = { email: user.Username, id: user.id };
    const token = this.jwtService.sign(payload); // Create the JWT token
    return new AccessToken(token, user.id.toString(), user.Username);
  }
  async register(user: User): Promise<AccessToken> {
    const existingUser = await this.usersService.findOneByUsername(user.Username);
    if (existingUser) {
      throw new BadRequestException('email already exists');
    }
    const hashedPassword = await bcrypt.hash(user.Password, 10);
    const newUser: User = { ...user, Password: hashedPassword };
    await this.usersService.create(newUser);
    return this.login(newUser);
  }
}