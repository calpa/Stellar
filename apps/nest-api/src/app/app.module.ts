import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MangaModule } from '@stellar/manga';
import { LoggerModule } from 'nestjs-pino';
import { CatModule } from '../cat/cat.module';
import { LoggerMiddleware } from '../logger.middleware';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CatModule, LoggerModule.forRoot(), MangaModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }