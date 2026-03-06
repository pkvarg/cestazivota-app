import { getLocale } from 'next-intl/server';
import { getLocalizedContent } from '@/lib/content';
import Verse from '@/components/Verse';
import contentData from '@/content/katolickaviera-manzelstvo.json';

export async function generateMetadata() {
  return { title: 'Manželstvo - Katolícka viera - cestazivota.sk' };
}

export default async function ManzelstvoPage() {
  const locale = await getLocale();
  const t = getLocalizedContent<Record<string, string>>(contentData, locale);

  return (
    <div className="font-lora verse-kv">
      <section className="hero-kv-manzelstvo min-h-[70vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-[35px] font-normal leading-[1.5] font-lora text-[#d39f69]">{t.title}</h1>
        </div>
      </section>
      <section className="bg-[#222320] pt-8 pb-16 px-4 lg:px-8 text-[20px]">
        <div className="text-[#e6e6e6] leading-[1.5]">
          <p className="my-4">{t.text1}</p>
          <p className="my-4">{t.text2}</p>
          <p className="my-4">{t.text3}</p>

          <h2 className="text-[30px] font-normal mt-8 mb-4 text-[#d39f69] leading-[1.5]">{t.sub1}</h2>
          <p className="my-4">{t.text4}</p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Katechizmus hovorí:</h3>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat1}</p>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat2}</p>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat3}</p>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat4}</p>
            </div>
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Biblia hovorí:</h3>
              <Verse text={t.bverse1} reference={t.bref1} />
              <Verse text={t.bverse2} reference={t.bref2} />
              <Verse text={t.bverse3} reference={t.bref3} />
            </div>
          </div>

          <p className="my-4">{t.text5}</p>

          <h2 className="text-[30px] font-normal mt-8 mb-4 text-[#d39f69] leading-[1.5]">{t.sub2}</h2>
          <p className="my-4">{t.text6}</p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Katechizmus hovorí:</h3>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat5}</p>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat6}</p>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat7}</p>
            </div>
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Biblia hovorí:</h3>
              <Verse text={t.averse1} reference={t.aref1} />
              <Verse text={t.averse2} reference={t.aref2} />
              <Verse text={t.averse3} reference={t.aref3} />
            </div>
          </div>

          <p className="my-4">{t.text7}</p>
          <p className="my-4">{t.text8}</p>
          <p className="my-4">{t.text9}</p>
          <Verse text={t.verse3} reference={t.ref3} />
          <p className="my-4">{t.text9b}</p>

          <h2 className="text-[30px] font-normal mt-8 mb-4 text-[#d39f69] leading-[1.5]">{t.sub3}</h2>
          <p className="my-4">{t.text10}</p>
          <Verse text={t.verse4} reference={t.ref4} />

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Katechizmus hovorí:</h3>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat8}</p>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat9}</p>
            </div>
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Biblia hovorí:</h3>
              <Verse text={t.sverse1} reference={t.sref1} />
            </div>
          </div>

          <p className="my-4">{t.text11}</p>
        </div>
      </section>
    </div>
  );
}
