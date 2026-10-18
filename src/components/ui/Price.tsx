"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

/** "Từ 500.000 ₫" (giá ship COD, giá khởi điểm). Chưa có giá thì hiện "Liên hệ". */
export function Price({ price, className }: { price?: number; className?: string }) {
  const { t, language } = useLanguage();
  return (
    <p className={className}>
      {price ? (
        <>
          <span className="font-normal opacity-60">{t("product.priceFrom")} </span>
          {formatPrice(price, language)}
        </>
      ) : (
        t("product.priceContact")
      )}
    </p>
  );
}

/** Ghi chú dưới giá: giá có thể thay đổi theo yêu cầu custom, màu sơn… */
export function PriceNote({ className }: { className?: string }) {
  const { t } = useLanguage();
  return <p className={cn("text-sm text-gray-600", className)}>{t("product.priceNote")}</p>;
}
