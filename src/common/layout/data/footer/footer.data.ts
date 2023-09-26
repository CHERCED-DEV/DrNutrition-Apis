import { FooterConfig } from '../../entities/footer.entity';

export const footerDataEs: FooterConfig = {
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

export const footerDataEn: FooterConfig = {
  brand_logo: {
    src: 'footer-logo.png',
    alt: 'Company Logo',
  },
  nav_menu: [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  newsletter: {
    title: 'Subscribe to our newsletter',
    input: {
      type: 'email',
      placeholder: 'Your email',
    },
    button: 'Subscribe',
  },
  socialmedia: {
    link: [
      { label: 'Facebook', href: '#' },
      { label: 'Twitter', href: '#' },
      { label: 'Instagram', href: '#' },
    ],
    img: {
      src: 'social-icons.png',
      alt: 'Social Media Icons',
    },
  },
  copyright: '© 2023 Company Name. All rights reserved.',
};
