import { getLocale } from 'next-intl/server';
import { getLocalizedContent } from '@/lib/content';
import Verse from '@/components/Verse';
import contentData from '@/content/svedkovia-pan.json';

export async function generateMetadata() {
  return { title: 'Koho Panom je Jezis - Svedkovia - cestazivota.sk' };
}

export default async function PanPage() {
  const locale = await getLocale();
  const t = getLocalizedContent<Record<string, string>>(contentData, locale);

  return (
    <div>
      <section className="hero-sv-pan min-h-[70vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-[32.5px] font-medium leading-[1.2]">{t.pTitle}</h1>
        </div>
      </section>
      <section className="bg-[#a19a93] py-8 px-4 lg:px-[5%] verse-sv text-[22.5px]">
        <div className="text-stone-100 leading-[1.51]">
          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.pSub1}</h2>
          <Verse text={t.pVerse1} reference={t.pRef1} />
          <p className="my-4">{t.pText1}</p>
          <Verse text={t.pVerse2} reference={t.pRef2} />
          <Verse text={t.pVerse3} reference={t.pRef3} />
          <p className="my-4">{t.pText2}</p>
          <Verse text={t.pVerse4} reference={t.pRef4} />
          <p className="my-4">{t.pText4}</p>

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.pSub3}</h2>
          <p className="my-4">{t.pText5}</p>
          <Verse text={t.pVerse5} reference={t.pRef5} />
          <p className="my-4">{t.pText6}</p>
          <Verse text={t.pVerse6} reference={t.pRef6} />
          <p className="my-4">{t.pText7}</p>
          <Verse text={t.pVerse7} reference={t.pRef7} />
          <Verse text={t.pVerse8} reference={t.pRef8} />
          <p className="my-4">{t.pText8}</p>
          <Verse text={t.pVerse9} reference={t.pRef9} />
          <p className="my-4">{t.pText9}</p>

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.pSub4}</h2>
          <Verse text={t.pVerse10} reference={t.pRef10} />
          <p className="my-4">{t.pText10}</p>
          <Verse text={t.pVerse11} reference={t.pRef11} />
          <p className="my-4">{t.pText11}</p>

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.pSub5}</h2>
          <Verse text={t.pVerse12} reference={t.pRef12} />
          <p className="my-4">{t.pText12}</p>
          <Verse text={t.pVerse13} reference={t.pRef13} />
          <p className="my-4">{t.pText13}</p>
          <Verse text={t.pVerse14} reference={t.pRef14} />
          <Verse text={t.pVerse15} reference={t.pRef15} />
          <p className="my-4">{t.pText14}</p>
          <Verse text={t.pVerse16} reference={t.pRef16} />
        </div>
      </section>
    </div>
  );
}
