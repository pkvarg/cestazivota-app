// Map next-intl locale codes to content JSON language keys
const localeMap: Record<string, string> = {
  sk: 'slovak',
  en: 'english',
  cs: 'czech',
};

export function getContentLang(locale: string): string {
  return localeMap[locale] || 'slovak';
}

// Generic helper to load content from a JSON file by locale
export function getLocalizedContent<T>(
  data: Record<string, T>,
  locale: string
): T {
  const lang = getContentLang(locale);
  return data[lang] || data['slovak'];
}
