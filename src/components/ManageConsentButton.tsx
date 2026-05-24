'use client';

import { useTranslations } from 'next-intl';

export default function ManageConsentButton() {
  const t = useTranslations('common.gdprPage');

  function handleClick() {
    window.dispatchEvent(new Event('open-consent-banner'));
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="underline text-yellow-300 hover:text-yellow-200 transition-colors"
    >
      {t('manageCookies')}
    </button>
  );
}
