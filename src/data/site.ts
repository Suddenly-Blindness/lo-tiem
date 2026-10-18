import type { SiteConfig } from "@/types";

// TODO: thay bằng thông tin thật của shop
export const site: SiteConfig = {
  name: "Lỏ Tiệm",
  slogan: {
    vi: "Đồ custom handmade cho xe máy",
    en: "Handmade custom parts for motorbikes",
  },
  phone: "0900 000 000",
  email: "lotiem@example.com",
  address: {
    vi: "Số nhà, đường, quận, thành phố",
    en: "Street, district, city, Vietnam",
  },
  mapEmbedUrl: "https://www.google.com/maps?q=Ho+Chi+Minh+City&output=embed",
  socials: {
    zalo: "https://zalo.me/0900000000",
    facebook: "https://facebook.com/lotiem",
    tiktok: "https://www.tiktok.com/@lotiem",
    shopee: "https://shopee.vn/lotiem",
  },
};
