"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "./cn.js";
const SIZE_PX = { sm: 16, md: 32, lg: 56 };
function MonIconGraphic() {
  return /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 56 56", fill: "none", "aria-hidden": true, children: [
    /* @__PURE__ */ jsx(
      "polygon",
      {
        points: "28,4 50,16 50,40 28,52 6,40 6,16",
        fill: "#2A2E38",
        stroke: "#555E72",
        strokeWidth: "1.5"
      }
    ),
    /* @__PURE__ */ jsx(
      "polygon",
      {
        points: "28,11 43,19.5 43,36.5 28,45 13,36.5 13,19.5",
        fill: "none",
        stroke: "#6B7585",
        strokeWidth: "0.8",
        opacity: "0.5"
      }
    ),
    /* @__PURE__ */ jsx(
      "text",
      {
        x: "28",
        y: "34",
        textAnchor: "middle",
        fontFamily: "serif",
        fontSize: "20",
        fontWeight: "700",
        fill: "#8A95A8",
        children: "\u9580"
      }
    )
  ] });
}
function MonIcon({ size = "md", className = "", title }) {
  const px = SIZE_PX[size] ?? SIZE_PX.md;
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn(
        "relative inline-flex shrink-0 items-center justify-center",
        className
      ),
      style: { width: px, height: px },
      title,
      children: /* @__PURE__ */ jsx("span", { className: "block h-full w-full [&>svg]:h-full [&>svg]:w-full", children: /* @__PURE__ */ jsx(MonIconGraphic, {}) })
    }
  );
}
export {
  MonIconGraphic,
  MonIcon as default
};
