"use client";

import { SocialLinks } from "@/components/layout/SocialLinks";
import { useLanguage } from "@/hooks/useLanguage";

export function BuyButtons({ shopeeUrl }: { shopeeUrl?: string }) {
  const { t } = useLanguage();
  return (
    <div className="border-t border-line pt-6">
      <p className="text-h3">{t("product.buyTitle")}</p>
      <p className="mb-4 mt-1 text-sm text-muted">{t("product.buyHint")}</p>
      <SocialLinks labeled shopeeUrl={shopeeUrl} />
    </div>
  );
}
