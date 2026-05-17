import type { IconProps } from '@/utils';

export default function Moon({ className = '', size = 64 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255, 255, 200, 0.4)" />
          <stop offset="100%" stopColor="rgba(255, 255, 200, 0)" />
        </radialGradient>
        <radialGradient id="moonSurface" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#fffde7" />
          <stop offset="100%" stopColor="#e0d8a8" />
        </radialGradient>
      </defs>
      {/* Glow effect */}
      <circle cx="50" cy="50" r="48" fill="url(#moonGlow)" />
      {/* Moon body */}
      <circle cx="50" cy="50" r="35" fill="url(#moonSurface)" />
      {/* Craters */}
      <circle cx="38" cy="40" r="6" fill="#d4cca0" opacity="0.5" />
      <circle cx="55" cy="55" r="8" fill="#d4cca0" opacity="0.4" />
      <circle cx="62" cy="38" r="4" fill="#d4cca0" opacity="0.5" />
      <circle cx="42" cy="62" r="5" fill="#d4cca0" opacity="0.45" />
      <circle cx="30" cy="55" r="3" fill="#d4cca0" opacity="0.4" />
    </svg>
  );
}
