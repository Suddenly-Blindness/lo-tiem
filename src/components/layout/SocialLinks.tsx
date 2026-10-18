"use client";

import type { ComponentType, ReactNode, SVGProps } from "react";

import { socialIcons } from "@/components/icons";
import { site } from "@/data/site";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";
import type { SocialKey } from "@/types";

const ORDER: SocialKey[] = ["zalo", "facebook", "tiktok", "shopee"];

/** Một nút kênh liên hệ / mua hàng: icon, có thể kèm tên. Mở tab mới. */
export function ChannelLink({
  href,
  icon: Icon,
  label,
  labeled = false,
  className,
}: {
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  labeled?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "inline-flex items-center gap-2 border border-current transition-opacity hover:opacity-70",
        labeled ? "px-4 py-2.5 text-sm font-semibold" : "size-10 justify-center",
        className,
      )}
    >
      <Icon className="size-5" />
      {labeled && label}
    </a>
  );
}

export function ChannelRow({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("flex flex-wrap gap-3", className)}>{children}</div>;
}

/** Hàng icon mạng xã hội của shop (link trong data/site.ts). `labeled` hiện cả tên. */
export function SocialLinks({
  labeled = false,
  keys = ORDER,
  className,
  linkClassName,
}: {
  labeled?: boolean;
  /** Class thêm cho từng nút, ví dụ nút đặc trên nền tối */
  linkClassName?: string;
  /** Chỉ hiện các kênh này, theo thứ tự truyền vào */
  keys?: SocialKey[];
  className?: string;
}) {
  const { t } = useLanguage();
  return (
    <ChannelRow className={className}>
      {keys.map((key) => (
        <ChannelLink
          key={key}
          href={site.socials[key]}
          icon={socialIcons[key]}
          label={t(`social.${key}`)}
          labeled={labeled}
          className={linkClassName}
        />
      ))}
    </ChannelRow>
  );
}
