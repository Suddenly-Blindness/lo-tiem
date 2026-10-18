import type { ComponentType, SVGProps } from "react";

import type { SocialKey } from "@/types";
import { FacebookIcon, ShopeeIcon, TikTokIcon, TikTokShopIcon, ZaloIcon } from "./social-icons";

export { FacebookIcon, ShopeeIcon, TikTokIcon, TikTokShopIcon, ZaloIcon };

export const socialIcons: Record<SocialKey, ComponentType<SVGProps<SVGSVGElement>>> = {
  zalo: ZaloIcon,
  facebook: FacebookIcon,
  tiktok: TikTokIcon,
  shopee: ShopeeIcon,
};
