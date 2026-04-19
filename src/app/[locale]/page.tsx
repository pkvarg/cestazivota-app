import { getTranslations, getLocale } from 'next-intl/server';
import Verse from '@/components/Verse';
import YouTube from '@/components/YouTube';
import BookSlider from '@/components/BookSlider';
import BookContactToggle from '@/components/BookContactToggle';
import { Link } from '@/i18n/navigation';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'cestaZivota' });
  const title = 'Cesta Života — Uver pravde a získaj večný život';
  const description = `${t('heroTitle')} ${t('heroText1')}`.slice(0, 160);
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: { sk: '/sk', cs: '/cs', en: '/en' },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: title }],
      locale: locale === 'sk' ? 'sk_SK' : locale === 'cs' ? 'cs_CZ' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.webp'],
    },
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
      <section className="hero-gradient-cz min-h-screen flex items-center justify-center px-[5%] py-20">
        <div className="text-[22.5px] leading-[34px] verse-sv">
          <h1 className="textgradient-cz text-[40px] font-semibold mb-8 leading-[40px] text-center">
            {t('heroTitle')}
          </h1>

          <div className="mb-6 text-justify">
            {t('heroText1')}{' '}
            <Verse text={t('heroVerse1')} reference={t('heroRef1')} />{' '}
            <span className="text-yellow-300 font-medium">{t('heroText2')}</span>
          </div>

          <h2 className="text-[30px] font-normal mt-12 mb-4 leading-[40px] text-center">{t('heroText3')}</h2>
          <div className="my-6 text-justify">
            <Verse text={t('heroVerse3')} reference={t('heroRef3')} />
          </div>

          <div className="my-6 text-justify">
            {t('heroText4')}{' '}
            <Verse text={t('heroVerse4')} reference={t('heroRef4')} />{' '}
            <Verse text={t('heroVerse5')} reference={t('heroRef5')} />
          </div>

          <div className="my-6 text-justify">
            {t('heroText6')}{' '}
            <Verse text={t('heroVerse6')} reference={t('heroRef6')} />{' '}
            <Verse text={t('heroVerse7')} reference={t('heroRef7')} />
          </div>
        </div>
      </section>

      {/* Section 2 - Video testimony */}
      <section className="section-cz-dark py-20 px-[5%]">
        <div className="text-center text-[22.5px] leading-[34px]">
          <h3 className="text-[30px] font-normal mb-10 leading-[40px]">
            {t('s2Title')}
          </h3>
          <YouTube videoId="5CWjZWyBNjc" title={t('s2Title')} />
        </div>
      </section>

      {/* Section 3 - Gospel + Prayer */}
      <section className="section-cz-purple py-20 px-[5%]">
        <div className="text-[22.5px] leading-[34px] verse-sv">
          <div className="mb-4 text-justify">
            {t('s3Text1')}
            <span className="text-yellow-300 font-medium">{t('s3Text1add')}</span>
            <span className="text-xs text-gray-400"> {t('s3Text1addRef')}</span>{' '}
            <Verse text={t('s3Verse1')} reference={t('s3Ref1')} />{' '}
            <Verse text={t('s3Verse2')} reference={t('s3Ref2')} />
          </div>

          <h2 className="text-[30px] font-normal text-yellow-400 my-10 leading-[40px] text-center">
            {t('s3Text2')}
          </h2>

          <div className="my-4 text-justify">
            <Verse text={t('s3Verse3')} reference={t('s3Ref3')} />{' '}
            <Verse text={t('s3Verse4')} reference={t('s3Ref4')} />{' '}
            {t('s3Ref4addText')}
            <span className="verse">{t('s3Ref4addVerse')}</span>
            <span className="text-xs text-gray-400"> {t('s3Ref4addRef')}</span>{' '}
            <Verse text={t('s3Verse5')} reference={t('s3Ref5')} />
          </div>

          <p className="text-yellow-300 font-semibold my-10 text-center">
            {t('s3Text3')}
          </p>

          <div className="text-justify">
            <Verse text={t('s3Verse6')} reference={t('s3Ref6')} />
          </div>

          {/* Salvation prayer */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-8 text-left">
            <p className="text-yellow-300 font-semibold mb-4">{t('s3Text4')}</p>
            <div className="space-y-3 italic">
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

      {/* Section 4 - Book slider */}
      <section className="section-cz-purple-dark py-20 px-[5%]">
        <div className="text-center text-[22.5px] leading-[34px]">
          <h3 className="text-[25px] font-normal mb-10 leading-[37.5px]">
            {t('s4Title')}
          </h3>
          <BookSlider basePath={bookPath} totalPages={bookPages} />
          <BookContactToggle />
        </div>
      </section>

      {/* Section 5 - Closing paragraphs */}
      <section className="section-cz-purple-dark py-20 px-[5%]">
        <div className="text-[22.5px] leading-[34px] verse-sv max-w-5xl mx-auto">
          <p className="mb-6 text-justify">{t('s5Pokrstenie')}</p>
          <p className="mb-6 text-justify">{t('s5Precon')}</p>
          <p className="mb-6 text-justify">
            {t('s5PanomIntro')}{' '}
            <Verse text={t('s5PanomVerse')} reference={t('s5PanomRef')} />{' '}
            {t('s5PanomAudio')}{' '}
            <a
              className="underline"
              href="https://app.messengerx.com/sk-SK/listen/1DB0tFrLRez7blmTBmVSlZ/qo21vqS1ZFttSJR05ydGL_s3AudioAsset.mp3"
              target="_blank"
              rel="noreferrer"
            >
              {t('s5PanomAudioLink')}
            </a>{' '}
            <span className="text-[15px]">{t('s5PanomAudioKap')}</span>
          </p>
          <p className="mb-6 text-justify">
            {t('s5OdkazKV')}{' '}
            <Link href="/katolickaviera" className="underline">
              katolickaviera.sk
            </Link>{' '}
            {t('s5OdkazSV')}{' '}
            <Link href="/svedkovia" className="underline">
              svedkovia.sk
            </Link>{' '}
            {t('s5OdkazDR')}{' '}
            <Link href="/duhovyrod" className="underline">
              duhovyrod.sk
            </Link>
          </p>
          <p className="text-center pt-8">{t('s5Zaver')}</p>
        </div>
      </section>
    </div>
  );
}
