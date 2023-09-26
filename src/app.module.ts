import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaticModule } from './common/static.module';
import { CultureMiddleware } from './core/middlewares/culture/culture.middleware';
import { CultureService } from './core/services/culture/culture.service';
import { CmsModule } from './modules/cms/cms.module';

@Module({
  imports: [CmsModule, StaticModule],
  controllers: [AppController],
  providers: [AppService, CultureService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CultureMiddleware).forRoutes('*');
  }
}
