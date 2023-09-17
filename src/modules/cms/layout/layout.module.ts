import { Module } from '@nestjs/common';
import { FooterController } from './controllers/footer/footer.controller';
import { HeaderController } from './controllers/header/header.controller';
import { FooterService } from './services/footer/footer.service';
import { HeaderService } from './services/header/header.service';

@Module({
  imports: [],
  controllers: [HeaderController, FooterController],
  providers: [FooterService, HeaderService],
})
export class LayoutModule {}
