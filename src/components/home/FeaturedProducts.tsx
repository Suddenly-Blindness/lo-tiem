"use client";

import Link from "next/link";

import { ProductGrid } from "@/components/product-list/ProductGrid";
import { Section } from "@/components/ui/Section";
import { featuredProducts } from "@/data/products";
import { useLanguage } from "@/hooks/useLanguage";

export function FeaturedProducts() {
  const { t } = useLanguage();
  return (
    <Section
      title={
        <span className="flex items-end justify-between gap-4">
          {t("home.featuredTitle")}
          <Link href="/san-pham/" className="text-sm font-semibold uppercase tracking-wider underline">
            {t("home.viewAll")}
          </Link>
        </span>
      }
    >
      <ProductGrid products={featuredProducts()} />
    </Section>
  );
}
