'use client';

import { useTranslations } from 'next-intl';

export default function ManageConsentButton({
  className = 'underline text-yellow-300 hover:text-yellow-200 transition-colors',
}: {
  className?: string;
}) {
  const t = useTranslations('common.gdprPage');

  function handleClick() {
    window.dispatchEvent(new Event('open-consent-banner'));
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
    >
      {t('manageCookies')}
    </button>
  );
}
