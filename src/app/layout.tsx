import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import './globals.css';

const siteUrl = 'https://cestazivota.sk';
const ogImage = `${siteUrl}/og-image.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Cesta Života — Uver pravde a získaj večný život',
    template: '%s — Cesta Života',
  },
  description:
    'Uver pravde, buď oslobodený od hriechu a získaj večný život. Boh je láska a poslal svojho Syna, aby si mohol mať s Ním osobný vzťah.',
  keywords: [
    'Cesta Života',
    'evanjelium',
    'Ježiš Kristus',
    'spasenie',
    'Božie Slovo',
    'viera',
    'kresťanstvo',
    'Biblia',
    'pokánie',
    'krst',
  ],
  alternates: {
    canonical: '/',
    languages: {
      sk: '/sk',
      cs: '/cs',
      en: '/en',
    },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Cesta Života',
    title: 'Cesta Života — Uver pravde a získaj večný život',
    description:
      'Uver pravde, buď oslobodený od hriechu a získaj večný život. Boh ťa miluje a pozýva ťa do osobného vzťahu so Sebou.',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Cesta Života — Uver pravde',
      },
    ],
    locale: 'sk_SK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cesta Života — Uver pravde a získaj večný život',
    description:
      'Uver pravde, buď oslobodený od hriechu a získaj večný život.',
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
