type AirplaneFuselageProps = {
  className?: string;
  width?: number | string;
  height?: number | string;
};

export default function AirplaneFuselage({
  className = '',
  width = 800,
  height = 250,
}: AirplaneFuselageProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 800 250"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Gradient for lighting effect (bottom to top) */}
        <linearGradient id="fuselageGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#bbbbbb', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Main fuselage body - full width rectangle */}
      <rect x="0" y="0" width="800" height="250" fill="url(#fuselageGradient)" />

      {/* Plane door on the left side */}
      <g id="door">
        {/* Frame base (light grey/silver) */}
        <rect x="20" y="50" width="90" height="180" rx="20" ry="20" fill="#d5d5d5" />

        {/* Inner glass area (lighter grey, translucent) */}
        <rect
          x="26"
          y="58"
          width="78"
          height="164"
          rx="18"
          ry="18"
          fill="#f0f0f0"
          opacity="0.85"
        />

        {/* Frame inner border */}
        <rect
          x="26"
          y="58"
          width="78"
          height="164"
          rx="18"
          ry="18"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1"
        />

        {/* Frame outer border */}
        <rect
          x="20"
          y="50"
          width="90"
          height="180"
          rx="20"
          ry="20"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
        />

        {/* Small window in the middle of the door */}
        <circle cx="65" cy="140" r="10" fill="#87ceeb" opacity="0.7" />
        <circle
          cx="65"
          cy="140"
          r="10"
          fill="none"
          stroke="#5a9fd4"
          strokeWidth="1.5"
        />

        {/* Latch/handle on the right side (metallic) */}
        <circle cx="98" cy="200" r="4.5" fill="#808080" />
        <circle cx="98" cy="200" r="3" fill="#a0a0a0" />
        <circle cx="98" cy="200" r="1.5" fill="#c0c0c0" />
      </g>

      {/* Windows row (multiple windows) */}
      <g id="windows">
        {/* Window 1 */}
        <ellipse cx="170" cy="120" rx="16" ry="20" fill="#87ceeb" opacity="0.7" />
        <ellipse
          cx="170"
          cy="120"
          rx="16"
          ry="20"
          fill="none"
          stroke="#5a9fd4"
          strokeWidth="1.5"
        />

        {/* Window 2 */}
        <ellipse cx="220" cy="120" rx="16" ry="20" fill="#87ceeb" opacity="0.7" />
        <ellipse
          cx="220"
          cy="120"
          rx="16"
          ry="20"
          fill="none"
          stroke="#5a9fd4"
          strokeWidth="1.5"
        />

        {/* Window 3 */}
        <ellipse cx="270" cy="120" rx="16" ry="20" fill="#87ceeb" opacity="0.7" />
        <ellipse
          cx="270"
          cy="120"
          rx="16"
          ry="20"
          fill="none"
          stroke="#5a9fd4"
          strokeWidth="1.5"
        />

        {/* Window 4 */}
        <ellipse cx="320" cy="120" rx="16" ry="20" fill="#87ceeb" opacity="0.7" />
        <ellipse
          cx="320"
          cy="120"
          rx="16"
          ry="20"
          fill="none"
          stroke="#5a9fd4"
          strokeWidth="1.5"
        />

        {/* Window 5 */}
        <ellipse cx="370" cy="120" rx="16" ry="20" fill="#87ceeb" opacity="0.7" />
        <ellipse
          cx="370"
          cy="120"
          rx="16"
          ry="20"
          fill="none"
          stroke="#5a9fd4"
          strokeWidth="1.5"
        />

        {/* Window 6 */}
        <ellipse cx="420" cy="120" rx="16" ry="20" fill="#87ceeb" opacity="0.7" />
        <ellipse
          cx="420"
          cy="120"
          rx="16"
          ry="20"
          fill="none"
          stroke="#5a9fd4"
          strokeWidth="1.5"
        />

        {/* Window 7 */}
        <ellipse cx="470" cy="120" rx="16" ry="20" fill="#87ceeb" opacity="0.7" />
        <ellipse
          cx="470"
          cy="120"
          rx="16"
          ry="20"
          fill="none"
          stroke="#5a9fd4"
          strokeWidth="1.5"
        />

        {/* Window 8 */}
        <ellipse cx="520" cy="120" rx="16" ry="20" fill="#87ceeb" opacity="0.7" />
        <ellipse
          cx="520"
          cy="120"
          rx="16"
          ry="20"
          fill="none"
          stroke="#5a9fd4"
          strokeWidth="1.5"
        />

        {/* Window 9 */}
        <ellipse cx="570" cy="120" rx="16" ry="20" fill="#87ceeb" opacity="0.7" />
        <ellipse
          cx="570"
          cy="120"
          rx="16"
          ry="20"
          fill="none"
          stroke="#5a9fd4"
          strokeWidth="1.5"
        />

        {/* Window 10 */}
        <ellipse cx="620" cy="120" rx="16" ry="20" fill="#87ceeb" opacity="0.7" />
        <ellipse
          cx="620"
          cy="120"
          rx="16"
          ry="20"
          fill="none"
          stroke="#5a9fd4"
          strokeWidth="1.5"
        />

        {/* Window 11 */}
        <ellipse cx="670" cy="120" rx="16" ry="20" fill="#87ceeb" opacity="0.7" />
        <ellipse
          cx="670"
          cy="120"
          rx="16"
          ry="20"
          fill="none"
          stroke="#5a9fd4"
          strokeWidth="1.5"
        />

        {/* Window 12 */}
        <ellipse cx="720" cy="120" rx="16" ry="20" fill="#87ceeb" opacity="0.7" />
        <ellipse
          cx="720"
          cy="120"
          rx="16"
          ry="20"
          fill="none"
          stroke="#5a9fd4"
          strokeWidth="1.5"
        />

        {/* Window 13 */}
        <ellipse cx="770" cy="120" rx="16" ry="20" fill="#87ceeb" opacity="0.7" />
        <ellipse
          cx="770"
          cy="120"
          rx="16"
          ry="20"
          fill="none"
          stroke="#5a9fd4"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}
