'use client';

import { useState } from 'react';
import Image from 'next/image';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

interface BookSliderProps {
  basePath: string;
  totalPages: number;
  prefix?: string;
}

export default function BookSlider({ basePath, totalPages, prefix = 'IMG_' }: BookSliderProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = Array.from({ length: totalPages }, (_, i) => {
    const num = String(i + 1).padStart(2, '0');
    return `${basePath}/${prefix}${num}.webp`;
  });

  function prev() {
    setCurrentPage((p) => (p > 1 ? p - 1 : totalPages));
  }

  function next() {
    setCurrentPage((p) => (p < totalPages ? p + 1 : 1));
  }

  return (
    <div className="relative max-w-md mx-auto">
      <div className="relative aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
        <Image
          src={pages[currentPage - 1]}
          alt={`Page ${currentPage}`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={prev}
          className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-colors"
          aria-label="Previous page"
        >
          <HiChevronLeft className="text-2xl" />
        </button>
        <span className="text-gray-400 text-sm">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={next}
          className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-colors"
          aria-label="Next page"
        >
          <HiChevronRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
