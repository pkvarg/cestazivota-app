import { getLocale } from 'next-intl/server';
import { getLocalizedContent } from '@/lib/content';
import Verse from '@/components/Verse';
import contentData from '@/content/katolickaviera-knazsky.json';

export async function generateMetadata() {
  return { title: 'Kňazský úrad - Katolícka viera - cestazivota.sk' };
}

export default async function KnazskyUradPage() {
  const locale = await getLocale();
  const t = getLocalizedContent<Record<string, string>>(contentData, locale);

  return (
    <div className="font-lora verse-kv">
      <section className="hero-kv-knaz min-h-[70vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-[35px] font-normal leading-[1.5] font-lora text-[#d39f69]">{t.title}</h1>
        </div>
      </section>
      <section className="bg-[#222320] pt-8 pb-16 px-4 lg:px-8 text-[20px]">
        <div className="text-[#e6e6e6] leading-[1.5]">
          <p className="my-4">{t.text1}</p>
          <p className="my-4">{t.text2}</p>
          <Verse text={t.verse1} reference={t.ref1} />
          <p className="my-4">{t.text3}</p>
          <Verse text={t.verse2} reference={t.ref2} />
          <p className="my-4">{t.text3b}</p>
          <p className="my-4">{t.text4}</p>
          <p className="my-4">{t.text5}</p>
          <Verse text={t.verse3} reference={t.ref3} />

          <h2 className="text-[30px] font-normal mt-8 mb-4 text-[#d39f69] leading-[1.5]">{t.sub1}</h2>
          <p className="my-4">{t.text6}</p>

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
              <Verse text={t.bverse4} reference={t.bref4} />
              <Verse text={t.bverse5} reference={t.bref5} />
              <Verse text={t.bverse6} reference={t.bref6} />
            </div>
          </div>

          <p className="my-4">{t.text7}</p>
          <Verse text={t.verse4} reference={t.ref4} />
          <p className="my-4">{t.text8}</p>
          <Verse text={t.verse5} reference={t.ref5} />
          <p className="my-4">{t.text8b}</p>
          <p className="my-4">{t.text9}</p>
          <Verse text={t.verse6} reference={t.ref6} />

          <h2 className="text-[30px] font-normal mt-8 mb-4 text-[#d39f69] leading-[1.5]">{t.sub2}</h2>
          <p className="my-4">{t.text10}</p>
          <Verse text={t.verse7} reference={t.ref7} />
          <p className="my-4">{t.text10b}</p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Katechizmus hovorí:</h3>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat5}</p>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat6}</p>
            </div>
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Biblia hovorí:</h3>
              <Verse text={t.cverse1} reference={t.cref1} />
              <Verse text={t.cverse2} reference={t.cref2} />
            </div>
          </div>

          <p className="my-4">{t.text11}</p>
          <p className="my-4">{t.text12}</p>
          <Verse text={t.verse8} reference={t.ref8} />
        </div>
      </section>
    </div>
  );
}
