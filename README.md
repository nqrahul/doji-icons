# @doji/icons

Shared React icons for the Doji ecosystem: mastery blade ranks (tiers 1–7), **Mon** (門), and **Ryō** (両).

## Install in a Next.js app

**From GitHub** (after this repo is pushed):

```bash
npm install github:gredenko/doji-icons#main
```

**Local development** (sibling folder):

```json
"@doji/icons": "file:../doji-icons"
```

Then in `next.config.ts`:

```ts
const nextConfig = {
  transpilePackages: ["@doji/icons"],
};
```

## Usage

```tsx
import { TierIcon, TierBadge, MonIcon, RyoIcon } from "@doji/icons";

<TierIcon tier={3} size="md" showTooltip danTotal={120} />
<TierIcon tier={3} size="lg" badge showTooltip />
<TierBadge tier={7} size={56} radius={12} />
<MonIcon size="sm" />
<RyoIcon size="lg" title="Ryō balance" />
```

`className` is merged with tailwind-merge, so a caller's utilities (including display, e.g. `hidden sm:inline-flex`) override the component's defaults.

### Sizes

| Prop | Pixels |
|------|--------|
| `sm` | 16 (coins) / 16 (tiers) |
| `md` | 32 (coins) / 40 (tiers) |
| `lg` | 56 |

Tier icons use `viewBox="0 0 56 56"`; the wrapper scales width/height.

**Tier badges** (`TierBadge` or `TierIcon` with `badge`) render the blade on a tier-colored plate so transparent strokes stay readable on any background. Badge sizes default slightly larger than bare tier icons at `sm` (24px plate vs 16px icon).

Export `TIER_BACKGROUNDS` / `getTierBackground` if you need the palette outside React.

## Publishing

This package is private ecosystem code. Bump `version` in `package.json` when blade or coin art changes so apps can pin versions.
