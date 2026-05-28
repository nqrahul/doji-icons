/** Blade rank tooltips — keep in sync with mastery tier names across apps. */
export const TIER_TOOLTIPS = {
  1: "Shoshin · Raw Steel · Beginner's mind, open to all",
  2: "Minarai · Brushed Silver · Learning through observation",
  3: "Shugyosha · Polished Steel · Devoted to disciplined practice",
  4: "Dōshi · Tempered Steel · A fellow traveller on the path",
  5: "Sensei · Bronze Fittings · One who has gone before",
  6: "Hanshi · Silver Fittings · Master teacher and exemplar",
  7: "Kensei · Black Steel & Gold · Sword saint, the highest mastery",
};

export function getTierTooltip(tier) {
  return TIER_TOOLTIPS[Math.min(Math.max(tier, 1), 7)] ?? TIER_TOOLTIPS[1];
}
