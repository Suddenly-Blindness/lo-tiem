"use client";

import { ButtonLink } from "@/components/ui/Button";
import { ImageBox } from "@/components/ui/ImageBox";
import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/hooks/useLanguage";

export function CustomHighlight() {
  const { t } = useLanguage();
  return (
    <Section tone="muted">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
        <ImageBox src="/images/home/custom.webp" alt="" ratio="aspect-[4/3]" className="bg-gray-200" />
        <div>
          <h2 className="text-h1">{t("home.customTitle")}</h2>
          <p className="text-body mt-4 text-gray-600">{t("home.customBody")}</p>
          <ButtonLink href="/custom/" variant="solid" className="mt-8">
            {t("home.customCta")}
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
