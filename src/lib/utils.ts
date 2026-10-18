import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Gộp class, bỏ trùng các utility Tailwind xung đột. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
