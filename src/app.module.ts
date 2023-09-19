import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CultureMiddleware } from './core/middlewares/culture/culture.middleware';
import { CultureService } from './core/services/culture/culture.service';
import { LayoutModule } from './modules/cms/layout/layout.module';
import { SeoModule } from './modules/cms/seo/seo.module';

@Module({
  imports: [LayoutModule, SeoModule],
  controllers: [AppController],
  providers: [AppService, CultureService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CultureMiddleware).forRoutes('*');
  }
}
