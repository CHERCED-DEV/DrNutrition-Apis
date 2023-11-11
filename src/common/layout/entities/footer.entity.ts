import {
  ButtonGeneralConfig,
  ImgsConfig,
  LinkConfig,
} from 'src/shared/entities/entitys.interface';

interface SocialMediaConfig {
  link: LinkConfig[];
  img: ImgsConfig;
}

interface CopyrightConfig {
  title: string;
  img: ImgsConfig;
}

export interface FooterConfig {
  brand_logo: ImgsConfig;
  nav_menu: LinkConfig[];
  newsletter: ButtonGeneralConfig;
  socialmedia: SocialMediaConfig;
  copyright: CopyrightConfig;
}
