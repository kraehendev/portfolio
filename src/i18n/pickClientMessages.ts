/**
 * Top-level keys from merged JSON that client components may call via `useTranslations`.
 * `language` lives inside `navigation.json` but merges to a root `language` key.
 */
const CLIENT_MESSAGE_KEYS = [
  'common',
  'navigation',
  'language',
  'pwa',
  'footer',
  'metadata',
  'siteLogo',
  'welcome',
  'legalNotice',
  'privacyPolicy',
] as const;

export function pickClientMessages(
  messages: Record<string, unknown>,
): Record<string, unknown> {
  const picked: Record<string, unknown> = {};

  for (const key of CLIENT_MESSAGE_KEYS) {
    if (key in messages) {
      picked[key] = messages[key];
    }
  }

  return picked;
}
