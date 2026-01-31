import type { IconProps } from '@/utils';

export default function Cloud({ className = '', size = 64 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size * 0.6}
      viewBox="0 0 100 60"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: 'var(--cloud-color)' }}
    >
      <path
        fill="currentColor"
        d="M85 35c0-8.284-6.716-15-15-15-1.47 0-2.89.212-4.234.607C63.037 12.075 54.34 6 44 6c-13.255 0-24 10.745-24 24 0 .69.029 1.373.086 2.048C11.34 33.886 5 41.355 5 50c0 5.523 4.477 10 10 10h60c11.046 0 20-8.954 20-20 0-3.167-.738-6.163-2.052-8.828A14.95 14.95 0 0085 35z"
      />
      <ellipse
        fill="currentColor"
        cx="30"
        cy="48"
        rx="12"
        ry="8"
        opacity="0.6"
      />
      <ellipse
        fill="currentColor"
        cx="55"
        cy="50"
        rx="15"
        ry="7"
        opacity="0.5"
      />
    </svg>
  );
}
