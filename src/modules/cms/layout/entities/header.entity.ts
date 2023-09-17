import {
  ImgsConfig,
  InputConfig,
  LinkConfig,
} from 'src/shared/entities/entitys.interface';

export interface HeaderConfig {
  brand_logo: ImgsConfig;
  nav_menu: LinkConfig[];
  search: {
    input: InputConfig;
    button: string;
  };
  alert: [
    {
      main_text: string;
      label: string;
      link: LinkConfig[];
    },
  ];
  user_panel: LinkConfig[];
}
