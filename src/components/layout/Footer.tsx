"use client";

import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";
import { useLanguage } from "@/hooks/useLanguage";
import { useLocalized } from "@/hooks/useLocalized";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const { t } = useLanguage();
  const l = useLocalized();

  return (
    <footer className="bg-ink text-paper">
      <Container className="grid gap-10 py-12 md:grid-cols-2 md:py-16">
        <div className="space-y-8">
          <div>
            <p className="text-h3 uppercase">{site.name}</p>
            <p className="mt-2 text-gray-400">{l(site.slogan)}</p>
          </div>
          <div>
            <p className="text-caption text-gray-400">{t("footer.contact")}</p>
            <p className="mt-2">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:underline">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:underline">
                {site.email}
              </a>
            </p>
          </div>
          <div>
            <p className="text-caption text-gray-400">{t("footer.address")}</p>
            <p className="mt-2">{l(site.address)}</p>
          </div>
          <div>
            <p className="text-caption mb-3 text-gray-400">{t("footer.follow")}</p>
            <SocialLinks />
          </div>
        </div>

        <iframe
          src={site.mapEmbedUrl}
          title={t("footer.address")}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="aspect-video w-full border-0 grayscale md:aspect-auto md:h-full md:min-h-72"
        />
      </Container>
      <div className="border-t border-gray-800">
        <Container className="py-5 text-sm text-gray-500">
          © {new Date().getFullYear()} {site.name}. {t("footer.rights")}
        </Container>
      </div>
    </footer>
  );
}
