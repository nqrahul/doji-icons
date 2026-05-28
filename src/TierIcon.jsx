"use client";

import { getTierTooltip } from "./tierMeta.js";

const SIZE_PX = { sm: 16, md: 40, lg: 56 };

function ShoshinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fill="none" aria-hidden>
      <line x1="28" y1="8" x2="28" y2="44" stroke="#8A8A8A" strokeWidth="3" strokeLinecap="round" />
      <path d="M26 8 L28 5 L30 8" fill="#8A8A8A" />
      <rect x="25" y="42" width="6" height="3" rx="0.5" fill="#6E6E6E" />
    </svg>
  );
}

function MinaraiIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fill="none" aria-hidden>
      <path d="M27 8 L29 8 L29.5 36 L28 39 L26.5 36 Z" fill="#B8B8B8" />
      <line x1="28" y1="9" x2="28.5" y2="36" stroke="#E0E0E0" strokeWidth="0.8" strokeLinecap="round" opacity="0.9" />
      <rect x="22" y="38" width="12" height="2.5" rx="1" fill="#A0A0A0" />
      <line x1="28" y1="40.5" x2="28" y2="47" stroke="#909090" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function ShugyoshaIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fill="none" aria-hidden>
      <path d="M26.5 7 L29.5 7 L30 35 L28 39 L26 35 Z" fill="#9FB8CC" />
      <line x1="27.5" y1="8" x2="28.5" y2="35" stroke="#D6E8F4" strokeWidth="1" strokeLinecap="round" opacity="0.85" />
      <path d="M26.5 30 Q28 27 29.5 30 Q28 33 26.5 30" stroke="#B8D0E0" strokeWidth="0.7" fill="none" opacity="0.6" />
      <ellipse cx="28" cy="38" rx="6.5" ry="1.8" fill="#7A9AB0" stroke="#5E7A8E" strokeWidth="0.5" />
      <rect x="26" y="39.5" width="4" height="8" rx="1" fill="#6A8A9E" />
      <line x1="25.8" y1="42" x2="30.2" y2="42" stroke="#4E6A7E" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="25.8" y1="44.5" x2="30.2" y2="44.5" stroke="#4E6A7E" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

function DoshiIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fill="none" aria-hidden>
      <path d="M26 6 L30 6 L30.5 34 L28 38.5 L25.5 34 Z" fill="#2C3E6B" />
      <line x1="27" y1="7" x2="28.2" y2="34" stroke="#4A5E8B" strokeWidth="1.1" strokeLinecap="round" opacity="0.7" />
      <line x1="30.2" y1="7" x2="30.4" y2="33" stroke="#1A2A4A" strokeWidth="0.6" opacity="0.5" />
      <path d="M26 28 Q28 25 30 28 Q28 31 26 28" stroke="#3A5080" strokeWidth="0.8" fill="none" opacity="0.8" />
      <ellipse cx="28" cy="38" rx="7.5" ry="2.2" fill="#1E2E50" stroke="#2C3E6B" strokeWidth="0.8" />
      <line x1="28" y1="35.8" x2="28" y2="40.2" stroke="#3A5080" strokeWidth="0.8" opacity="0.5" />
      <rect x="25.5" y="40" width="5" height="9" rx="1.2" fill="#1A2840" />
      <line x1="25.2" y1="42.5" x2="30.8" y2="42.5" stroke="#2C3E6B" strokeWidth="1" strokeLinecap="round" />
      <line x1="25.2" y1="45" x2="30.8" y2="45" stroke="#2C3E6B" strokeWidth="1" strokeLinecap="round" />
      <line x1="25.2" y1="47.5" x2="30.8" y2="47.5" stroke="#2C3E6B" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function SenseiIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fill="none" aria-hidden>
      <path d="M25.5 5.5 L30.5 5.5 L30.5 5 L28 4 L25.5 5 Z" fill="#9AAAB8" />
      <path d="M25.5 5.5 L30.5 5.5 L31 33.5 L28 38 L25 33.5 Z" fill="#7A90A0" />
      <line x1="27" y1="6.5" x2="28.5" y2="33" stroke="#C8D8E4" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1="30.5" y1="7" x2="30.8" y2="32" stroke="#506070" strokeWidth="0.6" opacity="0.5" />
      <path d="M25.5 27 Q28 23 30.5 27 Q28 30 25.5 27" stroke="#A0B8C8" strokeWidth="0.9" fill="none" opacity="0.8" />
      <path d="M26 22 Q28 20 30 22" stroke="#A0B8C8" strokeWidth="0.6" fill="none" opacity="0.4" />
      <ellipse cx="28" cy="37.5" rx="8.5" ry="2.5" fill="#CD7F32" stroke="#A06020" strokeWidth="0.8" />
      <ellipse cx="28" cy="37.5" rx="5" ry="1.3" fill="none" stroke="#E8A050" strokeWidth="0.5" opacity="0.6" />
      <ellipse cx="28" cy="35.8" rx="3.5" ry="0.7" fill="#B87030" />
      <ellipse cx="28" cy="39.2" rx="3.5" ry="0.7" fill="#B87030" />
      <rect x="25" y="40" width="6" height="10" rx="1.5" fill="#4A3020" />
      <line x1="24.7" y1="42" x2="31.3" y2="42" stroke="#CD7F32" strokeWidth="1" strokeLinecap="round" />
      <line x1="24.7" y1="44.5" x2="31.3" y2="44.5" stroke="#CD7F32" strokeWidth="1" strokeLinecap="round" />
      <line x1="24.7" y1="47" x2="31.3" y2="47" stroke="#CD7F32" strokeWidth="1" strokeLinecap="round" />
      <ellipse cx="28" cy="50.5" rx="3.5" ry="1.5" fill="#CD7F32" stroke="#A06020" strokeWidth="0.5" />
    </svg>
  );
}

function HanshiIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fill="none" aria-hidden>
      <path d="M25 5 L31 5 L31 4.5 L28 3.5 L25 4.5 Z" fill="#606878" />
      <path d="M25 5 L31 5 L31.5 33 L28 38 L24.5 33 Z" fill="#484E5C" />
      <line x1="27.2" y1="7" x2="27.5" y2="31" stroke="#303540" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="29" y1="6" x2="30" y2="30" stroke="#8898A8" strokeWidth="1.3" strokeLinecap="round" opacity="0.55" />
      <path d="M25 26 Q28 22 31 26 Q28 29 25 26" stroke="#C0C0C0" strokeWidth="1" fill="none" opacity="0.9" />
      <path d="M25.5 20 Q28 17 30.5 20" stroke="#C0C0C0" strokeWidth="0.7" fill="none" opacity="0.5" />
      <path d="M26 14 Q28 12 30 14" stroke="#C0C0C0" strokeWidth="0.5" fill="none" opacity="0.3" />
      <ellipse cx="28" cy="37.5" rx="9" ry="2.8" fill="#C0C0C0" stroke="#909090" strokeWidth="0.8" />
      <ellipse cx="28" cy="37.5" rx="6" ry="1.6" fill="none" stroke="#E0E0E0" strokeWidth="0.7" />
      <ellipse cx="28" cy="37.5" rx="3" ry="0.9" fill="none" stroke="#E0E0E0" strokeWidth="0.5" opacity="0.6" />
      <ellipse cx="28" cy="35.8" rx="4" ry="0.8" fill="#B0B0B0" />
      <ellipse cx="28" cy="39.2" rx="4" ry="0.8" fill="#B0B0B0" />
      <rect x="24.5" y="40" width="7" height="11" rx="1.5" fill="#382820" />
      <line x1="24.2" y1="42" x2="31.8" y2="42" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="24.2" y1="44" x2="31.8" y2="44" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="24.2" y1="46" x2="31.8" y2="46" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="24.2" y1="48" x2="31.8" y2="48" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
      <ellipse cx="28" cy="51.5" rx="4" ry="1.8" fill="#C0C0C0" stroke="#909090" strokeWidth="0.5" />
    </svg>
  );
}

function KenseiIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fill="none" aria-hidden>
      <path d="M24.5 5 L31.5 5 L31.5 4 L28 3 L24.5 4 Z" fill="#2A2A2A" />
      <path d="M24.5 5 L31.5 5 L32 33 L28 38 L24 33 Z" fill="#1A1A1A" />
      <line x1="28" y1="5.5" x2="28" y2="32" stroke="#C8A030" strokeWidth="0.9" strokeLinecap="round" opacity="0.85" />
      <line x1="31.8" y1="6" x2="31.6" y2="31" stroke="#C8A030" strokeWidth="0.6" strokeLinecap="round" opacity="0.5" />
      <path d="M24.5 27 Q28 22 31.5 27 Q28 31 24.5 27" stroke="#D4A830" strokeWidth="1.2" fill="none" />
      <path d="M25 21 Q28 18 31 21 Q28 24 25 21" stroke="#C09020" strokeWidth="0.9" fill="none" opacity="0.8" />
      <path d="M25.5 15 Q28 13 30.5 15" stroke="#B08010" strokeWidth="0.7" fill="none" opacity="0.5" />
      <line x1="27" y1="7" x2="27.2" y2="30" stroke="#B08010" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
      <ellipse cx="28" cy="37.5" rx="9.5" ry="3" fill="#141414" stroke="#C8A030" strokeWidth="1" />
      <ellipse cx="28" cy="37.5" rx="6.5" ry="1.8" fill="none" stroke="#C8A030" strokeWidth="0.6" />
      <ellipse cx="28" cy="37.5" rx="3.2" ry="0.9" fill="none" stroke="#C8A030" strokeWidth="0.4" opacity="0.7" />
      <ellipse cx="28" cy="35.5" rx="4.5" ry="0.9" fill="#C8A030" />
      <ellipse cx="28" cy="39.5" rx="4.5" ry="0.9" fill="#C8A030" />
      <rect x="24" y="40.5" width="8" height="12" rx="2" fill="#111111" stroke="#C8A030" strokeWidth="0.5" />
      <ellipse cx="28" cy="45" rx="2.5" ry="1" fill="#C8A030" opacity="0.9" />
      <line x1="23.7" y1="42" x2="32.3" y2="42" stroke="#C8A030" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />
      <line x1="23.7" y1="44" x2="32.3" y2="44" stroke="#C8A030" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />
      <line x1="23.7" y1="47" x2="32.3" y2="47" stroke="#C8A030" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />
      <line x1="23.7" y1="49" x2="32.3" y2="49" stroke="#C8A030" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />
      <ellipse cx="28" cy="52.8" rx="4.5" ry="2" fill="#111111" stroke="#C8A030" strokeWidth="0.8" />
    </svg>
  );
}

const TIER_ICONS = [
  ShoshinIcon,
  MinaraiIcon,
  ShugyoshaIcon,
  DoshiIcon,
  SenseiIcon,
  HanshiIcon,
  KenseiIcon,
];

/**
 * @param {{
 *   tier: number;
 *   size?: 'sm' | 'md' | 'lg';
 *   decorations?: unknown[];
 *   showTooltip?: boolean;
 *   danTotal?: number;
 *   className?: string;
 * }} props
 */
export default function TierIcon({
  tier = 1,
  size = "md",
  decorations = [],
  showTooltip = false,
  danTotal,
  className = "",
}) {
  const safeTier = Math.min(Math.max(tier, 1), 7);
  const px = SIZE_PX[size] ?? SIZE_PX.md;
  const Icon = TIER_ICONS[safeTier - 1];
  const dan = danTotal ?? 0;

  // TODO: render achievement decoration layers here
  void decorations;

  const tooltipText = showTooltip
    ? `${getTierTooltip(safeTier)}${dan > 0 ? ` · ${dan.toLocaleString()} Dan earned` : ""}`
    : undefined;

  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center ${className}`}
      style={{ width: px, height: px }}
      title={tooltipText}
    >
      <span className="block h-full w-full [&>svg]:h-full [&>svg]:w-full">
        <Icon />
      </span>
    </span>
  );
}

export {
  ShoshinIcon,
  MinaraiIcon,
  ShugyoshaIcon,
  DoshiIcon,
  SenseiIcon,
  HanshiIcon,
  KenseiIcon,
};
