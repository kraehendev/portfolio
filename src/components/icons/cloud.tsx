import { useId } from 'react';
import type { IconProps } from '@/utils';

export default function Cloud({ className = '', size = 64 }: IconProps) {
  const bodyGradientId = useId();

  return (
    <svg
      className={className}
      width={size}
      height={size * 0.6}
      viewBox="0 0 100 60"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: 'var(--cloud-color, currentColor)' }}
    >
      <defs>
        <linearGradient id={bodyGradientId} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
          <stop offset="55%" stopColor="currentColor" stopOpacity="0.82" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.68" />
        </linearGradient>
      </defs>
      {/* Base volume */}
      <path
        fill={`url(#${bodyGradientId})`}
        d="M85 35c0-8.284-6.716-15-15-15-1.47 0-2.89.212-4.234.607C63.037 12.075 54.34 6 44 6c-13.255 0-24 10.745-24 24 0 .69.029 1.373.086 2.048C11.34 33.886 5 41.355 5 50c0 5.523 4.477 10 10 10h60c11.046 0 20-8.954 20-20 0-3.167-.738-6.163-2.052-8.828A14.95 14.95 0 0085 35z"
      />
      {/* Underbelly depth */}
      <ellipse
        fill="currentColor"
        cx="30"
        cy="48"
        rx="12"
        ry="8"
        opacity="0.55"
      />
      <ellipse
        fill="currentColor"
        cx="55"
        cy="50"
        rx="15"
        ry="7"
        opacity="0.45"
      />
      <ellipse
        fill="currentColor"
        cx="72"
        cy="47"
        rx="10"
        ry="6"
        opacity="0.4"
      />
      {/* Top puff highlights */}
      <ellipse
        fill="currentColor"
        cx="26"
        cy="24"
        rx="9"
        ry="7"
        opacity="0.35"
      />
      <ellipse
        fill="currentColor"
        cx="44"
        cy="16"
        rx="11"
        ry="8"
        opacity="0.3"
      />
      <ellipse
        fill="currentColor"
        cx="64"
        cy="22"
        rx="8"
        ry="6"
        opacity="0.32"
      />
      {/* Rim highlights */}
      <ellipse
        fill="currentColor"
        cx="18"
        cy="38"
        rx="5"
        ry="3.5"
        opacity="0.28"
      />
      <ellipse
        fill="currentColor"
        cx="78"
        cy="34"
        rx="6"
        ry="3.5"
        opacity="0.25"
      />
      <circle fill="currentColor" cx="52" cy="28" r="3.5" opacity="0.22" />
    </svg>
  );
}
