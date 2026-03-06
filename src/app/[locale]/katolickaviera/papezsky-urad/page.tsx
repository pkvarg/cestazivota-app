import { getLocale } from 'next-intl/server';
import { getLocalizedContent } from '@/lib/content';
import Verse from '@/components/Verse';
import contentData from '@/content/katolickaviera-papezsky.json';

export async function generateMetadata() {
  return { title: 'Pápežský úrad - Katolícka viera - cestazivota.sk' };
}

export default async function PapezskyUradPage() {
  const locale = await getLocale();
  const t = getLocalizedContent<Record<string, string>>(contentData, locale);

  return (
    <div className="font-lora verse-kv">
      <section className="hero-kv-papez min-h-[70vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-[35px] font-normal leading-[1.5] font-lora text-[#d39f69]">{t.title}</h1>
        </div>
      </section>
      <section className="bg-[#222320] pt-8 pb-16 px-4 lg:px-8 text-[20px]">
        <div className="text-[#e6e6e6] leading-[1.5]">
          <p className="my-4">{t.text1}</p>
          <p className="my-4">{t.text2}</p>
          <Verse text={t.verse1} reference={t.ref1} />
          <Verse text={t.verse2} reference={t.ref2} />
          <p className="my-4">{t.text3}</p>
          <Verse text={t.verse3} reference={t.ref3} />
          <Verse text={t.verse4} reference={t.ref4} />
          <p className="my-4">{t.text3b}</p>
          <Verse text={t.verse5} reference={t.ref5} />

          <h2 className="text-[30px] font-normal mt-8 mb-4 text-[#d39f69] leading-[1.5]">{t.sub1}</h2>
          <p className="my-4">{t.text4}</p>
          <Verse text={t.verse6} reference={t.ref6} />
          <p className="my-4">{t.text4b}</p>
          <Verse text={t.verse7} reference={t.ref7} />
          <p className="my-4">{t.text4c}</p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Katechizmus hovorí:</h3>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat1}</p>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat2}</p>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat3}</p>
            </div>
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Biblia hovorí:</h3>
              <Verse text={t.nverse1} reference={t.nref1} />
              <Verse text={t.nverse2} reference={t.nref2} />
              <Verse text={t.nverse3} reference={t.nref3} />
            </div>
          </div>

          <p className="my-4">{t.text5}</p>
          <p className="my-4">{t.text6}</p>
          <p className="my-4">{t.text7}</p>
          <Verse text={t.verse8} reference={t.ref8} />

          <h2 className="text-[30px] font-normal mt-8 mb-4 text-[#d39f69] leading-[1.5]">{t.sub2}</h2>
          <p className="my-4">{t.text8}</p>
          <p className="my-4">{t.text9}</p>
          <Verse text={t.verse9} reference={t.ref9} />

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Katechizmus hovorí:</h3>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat4}</p>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat5}</p>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat6}</p>
            </div>
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Biblia hovorí:</h3>
              <Verse text={t.everse1} reference={t.eref1} />
              <Verse text={t.everse2} reference={t.eref2} />
              <Verse text={t.everse3} reference={t.eref3} />
              <Verse text={t.everse4} reference={t.eref4} />
              <Verse text={t.everse5} reference={t.eref5} />
              <Verse text={t.everse6} reference={t.eref6} />
              <Verse text={t.everse7} reference={t.eref7} />
              <Verse text={t.everse8} reference={t.eref8} />
            </div>
          </div>

          <p className="my-4">{t.text10}</p>
          <Verse text={t.verse10} reference={t.ref10} />
          <p className="my-4">{t.text10b}</p>
          <Verse text={t.verse11} reference={t.ref11} />
          <p className="my-4">{t.text11}</p>
          <Verse text={t.verse12} reference={t.ref12} />
          <p className="my-4">{t.text12}</p>
          <Verse text={t.verse13} reference={t.ref13} />
          <p className="my-4">{t.text12b}</p>
          <Verse text={t.verse14} reference={t.ref14} />

          <h2 className="text-[30px] font-normal mt-8 mb-4 text-[#d39f69] leading-[1.5]">{t.sub3}</h2>
          <p className="my-4">{t.text13}</p>
          <p className="my-4">{t.text14}</p>
          <Verse text={t.verse15} reference={t.ref15} />
          <Verse text={t.verse16} reference={t.ref16} />

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Katechizmus hovorí:</h3>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat7}</p>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat8}</p>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat9}</p>
            </div>
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Biblia hovorí:</h3>
              <Verse text={t.vverse1} reference={t.vref1} />
              <Verse text={t.vverse2} reference={t.vref2} />
              <Verse text={t.vverse3} reference={t.vref3} />
              <Verse text={t.vverse4} reference={t.vref4} />
              <Verse text={t.vverse5} reference={t.vref5} />
              <Verse text={t.vverse6} reference={t.vref6} />
            </div>
          </div>

          <p className="my-4">{t.text15}</p>
          <Verse text={t.verse17} reference={t.ref17} />
          <p className="my-4">{t.text16}</p>
        </div>
      </section>
    </div>
  );
}
