import { getLocale } from 'next-intl/server';
import { getLocalizedContent } from '@/lib/content';
import Verse from '@/components/Verse';
import contentData from '@/content/katolickaviera-omsa.json';

export async function generateMetadata() {
  return { title: 'Omša - Katolícka viera - cestazivota.sk' };
}

export default async function OmsaPage() {
  const locale = await getLocale();
  const t = getLocalizedContent<Record<string, string>>(contentData, locale);

  return (
    <div className="font-lora verse-kv">
      <section className="hero-kv-omsa min-h-[70vh] flex items-center justify-center py-20 px-4">
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
            </div>
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Biblia hovorí:</h3>
              <Verse text={t.verse1} reference={t.ref1} />
              <Verse text={t.verse2} reference={t.ref2} />
              <Verse text={t.verse3} reference={t.ref3} />
              <Verse text={t.verse4} reference={t.ref4} />
            </div>
          </div>

          <p className="my-4">{t.text5}</p>
          <p className="my-4">{t.text6}</p>
          <Verse text={t.verse5a} reference={t.ref5a} />
          <Verse text={t.verse5b} reference={t.ref5b} />
          <p className="my-4">{t.text6b}</p>
          <Verse text={t.verse5c} reference={t.ref5c} />
          <p className="my-4">{t.text6c}</p>

          <h2 className="text-[30px] font-normal mt-8 mb-4 text-[#d39f69] leading-[1.5]">{t.sub2}</h2>
          <p className="my-4">{t.text7}</p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Katechizmus hovorí:</h3>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat4}</p>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat5}</p>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat6}</p>
            </div>
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Biblia hovorí:</h3>
              <Verse text={t.iverse1} reference={t.iref1} />
              <Verse text={t.iverse2} reference={t.iref2} />
              <Verse text={t.iverse3} reference={t.iref3} />
            </div>
          </div>

          <p className="my-4">{t.text8}</p>
          <Verse text={t.verse8a} reference={t.ref8a} />
          <p className="my-4">{t.text8b}</p>
          <Verse text={t.verse8b} reference={t.ref8b} />
          <p className="my-4">{t.text8c}</p>
          <Verse text={t.verse8c} reference={t.ref8c} />
          <p className="my-4">{t.text8d}</p>
          <Verse text={t.verse8d} reference={t.ref8d} />
          <p className="my-4">{t.text8e}</p>
          <Verse text={t.verse8e} reference={t.ref8a} />
          <p className="my-4">{t.text8f}</p>
          <Verse text={t.verse8f} reference={t.ref8f} />

          <h2 className="text-[30px] font-normal mt-8 mb-4 text-[#d39f69] leading-[1.5]">{t.sub3}</h2>
          <p className="my-4">{t.text9}</p>
          <p className="my-4">{t.text9b}</p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Katechizmus hovorí:</h3>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat7}</p>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat8}</p>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat9}</p>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat10}</p>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat11}</p>
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

          <p className="my-4">{t.text10}</p>
          <p className="my-4">{t.text10b}</p>

          <h2 className="text-[30px] font-normal mt-8 mb-4 text-[#d39f69] leading-[1.5]">{t.sub4}</h2>
          <p className="my-4">{t.text11}</p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Katechizmus hovorí:</h3>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat12}</p>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat13}</p>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat14}</p>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat15}</p>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat16}</p>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat17}</p>
              <p className="text-[#e6e6e6]/70 my-4 text-sm italic border-l-2 border-[#d39f69]/20 pl-4">{t.cat18}</p>
            </div>
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Biblia hovorí:</h3>
              <Verse text={t.pverse1} reference={t.pref1} />
              <Verse text={t.pverse2} reference={t.pref2} />
              <Verse text={t.pverse3} reference={t.pref3} />
              <Verse text={t.pverse4} reference={t.pref4} />
              <Verse text={t.pverse5} reference={t.pref5} />
            </div>
          </div>

          <p className="my-4">{t.text12}</p>
          <Verse text={t.verse12a} reference={t.ref12c} />
          <p className="my-4">{t.text12b}</p>
          <Verse text={t.verse12b} reference={t.ref12d} />
          <p className="my-4">{t.text12c}</p>
          <p className="my-4">{t.text12d}</p>
          <p className="my-4">{t.text13}</p>
          <p className="my-4">{t.text14}</p>
          <Verse text={t.verse14a} reference={t.ref14a} />
          <p className="my-4">{t.text14b}</p>
          <p className="my-4">{t.text15}</p>
          <Verse text={t.verse15a} reference={t.ref15a} />
          <p className="my-4">{t.text16}</p>
          <Verse text={t.verse16a} reference={t.ref16a} />
          <p className="my-4">{t.text16b}</p>
        </div>
      </section>
    </div>
  );
}
