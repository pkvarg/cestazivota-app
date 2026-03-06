import { getLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { getLocalizedContent } from '@/lib/content';
import Verse from '@/components/Verse';
import contentData from '@/content/duhovyrod.json';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'duhovyrod' });
  return {
    title: `${t('siteTitle')} - cestazivota.sk`,
    description: t('heroTitle'),
  };
}

export default async function DuhovyrodHome() {
  const locale = await getLocale();
  const t = getLocalizedContent<Record<string, string>>(contentData, locale);

  return (
    <div className="font-baloo">
      <section className="hero-gradient-dr min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="title-grad text-3xl md:text-[40px] font-medium mb-6 leading-[1.5]">
            {t.drHeroTitle}
          </h1>
          <h2 className="text-2xl md:text-[35px] text-white font-normal leading-[1.5]">{t.drHeroSub}</h2>
        </div>
      </section>

      <section className="section-dr-body py-8 px-4 lg:px-[5%] text-[22.5px] verse-dr">
        <div className="text-white leading-[1.51] text-justify">
          <h2 className="text-[27.5px] font-bold mt-8 mb-4 text-center subtitle-dr">{t.drSub1}</h2>
          <p className="my-4">{t.drText1}</p>
          <Verse text={t.drVerse1} reference={t.drRef1} />
          <p className="my-4">{t.drText2}</p>
          <Verse text={t.drVerse2} reference={t.drRef2} />
          <Verse text={t.drVerse3} reference={t.drRef3} />
          <p className="my-4">{t.drText3}</p>
          <Verse text={t.drVerse4} reference={t.drRef4} />

          <h2 className="text-[27.5px] font-bold mt-8 mb-4 text-center subtitle-dr-pink">{t.drSub2}</h2>
          <Verse text={t.drVerse5} reference={t.drRef5} />
          <Verse text={t.drVerse6} reference={t.drRef6} />
          <Verse text={t.drVerse7} reference={t.drRef7} />
          <p className="my-4">{t.drText4}</p>

          <h2 className="text-[27.5px] font-bold mt-8 mb-4 text-center subtitle-dr">{t.drSub3}</h2>
          <Verse text={t.drVerse8} reference={t.drRef8} />
          <p className="my-4">{t.drText5}</p>
          <p className="my-4">{t.drText6}</p>

          <h2 className="text-[27.5px] font-bold mt-8 mb-4 text-center subtitle-dr-pink">{t.drSub4}</h2>
          <p className="my-4">{t.drText7}</p>
          <Verse text={t.drVerse9} reference={t.drRef9} />
          <p className="my-4">{t.drText8}</p>
          <Verse text={t.drVerse10} reference={t.drRef10} />

          <h2 className="text-[27.5px] font-bold mt-8 mb-4 text-center subtitle-dr">{t.drSub5}</h2>
          <p className="my-4">{t.drText9}</p>
          <Verse text={t.drVerse11} reference={t.drRef11} />
          <Verse text={t.drVerse12} reference={t.drRef12} />
          <p className="my-4">{t.drText10}</p>
          <Verse text={t.drVerse13} reference={t.drRef13} />
          <Verse text={t.drVerse14} reference={t.drRef14} />
          <p className="my-4">{t.drText11}</p>
          <Verse text={t.drVerse15} reference={t.drRef15} />

          <h2 className="text-[27.5px] font-bold mt-8 mb-4 text-center subtitle-dr-pink">{t.drSub6}</h2>
          <p className="my-4">{t.drText12}</p>
          <p className="my-4">{t.drText13}</p>
          <p className="my-4">{t.drText14}</p>
          <Verse text={t.drVerse16} reference={t.drRef16} />
          <p className="my-4">{t.drText15}</p>

          <h2 className="text-[27.5px] font-bold mt-8 mb-4 text-center subtitle-dr">{t.drSub7}</h2>
          <p className="my-4">{t.drText16}</p>
          <Verse text={t.drVerse17} reference={t.drRef17} />
          <p className="my-4">{t.drText17}</p>
          <Verse text={t.drVerse18} reference={t.drRef18} />
          <p className="my-4">{t.drText18}</p>
          <p className="my-4">{t.drText19}</p>

          <h2 className="text-[27.5px] font-bold mt-8 mb-4 text-center subtitle-dr-pink">{t.drSub8}</h2>
          <p className="my-4">{t.drText20}</p>
          <p className="my-4">{t.drText21}</p>
          <Verse text={t.drVerse19} reference={t.drRef19} />
          <p className="my-4">{t.drText22}</p>
        </div>
      </section>
    </div>
  );
}
