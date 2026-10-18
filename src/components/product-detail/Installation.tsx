"use client";

import { ImageBox } from "@/components/ui/ImageBox";
import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/hooks/useLanguage";
import { useLocalized } from "@/hooks/useLocalized";
import type { ProductInstallation } from "@/types";
import { VideoEmbed } from "./VideoEmbed";

export function Installation({ installation }: { installation?: ProductInstallation }) {
  const { t } = useLanguage();
  const l = useLocalized();
  if (!installation) return null;
  return (
    <Section id="lap-dat" title={t("product.installation")}>
      {installation.intro && <p className="text-body mb-8 max-w-2xl">{l(installation.intro)}</p>}

      <ol className="grid gap-8 md:grid-cols-2">
        {installation.steps.map((step, i) => (
          <li key={i} className="flex flex-col gap-3">
            {step.image && <ImageBox src={step.image} alt="" ratio="aspect-[4/3]" />}
            <p className="text-caption text-muted">
              {t("product.step")} {i + 1}
            </p>
            <p className="text-body">{l(step.text)}</p>
          </li>
        ))}
      </ol>

      {installation.video && (
        <div className="mt-12">
          <h3 className="text-h3 mb-4">{t("product.video")}</h3>
          <VideoEmbed video={installation.video} title={t("product.video")} />
        </div>
      )}
    </Section>
  );
}
