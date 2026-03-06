import { getLocale } from 'next-intl/server';
import { getLocalizedContent } from '@/lib/content';
import Verse from '@/components/Verse';
import contentData from '@/content/svedkovia-vecera.json';

export async function generateMetadata() {
  return { title: 'Vecera Panova - Svedkovia - cestazivota.sk' };
}

export default async function VeceraPage() {
  const locale = await getLocale();
  const t = getLocalizedContent<Record<string, string>>(contentData, locale);

  return (
    <div>
      <section className="hero-sv-vecera min-h-[70vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-[32.5px] font-medium leading-[1.2]">{t.sTitle}</h1>
        </div>
      </section>
      <section className="bg-[#8e562d] py-8 px-4 lg:px-[5%] verse-sv text-[22.5px]">
        <div className="text-stone-100 leading-[1.51]">
          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.sSub1}</h2>
          <Verse text={t.sVerse1} reference={t.sRef1} />
          <p className="my-4">{t.sText1}</p>
          <Verse text={t.sVerse2} reference={t.sRef2} />

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.sSub2}</h2>
          <Verse text={t.sVerse3} reference={t.sRef3} />
          <p className="my-4">{t.sText2}</p>
          <Verse text={t.sVerse4} reference={t.sRef4} />

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.sSub3}</h2>
          <Verse text={t.sVerse5} reference={t.sRef5} />

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.sSub4}</h2>
          <Verse text={t.sVerse6} reference={t.sRef6} />

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.sSub5}</h2>
          <Verse text={t.sVerse7} reference={t.sRef7} />
          <Verse text={t.sVerse8} reference={t.sRef8} />
          <p className="my-4">{t.sText4}</p>
          <Verse text={t.sVerse10} reference={t.sRef10} />
          <p className="my-4">{t.sText5}</p>

          <h2 className="text-[30px] font-medium mt-8 mb-4 text-center">{t.sSub6}</h2>
          <Verse text={t.sVerse11} reference={t.sRef11} />
          <p className="my-4">{t.sText6}</p>
          <p className="my-4">{t.sText7}</p>
          <Verse text={t.sVerse12} reference={t.sRef12} />
        </div>
      </section>
    </div>
  );
}
