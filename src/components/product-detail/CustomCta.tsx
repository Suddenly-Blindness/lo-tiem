"use client";

import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/hooks/useLanguage";

/** Block nổi bật: mời khách làm mẫu này cho xe khác hoặc thiết kế riêng. */
export function CustomCta() {
  const { t } = useLanguage();
  return (
    <Section tone="dark">
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-h2">{t("product.customTitle")}</h2>
          <p className="text-body mt-3 text-gray-300">{t("product.customBody")}</p>
        </div>
        <ButtonLink href="/custom/" variant="inverse" className="shrink-0">
          {t("product.customCta")}
        </ButtonLink>
      </div>
    </Section>
  );
}
