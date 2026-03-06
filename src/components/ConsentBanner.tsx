'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

export default function ConsentBanner() {
  const t = useTranslations('common.cookie');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
    loadAnalytics();
  }

  function handleDecline() {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  }

  function loadAnalytics() {
    // Umami analytics - replace with actual script
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.setAttribute('data-website-id', 'YOUR_UMAMI_WEBSITE_ID');
    script.src = 'https://umami-p00gs00gwcwo00s4k4c4kgg8.pictusweb.com/script.js';
    document.head.appendChild(script);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 p-4 z-50">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-300 text-sm">{t('message')}</p>
        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded text-sm font-medium hover:bg-yellow-300 transition-colors"
          >
            {t('accept')}
          </button>
          <button
            onClick={handleDecline}
            className="bg-gray-700 text-gray-300 px-4 py-2 rounded text-sm font-medium hover:bg-gray-600 transition-colors"
          >
            {t('decline')}
          </button>
        </div>
      </div>
    </div>
  );
}
