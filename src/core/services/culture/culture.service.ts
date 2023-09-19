import { Injectable } from '@nestjs/common';

@Injectable()
export class CultureService {
  private currentCulture: string = 'es';

  setCulture(culture: string) {
    this.currentCulture = culture;
  }

  getCurrentCulture(): string {
    return this.currentCulture;
  }
}
