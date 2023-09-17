import { Injectable } from '@nestjs/common';
import { HeaderConfig } from '../../entities/header.entity';

@Injectable()
export class HeaderService {
  getHeaderConfig(): HeaderConfig {
    const headerConfig: HeaderConfig = {
      brand_logo: {
        src: 'ruta-del-logo.png',
        alt: 'Logo de la empresa',
      },
      nav_menu: [
        {
          href: '/inicio',
          label: 'Inicio',
        },
        {
          href: '/productos',
          label: 'Productos',
        },
        // Agrega más elementos de menú según sea necesario
      ],
      search: {
        input: {
          type: 'text',
          placeholder: 'Buscar...',
        },
        button: 'Buscar',
      },
      alert: [
        {
          main_text: '¡Oferta especial!',
          label: 'Ver detalles',
          link: [
            {
              href: '/oferta-especial',
              label: 'Más información',
            },
          ],
        },
      ],
      user_panel: [
        {
          href: '/iniciar-sesion',
          label: 'Iniciar sesión',
        },
        {
          href: '/registrarse',
          label: 'Registrarse',
        },
        // Agrega más elementos al panel de usuario según sea necesario
      ],
    };

    return headerConfig;
  }
}
