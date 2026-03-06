import { getLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { getLocalizedContent } from '@/lib/content';
import Verse from '@/components/Verse';
import contentData from '@/content/svedkovia-home.json';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'svedkovia' });
  return {
    title: `${t('siteTitle')} - cestazivota.sk`,
    description: t('heroTitle'),
  };
}

export default async function SvedkoviaHome() {
  const locale = await getLocale();
  const t = getLocalizedContent<Record<string, string>>(contentData, locale);

  return (
    <div>
      <section className="hero-gradient-sv min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-[45px] font-medium mb-6 leading-[1.1] text-[#4a2600]">
            {t.heroTitle}
          </h1>
          <h2 className="text-xl md:text-2xl text-[#4a2600]/80 font-medium">{t.heroSub}</h2>
        </div>
      </section>

      <section className="bg-white py-20 px-4 verse-dark verse-sv text-[22.5px] text-[#4a2600]">
        <div className="mx-4 text-black leading-[1.51]">
          <h2 className="text-[35px] font-normal mb-6 text-center text-black leading-[1.5]">{t.homeTitle1}</h2>
          <p className="mb-4">{t.homeText1}</p>
          <Verse text={t.homeVerse1} reference={t.homeRef1} />
          <Verse text={t.homeVerse2} reference={t.homeRef2} />
          <p className="my-4">{t.homeText2}</p>
          <Verse text={t.homeVerse3} reference={t.homeRef3} />

          <h2 className="text-[35px] font-normal mt-16 mb-6 text-center text-black leading-[1.5]">{t.homeTitle2}</h2>
          <p className="mb-4">{t.homeText3}</p>
          <Verse text={t.homeVerse4} reference={t.homeRef4} />
          <p className="my-4">{t.homeText4}</p>
          <Verse text={t.homeVerse5} reference={t.homeRef5} />
          <p className="my-4">{t.homeText5}</p>
          <p className="my-4">{t.homeText6}</p>
          <Verse text={t.homeVerse6} reference={t.homeRef6} />
          <p className="my-4">{t.homeText7}</p>

          <p className="my-4 font-semibold">{t.homeText8}</p>
          <Verse text={t.homeVerse7} reference={t.homeRef7} />
          <p className="my-4">{t.homeText9}</p>
          <Verse text={t.homeVerse8} reference={t.homeRef8} />
          <p className="my-4">{t.homeText10}</p>

          <h2 className="text-[35px] font-normal mt-16 mb-6 text-center text-black leading-[1.5]">{t.homeTitle3}</h2>
          <p className="mb-4">{t.homeText11}</p>
          <Verse text={t.homeVerse9} reference={t.homeRef9} />
          <Verse text={t.homeVerse10} reference={t.homeRef10} />
          <p className="my-4">{t.homeText12}</p>
          <p className="my-4">{t.homeText13}</p>
          <Verse text={t.homeVerse11} reference={t.homeRef11} />
          <Verse text={t.homeVerse12} reference={t.homeRef12} />
          <p className="my-4">{t.homeText14}</p>
          <Verse text={t.homeVerse13} reference={t.homeRef13} />
          <Verse text={t.homeVerse14} reference={t.homeRef14} />
          <p className="my-4">{t.homeText15}</p>
          <Verse text={t.homeVerse15} reference={t.homeRef15} />
          <Verse text={t.homeVerse16} reference={t.homeRef16} />
          <p className="my-4">{t.homeText16}</p>
          <Verse text={t.homeVerse17} reference={t.homeRef17} />
          <p className="my-4">{t.homeText17}</p>
          <Verse text={t.homeVerse18} reference={t.homeRef18} />

          <h2 className="text-[35px] font-normal mt-16 mb-6 text-center text-black leading-[1.5]">{t.homeTitle4}</h2>
          <p className="mb-4">{t.homeText18}</p>
          <Verse text={t.homeVerse19} reference={t.homeRef19} />
          <p className="my-4">{t.homeText19}</p>
          <p className="my-4">{t.homeText20}</p>

          <h2 className="text-[35px] font-normal mt-16 mb-6 text-center text-black leading-[1.5]">{t.homeTitle5}</h2>
          <Verse text={t.homeVerse20} reference={t.homeRef20} />
          <p className="my-4">{t.homeText21}</p>
          <Verse text={t.homeVerse21} reference={t.homeRef21} />
          <p className="my-4">{t.homeText22}</p>
          <p className="text-black text-xl font-bold my-6">{t.homeBold1}</p>
          <Verse text={t.homeVerse22} reference={t.homeRef22} />
          <Verse text={t.homeVerse23} reference={t.homeRef23} />
          <p className="text-black text-xl font-bold my-6">{t.homeBold2}</p>
        </div>
      </section>
    </div>
  );
}
