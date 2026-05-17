import type { IconProps as BaseIconProps } from '@/utils';
import {
  iconRegistry,
  type IconRegistryKey,
} from '@/components/icons/iconRegistry';

export type IconProps = BaseIconProps & {
  /** Subfolder under `src/components/icons` (e.g. `"logo"`). Omit for root icons. */
  path?: string;
  /** File basename without `.tsx` (e.g. `"burger"` or `"react"` when `path` is `"logo"`). */
  slug: string;
};

function resolveRegistryKey(path: string | undefined, slug: string): IconRegistryKey {
  const segment = path?.replace(/^\/+|\/+$/g, '') ?? '';
  const key = (segment ? `${segment}/${slug}` : slug) as IconRegistryKey;
  if (!(key in iconRegistry)) {
    throw new Error(
      `Unknown icon "${key}". Use path + slug relative to src/components/icons (e.g. path="logo", slug="react").`,
    );
  }
  return key;
}

export function Icon({ path, slug, className, size }: IconProps) {
  const key = resolveRegistryKey(path, slug);
  const Cmp = iconRegistry[key];
  return <Cmp className={className} size={size} />;
}
