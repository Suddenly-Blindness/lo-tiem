"use client";

import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/hooks/useLanguage";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <Section title={t("notFound.title")}>
      <ButtonLink href="/">{t("notFound.back")}</ButtonLink>
    </Section>
  );
}
