import {
  ImgsConfig,
  InputConfig,
  LinkConfig,
} from 'src/shared/entities/entitys.interface';

interface AlertsConfig {
  main_text: string;
  label: string;
  link: LinkConfig[];
}

interface SearchConfig {
  input: InputConfig;
  button: string;
}

export interface HeaderConfig {
  brand_logo: ImgsConfig;
  search: SearchConfig;
  alert: AlertsConfig[];
  user_panel: LinkConfig[];
}
