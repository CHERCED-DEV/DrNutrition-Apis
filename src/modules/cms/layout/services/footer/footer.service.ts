import { Injectable } from '@nestjs/common';
import { FooterConfig } from '../../entities/footer.entity';

@Injectable()
export class FooterService {
  getFooterConfig(): FooterConfig {
    const footerConfig: FooterConfig = {
      brand_logo: {
        src: 'logo-footer.png',
        alt: 'Logo de la Empresa',
      },
      nav_menu: [
        { label: 'Inicio', href: '#' },
        { label: 'Acerca de nosotros', href: '#' },
        { label: 'Servicios', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Contacto', href: '#' },
      ],
      newsletter: {
        title: 'Suscríbete a nuestro boletín',
        input: {
          type: 'email',
          placeholder: 'Tu correo electrónico',
        },
        button: 'Suscribirse',
      },
      socialmedia: {
        link: [
          { label: 'Facebook', href: '#' },
          { label: 'Twitter', href: '#' },
          { label: 'Instagram', href: '#' },
        ],
        img: {
          src: 'social-icons.png',
          alt: 'Íconos de redes sociales',
        },
      },
      copyright: '© 2023 Nombre de la Empresa. Todos los derechos reservados.',
    };

    return footerConfig;
  }
}
