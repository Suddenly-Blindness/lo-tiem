"use client";

import { SocialLinks } from "@/components/layout/SocialLinks";
import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/hooks/useLanguage";

export function CustomContact() {
  const { t } = useLanguage();
  return (
    <Section tone="muted">
      <h2 className="text-h1">{t("custom.contactTitle")}</h2>
      <p className="text-body mb-8 mt-3 text-gray-600">{t("custom.contactBody")}</p>
      <SocialLinks labeled keys={["zalo", "facebook", "tiktok"]} />
    </Section>
  );
}
