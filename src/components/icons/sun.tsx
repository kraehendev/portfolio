import type { IconProps } from '@/utils';

export default function Sun({ className = '', size = 64 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255, 220, 100, 0.6)" />
          <stop offset="60%" stopColor="rgba(255, 200, 50, 0.2)" />
          <stop offset="100%" stopColor="rgba(255, 180, 0, 0)" />
        </radialGradient>
        <radialGradient id="sunCore" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fff9c4" />
          <stop offset="50%" stopColor="#ffeb3b" />
          <stop offset="100%" stopColor="#ffc107" />
        </radialGradient>
      </defs>
      {/* Outer glow */}
      <circle cx="50" cy="50" r="48" fill="url(#sunGlow)" />
      {/* Sun rays */}
      <g fill="#ffd54f" opacity="0.8">
        <rect x="48" y="5" width="4" height="12" rx="2" />
        <rect x="48" y="83" width="4" height="12" rx="2" />
        <rect x="5" y="48" width="12" height="4" rx="2" />
        <rect x="83" y="48" width="12" height="4" rx="2" />
        <rect
          x="18"
          y="18"
          width="4"
          height="12"
          rx="2"
          transform="rotate(-45 20 24)"
        />
        <rect
          x="78"
          y="18"
          width="4"
          height="12"
          rx="2"
          transform="rotate(45 80 24)"
        />
        <rect
          x="18"
          y="70"
          width="4"
          height="12"
          rx="2"
          transform="rotate(45 20 76)"
        />
        <rect
          x="78"
          y="70"
          width="4"
          height="12"
          rx="2"
          transform="rotate(-45 80 76)"
        />
      </g>
      {/* Sun body */}
      <circle cx="50" cy="50" r="25" fill="url(#sunCore)" />
      {/* Inner highlight */}
      <circle cx="42" cy="42" r="8" fill="#fffde7" opacity="0.6" />
    </svg>
  );
}
