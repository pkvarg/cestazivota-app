import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cesta Života',
  description: 'Uver pravde, buď oslobodený od hriechu a získaj večný život!',
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
