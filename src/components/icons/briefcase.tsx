import type { IconProps } from '@/utils';

export default function Briefcase({ className = '', size = 24 }: IconProps) {
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
      <rect x="3" y="6" width="18" height="12" rx="2" ry="2" />
      <rect x="9.5" y="3" width="5" height="2.75" rx="0.65" ry="0.65" />
      <line x1="5" y1="11.5" x2="19" y2="11.5" />
    </svg>
  );
}
