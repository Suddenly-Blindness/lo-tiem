"use client";

import { ProductGrid } from "@/components/product-list/ProductGrid";
import { Section } from "@/components/ui/Section";
import { products } from "@/data/products";
import { useLanguage } from "@/hooks/useLanguage";

/** Các sản phẩm thuộc nhóm Custom (category "custom") */
export function CustomProducts() {
  const { t } = useLanguage();
  const items = products.filter((p) => p.category === "custom");
  if (!items.length) return null;
  return (
    <Section title={t("custom.productsTitle")}>
      <p className="text-body -mt-3 mb-8 max-w-2xl text-gray-600 md:-mt-6 md:mb-10">{t("custom.productsBody")}</p>
      <ProductGrid products={items} className="max-w-3xl md:grid-cols-2 lg:grid-cols-2" />
    </Section>
  );
}
