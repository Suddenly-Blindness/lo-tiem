"use client";

import { useMemo, useState } from "react";

import { Section } from "@/components/ui/Section";
import { bikes, categories } from "@/data/categories";
import { products } from "@/data/products";
import { useLanguage } from "@/hooks/useLanguage";
import { useLocalized } from "@/hooks/useLocalized";
import { ProductFilter } from "./ProductFilter";
import { CustomSuggestion } from "./CustomSuggestion";
import { ProductGrid } from "./ProductGrid";

export function ProductListView() {
  const { t } = useLanguage();
  const l = useLocalized();
  const [category, setCategory] = useState<string | null>(null);
  const [bike, setBike] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      products.filter(
        (p) => (!category || p.category === category) && (!bike || p.bikes.includes(bike)),
      ),
    [category, bike],
  );

  return (
    <Section title={t("products.title")}>
      <div className="mb-10 space-y-5">
        <ProductFilter
          label={t("products.filterCategory")}
          options={categories.map((c) => ({ key: c.key, label: l(c.label) }))}
          value={category}
          onChange={setCategory}
        />
        <ProductFilter
          label={t("products.filterBike")}
          options={bikes.map((b) => ({ key: b, label: b }))}
          value={bike}
          onChange={setBike}
        />
      </div>
      {filtered.length ? <ProductGrid products={filtered} /> : <p className="text-muted">{t("products.empty")}</p>}
      <CustomSuggestion />
    </Section>
  );
}
