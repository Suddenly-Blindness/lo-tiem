"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { languages } from "@/i18n/translations";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();
  return (
    <div className={cn("flex items-center text-sm font-semibold", className)}>
      {languages.map(({ code, name }, i) => (
        <span key={code} className="flex items-center">
          {i > 0 && <span className="mx-1.5 text-muted">/</span>}
          <button
            type="button"
            title={name}
            onClick={() => setLanguage(code)}
            className={cn("uppercase", language === code ? "text-ink" : "text-muted hover:text-ink")}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  );
}
