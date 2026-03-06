import { getTranslations, getLocale } from 'next-intl/server';
import Verse from '@/components/Verse';
import YouTube from '@/components/YouTube';
import ContactForm from '@/components/ContactForm';
import BookSlider from '@/components/BookSlider';
import { Link } from '@/i18n/navigation';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'cestaZivota' });
  return {
    title: 'Cesta Života - cestazivota.sk',
    description: t('heroTitle'),
  };
}

export default async function CestaZivotaHome() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: 'cestaZivota' });
  const bookPath = locale === 'en' ? '/images/book-en' : '/images/book';
  const bookPages = locale === 'en' ? 38 : 36;

  return (
    <div>
      {/* Section 1 - Hero */}
      <section className="hero-gradient-cz min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            {t('heroTitle')}
          </h1>

          <p className="text-lg text-gray-200 mb-6 leading-relaxed">
            {t('heroText1')}
          </p>

          <Verse text={t('heroVerse1')} reference={t('heroRef1')} />

          <p className="text-lg text-yellow-300 font-medium my-6">
            {t('heroText2')}
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">{t('heroText3')}</h2>
          <Verse text={t('heroVerse3')} reference={t('heroRef3')} />

          <p className="text-lg text-gray-200 my-6 leading-relaxed">
            {t('heroText4')}
          </p>

          <Verse text={t('heroVerse4')} reference={t('heroRef4')} />
          <Verse text={t('heroVerse5')} reference={t('heroRef5')} />

          <p className="text-lg text-gray-200 my-6 leading-relaxed">
            {t('heroText6')}
          </p>

          <Verse text={t('heroVerse6')} reference={t('heroRef6')} />
          <Verse text={t('heroVerse7')} reference={t('heroRef7')} />
        </div>
      </section>

      {/* Section 2 - Video testimony */}
      <section className="bg-gray-950 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
            {t('s2Title')}
          </h2>
          <YouTube videoId="5CWjZWyBNjc" title={t('s2Title')} />
        </div>
      </section>

      {/* Section 3 - Gospel + Prayer */}
      <section className="hero-gradient-cz py-20 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <p className="text-lg text-gray-200 mb-4">
            {t('s3Text1')}
            <span className="text-yellow-300 font-medium">{t('s3Text1add')}</span>
            <span className="text-xs text-gray-400"> {t('s3Text1addRef')}</span>
          </p>

          <Verse text={t('s3Verse1')} reference={t('s3Ref1')} />
          <Verse text={t('s3Verse2')} reference={t('s3Ref2')} />

          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 my-10">
            {t('s3Text2')}
          </h2>

          <Verse text={t('s3Verse3')} reference={t('s3Ref3')} />
          <Verse text={t('s3Verse4')} reference={t('s3Ref4')} />

          <p className="text-gray-300 my-4">
            {t('s3Ref4addText')}
            <span className="verse">{t('s3Ref4addVerse')}</span>
            <span className="text-xs text-gray-400"> {t('s3Ref4addRef')}</span>
          </p>

          <Verse text={t('s3Verse5')} reference={t('s3Ref5')} />

          <p className="text-xl text-yellow-300 font-semibold my-10">
            {t('s3Text3')}
          </p>

          <Verse text={t('s3Verse6')} reference={t('s3Ref6')} />

          {/* Salvation prayer */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-8 text-left">
            <p className="text-yellow-300 font-semibold mb-4">{t('s3Text4')}</p>
            <div className="space-y-3 text-gray-200 italic">
              <p>{t('s3Text4a')}</p>
              <p>{t('s3Text4b')}</p>
              <p>{t('s3Text4c')}</p>
              <p>{t('s3Text4d')}</p>
              <p>{t('s3Text4e')}</p>
              <p>{t('s3Text4f')}</p>
              <p className="font-semibold text-yellow-300">{t('s3Text4g')}</p>
              <p>{t('s3Text4h')}</p>
              <p className="font-bold text-white">{t('s3Text4i')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Book slider + Contact */}
      <section className="bg-gray-950 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            {t('s4Title')}
          </h2>
          <BookSlider basePath={bookPath} totalPages={bookPages} />
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-yellow-400 mb-6">{t('s4Button')}</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Section 5 - Discipleship */}
      <section className="hero-gradient-cz py-20 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {t('s5Title')}
          </h2>
          <p className="text-lg text-gray-200 mb-8">{t('s5Text1')}</p>
          <ul className="text-left max-w-md mx-auto space-y-4">
            {(['s5Step1', 's5Step2', 's5Step3', 's5Step4'] as const).map((key, i) => (
              <li key={key} className="flex items-start gap-3 text-gray-200">
                <span className="bg-yellow-400 text-gray-900 rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </span>
                <span className="pt-1">{t(key)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/svedkovia"
              className="block bg-sv-primary/80 hover:bg-sv-primary p-6 rounded-lg transition-colors"
            >
              <h3 className="font-bold text-lg">{t('linkSvedkovia')}</h3>
              <p className="text-sm text-gray-200 mt-2">{t('linkSvedkoviaDesc')}</p>
            </Link>
            <Link
              href="/duhovyrod"
              className="block bg-dr-primary/80 hover:bg-dr-primary p-6 rounded-lg transition-colors"
            >
              <h3 className="font-bold text-lg">{t('linkDuhovyrod')}</h3>
              <p className="text-sm text-gray-200 mt-2">{t('linkDuhovyrodDesc')}</p>
            </Link>
            <Link
              href="/katolickaviera"
              className="block bg-kv-primary/80 hover:bg-kv-primary p-6 rounded-lg transition-colors"
            >
              <h3 className="font-bold text-lg">{t('linkKatolickaviera')}</h3>
              <p className="text-sm text-gray-200 mt-2">{t('linkKatolickaVieraDesc')}</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
