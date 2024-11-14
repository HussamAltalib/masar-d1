import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/user/entities/user.entity';
import { AccessToken } from './entities/AccessToken';
@Controller('auth')
export class TypesController {
  constructor(private authService: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req): Promise<AccessToken | BadRequestException> {
    return this.authService.login(req.user);
  }
  @Post('register')
  async register(
    @Body() registerBody: User,): Promise<AccessToken | BadRequestException> {
    return await this.authService.register(registerBody);
  }
}