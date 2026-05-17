import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import SiteLogo from '@/components/layout/siteLogo';
import DesktopSidebarNav from '@/components/layout/desktopSidebarNav';
import LanguageSwitcher from '@/components/layout/languageSwitcher';
import SiteLayout from '@/components/layout/siteLayout';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { pickClientMessages } from '@/i18n/pickClientMessages';

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const metadata = (messages as { metadata?: { description?: string; appName?: string; defaultTitle?: string } }).metadata;
  const appName = metadata?.appName ?? 'Florian Kuehne';
  const defaultTitle = metadata?.defaultTitle ?? `${appName} — Fullstack Developer`;
  const description = metadata?.description ?? 'Portfolio of Florian Kuehne';

  return {
    applicationName: appName,
    title: {
      default: defaultTitle,
      template: `%s | ${appName}`,
    },
    description,
    manifest: '/manifest.webmanifest',
    appleWebApp: {
      capable: true,
      statusBarStyle: 'black-translucent',
      title: appName,
    },
    formatDetection: {
      telephone: false,
    },
    icons: {
      icon: [
        { url: '/icons/icon.svg', type: 'image/svg+xml' },
        { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    },
    openGraph: {
      type: 'website',
      siteName: appName,
      title: defaultTitle,
      description,
    },
    twitter: {
      card: 'summary',
      title: defaultTitle,
      description,
    },
  };
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  colorScheme: 'dark',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = pickClientMessages(
    (await getMessages()) as Record<string, unknown>,
  );

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SiteLayout
            sidebar={
              <>
                <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[var(--elevated-surface-border)] pb-3">
                  <SiteLogo />
                  <LanguageSwitcher />
                </div>
                <DesktopSidebarNav />
                <Footer className="mt-auto" />
              </>
            }
          >
            <Header />
            <main className="flex min-h-0 flex-1 flex-col">{children}</main>
          </SiteLayout>
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
