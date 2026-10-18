"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { useLocalized } from "@/hooks/useLocalized";
import type { Product } from "@/types";

export function Description({ product }: { product: Product }) {
  const { t } = useLanguage();
  const l = useLocalized();
  return (
    <div>
      <p className="text-caption text-muted">
        {t("product.bikes")}: {product.bikes.join(", ")}
      </p>
      <h1 className="text-h1 mt-2">{l(product.name)}</h1>
      <p className="text-body mt-4 text-gray-700">{l(product.shortDescription)}</p>
      <div className="text-body mt-6 whitespace-pre-line">{l(product.description)}</div>
    </div>
  );
}
