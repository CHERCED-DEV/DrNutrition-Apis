import {
  ImgsConfig,
  InputConfig,
  LinkConfig,
} from 'src/shared/entities/entitys.interface';

export interface FooterConfig {
  brand_logo: ImgsConfig;
  nav_menu: LinkConfig[];
  newsletter: {
    title: string,
    input: InputConfig,
    button: string,
  };
  socialmedia: {
    link: LinkConfig[],
    img: ImgsConfig,
  };
  copyright: string;
}
