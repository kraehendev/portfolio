import type { IconProps } from '@/utils';

export default function Home({ className = '', size = 24 }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9.5 12 3l9 6.5" />
      <path d="M5 10v11h14V10" />
      <path d="M10 21v-6h4v6" />
    </svg>
  );
}
