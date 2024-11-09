import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ItemModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Import ConfigModule to use ConfigService
      inject: [ConfigService], // Inject ConfigService to use environment variables
      useFactory: (configService: ConfigService) => {
        return {
          type: 'postgres', // Change to your database type
          host: configService.get('DB_HOST'),
          port: +configService.get<number>('5432'),
          username: configService.get('postgres'),
          password: configService.get(''),
          database: configService.get('masar'),
          autoLoadEntities: true,
          retryAttempts: 3,
          // logging: true,
        };
      },
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
