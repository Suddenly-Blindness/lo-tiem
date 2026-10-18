"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

import { paintColors } from "@/data/colors";
import { useLanguage } from "@/hooks/useLanguage";
import { useLocalized } from "@/hooks/useLocalized";
import { cn } from "@/lib/utils";
import type { PaintColor } from "@/types";

/** Ô màu mô phỏng bề mặt sơn: bóng có vệt sáng, nhám là màu phẳng */
const SWATCH: Record<PaintColor, string> = {
  "den-bong": "bg-linear-to-br from-gray-500 via-black to-black",
  "den-nham": "bg-gray-900",
  "den-nham-min": "bg-gray-800",
};

/** Màu sơn có sẵn + ô "màu khác theo yêu cầu" dẫn sang trang custom. */
export function PaintColors({ colors }: { colors?: PaintColor[] }) {
  const { t } = useLanguage();
  const l = useLocalized();
  const list = colors ? paintColors.filter((c) => colors.includes(c.key)) : paintColors;

  return (
    <div className="mt-6">
      <p className="text-caption mb-3 text-muted">{t("product.colors")}</p>
      <ul className="flex flex-wrap gap-x-5 gap-y-3">
        {list.map((c) => (
          <li key={c.key} className="flex items-center gap-2 text-sm font-medium">
            <span className={cn("size-7 rounded-full border border-line", SWATCH[c.key])} aria-hidden />
            {l(c.label)}
          </li>
        ))}
        <li>
          <Link href="/custom/" className="flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline">
            <span className="flex size-7 items-center justify-center rounded-full border border-dashed border-gray-500">
              <Plus className="size-4" />
            </span>
            {t("product.colorCustom")}
          </Link>
        </li>
      </ul>
    </div>
  );
}
