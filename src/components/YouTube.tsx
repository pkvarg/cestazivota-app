'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface YouTubeProps {
  videoId: string;
  title?: string;
}

// Loads YouTube only after a click, so visitors are not connected to Google
// (IP address, YouTube cookies) without their action. See /gdpr.
export default function YouTube({ videoId, title = 'Video' }: YouTubeProps) {
  const t = useTranslations('common.video');
  const [active, setActive] = useState(false);

  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl">
      {active ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`${t('play')}: ${title}`}
          className="group absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-4 bg-gray-900 px-6 text-center cursor-pointer"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-gray-900 transition-transform group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="text-white font-semibold">{t('play')}</span>
          <span className="max-w-md text-sm text-gray-400">{t('notice')}</span>
        </button>
      )}
    </div>
  );
}
