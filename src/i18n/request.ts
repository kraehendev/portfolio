import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { cookies, headers } from 'next/headers';
import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { loadMessages } from './loadMessages';
import { messageModules } from './messageModules';
import { resolveMessageModules } from './routeNamespaces';
import { routing, type Locale } from './routing';

const PATHNAME_HEADER = 'x-pathname';

async function resolveLocaleFromHeaders(): Promise<Locale> {
  const acceptLanguage = (await headers()).get('accept-language') ?? '';
  const languages = new Negotiator({
    headers: { 'accept-language': acceptLanguage },
  }).languages();

  return match(
    languages,
    [...routing.locales],
    routing.defaultLocale,
  ) as Locale;
}

export default getRequestConfig(async () => {
  const cookieLocale = (await cookies()).get('NEXT_LOCALE')?.value;
  const locale: Locale = hasLocale(routing.locales, cookieLocale)
    ? cookieLocale
    : await resolveLocaleFromHeaders();

  const pathname = (await headers()).get(PATHNAME_HEADER);
  const modules = pathname
    ? resolveMessageModules(pathname)
    : [...messageModules];

  return {
    locale,
    messages: await loadMessages(locale, modules),
  };
});
