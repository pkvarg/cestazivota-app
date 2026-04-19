'use client';

import { useTranslations } from 'next-intl';
import { useState, FormEvent } from 'react';

export default function BookContactToggle() {
  const t = useTranslations('cestaZivota');
  const tc = useTranslations('common.contactForm');
  const [open, setOpen] = useState(false);
  const [gdprInfoOpen, setGdprInfoOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get('user_email'),
      message: formData.get('message'),
    };

    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );
      setStatus('success');
      e.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <h3 className="text-[22.5px] font-normal mt-10 text-center">
        {t('s4ButtonPre')}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="underline hover:text-yellow-300 transition-colors"
        >
          {t('s4ButtonLink')}
        </button>
        {t('s4ButtonPost')}
      </h3>

      {open && (
        <form
          onSubmit={handleSubmit}
          className="mt-8 mx-auto max-w-md flex flex-col gap-[2.5px] text-[16px] lg:text-[22.5px] text-left"
        >
          <label className="my-[2.5%]" htmlFor="cf-email">
            {tc('email')}
          </label>
          <input
            id="cf-email"
            className="rounded-xl bg-transparent border border-white/60 px-4 py-2 focus:outline-none focus:border-white"
            type="email"
            name="user_email"
            required
          />

          <label className="my-[2.5%]" htmlFor="cf-message">
            {tc('message')}
          </label>
          <textarea
            id="cf-message"
            className="rounded-xl bg-transparent border border-white/60 px-4 py-2 focus:outline-none focus:border-white"
            rows={5}
            name="message"
            required
          />

          <div className="flex flex-row items-center mt-8">
            <input
              id="cf-gdpr"
              type="checkbox"
              required
              className="rounded w-[25px] h-[25px] lg:h-[30px] accent-yellow-400"
            />
            <label className="text-left text-[16px] lg:text-[20px] ml-[15px]" htmlFor="cf-gdpr">
              {tc('gdpr')}
              <button
                type="button"
                onClick={() => setGdprInfoOpen((v) => !v)}
                className="underline"
              >
                {tc('gdprLink')}
              </button>
            </label>
          </div>

          {gdprInfoOpen && (
            <div className="mt-4 text-[14px] lg:text-[16px] space-y-2 opacity-80">
              <p>{tc('gdprInfo1')}</p>
              <p>{tc('gdprInfo2')}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="text-[20px] lg:text-[22.5px] lg:w-[33%] mx-auto mt-10 rounded-xl border border-white px-6 py-2 hover:text-black hover:bg-white transition-colors disabled:opacity-50"
          >
            {status === 'sending' ? '...' : tc('send')}
          </button>

          {status === 'success' && (
            <p className="text-green-300 text-sm text-center mt-4">{tc('success')}</p>
          )}
          {status === 'error' && (
            <p className="text-red-300 text-sm text-center mt-4">{tc('error')}</p>
          )}
        </form>
      )}
    </>
  );
}
