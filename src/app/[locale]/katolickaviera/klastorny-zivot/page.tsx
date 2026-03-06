import { getLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { getLocalizedContent } from '@/lib/content';
import Verse from '@/components/Verse';
import contentData from '@/content/katolickaviera-klastorny.json';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'katolickaviera.nav' });
  return { title: `${t('klastorny')} - Katolícka viera - cestazivota.sk` };
}

export default async function KlastornyZivotPage() {
  const locale = await getLocale();
  const t = getLocalizedContent<Record<string, string>>(contentData, locale);

  return (
    <div className="font-lora verse-kv">
      <section className="hero-kv-klastor min-h-[70vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-[35px] font-normal leading-[1.5] font-lora text-[#d39f69]">{t.title}</h1>
        </div>
      </section>
      <section className="bg-[#222320] pt-8 pb-16 px-4 lg:px-8 text-[20px]">
        <div className="text-[#e6e6e6] leading-[1.5]">
          <p className="mb-4">{t.text1}</p>
          <p className="mb-4">{t.text2}</p>
          <p className="mb-8">{t.text3}</p>

          <h2 className="text-2xl font-bold font-lora text-center text-[#d39f69] mb-8">{t.sub1}</h2>
          <p className="mb-6">{t.text4}</p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Katechizmus hovorí:</h3>
              <p className="text-sm mb-3">{t.cat1}</p>
              <p className="text-sm mb-3">{t.cat2}</p>
              <p className="text-sm mb-3">{t.cat3}</p>
              <p className="text-sm mb-3">{t.cat4}</p>
              <p className="text-sm">{t.cat5}</p>
            </div>
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Biblia hovorí:</h3>
              <Verse text={t.bverse1} reference={t.bref1} />
              <Verse text={t.bverse2} reference={t.bref2} />
              <Verse text={t.bverse3} reference={t.bref3} />
              <Verse text={t.bverse4} reference={t.bref4} />
              <Verse text={t.bverse5} reference={t.bref5} />
              <Verse text={t.bverse6} reference={t.bref6} />
              <Verse text={t.bverse7} reference={t.bref7} />
            </div>
          </div>

          <p className="mb-4">{t.text5}</p>
          <p className="mb-4">{t.text6}</p>
          <p className="mb-4">{t.text7}</p>
          <Verse text={t.verse1} reference={t.ref1} />
          <p className="mb-8">{t.text8}</p>

          <h2 className="text-2xl font-bold font-lora text-center text-[#d39f69] my-8">{t.sub2}</h2>
          <p className="mb-6">{t.text9}</p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Katechizmus hovorí:</h3>
              <p className="text-sm">{t.cat6}</p>
            </div>
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Biblia hovorí:</h3>
              <Verse text={t.bverse8} reference={t.bref8} />
            </div>
          </div>

          <p className="mb-4">{t.text10}</p>
          <p className="mb-4">{t.text11}</p>
          <Verse text={t.verse2} reference={t.ref2} />
          <p className="mb-4">{t.text12}</p>
          <Verse text={t.verse3} reference={t.ref3} />
          <Verse text={t.verse4} reference={t.ref4} />
          <p className="mt-4">{t.text13}</p>
        </div>
      </section>
    </div>
  );
}
