"use client";

import { cn } from "./cn.js";

const SIZE_PX = { sm: 16, md: 32, lg: 56 };

export function RyoIconGraphic() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fill="none" aria-hidden>
      <polygon
        points="28,4 50,16 50,40 28,52 6,40 6,16"
        fill="#2A2000"
        stroke="#C8A030"
        strokeWidth="1.5"
      />
      <polygon
        points="28,11 43,19.5 43,36.5 28,45 13,36.5 13,19.5"
        fill="none"
        stroke="#C8A030"
        strokeWidth="0.8"
        opacity="0.5"
      />
      <text
        x="28"
        y="34"
        textAnchor="middle"
        fontFamily="serif"
        fontSize="20"
        fontWeight="700"
        fill="#C8A030"
      >
        両
      </text>
    </svg>
  );
}

/**
 * @param {{
 *   size?: 'sm' | 'md' | 'lg';
 *   className?: string;
 *   title?: string;
 * }} props
 */
export default function RyoIcon({ size = "md", className = "", title }) {
  const px = SIZE_PX[size] ?? SIZE_PX.md;

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center",
        className,
      )}
      style={{ width: px, height: px }}
      title={title}
    >
      <span className="block h-full w-full [&>svg]:h-full [&>svg]:w-full">
        <RyoIconGraphic />
      </span>
    </span>
  );
}
