"use client";

import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/hooks/useLanguage";
import { useLocalized } from "@/hooks/useLocalized";
import type { Product } from "@/types";

/** Mô tả chi tiết, section riêng rộng hết trang. */
export function Description({ product }: { product: Product }) {
  const { t } = useLanguage();
  const l = useLocalized();
  return (
    <Section title={t("product.description")}>
      <div className="text-body whitespace-pre-line">{l(product.description)}</div>
    </Section>
  );
}
