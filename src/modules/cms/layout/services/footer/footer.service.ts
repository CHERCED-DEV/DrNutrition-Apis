import { Injectable } from '@nestjs/common';
import { CultureService } from 'src/core/services/culture/culture.service';
import { FooterConfig } from '../../entities/footer.entity';
import { footerDataEn, footerDataEs } from '../../data/footer/footer.data';

@Injectable()
export class FooterService {
  constructor(private cultureService: CultureService) {}
  getFooterConfig(): FooterConfig {
    if (this.cultureService.getCurrentCulture() === 'es') {
      return footerDataEs;
    } else {
      return footerDataEn;
    }
  }
}
