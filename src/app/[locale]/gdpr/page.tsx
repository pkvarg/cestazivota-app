import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common.gdprPage' });
  return {
    title: t('title'),
    description: t('intro'),
    robots: { index: false, follow: true },
  };
}

export default async function GdprPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common.gdprPage' });

  return (
    <section className="section-cz-purple-dark py-20 px-[5%] min-h-screen">
      <div className="max-w-3xl mx-auto text-[18px] leading-[30px]">
        <h1 className="text-[32px] lg:text-[40px] font-semibold mb-8 textgradient-cz leading-[1.2] pb-2">
          {t('title')}
        </h1>

        <p className="mb-8">{t('intro')}</p>

        <h2 className="text-[24px] font-semibold mb-3 text-yellow-300">{t('cookiesTitle')}</h2>
        <p className="mb-8">{t('cookiesBody')}</p>

        <h2 className="text-[24px] font-semibold mb-3 text-yellow-300">{t('contactTitle')}</h2>
        <p className="mb-3">{t('contactBody')}</p>
        <p className="mb-8">
          <Link
            href={{ pathname: '/', hash: 'contact' }}
            className="underline hover:text-yellow-300 transition-colors"
          >
            {t('contactLink')}
          </Link>
        </p>

        <h2 className="text-[24px] font-semibold mb-3 text-yellow-300">{t('rightsTitle')}</h2>
        <p>{t('rightsBody')}</p>
      </div>
    </section>
  );
}
