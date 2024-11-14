import {Module} from '@nestjs/common'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';
import { TypesModule } from './types/types.module';

const entitiesPath = __dirname + '/**/*.entity{.ts,.js}';

@Module({
  imports: [
    ItemModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'masar',
      autoLoadEntities: true,
      entities: [entitiesPath],
      synchronize: false,
      logging: false,
    }),
    UserModule,
    ArticleModule,
    TypesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
