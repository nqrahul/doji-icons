import { twMerge } from "tailwind-merge";
function cn(...parts) {
  return twMerge(parts.filter(Boolean).join(" "));
}
export {
  cn
};
