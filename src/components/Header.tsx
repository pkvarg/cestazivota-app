'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: t('cestaZivota') },
    { href: '/svedkovia', label: t('svedkovia') },
    { href: '/duhovyrod', label: t('duhovyrod') },
    { href: '/katolickaviera', label: t('katolickaviera') },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-gray-900/95 backdrop-blur-sm text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-wide">
          CestaZivota<span className="text-yellow-400">.sk</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-yellow-400 ${
                isActive(item.href)
                  ? 'text-yellow-400 border-b-2 border-yellow-400 pb-0.5'
                  : 'text-gray-300'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>

        {/* Mobile: language switcher in place of hamburger */}
        <div className="lg:hidden">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
