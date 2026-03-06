import { getLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { getLocalizedContent } from '@/lib/content';
import Verse from '@/components/Verse';
import contentData from '@/content/katolickaviera-maria.json';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'katolickaviera.nav' });
  return { title: `${t('maria')} - Katolícka viera - cestazivota.sk` };
}

export default async function MariaPage() {
  const locale = await getLocale();
  const t = getLocalizedContent<Record<string, string>>(contentData, locale);

  return (
    <div className="font-lora verse-kv">
      <section className="hero-kv-maria min-h-[70vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-[35px] font-normal leading-[1.5] font-lora text-[#d39f69]">{t.title}</h1>
        </div>
      </section>
      <section className="bg-[#222320] pt-8 pb-16 px-4 lg:px-8 text-[20px]">
        <div className="text-[#e6e6e6] leading-[1.5]">
          <p className="mb-4">{t.text1}</p>
          <p className="mb-8">{t.text2}</p>

          <h2 className="text-2xl font-bold font-lora text-center text-[#d39f69] mb-8">{t.sub1}</h2>
          <p className="mb-6">{t.text3}</p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Katechizmus hovorí:</h3>
              <p className="text-sm mb-3">{t.cat1}</p>
              <p className="text-sm">{t.cat2}</p>
            </div>
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Biblia hovorí:</h3>
              <Verse text={t.bverse1} reference={t.bref1} />
              <Verse text={t.bverse2} reference={t.bref2} />
              <Verse text={t.bverse3} reference={t.bref3} />
              <Verse text={t.bverse4} reference={t.bref4} />
            </div>
          </div>

          <p className="mb-4">{t.text4}</p>
          <p className="mb-4">{t.text5}</p>
          <Verse text={t.verse1} reference={t.ref1} />

          <h2 className="text-2xl font-bold font-lora text-center text-[#d39f69] my-8">{t.sub2}</h2>
          <p className="mb-6">{t.text6}</p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Katechizmus hovorí:</h3>
              <p className="text-sm mb-3">{t.cat3}</p>
              <p className="text-sm">{t.cat4}</p>
            </div>
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Biblia hovorí:</h3>
              <Verse text={t.mverse1} reference={t.mref1} />
              <Verse text={t.mverse2} reference={t.mref2} />
              <Verse text={t.mverse3} reference={t.mref3} />
              <Verse text={t.mverse4} reference={t.mref4} />
            </div>
          </div>

          <p className="mb-4">{t.text7}</p>
          <Verse text={t.verse2} reference={t.ref2} />

          <h2 className="text-2xl font-bold font-lora text-center text-[#d39f69] my-8">{t.sub3}</h2>
          <p className="mb-6">{t.text8}</p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Katechizmus hovorí:</h3>
              <p className="text-sm mb-3">{t.cat5}</p>
              <p className="text-sm">{t.cat6}</p>
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

          <p className="mb-4">{t.text9}</p>
          <p className="mb-4">{t.text10}</p>
          <Verse text={t.verse3} reference={t.ref3} />
          <p className="mb-8">{t.text11}</p>

          <h2 className="text-2xl font-bold font-lora text-center text-[#d39f69] my-8">{t.sub4}</h2>
          <p className="mb-6">{t.text12}</p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Katechizmus hovorí:</h3>
              <p className="text-sm mb-3">{t.cat7}</p>
              <p className="text-sm mb-3">{t.cat8}</p>
              <p className="text-sm mb-3">{t.cat9}</p>
              <p className="text-sm mb-3">{t.cat10}</p>
              <p className="text-sm">{t.cat11}</p>
            </div>
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Biblia hovorí:</h3>
              <Verse text={t.sverse1} reference={t.sref1} />
              <Verse text={t.sverse2} reference={t.sref2} />
              <Verse text={t.sverse3} reference={t.sref3} />
              <Verse text={t.sverse4} reference={t.sref4} />
              <Verse text={t.sverse5} reference={t.sref5} />
              <Verse text={t.sverse6} reference={t.sref6} />
              <Verse text={t.sverse7} reference={t.sref7} />
            </div>
          </div>

          <p className="mb-4">{t.text13}</p>
          <Verse text={t.verse4} reference={t.ref4} />
          <Verse text={t.verse5} reference={t.ref5} />
          <p className="mb-8">{t.text14}</p>

          <h2 className="text-2xl font-bold font-lora text-center text-[#d39f69] my-8">{t.sub5}</h2>
          <p className="mb-6">{t.text15}</p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Katechizmus hovorí:</h3>
              <p className="text-sm mb-3">{t.cat12}</p>
              <p className="text-sm">{t.cat13}</p>
            </div>
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Biblia hovorí:</h3>
              <Verse text={t.kverse1} reference={t.kref1} />
              <Verse text={t.kverse2} reference={t.kref2} />
              <Verse text={t.kverse3} reference={t.kref3} />
              <Verse text={t.kverse4} reference={t.kref4} />
            </div>
          </div>

          <p className="mb-8">{t.text16}</p>

          <h2 className="text-2xl font-bold font-lora text-center text-[#d39f69] my-8">{t.sub6}</h2>
          <p className="mb-6">{t.text17}</p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Katechizmus hovorí:</h3>
              <p className="text-sm mb-3">{t.cat14}</p>
              <p className="text-sm mb-3">{t.cat15}</p>
              <p className="text-sm">{t.cat16}</p>
            </div>
            <div className="border border-[#d39f69]/30 rounded-lg p-6">
              <h3 className="font-semibold text-center mb-4">Biblia hovorí:</h3>
              <Verse text={t.hverse1} reference={t.href1} />
              <Verse text={t.hverse2} reference={t.href2} />
              <Verse text={t.hverse3} reference={t.href3} />
              <Verse text={t.hverse4} reference={t.href4} />
              <Verse text={t.hverse5} reference={t.href5} />
            </div>
          </div>

          <p className="mb-4">{t.text18}</p>
          <p className="mb-4">{t.text19}</p>
          <Verse text={t.verse6} reference={t.ref6} />
          <p className="mb-4">{t.text20}</p>
          <Verse text={t.verse7} reference={t.ref7} />
          <p className="mb-4">{t.text21}</p>
          <p className="mb-4">{t.text22}</p>
          <Verse text={t.verse8} reference={t.ref8} />
        </div>
      </section>
    </div>
  );
}
