'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('nav');
  const tSv = useTranslations('svedkovia.nav');
  const tKv = useTranslations('katolickaviera.nav');
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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

  let subNavItems: { href: string; label: string }[] = [];
  if (pathname.startsWith('/svedkovia')) {
    subNavItems = [
      { href: '/svedkovia', label: tSv('home') },
      { href: '/svedkovia/co-hlasali-apostoli', label: tSv('apostoli') },
      { href: '/svedkovia/je-jezis-boh', label: tSv('jezis') },
      { href: '/svedkovia/koho-panom-je-jezis', label: tSv('pan') },
      { href: '/svedkovia/vecera-panova', label: tSv('vecera') },
    ];
  } else if (pathname.startsWith('/katolickaviera')) {
    subNavItems = [
      { href: '/katolickaviera', label: tKv('home') },
      { href: '/katolickaviera/omsa', label: tKv('omsa') },
      { href: '/katolickaviera/spoved', label: tKv('spoved') },
      { href: '/katolickaviera/manzelstvo', label: tKv('manzelstvo') },
      { href: '/katolickaviera/papezsky-urad', label: tKv('papezsky') },
      { href: '/katolickaviera/knazsky-urad', label: tKv('knazsky') },
      { href: '/katolickaviera/klastorny-zivot', label: tKv('klastorny') },
      { href: '/katolickaviera/maria', label: tKv('maria') },
      { href: '/katolickaviera/hriech', label: tKv('hriech') },
      { href: '/katolickaviera/spasenie', label: tKv('spasenie') },
      { href: '/katolickaviera/biblia', label: tKv('biblia') },
    ];
  }

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

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="lg:hidden bg-gray-900 border-t border-gray-800 px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-gray-800 ${
                isActive(item.href) ? 'text-yellow-400' : 'text-gray-300'
              }`}
            >
              {item.label}
            </Link>
          ))}

          {subNavItems.length > 0 && (
            <div className="pl-4 mt-1 border-l-2 border-gray-800">
              {subNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2 text-sm border-b border-gray-800/60 ${
                    pathname === item.href ? 'text-yellow-400' : 'text-gray-400'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <div className="mt-4 flex justify-center">
            <LanguageSwitcher />
          </div>
        </nav>
      )}
    </header>
  );
}
