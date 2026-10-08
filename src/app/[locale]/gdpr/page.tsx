import { getTranslations } from 'next-intl/server';
import ManageConsentButton from '@/components/ManageConsentButton';

const SECTION_COUNT = 10;
// The cookie section also offers the button to change the consent choice.
const COOKIE_SECTION = 4;

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
  const sections = Array.from({ length: SECTION_COUNT }, (_, i) => i + 1);

  return (
    <section className="section-cz-purple-dark py-20 px-[5%] min-h-screen">
      <div className="max-w-3xl mx-auto text-[18px] leading-[30px]">
        <h1 className="text-[32px] lg:text-[40px] font-semibold mb-4 textgradient-cz leading-[1.2] pb-2">
          {t('title')}
        </h1>
        <p className="mb-8 text-[15px] text-gray-400">{t('effective')}</p>

        <p className="mb-8">{t('intro')}</p>

        {sections.map((n) => (
          <div key={n} className="mb-8">
            <h2 className="text-[24px] font-semibold mb-3 text-yellow-300">{t(`s${n}Title`)}</h2>
            <p className="whitespace-pre-line">{t(`s${n}Text`)}</p>
            {n === COOKIE_SECTION && (
              <p className="mt-4">
                <ManageConsentButton />
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
