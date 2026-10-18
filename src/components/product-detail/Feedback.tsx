"use client";

import { ImageBox } from "@/components/ui/ImageBox";
import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/hooks/useLanguage";
import { useLocalized } from "@/hooks/useLocalized";
import type { ProductFeedback } from "@/types";

export function Feedback({ items }: { items: ProductFeedback[] }) {
  const { t } = useLanguage();
  const l = useLocalized();
  if (!items.length) return null;
  return (
    <Section title={t("product.feedback")} tone="muted">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((f) => (
          <figure key={f.image} className="bg-paper">
            <ImageBox src={f.image} alt={f.customer ?? ""} ratio="aspect-[4/5]" />
            {(f.comment || f.customer) && (
              <figcaption className="p-4">
                {f.comment && <p className="text-body">“{l(f.comment)}”</p>}
                <p className="text-caption mt-2 text-muted">
                  {[f.customer, f.bike].filter(Boolean).join(" · ")}
                </p>
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </Section>
  );
}
