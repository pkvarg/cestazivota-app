import { getLocale } from 'next-intl/server';
import { getLocalizedContent } from '@/lib/content';
import Verse from '@/components/Verse';
import contentData from '@/content/svedkovia-jezis.json';

export async function generateMetadata() {
  return { title: 'Je Jezis Boh? - Svedkovia - cestazivota.sk' };
}

export default async function JezisPage() {
  const locale = await getLocale();
  const t = getLocalizedContent<Record<string, string>>(contentData, locale);

  return (
    <div>
      <section className="hero-sv-boh min-h-[70vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-[32.5px] font-medium leading-[1.2]">{t.jTitle}</h1>
        </div>
      </section>
      <section className="bg-[#6dc3dd] py-8 px-4 lg:px-[5%] verse-sv text-[22.5px]">
        <div className="text-black leading-[1.51]">
          <p className="my-4">{t.jText1}</p>

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.jSub2}</h2>
          <Verse text={t.jVerse1} reference={t.jRef1} />
          <Verse text={t.jVerse2} reference={t.jRef2} />
          <Verse text={t.jVerse3} reference={t.jRef3} />
          <p className="my-4">{t.jText2}</p>

          {t.jSub3 && <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.jSub3}</h2>}
          {t.jVerse4 && <Verse text={t.jVerse4} reference={t.jRef4} />}
          {t.jText4 && <p className="my-4">{t.jText4}</p>}

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.jSub4}</h2>
          <Verse text={t.jVersex5} reference={t.jRefx5} />
          <Verse text={t.jVersexx5} reference={t.jRefxx5} />
          <p className="my-4">{t.jText5}</p>

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.jSub5}</h2>
          <Verse text={t.jVerse5} reference={t.jRef5} />
          <Verse text={t.jVerse6} reference={t.jRef6} />
          <p className="my-4">{t.jText6}</p>

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.jSub6}</h2>
          <Verse text={t.jVerse7} reference={t.jRef7} />
          <Verse text={t.jVerse8} reference={t.jRef8} />
          <p className="my-4">{t.jText7}</p>

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.jSub6_5}</h2>
          <Verse text={t.jVerse6_5a} reference={t.jRef6_5a} />
          <Verse text={t.jVerse6_5b} reference={t.jRef6_5b} />
          <p className="my-4">{t.jText6_5}</p>
          <Verse text={t.jVerse6_5c} reference={t.jRef6_5c} />

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.jSub7}</h2>
          <Verse text={t.jVerse9} reference={t.jRef9} />
          <Verse text={t.jVerse10} reference={t.jRef10} />

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.jSub8}</h2>
          <Verse text={t.jVerse11} reference={t.jRef11} />

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.jSub9}</h2>
          <Verse text={t.jVerse12} reference={t.jRef12} />
          <p className="my-4">{t.jText8}</p>
          <Verse text={t.jVerse13} reference={t.jRef13} />
          <p className="my-4">{t.jText9}</p>

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.jSub10}</h2>
          <Verse text={t.jVerse14} reference={t.jRef14} />
          <Verse text={t.jVerse15} reference={t.jRef15} />
          <Verse text={t.jVerse16} reference={t.jRef16} />
          <Verse text={t.jVerse17} reference={t.jRef17} />

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.jSub11}</h2>
          <Verse text={t.jVerse18} reference={t.jRef18} />

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.jSub12}</h2>
          <Verse text={t.jVerse19} reference={t.jRef19} />
          <p className="my-4">{t.jText10}</p>

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.jSub13}</h2>
          <Verse text={t.jVerse20} reference={t.jRef20} />
        </div>
      </section>
    </div>
  );
}
