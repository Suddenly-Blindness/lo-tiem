"use client";

import { ImageBox } from "@/components/ui/ImageBox";
import { useLightbox } from "@/components/ui/Lightbox";
import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/hooks/useLanguage";

/** Ảnh xe khách đã lắp sản phẩm. Ẩn danh, không kèm nhận xét. */
export function Feedback({ images }: { images: string[] }) {
  const { t } = useLanguage();
  const { open, lightbox } = useLightbox(images, t("product.feedback"));
  if (!images.length) return null;
  return (
    <Section title={t("product.feedback")} tone="muted">
      <p className="text-body -mt-3 mb-6 text-gray-600 md:-mt-6 md:mb-10">{t("product.feedbackHint")}</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 lg:grid-cols-4">
        {images.map((src, i) => (
          <ImageBox
            key={`${i}-${src}`}
            src={src}
            alt={`${t("product.feedback")} ${i + 1}`}
            ratio="aspect-[4/5]"
            className="bg-gray-200"
            onClick={() => open(i)}
          />
        ))}
      </div>
      {lightbox}
    </Section>
  );
}
