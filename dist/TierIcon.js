"use client";
import { jsx } from "react/jsx-runtime";
import { cn } from "./cn.js";
import TierBadge from "./TierBadge.js";
import { TIER_ICONS } from "./tierIcons.js";
import { getTierTooltip } from "./tierMeta.js";
const SIZE_PX = { sm: 16, md: 40, lg: 56 };
function TierIcon({
  tier = 1,
  size = "md",
  decorations = [],
  badge = false,
  showTooltip = false,
  danTotal,
  className = ""
}) {
  const safeTier = Math.min(Math.max(tier, 1), 7);
  if (badge) {
    return /* @__PURE__ */ jsx(
      TierBadge,
      {
        tier: safeTier,
        size,
        showTooltip,
        danTotal,
        className
      }
    );
  }
  const px = SIZE_PX[size] ?? SIZE_PX.md;
  const Icon = TIER_ICONS[safeTier - 1];
  const dan = danTotal ?? 0;
  void decorations;
  const tooltipText = showTooltip ? `${getTierTooltip(safeTier)}${dan > 0 ? ` \xB7 ${dan.toLocaleString()} Dan earned` : ""}` : void 0;
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn(
        "relative inline-flex shrink-0 items-center justify-center",
        className
      ),
      style: { width: px, height: px },
      title: tooltipText,
      children: /* @__PURE__ */ jsx("span", { className: "block h-full w-full [&>svg]:h-full [&>svg]:w-full", children: /* @__PURE__ */ jsx(Icon, {}) })
    }
  );
}
import {
  ShoshinIcon,
  MinaraiIcon,
  ShugyoshaIcon,
  DoshiIcon,
  SenseiIcon,
  HanshiIcon,
  KenseiIcon
} from "./tierIcons.js";
export {
  DoshiIcon,
  HanshiIcon,
  KenseiIcon,
  MinaraiIcon,
  SenseiIcon,
  ShoshinIcon,
  ShugyoshaIcon,
  TierIcon as default
};
