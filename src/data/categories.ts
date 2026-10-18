import type { Localized, ProductCategory } from "@/types";

/** Thứ tự ở đây = thứ tự trên bộ lọc */
export const categories: { key: ProductCategory; label: Localized }[] = [
  { key: "op-hong", label: { vi: "Ốp hông / chắn bùn hông", en: "Side covers / side fenders" } },
  { key: "custom", label: { vi: "Custom", en: "Custom" } },
  { key: "op-may", label: { vi: "Ốp máy", en: "Engine covers" } },
  { key: "op-phuoc", label: { vi: "Ốp phuộc", en: "Fork covers" } },
  { key: "combo", label: { vi: "Combo", en: "Combo kits" } },
];

export const bikes = ["XSR155", "Exciter 155", "MT-15", "Winner", "FZ150i"];
