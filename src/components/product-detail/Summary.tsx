"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { useLocalized } from "@/hooks/useLocalized";
import type { Product } from "@/types";
import { PaintColors } from "./PaintColors";
import { Price } from "@/components/ui/Price";

/** Phần đầu trang: dòng xe, tên, mô tả ngắn, màu sơn. Mô tả chi tiết nằm ở section `description`. */
export function Summary({ product }: { product: Product }) {
  const { t } = useLanguage();
  const l = useLocalized();
  return (
    <div>
      <p className="text-caption text-muted">
        {t("product.bikes")}: {product.bikes.length ? product.bikes.join(", ") : t("product.allBikes")}
      </p>
      <h1 className="text-h1 mt-2">{l(product.name)}</h1>
      <Price price={product.price} className="mt-3 text-2xl font-bold" />
      <p className="text-body mt-4 text-gray-700">{l(product.shortDescription)}</p>
      <PaintColors colors={product.colors} />
    </div>
  );
}
