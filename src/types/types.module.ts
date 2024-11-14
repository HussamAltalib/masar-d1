import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './entities/jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LocalStrategy } from 'src/local.strategy';
import { UserService } from 'src/user/user.service';
@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: parseInt(
            configService.getOrThrow<string>(
              'ACCESS_TOKEN_VALIDITY_DURATION_IN_SEC',
            ),
          ),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, JwtStrategy, TypesService, LocalStrategy, UserService, ConfigService],
  exports: [AuthService,JwtModule, UserService, JwtStrategy,ConfigService, LocalStrategy],
})
export class TypesModule{}