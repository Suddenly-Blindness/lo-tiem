"use client";

import { ImageBox } from "@/components/ui/ImageBox";
import { useLightbox } from "@/components/ui/Lightbox";
import { Section } from "@/components/ui/Section";
import { customShowcase } from "@/data/custom";
import { useLanguage } from "@/hooks/useLanguage";
import { useLocalized } from "@/hooks/useLocalized";

export function CustomShowcase() {
  const { t } = useLanguage();
  const l = useLocalized();
  const { open, lightbox } = useLightbox(
    customShowcase.map((item) => item.image),
    t("custom.showcaseTitle"),
  );
  if (!customShowcase.length) return null;
  return (
    <Section title={t("custom.showcaseTitle")}>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {customShowcase.map((item, i) => (
          <figure key={`${i}-${item.image}`}>
            <ImageBox src={item.image} alt={l(item.title)} onClick={() => open(i)} />
            <figcaption className="mt-2">
              <p className="text-caption text-muted">{item.bike}</p>
              <p className="font-semibold">{l(item.title)}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      {lightbox}
    </Section>
  );
}
