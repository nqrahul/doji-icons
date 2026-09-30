"use client";

import { cn } from "./cn.js";
import TierBadge from "./TierBadge.js";
import { TIER_ICONS } from "./tierIcons.js";
import { getTierTooltip } from "./tierMeta.js";

const SIZE_PX = { sm: 16, md: 40, lg: 56 };

/**
 * @param {{
 *   tier: number;
 *   size?: 'sm' | 'md' | 'lg';
 *   decorations?: unknown[];
 *   badge?: boolean;
 *   showTooltip?: boolean;
 *   danTotal?: number;
 *   className?: string;
 * }} props
 */
export default function TierIcon({
  tier = 1,
  size = "md",
  decorations = [],
  badge = false,
  showTooltip = false,
  danTotal,
  className = "",
}) {
  const safeTier = Math.min(Math.max(tier, 1), 7);

  if (badge) {
    return (
      <TierBadge
        tier={safeTier}
        size={size}
        showTooltip={showTooltip}
        danTotal={danTotal}
        className={className}
      />
    );
  }
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
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center",
        className,
      )}
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
} from "./tierIcons.js";
