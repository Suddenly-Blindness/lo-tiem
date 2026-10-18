"use client";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/hooks/useLanguage";

export function Banner() {
  const { t } = useLanguage();
  return (
    <section className="relative flex min-h-[70svh] items-end overflow-hidden bg-ink text-paper">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/home/banner.webp"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-60 grayscale"
      />
      <Container className="relative py-16 md:py-24">
        <h1 className="text-display max-w-3xl">{t("home.bannerTitle")}</h1>
        <p className="text-body mt-4 max-w-xl text-gray-300">{t("home.bannerSubtitle")}</p>
        <ButtonLink href="/san-pham/" variant="inverse" className="mt-8">
          {t("home.bannerCta")}
        </ButtonLink>
      </Container>
    </section>
  );
}
