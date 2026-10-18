"use client";

import { socialIcons } from "@/components/icons";
import { site } from "@/data/site";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";
import type { SocialKey } from "@/types";

const ORDER: SocialKey[] = ["zalo", "facebook", "tiktok", "shopee"];

/** Hàng icon mạng xã hội. `labeled` hiện cả tên, dùng cho nút mua hàng / liên hệ. */
export function SocialLinks({
  labeled = false,
  shopeeUrl,
  className,
}: {
  labeled?: boolean;
  /** Link Shopee riêng của sản phẩm, mặc định dùng link shop */
  shopeeUrl?: string;
  className?: string;
}) {
  const { t } = useLanguage();
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {ORDER.map((key) => {
        const Icon = socialIcons[key];
        const href = key === "shopee" && shopeeUrl ? shopeeUrl : site.socials[key];
        return (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t(`social.${key}`)}
            className={cn(
              "inline-flex items-center gap-2 border border-current transition-opacity hover:opacity-70",
              labeled ? "px-4 py-2.5 text-sm font-semibold" : "size-10 justify-center",
            )}
          >
            <Icon className="size-5" />
            {labeled && t(`social.${key}`)}
          </a>
        );
      })}
    </div>
  );
}
