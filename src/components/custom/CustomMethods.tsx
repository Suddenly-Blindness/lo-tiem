"use client";

import { Camera, PencilLine, Type } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/hooks/useLanguage";

const METHODS = [
  { icon: PencilLine, title: "custom.methodDraw", body: "custom.methodDrawBody" },
  { icon: Type, title: "custom.methodText", body: "custom.methodTextBody" },
  { icon: Camera, title: "custom.methodPhoto", body: "custom.methodPhotoBody" },
];

export function CustomMethods() {
  const { t } = useLanguage();
  return (
    <Section title={t("custom.methodsTitle")} tone="muted">
      <div className="grid gap-4 md:grid-cols-3">
        {METHODS.map(({ icon: Icon, title, body }) => (
          <div key={title} className="bg-paper p-6">
            <Icon className="size-8" strokeWidth={1.5} />
            <h3 className="text-h3 mt-4">{t(title)}</h3>
            <p className="text-body mt-2 text-gray-600">{t(body)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
