import { useId, type ReactNode } from 'react';
import type { IconProps } from '@/utils';

const VIEWBOX_WIDTH = 458.329;
/** Flip inside SVG so long contrails are not clipped by CSS scale on the wrapper. */
const MIRROR_TRANSFORM = `translate(${VIEWBOX_WIDTH} 0) scale(-1 1)`;

const BODY_PATH =
  'M458.329,270.124c0,4.09-2.01,8.18-6.04,10.55c-2.38,1.4-4.83,2.64-7.35,3.73c-2.96,1.28-6,2.35-9.1,3.2c-5.73,1.56-11.68,2.36-17.68,2.36h-254.12c-10.98,0-21.91-1.5-32.48-4.46l-97.95-27.4c-11.51-3.22-14-18.42-4.12-25.14l-18-80h26l68,81h311.28c7.66,0,14.92,3.69,19.2,10c0.13,0.16,0.23,0.32,0.34,0.49c2.01,3.14,4.4,6,7.09,8.54c0.72,0.68,1.47,1.34,2.24,1.97c0.05,0.05,0.1,0.09,0.15,0.13c1.99,1.63,4.12,3.1,6.37,4.39C456.269,261.834,458.329,265.974,458.329,270.124z';

/** Cockpit (nose) stays unstripe on the right. */
const FUSELAGE_STRIPE_X_MAX = 432;
/** Stripe width equals gap width (50/50 body / stripe). */
const FUSELAGE_STRIPE_UNIT = 22;

type AirplaneProps = IconProps & {
  accentColor?: string;
  logoColor?: string;
  logoBorderColor?: string;
  verticalStripes?: boolean;
  stripeColor?: string;
  showContrail?: boolean;
  /** Face left (RTL flight). Mirror inside SVG — do not use CSS scaleX on the wrapper. */
  mirrored?: boolean;
};

type ContrailProps = {
  gradientIds: [string, string, string];
  /** Trail extends +x behind a mirrored (left-facing) plane. */
  behindMirrored?: boolean;
};

const CONTRAIL_LENGTH = 5500;
const CONTRAIL_ANCHORS = {
  primary: 112,
  secondary: 108,
  tertiary: 100,
} as const;

