// src/i18n/translations.ts
// Textos del sitio en ES y EN

export const langs = {
  es: 'Español',
  en: 'English',
};

export type Lang = keyof typeof langs;

export const ui = {
  es: {
    // Nav (Web Simulator - Default)
    'nav.simulator': 'SIMULADOR',
    'nav.purchases': 'MIS COMPRAS',
    'nav.privacy': 'PRIVACIDAD',

    // Nav (App Landing - /app)
    'nav.home': 'Inicio',
    'nav.playstore': 'Play Store',

    // Header
    'header.tagline': 'TJAL PRODUCCIONES — Sistema v1.0',

    // Home — Hero (App Landing)
    'hero.booting': 'Iniciando sistema...',
    'hero.title': 'CUOTEANDO',
    'hero.subtitle': 'Controlá tus cuotas.\nSin complicaciones.',
    'hero.version': 'v1.x',
    'hero.platform': 'Android',

    // Home — About (App Landing)
    'about.label': '[ ACERCA DE ]',
    'about.text': 'Cuoteando es una app personal para registrar y hacer seguimiento de tus pagos en cuotas. Sin nube, sin suscripciones, sin datos enviados a ningún servidor. Tu información queda en tu teléfono.',

    // Home — Features (App Landing)
    'features.label': '[ CARACTERÍSTICAS ]',
    'features.items': [
      'Registrá compras en cuotas de forma rápida',
      'Seguimiento mensual de vencimientos',
      'Acceso protegido con tu seguridad del dispositivo',
      'Funciona 100% sin conexión a internet',
      'Sin registro de usuario requerido',
    ],

    // Home — CTA (App Landing)
    'cta.label': '[ DESCARGA ]',
    'cta.text': 'Disponible gratuitamente en Google Play Store.',
    'cta.button': '[ Descargar en Play Store ]',
    'cta.soon': 'Próximamente disponible',

    // Footer (Clean Web Footer)
    'footer.copy': '© 2026 TJAL Producciones',
    'footer.privacy': 'Política de Privacidad',
    'footer.local': 'Tu información queda en tu navegador',

    // Privacy page
    'privacy.title': 'POLÍTICA DE PRIVACIDAD',
    'privacy.subtitle': 'Cuoteando — TJAL Producciones',
    'privacy.updated': 'Última actualización:',
    'privacy.updated.date': 'Abril 2026',
    'privacy.contact.label': '[ CONTACTO ]',
  },

  en: {
    // Nav (Web Simulator - Default)
    'nav.simulator': 'SIMULATOR',
    'nav.purchases': 'MY PURCHASES',
    'nav.privacy': 'PRIVACY',

    // Nav (App Landing - /en/app)
    'nav.home': 'Home',
    'nav.playstore': 'Play Store',

    // Header
    'header.tagline': 'TJAL PRODUCCIONES — System v1.0',

    // Home — Hero (App Landing)
    'hero.booting': 'Booting system...',
    'hero.title': 'CUOTEANDO',
    'hero.subtitle': 'Track your installments.\nNo complications.',
    'hero.version': 'v1.x',
    'hero.platform': 'Android',

    // Home — About (App Landing)
    'about.label': '[ ABOUT ]',
    'about.text': 'Cuoteando is a personal app to log and track your installment payments. No cloud, no subscriptions, no data sent to any server. Your information stays on your phone.',

    // Home — Features (App Landing)
    'features.label': '[ FEATURES ]',
    'features.items': [
      'Quickly log installment purchases',
      'Monthly due-date tracking',
      'Access protected by your device security',
      'Works 100% offline',
      'No user registration required',
    ],

    // Home — CTA (App Landing)
    'cta.label': '[ DOWNLOAD ]',
    'cta.text': 'Available for free on Google Play Store.',
    'cta.button': '[ Download on Play Store ]',
    'cta.soon': 'Coming soon',

    // Footer (Clean Web Footer)
    'footer.copy': '© 2026 TJAL Producciones',
    'footer.privacy': 'Privacy Policy',
    'footer.local': 'Your data stays in your browser',

    // Privacy page
    'privacy.title': 'PRIVACY POLICY',
    'privacy.subtitle': 'Cuoteando — TJAL Producciones',
    'privacy.updated': 'Last updated:',
    'privacy.updated.date': 'April 2026',
    'privacy.contact.label': '[ CONTACT ]',
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return 'es';
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui['es']): string | readonly string[] {
    return ui[lang][key] ?? ui['es'][key];
  };
}
