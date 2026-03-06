import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

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

  const links = [
    { href: '/svedkovia', label: t('home') },
    { href: '/svedkovia/co-hlasali-apostoli', label: t('apostoli') },
    { href: '/svedkovia/je-jezis-boh', label: t('jezis') },
    { href: '/svedkovia/koho-panom-je-jezis', label: t('pan') },
    { href: '/svedkovia/vecera-panova', label: t('vecera') },
  ];

  return (
    <nav className="bg-sv-dark text-white overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 flex gap-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-sv-primary/50 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
