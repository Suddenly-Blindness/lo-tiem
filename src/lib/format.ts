import type { LanguageCode } from "@/i18n/translations";

/** Định dạng giá VND theo ngôn ngữ: vi "500.000 ₫", en "₫500,000" */
export const formatPrice = (vnd: number, language: LanguageCode) =>
  new Intl.NumberFormat(language === "vi" ? "vi-VN" : "en-US", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(vnd);
