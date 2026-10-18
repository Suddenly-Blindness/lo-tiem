"use client";

import { ButtonLink } from "@/components/ui/Button";
import { useLanguage } from "@/hooks/useLanguage";

/** Dòng gợi ý cuối danh sách: không thấy sản phẩm phù hợp thì gửi yêu cầu custom. */
export function CustomSuggestion() {
  const { t } = useLanguage();
  return (
    <div className="mt-16 flex flex-col items-start gap-5 border-t border-line pt-10 md:flex-row md:items-center md:justify-between">
      <div className="max-w-2xl">
        <h2 className="text-h3">{t("products.suggestTitle")}</h2>
        <p className="text-body mt-2 text-gray-600">{t("products.suggestBody")}</p>
      </div>
      <ButtonLink href="/custom/" variant="outline" className="shrink-0">
        {t("products.suggestCta")}
      </ButtonLink>
    </div>
  );
}
