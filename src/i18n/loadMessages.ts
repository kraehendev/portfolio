import type { Locale } from './routing';
import type { MessageModule } from './messageModules';

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function deepMerge(
  target: Record<string, unknown>,
  source: Record<string, unknown>,
): Record<string, unknown> {
  for (const [key, value] of Object.entries(source)) {
    if (isPlainObject(value) && isPlainObject(target[key])) {
      deepMerge(target[key], value);
    } else {
      target[key] = value;
    }
  }
  return target;
}

export async function loadMessages(
  locale: Locale,
  modules: readonly MessageModule[],
): Promise<Record<string, unknown>> {
  const messages: Record<string, unknown> = {};

  for (const moduleName of modules) {
    const moduleMessages = (
      await import(`../../translations/${locale}/${moduleName}.json`)
    ).default as Record<string, unknown>;
    deepMerge(messages, moduleMessages);
  }

  return messages;
}
