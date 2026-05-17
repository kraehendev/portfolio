import type { IconProps } from '@/utils';

/** German flag (3:2) */
export default function FlagDe({ className = '', size = 20 }: IconProps) {
  const height = Math.round((size * 2) / 3);

  return (
    <svg
      className={className}
      width={size}
      height={height}
      viewBox="0 0 5 3"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="5" height="1" y="0" fill="#000000" />
      <rect width="5" height="1" y="1" fill="#DD0000" />
      <rect width="5" height="1" y="2" fill="#FFCE00" />
    </svg>
  );
}
