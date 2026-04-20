'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('common.footer');
  const nav = useTranslations('nav');
  const tSv = useTranslations('svedkovia.nav');
  const tKv = useTranslations('katolickaviera.nav');
  const pathname = usePathname();

  let subNavItems: { href: string; label: string }[] = [];
  let subNavLabel = '';
  if (pathname.startsWith('/svedkovia')) {
    subNavLabel = nav('svedkovia');
    subNavItems = [
      { href: '/svedkovia', label: tSv('home') },
      { href: '/svedkovia/co-hlasali-apostoli', label: tSv('apostoli') },
      { href: '/svedkovia/je-jezis-boh', label: tSv('jezis') },
      { href: '/svedkovia/koho-panom-je-jezis', label: tSv('pan') },
      { href: '/svedkovia/vecera-panova', label: tSv('vecera') },
    ];
  } else if (pathname.startsWith('/katolickaviera')) {
    subNavLabel = nav('katolickaviera');
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
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-2">
              CestaZivota<span className="text-yellow-400">.sk</span>
            </h3>
          </div>

          {/* Links */}
          <div>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/" className="hover:text-white transition-colors">
                {nav('cestaZivota')}
              </Link>
              <Link href="/svedkovia" className="hover:text-white transition-colors">
                {nav('svedkovia')}
              </Link>
              <Link href="/duhovyrod" className="hover:text-white transition-colors">
                {nav('duhovyrod')}
              </Link>
              <Link href="/katolickaviera" className="hover:text-white transition-colors">
                {nav('katolickaviera')}
              </Link>
              <Link href="/gdpr" className="hover:text-white transition-colors">
                {t('gdpr')}
              </Link>
            </nav>

            {/* Sub-nav links for current section (visible on mobile) */}
            {subNavItems.length > 0 && (
              <nav className="lg:hidden mt-4 pl-3 border-l-2 border-gray-800 flex flex-col gap-1.5 text-xs">
                <span className="text-gray-500 uppercase tracking-wide text-[10px] mb-1">
                  {subNavLabel}
                </span>
                {subNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`hover:text-white transition-colors ${
                      pathname === item.href ? 'text-yellow-400' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            )}
          </div>

          {/* Credits */}
          <div className="text-sm">
            <p>
              &copy; {new Date().getFullYear()} CestaZivota.sk. {t('allRightsReserved')}.
            </p>
            <p className="mt-1">
              <a
                href="https://pictusweb.sk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:underline"
              >
                &lt;/&gt; PICTUSWEB
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
