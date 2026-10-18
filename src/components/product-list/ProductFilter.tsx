"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

/** Một hàng chip lọc. `value = null` là "Tất cả". */
export function ProductFilter({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { key: string; label: string }[];
  value: string | null;
  onChange: (value: string | null) => void;
}) {
  const { t } = useLanguage();
  const all = [{ key: null, label: t("products.filterAll") }, ...options];
  return (
    <div>
      <p className="text-caption mb-2 text-muted">{label}</p>
      <div className="flex flex-wrap gap-2">
        {all.map((o) => (
          <button
            key={o.key ?? "all"}
            type="button"
            onClick={() => onChange(o.key)}
            className={cn(
              "border px-3 py-1.5 text-sm font-medium transition-colors",
              value === o.key ? "border-ink bg-ink text-paper" : "border-line hover:border-ink",
            )}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
