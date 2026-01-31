import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  // Use requestLocale if available, otherwise fallback to 'de'
  const locale = (await requestLocale) || 'de';

  return {
    locale,
    messages: (await import(`../../translations/${locale}.json`)).default,
  };
});