/** Wispy exhaust trails behind the tail (SVG +x is the nose). */
function Contrails({ gradientIds, behindMirrored = false }: ContrailProps) {
  const [primaryId, secondaryId, tertiaryId] = gradientIds;
  const third = CONTRAIL_LENGTH / 3;
  const twoThirds = (CONTRAIL_LENGTH * 2) / 3;

  const primaryStart = behindMirrored
    ? VIEWBOX_WIDTH - CONTRAIL_ANCHORS.primary
    : CONTRAIL_ANCHORS.primary;
  const secondaryStart = behindMirrored
    ? VIEWBOX_WIDTH - CONTRAIL_ANCHORS.secondary
    : CONTRAIL_ANCHORS.secondary;
  const tertiaryStart = behindMirrored
    ? VIEWBOX_WIDTH - CONTRAIL_ANCHORS.tertiary
    : CONTRAIL_ANCHORS.tertiary;

  const primaryEnd = behindMirrored
    ? primaryStart + CONTRAIL_LENGTH
    : primaryStart - CONTRAIL_LENGTH;
  const secondaryEnd = behindMirrored
    ? secondaryStart + CONTRAIL_LENGTH
    : secondaryStart - CONTRAIL_LENGTH;
  const tertiaryEnd = behindMirrored
    ? tertiaryStart + CONTRAIL_LENGTH
    : tertiaryStart - CONTRAIL_LENGTH;

  const curve = (start: number, end: number, y: number, yMid: number) =>
    behindMirrored
      ? `M ${start} ${y} C ${start + third} ${yMid}, ${start + twoThirds} ${yMid - 0.5}, ${end} ${y - 0.5}`
      : `M ${start} ${y} C ${start - third} ${yMid}, ${start - twoThirds} ${yMid - 0.5}, ${end} ${y - 0.5}`;

  const gradFrom = behindMirrored ? '0' : '1';
  const gradTo = behindMirrored ? '1' : '0';

  const transformOrigin = behindMirrored
    ? `${VIEWBOX_WIDTH - CONTRAIL_ANCHORS.primary}px 270px`
    : `${CONTRAIL_ANCHORS.primary}px 270px`;

  return (
    <g
      aria-hidden="true"
      style={{
        color: 'var(--foreground)',
        transform: 'scaleX(var(--contrail-scale, 1))',
        transformOrigin,
      }}
    >
      <defs>
        <linearGradient
          id={primaryId}
          gradientUnits="objectBoundingBox"
          x1={gradFrom}
          y1="0.5"
          x2={gradTo}
          y2="0.5"
        >
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.38" />
          <stop offset="22%" stopColor="currentColor" stopOpacity="0.14" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={secondaryId}
          gradientUnits="objectBoundingBox"
          x1={gradFrom}
          y1="0.5"
          x2={gradTo}
          y2="0.5"
        >
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.28" />
          <stop offset="24%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={tertiaryId}
          gradientUnits="objectBoundingBox"
          x1={gradFrom}
          y1="0.5"
          x2={gradTo}
          y2="0.5"
        >
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
          <stop offset="26%" stopColor="currentColor" stopOpacity="0.08" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={curve(primaryStart, primaryEnd, 270, 269.5)}
        fill="none"
        stroke={`url(#${primaryId})`}
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d={curve(secondaryStart, secondaryEnd, 278, 277.5)}
        fill="none"
        stroke={`url(#${secondaryId})`}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d={curve(tertiaryStart, tertiaryEnd, 262, 261.5)}
        fill="none"
        stroke={`url(#${tertiaryId})`}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.85"
      />
    </g>
  );
}

function buildFuselageStripes(stripeColor: string) {
  const stripes: ReactNode[] = [];
  let x = FUSELAGE_STRIPE_UNIT;

  while (x + FUSELAGE_STRIPE_UNIT <= FUSELAGE_STRIPE_X_MAX) {
    stripes.push(
      <rect
        key={x}
        x={x}
        y={0}
        width={FUSELAGE_STRIPE_UNIT}
        height={458.329}
        style={{ fill: stripeColor }}
      />,
    );
    x += FUSELAGE_STRIPE_UNIT * 2;
  }

  return stripes;
}

