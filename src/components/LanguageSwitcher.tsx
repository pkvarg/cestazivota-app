'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

const flagMap: Record<string, string> = {
  sk: '🇸🇰',
  en: '🇬🇧',
  cs: '🇨🇿',
};

const labelMap: Record<string, string> = {
  sk: 'SK',
  en: 'EN',
  cs: 'CZ',
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-1">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-2 py-1 text-xs rounded font-medium transition-all ${
            locale === loc
              ? 'bg-yellow-400 text-gray-900'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
          aria-label={`Switch to ${labelMap[loc]}`}
        >
          <span className="mr-1">{flagMap[loc]}</span>
          {labelMap[loc]}
        </button>
      ))}
    </div>
  );
}
