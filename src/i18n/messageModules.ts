/** JSON basename under `translations/{locale}/` (without `.json`). */
export const messageModules = [
  'common',
  'navigation',
  'home',
  'hero',
  'about',
  'contact',
  'techstack',
  'career',
  'privacy',
  'legal',
  'pwa',
  'notFound',
  'manifest',
] as const;

export type MessageModule = (typeof messageModules)[number];

/**
 * Loaded on every page (layout shell, metadata, 404).
 * `notFound` — Next.js not-found / error boundaries in dev and prod.
 */
export const globalMessageModules = [
  'common',
  'navigation',
  'notFound',
] as const satisfies readonly MessageModule[];
