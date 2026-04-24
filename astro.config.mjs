// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tjal-producciones.github.io',
  base: '/tjal-web',
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'es',
      locales: {
        es: 'es-AR',
        en: 'en-US',
      },
    }
  })],
});
