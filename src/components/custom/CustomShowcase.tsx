"use client";

import { ImageBox } from "@/components/ui/ImageBox";
import { Section } from "@/components/ui/Section";
import { customShowcase } from "@/data/custom";
import { useLanguage } from "@/hooks/useLanguage";
import { useLocalized } from "@/hooks/useLocalized";

export function CustomShowcase() {
  const { t } = useLanguage();
  const l = useLocalized();
  if (!customShowcase.length) return null;
  return (
    <Section title={t("custom.showcaseTitle")}>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {customShowcase.map((item) => (
          <figure key={item.image}>
            <ImageBox src={item.image} alt={l(item.title)} />
            <figcaption className="mt-2">
              <p className="text-caption text-muted">{item.bike}</p>
              <p className="font-semibold">{l(item.title)}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
