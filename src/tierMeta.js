/** Tier badge plate colors — improves contrast on busy UIs without flattening blade art. */
export const TIER_BACKGROUNDS = {
  1: { bg: "#E8E8E8", border: "#C0C0C0" }, // Shoshin — light gray
  2: { bg: "#F0F0F0", border: "#C8C8C8" }, // Minarai — brushed silver
  3: { bg: "#EBF2F8", border: "#B8D0E4" }, // Shugyosha — cool blue-white
  4: { bg: "#E8ECF4", border: "#4A5E8B" }, // Doshi — muted navy
  5: { bg: "#FAF5EC", border: "#CD7F32" }, // Sensei — warm off-white, bronze rim
  6: { bg: "#F0EDEA", border: "#C0C0C0" }, // Hanshi — warm gray, silver rim
  7: { bg: "#141414", border: "#C8A030" }, // Kensei — black, gold rim
};

export function getTierBackground(tier) {
  const safe = Math.min(Math.max(tier, 1), 7);
  return TIER_BACKGROUNDS[safe] ?? TIER_BACKGROUNDS[1];
}

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
