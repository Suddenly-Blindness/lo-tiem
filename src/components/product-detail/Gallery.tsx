"use client";

import { ImageBox } from "@/components/ui/ImageBox";
import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/hooks/useLanguage";

export function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const { t } = useLanguage();
  if (!images.length) return null;
  return (
    <Section title={t("product.gallery")}>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {images.map((src, i) => (
          <ImageBox key={src} src={src} alt={`${alt} ${i + 1}`} />
        ))}
      </div>
    </Section>
  );
}
