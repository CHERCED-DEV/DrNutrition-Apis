import { Module } from '@nestjs/common';
import { MetaTagsService } from './service/meta-tags.service';
import { MetaTagsController } from './controllers/meta-tags.controller';

@Module({
  providers: [MetaTagsService],
  controllers: [MetaTagsController],
})
export class SeoModule {}
