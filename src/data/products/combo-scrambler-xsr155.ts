import type { Product } from "@/types";
import { productImage, spinImages } from "@/lib/product-images";

const slug = "combo-scrambler-xsr155";

// Sản phẩm mẫu: copy file này để thêm sản phẩm mới.
export const comboScramblerXsr155: Product = {
  slug,
  name: { vi: "Combo Scrambler XSR 155", en: "XSR 155 Scrambler Kit" },
  shortDescription: {
    vi: "Bộ ốp hông, ốp máy phong cách scrambler cho XSR 155.",
    en: "Scrambler-style side and engine covers for the XSR 155.",
  },
  description: {
    vi: "Mô tả chi tiết sản phẩm: chất liệu, màu, cách hoàn thiện…",
    en: "Product details: material, colour, finish…",
  },
  category: "combo-scrambler",
  bikes: ["XSR 155"],
  featured: true,
  thumbnail: productImage(slug, "gallery", "01.webp"),
  spinImages: spinImages(slug),
  gallery: ["01.webp", "02.webp", "03.webp"].map((f) => productImage(slug, "gallery", f)),
  feedback: [
    {
      image: productImage(slug, "feedback", "01.webp"),
      customer: "Anh Minh",
      bike: "XSR 155",
      comment: { vi: "Lắp vừa khít, đẹp hơn mong đợi.", en: "Perfect fit, better than expected." },
    },
  ],
  installation: {
    intro: { vi: "Chuẩn bị tua vít và lục giác 5mm.", en: "You will need a screwdriver and a 5mm hex key." },
    steps: [
      { image: productImage(slug, "install", "01.webp"), text: { vi: "Tháo ốp zin.", en: "Remove the stock cover." } },
      { image: productImage(slug, "install", "02.webp"), text: { vi: "Lắp ốp mới và siết ốc.", en: "Fit the new cover and tighten the bolts." } },
    ],
    video: { type: "youtube", src: "YOUTUBE_VIDEO_ID" },
  },
  shopeeUrl: "https://shopee.vn/lotiem",
  sections: ["spin360", "description", "buy", "gallery", "customCta", "feedback", "installation"],
};
