import type { Localized, ProductCategory } from "@/types";

export const categories: { key: ProductCategory; label: Localized }[] = [
  { key: "op-chan-bun-hong", label: { vi: "Ốp chắn bùn hông", en: "Side fender covers" } },
  { key: "op-may", label: { vi: "Ốp máy", en: "Engine covers" } },
  { key: "combo-scrambler", label: { vi: "Combo scrambler", en: "Scrambler kits" } },
  { key: "khac", label: { vi: "Khác", en: "Others" } },
];

export const bikes = ["XSR 155", "MT-15", "Exciter", "Winner"];
