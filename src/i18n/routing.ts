import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['sk', 'en', 'cs'],
  defaultLocale: 'sk',
});
