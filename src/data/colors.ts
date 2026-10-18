import type { Localized, PaintColor } from "@/types";

/** Màu sơn có sẵn. Thứ tự ở đây = thứ tự hiển thị. Ngoài các màu này shop nhận sơn màu khác theo yêu cầu. */
export const paintColors: { key: PaintColor; label: Localized }[] = [
  { key: "den-bong", label: { vi: "Đen bóng", en: "Gloss black" } },
  { key: "den-nham", label: { vi: "Đen nhám", en: "Matte black" } },
  { key: "den-nham-min", label: { vi: "Đen nhám mịn", en: "Fine matte black" } },
];
