import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { SpeedInsights } from '@vercel/speed-insights/next';

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();

  return {
    title: 'Florian Kuehne Fullstack Developer',
    description: (messages as any).metadata?.description || 'Portfolio of Florian Kuehne',
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  // Inline script to set theme before React hydrates (prevents flash)
  const themeScript = `
    (function() {
      const stored = localStorage.getItem('theme-preference');
      let theme = stored;
      if (!theme) {
        theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      }
      document.documentElement.setAttribute('data-theme', theme);
    })();
  `;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
