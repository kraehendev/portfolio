import type { IconProps } from '@/utils';

export default function Website({ className = '', size = 16 }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
    >
      // Browser window
      <rect
      x="6"
      y="10"
      width="52"
      height="44"
      rx="6"
      stroke="currentColor"
      strokeWidth="3"
    />
    <line
      x1="6"
      y1="18"
      x2="58"
      y2="18"
      stroke="currentColor"
      strokeWidth="3"
    />
    // Text lines
    <line
      x1="16"
      y1="28"
      x2="48"
      y2="28"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      x1="16"
      y1="36"
      x2="44"
      y2="36"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      x1="16"
      y1="44"
      x2="40"
      y2="44"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
  );
}
