"use client";

import { cn } from "./cn.js";
import { TIER_ICONS } from "./tierIcons.js";
import { getTierBackground, getTierTooltip } from "./tierMeta.js";

const SIZE_PX = { sm: 24, md: 40, lg: 56 };
const ICON_SCALE = 0.78;
const DEFAULT_RADIUS_RATIO = 12 / 56;

function resolvePx(size) {
  if (typeof size === "number") return size;
  return SIZE_PX[size] ?? SIZE_PX.lg;
}

/**
 * Tier blade icon on a colored plate (keeps SVG transparency over the badge fill).
 *
 * @param {{
 *   tier: number;
 *   size?: 'sm' | 'md' | 'lg' | number;
 *   radius?: number;
 *   showTooltip?: boolean;
 *   danTotal?: number;
 *   className?: string;
 * }} props
 */
export default function TierBadge({
  tier = 1,
  size = "lg",
  radius,
  showTooltip = false,
  danTotal,
  className = "",
}) {
  const safeTier = Math.min(Math.max(tier, 1), 7);
  const px = resolvePx(size);
  const borderRadius = radius ?? Math.round(px * DEFAULT_RADIUS_RATIO);
  const iconPx = Math.round(px * ICON_SCALE);
  const { bg, border } = getTierBackground(safeTier);
  const Icon = TIER_ICONS[safeTier - 1];
  const dan = danTotal ?? 0;

  const tooltipText = showTooltip
    ? `${getTierTooltip(safeTier)}${dan > 0 ? ` · ${dan.toLocaleString()} Dan earned` : ""}`
    : undefined;

  return (
    <span
      className={cn("inline-flex shrink-0 items-center justify-center", className)}
      style={{
        width: px,
        height: px,
        borderRadius,
        background: bg,
        border: `1px solid ${border}`,
      }}
      title={tooltipText}
    >
      <span
        className="block [&>svg]:h-full [&>svg]:w-full"
        style={{ width: iconPx, height: iconPx }}
      >
        <Icon />
      </span>
    </span>
  );
}
