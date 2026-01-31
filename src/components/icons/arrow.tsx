import type { IconProps } from '@/utils';

export default function Arrow({ className = '', size = 16 }: IconProps) {
  return (
  <svg
    className={className}
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 12h13"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 5l7 7-7 7"
    />
  </svg>
  );
}
