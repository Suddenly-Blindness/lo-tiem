import type { Localized } from "./common";

export type SocialKey = "zalo" | "facebook" | "tiktok" | "shopee";

export type SiteConfig = {
  name: string;
  slogan: Localized;
  phone: string;
  email: string;
  address: Localized;
  /** src của iframe Google Maps (Chia sẻ → Nhúng bản đồ) */
  mapEmbedUrl: string;
  socials: Record<SocialKey, string>;
};
