"use client";

import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/hooks/useLanguage";

const STEPS = ["custom.step1", "custom.step2", "custom.step3", "custom.step4", "custom.step5"];

export function CustomProcess() {
  const { t } = useLanguage();
  return (
    <Section title={t("custom.processTitle")}>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {STEPS.map((key, i) => (
          <li key={key} className="border border-line p-5">
            <span className="text-h1 text-gray-300">{String(i + 1).padStart(2, "0")}</span>
            <p className="text-h3 mt-2">{t(key)}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
