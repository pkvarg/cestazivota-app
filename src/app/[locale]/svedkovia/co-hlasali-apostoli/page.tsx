import { getLocale } from 'next-intl/server';
import { getLocalizedContent } from '@/lib/content';
import Verse from '@/components/Verse';
import contentData from '@/content/svedkovia-apostoli.json';

export async function generateMetadata() {
  return { title: 'Co hlasali apostoli - Svedkovia - cestazivota.sk' };
}

export default async function ApostoliPage() {
  const locale = await getLocale();
  const t = getLocalizedContent<Record<string, string>>(contentData, locale);

  return (
    <div>
      <section className="hero-sv-apostoli min-h-[70vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-[32.5px] font-medium leading-[1.2]">{t.apTitle}</h1>
        </div>
      </section>
      <section className="bg-[#895f11] py-8 px-4 lg:px-[5%] verse-sv text-[22.5px]">
        <div className="text-stone-100 leading-[1.51]">
          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.apSub1}</h2>
          <Verse text={t.apVerse1} reference={t.apRef1} />
          <Verse text={t.apVerse2} reference={t.apRef2} />
          <p className="my-4">{t.apText1}</p>

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.apSub2}</h2>
          <Verse text={t.apVerse3} reference={t.apRef3} />
          <Verse text={t.apVerse4} reference={t.apRef4} />
          <Verse text={t.apVerse5} reference={t.apRef5} />
          <Verse text={t.apVerse6} reference={t.apRef6} />
          <Verse text={t.apVerse7} reference={t.apRef7} />
          <Verse text={t.apVerse8} reference={t.apRef8} />
          <Verse text={t.apVerse9} reference={t.apRef9} />
          <Verse text={t.apVerse10} reference={t.apRef10} />
          <p className="my-4">{t.apText2}</p>

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.apSub3}</h2>
          <Verse text={t.apVerse11} reference={t.apRef11} />

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.apSub4}</h2>
          <Verse text={t.apVerse12} reference={t.apRef12} />
          <Verse text={t.apVerse13} reference={t.apRef13} />
          <p className="my-4">{t.apText3}</p>

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.apSub5}</h2>
          <Verse text={t.apVerse14} reference={t.apRef14} />
          <p className="my-4">{t.apText4}</p>
          <Verse text={t.apVerse15} reference={t.apRef15} />
          <Verse text={t.apVerse16} reference={t.apRef16} />
          <p className="my-4">{t.apText5}</p>

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.apSub6}</h2>
          <p className="my-4">{t.apText6}</p>
          <Verse text={t.apVerse17} reference={t.apRef17} />

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.apSub7}</h2>
          <Verse text={t.apVerse18} reference={t.apRef18} />
          <p className="my-4">{t.apText7}</p>

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.apSub8}</h2>
          <Verse text={t.apVerse19} reference={t.apRef19} />
          <p className="my-4">{t.apText8}</p>
          <Verse text={t.apVerse20} reference={t.apRef20} />
          <p className="my-4">{t.apText9}</p>

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.apSub9}</h2>
          <Verse text={t.apVerse21} reference={t.apRef21} />
          <p className="my-4">{t.apText10}</p>
          <p className="my-4 font-semibold">{t.apText10a}</p>
          <Verse text={t.apVerse22} reference={t.apRef22} />
          <Verse text={t.apVerse23} reference={t.apRef23} />
        </div>
      </section>
    </div>
  );
}
