import { Module } from '@nestjs/common';
import { SeoModule } from './seo/seo.module';

@Module({
  imports: [SeoModule],
  controllers: [],
  providers: [],
})
export class CmsModule {}
