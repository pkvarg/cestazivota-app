'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';

export default function SvedkoviaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SubNav />
      {children}
    </div>
  );
}

function SubNav() {
  const t = useTranslations('svedkovia.nav');
  const pathname = usePathname();

  const links = [
    { href: '/svedkovia', label: t('home') },
    { href: '/svedkovia/co-hlasali-apostoli', label: t('apostoli') },
    { href: '/svedkovia/je-jezis-boh', label: t('jezis') },
    { href: '/svedkovia/koho-panom-je-jezis', label: t('pan') },
    { href: '/svedkovia/vecera-panova', label: t('vecera') },
  ];

  return (
    <nav className="hidden lg:block bg-gray-900/95 backdrop-blur-sm text-white border-t border-gray-800 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 flex gap-1">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap px-4 py-3 text-sm font-medium transition-colors ${
                active
                  ? 'text-yellow-400 bg-gray-800/60'
                  : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800/40'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
