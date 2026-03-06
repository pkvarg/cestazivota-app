import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('common.footer');
  const nav = useTranslations('nav');

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
            </nav>
          </div>

          {/* Credits */}
          <div className="text-sm">
            <p>
              &copy; {new Date().getFullYear()} CestaZivota.sk. {t('allRightsReserved')}.
            </p>
            <p className="mt-1">
              {t('developed')}{' '}
              <a
                href="https://pictusweb.sk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:underline"
              >
                PICTUSWEB
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
