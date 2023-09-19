import { Controller, Get } from '@nestjs/common';
import { FooterConfig } from '../../entities/footer.entity';
import { FooterService } from './../../services/footer/footer.service';

@Controller('cms/layout/footer')
export class FooterController {
  constructor(private readonly footerService: FooterService) {}

  @Get()
  getFooter(): FooterConfig {
    return this.footerService.getFooterConfig();
  }
}
