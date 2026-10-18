"use client";

import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/hooks/useLanguage";

export function CustomIntro() {
  const { t } = useLanguage();
  return (
    <Section tone="dark">
      <h1 className="text-display">{t("custom.title")}</h1>
      <p className="text-body mt-4 max-w-xl text-gray-300">{t("custom.intro")}</p>
    </Section>
  );
}
