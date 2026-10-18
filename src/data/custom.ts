import type { Localized } from "@/types";

/** Các mẫu custom đã làm, ảnh đặt trong public/images/custom (hiện dùng ảnh mock) */
export const customShowcase: { image: string; bike: string; title: Localized }[] = [
  {
    image: "/images/mock/empty.svg",
    bike: "Honda CB150R",
    title: { vi: "Ốp hông theo bản vẽ của khách", en: "Side covers from a customer sketch" },
  },
];