export default function Airplane({
  className = '',
  size = 16,
  accentColor = '#808080',
  logoColor,
  logoBorderColor,
  verticalStripes = false,
  stripeColor = '#000000',
  showContrail = false,
  mirrored = false,
}: AirplaneProps) {
  const tailClipId = useId();
  const bodyClipId = useId();
  const contrailGradBase = useId();
  const resolvedLogoColor = logoColor ?? accentColor;
  const contrailGradientIds = [
    `${contrailGradBase}-primary`,
    `${contrailGradBase}-secondary`,
    `${contrailGradBase}-tertiary`,
  ] as [string, string, string];

  const body = (
    <>
      <path style={{ fill: 'currentColor' }} d={BODY_PATH} />
      {/* Tail Section */}
      <path
        style={{ fill: accentColor }}
        clipPath={`url(#${tailClipId})`}
        d={BODY_PATH}
      />
      {verticalStripes && (
        <g clipPath={`url(#${bodyClipId})`}>
          {buildFuselageStripes(stripeColor)}
        </g>
      )}
      {/* Windows */}
      <circle cx="375.829" cy="248.964" r="5.3" style={{ fill: '#b5b5b5' }} />
      <circle cx="351.679" cy="248.964" r="5.3" style={{ fill: '#b5b5b5' }} />
      <circle cx="327.529" cy="248.964" r="5.3" style={{ fill: '#b5b5b5' }} />
      <circle cx="303.379" cy="248.964" r="5.3" style={{ fill: '#b5b5b5' }} />
      <circle cx="279.229" cy="248.964" r="5.3" style={{ fill: '#b5b5b5' }} />
      <circle cx="255.089" cy="248.964" r="5.3" style={{ fill: '#b5b5b5' }} />
      <circle cx="230.939" cy="248.964" r="5.3" style={{ fill: '#b5b5b5' }} />
      <circle cx="206.789" cy="248.964" r="5.3" style={{ fill: '#b5b5b5' }} />
      <circle cx="182.639" cy="248.964" r="5.3" style={{ fill: '#b5b5b5' }} />
      <circle cx="158.489" cy="248.964" r="5.3" style={{ fill: '#b5b5b5' }} />

      {/* Tailfin logo (on gray stabilizer, outside accent clip) */}
      <circle
        cx="42.5"
        cy="195"
        r="16.5"
        vectorEffect={logoBorderColor ? 'non-scaling-stroke' : undefined}
        style={{
          fill: resolvedLogoColor,
          ...(logoBorderColor && {
            stroke: logoBorderColor,
            strokeWidth: 0.5,
          }),
        }}
      />

      {/* Engine */}
      <path
        style={{ fill: accentColor }}
        d="M277.742,310.365h44c2.572,0,4.657-2.085,4.657-4.657v-18c0-2.572-2.085-4.657-4.657-4.657
        h-44c-8.699,0-15.751,7.052-15.751,15.751l0,0C261.992,303.313,269.044,310.365,277.742,310.365z"
      />
      {/* Elevator */}
      <path
        style={{ fill: '#b5b5b5' }}
        d="M67.992,238.464H7.5c-4.142,0-7.5-3.358-7.5-7.5s3.358-7.5,7.5-7.5h60.492
        c4.142,0,7.5,3.358,7.5,7.5S72.134,238.464,67.992,238.464z"
      />
      {/* Wing */}
      <path
        style={{ fill: '#b5b5b5' }}
        d="M312.492,287.364h-84.667c-4.142,0-7.5-3.358-7.5-7.5s3.358-7.5,7.5-7.5h84.667
        c4.142,0,7.5,3.358,7.5,7.5S316.634,287.364,312.492,287.364z"
      />
      {/* Winglet */}
      <path style={{ fill: accentColor }} d="M250,284 L225,284 L215,250 Z" />
      {/* Cockpit */}
      <path
        style={{ fill: '#000000' }}
        d="M445.639,254.964h-11.15c-6.07,0-11-4.92-11-11h12.48c0.13,0.16,0.23,0.32,0.34,0.49
        c2.01,3.14,4.4,6,7.09,8.54C444.119,253.674,444.869,254.334,445.639,254.964z"
      />
      {/* Nose */}
      <path
        style={{ fill: '#b5b5b5' }}
        d="M458.329,270.124c0,4.09-2.01,8.18-6.04,10.55c-2.38,1.4-4.83,2.64-7.35,3.73c-3.81-3.57-6.19-8.65-6.19-14.28c0-6.04,2.74-11.44,7.04-15.03c1.99,1.63,4.12,3.1,6.37,4.39C456.269,261.834,458.329,265.974,458.329,270.124z"
      />
    </>
  );

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_WIDTH}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      overflow="visible"
      style={{ color: 'var(--airplane-body)', overflow: 'visible' }}
    >
      <defs>
        <clipPath id={tailClipId}>
          <polygon points="0,100 0,100 160,290 0,500" />
        </clipPath>
        <clipPath id={bodyClipId}>
          <path d={BODY_PATH} />
        </clipPath>
      </defs>
      {showContrail && (
        <Contrails
          gradientIds={contrailGradientIds}
          behindMirrored={mirrored}
        />
      )}
      {mirrored ? <g transform={MIRROR_TRANSFORM}>{body}</g> : body}
    </svg>
  );
}
