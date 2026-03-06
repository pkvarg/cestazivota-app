import { getLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { getLocalizedContent } from '@/lib/content';
import Verse from '@/components/Verse';
import YouTube from '@/components/YouTube';
import contentData from '@/content/katolickaviera-home.json';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'katolickaviera' });
  return {
    title: `${t('siteTitle')} - cestazivota.sk`,
    description: t('heroTitle'),
  };
}

export default async function KatolickaVieraHome() {
  const locale = await getLocale();
  const t = getLocalizedContent<Record<string, string>>(contentData, locale);

  return (
    <div className="font-lora verse-kv">
      <section className="hero-gradient-kv min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-[40px] font-bold mb-6 leading-[1.5] font-lora text-[#d39f69]">
            {t.kvHeroTitle}
          </h1>
          <Verse text={t.kvHeroVerse} reference={t.kvHeroRef} />
        </div>
      </section>

      <section className="bg-[#222320] pt-8 pb-16 px-4 lg:px-8 text-[20px]">
        <div className="text-[#e6e6e6] leading-[1.51] font-lora">
          <h2 className="text-[30px] font-normal mt-8 mb-4 text-[#d39f69] text-center leading-[1.5]">{t.kvQ1}</h2>
          <Verse text={t.kvVerse1} reference={t.kvRef1} />
          <p className="my-4">{t.kvText1}</p>

          <h2 className="text-[30px] font-normal mt-8 mb-4 text-[#d39f69] text-center leading-[1.5]">{t.kvQ2}</h2>
          <Verse text={t.kvVerse2a} reference={t.kvRef2a} />
          <Verse text={t.kvVerse2b} reference={t.kvRef2b} />

          <h2 className="text-[30px] font-normal mt-8 mb-4 text-[#d39f69] text-center leading-[1.5]">{t.kvQ3}</h2>
          <Verse text={t.kvVerse3} reference={t.kvRef3} />

          <h2 className="text-[30px] font-normal mt-8 mb-4 text-[#d39f69] text-center leading-[1.5]">{t.kvQ4}</h2>
          <Verse text={t.kvVerse4} reference={t.kvRef4} />

          <h2 className="text-[30px] font-normal mt-8 mb-4 text-[#d39f69] text-center leading-[1.5]">{t.kvQ5}</h2>
          <Verse text={t.kvVerse5a} reference={t.kvRef5a} />
          <Verse text={t.kvVerse5b} reference={t.kvRef5b} />
        </div>
      </section>

      <section className="bg-[#222320] pt-4 pb-8 px-4 lg:px-8 text-[20px]">
        <div className="text-[#e6e6e6] leading-[1.51] font-lora">
          <h2 className="text-[30px] font-normal mt-8 mb-4 text-[#d39f69] text-center leading-[1.5]">{t.kvQ6}</h2>
          <Verse text={t.kvVerse6a} reference={t.kvRef6a} />
          <Verse text={t.kvVerse6b} reference={t.kvRef6b} />
          <Verse text={t.kvVerse6c} reference={t.kvRef6c} />
          <Verse text={t.kvVerse6d} reference={t.kvRef6d} />

          <h2 className="text-[30px] font-normal mt-8 mb-4 text-[#d39f69] text-center leading-[1.5]">{t.kvQ7}</h2>
          <Verse text={t.kvVerse7} reference={t.kvRef7} />

          <h2 className="text-[30px] font-normal mt-8 mb-4 text-[#d39f69] text-center leading-[1.5]">{t.kvQ8}</h2>
          <Verse text={t.kvVerse8a} reference={t.kvRef8a} />
          <Verse text={t.kvVerse8b} reference={t.kvRef8b} />
          <Verse text={t.kvVerse8c} reference={t.kvRef8c} />

          <h2 className="text-[30px] font-normal mt-8 mb-4 text-[#d39f69] text-center leading-[1.5]">{t.kvQ9}</h2>
          <Verse text={t.kvVerse9a} reference={t.kvRef9a} />
          <Verse text={t.kvVerse9b} reference={t.kvRef9b} />

          <h2 className="text-[30px] font-normal mt-8 mb-4 text-[#d39f69] text-center leading-[1.5]">{t.kvQ10}</h2>
          <Verse text={t.kvVerse10a} reference={t.kvRef10a} />
          <Verse text={t.kvVerse10b} reference={t.kvRef10b} />

          <h2 className="text-[30px] font-normal mt-8 mb-4 text-[#d39f69] text-center leading-[1.5]">{t.kvQ11}</h2>
          <Verse text={t.kvVerse11} reference={t.kvRef11} />
          <p className="my-4">{t.kvText11}</p>
          <Verse text={t.kvVerse11b} reference={t.kvRef11b} />

          <div className="my-12">
            <YouTube videoId="d2Y04-qcdRM" />
          </div>

          <p className="text-lg my-6">{t.kvClosing}</p>
        </div>
      </section>
    </div>
  );
}
