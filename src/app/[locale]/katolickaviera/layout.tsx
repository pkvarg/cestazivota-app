'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';

export default function KatolickaVieraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-lora">
      <SubNav />
      {children}
    </div>
  );
}

function SubNav() {
  const t = useTranslations('katolickaviera.nav');
  const pathname = usePathname();

  const links = [
    { href: '/katolickaviera', label: t('home') },
    { href: '/katolickaviera/omsa', label: t('omsa') },
    { href: '/katolickaviera/spoved', label: t('spoved') },
    { href: '/katolickaviera/manzelstvo', label: t('manzelstvo') },
    { href: '/katolickaviera/papezsky-urad', label: t('papezsky') },
    { href: '/katolickaviera/knazsky-urad', label: t('knazsky') },
    { href: '/katolickaviera/klastorny-zivot', label: t('klastorny') },
    { href: '/katolickaviera/maria', label: t('maria') },
    { href: '/katolickaviera/hriech', label: t('hriech') },
    { href: '/katolickaviera/spasenie', label: t('spasenie') },
    { href: '/katolickaviera/biblia', label: t('biblia') },
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
              className={`whitespace-nowrap px-3 py-3 text-sm font-medium transition-colors ${
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
