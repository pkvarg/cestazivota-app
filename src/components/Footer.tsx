'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('common.footer');
  const nav = useTranslations('nav');
  const tSv = useTranslations('svedkovia.nav');
  const tKv = useTranslations('katolickaviera.nav');
  const pathname = usePathname();

  type Href =
    | '/'
    | '/svedkovia'
    | '/svedkovia/co-hlasali-apostoli'
    | '/svedkovia/je-jezis-boh'
    | '/svedkovia/koho-panom-je-jezis'
    | '/svedkovia/vecera-panova'
    | '/duhovyrod'
    | '/katolickaviera'
    | '/katolickaviera/omsa'
    | '/katolickaviera/spoved'
    | '/katolickaviera/manzelstvo'
    | '/katolickaviera/papezsky-urad'
    | '/katolickaviera/knazsky-urad'
    | '/katolickaviera/klastorny-zivot'
    | '/katolickaviera/maria'
    | '/katolickaviera/hriech'
    | '/katolickaviera/spasenie'
    | '/katolickaviera/biblia'
    | '/gdpr';

  const svedkoviaSubs: { href: Href; label: string }[] = [
    { href: '/svedkovia/co-hlasali-apostoli', label: tSv('apostoli') },
    { href: '/svedkovia/je-jezis-boh', label: tSv('jezis') },
    { href: '/svedkovia/koho-panom-je-jezis', label: tSv('pan') },
    { href: '/svedkovia/vecera-panova', label: tSv('vecera') },
  ];
  const kvSubs: { href: Href; label: string }[] = [
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

  // Show the matching parent's sub-tree only when the user is currently inside it.
  const showSvedkoviaSubs = pathname.startsWith('/svedkovia');
  const showKvSubs = pathname.startsWith('/katolickaviera');

  const navItems: { href: Href; label: string }[] = [
    { href: '/', label: nav('cestaZivota') },
    { href: '/svedkovia', label: nav('svedkovia') },
    { href: '/duhovyrod', label: nav('duhovyrod') },
    { href: '/katolickaviera', label: nav('katolickaviera') },
    { href: '/gdpr', label: t('gdpr') },
  ];

  function subsFor(href: Href) {
    if (href === '/svedkovia' && showSvedkoviaSubs) return svedkoviaSubs;
    if (href === '/katolickaviera' && showKvSubs) return kvSubs;
    return null;
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
              {navItems.map((item) => {
                const subs = subsFor(item.href);
                return (
                  <div key={item.href} className="flex flex-col">
                    <Link href={item.href} className="hover:text-white transition-colors">
                      {item.label}
                    </Link>
                    {subs && (
                      <div className="mt-1 ml-3 pl-2 border-l border-gray-700 flex flex-col gap-1">
                        {subs.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className={`text-xs transition-colors ${
                              pathname === s.href
                                ? 'text-yellow-400'
                                : 'text-gray-500 hover:text-white'
                            }`}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
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
