'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

const TRACT_BY_LOCALE: Record<string, string> = {
  sk: '0710',
  cs: '0765',
  en: '0001',
};

function buildPages(locale: string) {
  const tract = TRACT_BY_LOCALE[locale] ?? TRACT_BY_LOCALE.sk;
  const chickPages = Array.from({ length: 21 }, (_, i) => {
    const num = String(i + 2).padStart(2, '0');
    return `https://www.chick.com/images/tracts/${tract}/${tract}_${num}.gif`;
  });
  return [...chickPages, '/images/cestazivota/tractEnd.webp'];
}

export default function ComicSlider({ locale }: { locale: string }) {
  const images = buildPages(locale);
  const total = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState(false);
  const t = useTranslations('common.comic');

  function prev() {
    setCurrentIndex((i) => (i === 0 ? total - 1 : i - 1));
  }
  function next() {
    setCurrentIndex((i) => (i === total - 1 ? 0 : i + 1));
  }

  // The pages are loaded from chick.com only after a click, so visitors'
  // browsers don't contact Chick Publications without their action. See /gdpr.
  if (!active) {
    return (
      <div className="my-16 flex justify-center">
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group flex w-full lg:w-[65%] aspect-[4/3] flex-col items-center justify-center gap-4 rounded-lg border border-gray-700 bg-gray-900 px-6 text-center cursor-pointer"
        >
          <span className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-gray-900 transition-transform group-hover:scale-105">
            {t('show')}
          </span>
          <span className="max-w-md text-sm text-gray-400">{t('notice')}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="relative my-16">
      {/* Desktop layout */}
      <div className="hidden lg:flex justify-center">
        <button
          onClick={prev}
          className="text-[55px] absolute top-1/2 transform -translate-y-1/2 -left-12 lg:left-20"
          aria-label="Previous page"
        >
          &lt;
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 transform -translate-y-1/2 -right-12 lg:right-24 text-[55px]"
          aria-label="Next page"
        >
          &gt;
        </button>
        <p className="hidden lg:flex text-[22.5px] absolute right-[2%]">
          <strong>
            {currentIndex + 1} / {total}
          </strong>
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="mx-auto w-[100%] lg:w-[65%]"
        />
      </div>

      {/* Mobile layout */}
      <div className="flex lg:hidden justify-center">
        <button
          onClick={prev}
          className="text-[35px] absolute top-[115%] transform -translate-y-1/2 left-12"
          aria-label="Previous page"
        >
          &lt;
        </button>
        <p className="flex text-[18px] lg:text-[22.5px] absolute top-[108%]">
          <strong>
            {currentIndex + 1} / {total}
          </strong>
        </p>
        <button
          onClick={next}
          className="absolute top-[115%] transform -translate-y-1/2 right-12 text-[35px]"
          aria-label="Next page"
        >
          &gt;
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="mx-auto w-[100%]"
        />
      </div>
    </div>
  );
}
