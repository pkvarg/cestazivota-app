import { getLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { getLocalizedContent } from '@/lib/content';
import Verse from '@/components/Verse';
import contentData from '@/content/katolickaviera-spasenie.json';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'katolickaviera.nav' });
  return { title: `${t('spasenie')} - Katolícka viera - cestazivota.sk` };
}

export default async function SpaseniePage() {
  const locale = await getLocale();
  const t = getLocalizedContent<Record<string, string>>(contentData, locale);

  return (
    <div className="font-lora verse-kv">
      <section className="hero-kv-spasenie min-h-[70vh] flex items-center justify-center py-20 px-4">
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
              <p className="text-sm">{t.cat4}</p>
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
          <Verse text={t.verse1} reference={t.ref1} />
          <p className="mb-8">{t.text6}</p>

          <h2 className="text-2xl font-bold font-lora text-center text-[#d39f69] my-8">{t.sub2}</h2>
          <p className="mb-4">{t.text7}</p>
          <p className="mb-4">{t.text8}</p>
          <p className="mb-4">{t.text9}</p>
          <Verse text={t.verse2} reference={t.ref2} />

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Katechizmus hovorí:</h3>
              <p className="text-sm mb-3">{t.cat5}</p>
              <p className="text-sm mb-3">{t.cat6}</p>
              <p className="text-sm">{t.cat7}</p>
            </div>
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Biblia hovorí:</h3>
              <Verse text={t.sverse1} reference={t.sref1} />
              <Verse text={t.sverse2} reference={t.sref2} />
              <Verse text={t.sverse3} reference={t.sref3} />
              <Verse text={t.sverse4} reference={t.sref4} />
              <Verse text={t.sverse5} reference={t.sref5} />
              <Verse text={t.sverse6} reference={t.sref6} />
            </div>
          </div>

          <p className="mb-4">{t.text10}</p>
          <p className="mb-8">{t.text11}</p>

          <h2 className="text-2xl font-bold font-lora text-center text-[#d39f69] my-8">{t.sub3}</h2>
          <p className="mb-6">{t.text12}</p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Katechizmus hovorí:</h3>
              <p className="text-sm mb-3">{t.cat8}</p>
              <p className="text-sm mb-3">{t.cat9}</p>
              <p className="text-sm">{t.cat10}</p>
            </div>
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Biblia hovorí:</h3>
              <Verse text={t.tverse1} reference={t.tref1} />
              <Verse text={t.tverse2} reference={t.tref2} />
              <Verse text={t.tverse3} reference={t.tref3} />
              <Verse text={t.tverse4} reference={t.tref4} />
              <Verse text={t.tverse5} reference={t.tref5} />
              <Verse text={t.tverse6} reference={t.tref6} />
            </div>
          </div>

          <p className="mb-8">{t.text13}</p>

          <h2 className="text-2xl font-bold font-lora text-center text-[#d39f69] my-8">{t.sub4}</h2>
          <p className="mb-4">{t.text14}</p>
          <p className="mb-4">{t.text15}</p>
          <p className="mb-6">{t.text16}</p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Katechizmus hovorí:</h3>
              <p className="text-sm mb-3">{t.cat11}</p>
              <p className="text-sm mb-3">{t.cat12}</p>
              <p className="text-sm mb-3">{t.cat13}</p>
              <p className="text-sm">{t.cat14}</p>
            </div>
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Biblia hovorí:</h3>
              <Verse text={t.overse1} reference={t.oref1} />
              <Verse text={t.overse2} reference={t.oref2} />
              <Verse text={t.overse3} reference={t.oref3} />
              <Verse text={t.overse4} reference={t.oref4} />
              <Verse text={t.overse5} reference={t.oref5} />
            </div>
          </div>

          <p className="mb-4">{t.text17}</p>
          <p className="mb-4">{t.text18}</p>
        </div>
      </section>
    </div>
  );
}
