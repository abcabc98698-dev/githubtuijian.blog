/**
 * Translation dictionaries for UI strings.
 *
 * Usage:
 *   import { getLangFromUrl, useTranslations } from '../i18n/utils';
 *   const lang = getLangFromUrl(Astro.url);
 *   const t = useTranslations(lang);
 *   t('nav.features') // => "Features" or "Características"
 */

export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Navigation
    'nav.product': 'Product',
    'nav.resources': 'Resources',
    'nav.features': 'Features',
    'nav.featuresDesc': 'Learn about our core capabilities.',
    'nav.pricing': 'Pricing',
    'nav.pricingDesc': 'Simple and transparent pricing.',
    'nav.blog': 'Blog',
    'nav.blogDesc': 'Latest news and industry insights.',
    'nav.caseStudies': 'Case Studies',
    'nav.caseStudiesDesc': 'See how other companies succeed.',
    'nav.docs': 'Documentation',
    'nav.docsDesc': 'Guides, tutorials, and architecture reference.',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',

    // Hero
    'hero.badge': 'Curated Open Source',
    'hero.titleStart': 'Discover High-Performance',
    'hero.titleHighlight': 'Open-Source Projects',
    'hero.description':
      'In-depth technical architecture reviews, developer tools, and benchmarks for modern software engineers. Lighthouse 100/100.',
    'hero.primaryCta': 'Explore Documentation',
    'hero.secondaryCta': 'Browse Articles',

    // Bento Grid
    'bento.title': 'Everything you need to rank higher',
    'bento.subtitle': 'Built from the ground up for technical SEO and modern AI search engines.',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.description': 'Everything you need to know about the platform and technical architecture.',

    // Footer
    'footer.navigation': 'Footer navigation',
    'footer.product': 'Product',
    'footer.resources': 'Resources',
    'footer.company': 'Company',
    'footer.documentation': 'Documentation',
    'footer.rssFeed': 'RSS Feed',
    'footer.license': 'License (MIT)',
    'footer.copyright': 'GitHubTuijian. All rights reserved.',
    'footer.builtWith': 'Built with',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsOfService': 'Terms of Service',

    // Contact Page
    'contact.title': "Let's talk about your project",
    'contact.description':
      'Whether you need a custom implementation, have questions about our open-source offering, or just want to say hi, our team is ready to help.',
    'contact.formTitle': 'Send us a message',
    'contact.firstName': 'First name',
    'contact.lastName': 'Last name',
    'contact.email': 'Company email',
    'contact.message': 'How can we help?',
    'contact.submit': 'Send Message',
    'contact.emailLabel': 'Email',
    'contact.phoneLabel': 'Phone',
    'contact.hqLabel': 'Headquarters',

    // About Page
    'about.title': 'About Us',
    'about.subtitle': 'Curating high-performance open-source projects and developer tools.',
    'about.missionTitle': 'Our Mission',
    'about.missionText':
      'We believe that exceptional open-source software and technical performance drive modern engineering. We curate top GitHub projects, developer architectures, and SEO benchmarks to empower builders worldwide.',
    'about.openSourceTitle': 'Open Source & Community',
    'about.openSourceText':
      'This platform is dedicated to promoting open-source transparency, accessibility, and high standards in web engineering.',

    // Misc
    skipToContent: 'Skip to main content',
    lastUpdated: 'Last updated',
  },
  es: {
    // Navigation
    'nav.product': 'Producto',
    'nav.resources': 'Recursos',
    'nav.features': 'Características',
    'nav.featuresDesc': 'Descubre nuestras funciones principales.',
    'nav.pricing': 'Precios',
    'nav.pricingDesc': 'Planes simples y transparentes.',
    'nav.blog': 'Blog',
    'nav.blogDesc': 'Últimas noticias y artículos.',
    'nav.caseStudies': 'Casos de Éxito',
    'nav.caseStudiesDesc': 'Mira cómo otras empresas tienen éxito.',
    'nav.docs': 'Documentación',
    'nav.docsDesc': 'Guías, tutoriales y referencia de arquitectura.',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.getStarted': 'Comenzar',

    // Hero
    'hero.badge': 'Código Abierto Seleccionado',
    'hero.titleStart': 'Descubre Proyectos',
    'hero.titleHighlight': 'De Alto Rendimiento',
    'hero.description':
      'Análisis técnico de arquitecturas, herramientas para desarrolladores y benchmarks de rendimiento web. Lighthouse 100/100.',
    'hero.primaryCta': 'Explorar Documentación',
    'hero.secondaryCta': 'Leer Artículos',

    // Bento Grid
    'bento.title': 'Todo lo que necesitas para posicionar mejor',
    'bento.subtitle': 'Construido desde cero para SEO técnico y motores de búsqueda con IA.',

    // FAQ
    'faq.title': 'Preguntas Frecuentes',
    'faq.description': 'Todo lo que necesitas saber sobre la plataforma y la arquitectura técnica.',

    // Footer
    'footer.navigation': 'Navegación del pie de página',
    'footer.product': 'Producto',
    'footer.resources': 'Recursos',
    'footer.company': 'Empresa',
    'footer.documentation': 'Documentación',
    'footer.rssFeed': 'Feed RSS',
    'footer.license': 'Licencia (MIT)',
    'footer.copyright': 'GitHubTuijian. Todos los derechos reservados.',
    'footer.builtWith': 'Hecho con',
    'footer.privacyPolicy': 'Política de Privacidad',
    'footer.termsOfService': 'Términos de Servicio',

    // Contact Page
    'contact.title': 'Hablemos de tu proyecto',
    'contact.description':
      'Ya sea que necesites una implementación personalizada, tengas preguntas sobre nuestra oferta open-source o simplemente quieras saludar, nuestro equipo está listo para ayudarte.',
    'contact.formTitle': 'Envíanos un mensaje',
    'contact.firstName': 'Nombre',
    'contact.lastName': 'Apellidos',
    'contact.email': 'Email corporativo',
    'contact.message': '¿Cómo podemos ayudarte?',
    'contact.submit': 'Enviar Mensaje',
    'contact.emailLabel': 'Email',
    'contact.phoneLabel': 'Teléfono',
    'contact.hqLabel': 'Sede Central',

    // About Page
    'about.title': 'Sobre Nosotros',
    'about.subtitle': 'Seleccionando proyectos de código abierto de alto rendimiento y herramientas de desarrollo.',
    'about.missionTitle': 'Nuestra Misión',
    'about.missionText':
      'Creemos que el software de código abierto excepcional y el rendimiento técnico impulsan la ingeniería moderna. Seleccionamos los mejores proyectos de GitHub, arquitecturas de desarrollo y estándares SEO para capacitar a los creadores de todo el mundo.',
    'about.openSourceTitle': 'Código Abierto y Comunidad',
    'about.openSourceText':
      'Esta plataforma está dedicada a promover la transparencia del código abierto, la accesibilidad y altos estándares en la ingeniería web.',

    // Misc
    skipToContent: 'Saltar al contenido principal',
    lastUpdated: 'Última actualización',
  },
} as const;
