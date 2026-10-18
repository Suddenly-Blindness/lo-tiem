import type { Product } from "@/types";
import { mockImages, mockSpin } from "@/lib/mock-images";
import { mockInstallation } from "@/data/mock-installation";

const slug = "op-hong-exciter155";

// TODO: mô tả, ảnh thật, link Shopee, hướng dẫn lắp đặt
export const opHongExciter155: Product = {
  slug,
  name: { vi: "Ốp hông chắn bùn Exciter 155", en: "Exciter 155 side fender covers" },
  shortDescription: {
    vi: "Chắn bùn hông handmade cho Exciter 155, gọn hông xe, đỡ bùn đất.",
    en: "Handmade side fender covers for the Exciter 155 that keep the side clean and mud-free.",
  },
  description: {
    vi: "Ốp hông chắn bùn Exciter 155 thay cho chắn bùn hông zin, che gọn phần hông và hạn chế bùn đất văng lên thân xe khi đi trời mưa.\n\nSản phẩm do Lỏ Tiệm thiết kế và làm thủ công từng chiếc. Mỗi mẫu đều được lắp thử trên xe thật để chỉnh form cho khít trước khi làm hàng loạt.\n\nĐặc điểm:\n• Thiết kế theo khung xe Exciter 155, bắt vào các vị trí ốc zin, hạn chế khoan cắt\n• Làm thủ công, kiểm tra độ khít và bề mặt trước khi giao\n• Sơn hoàn thiện đen bóng, đen nhám hoặc đen nhám mịn. Có thể sơn màu khác theo yêu cầu\n• Tự lắp tại nhà với dụng cụ cơ bản, xem hướng dẫn lắp đặt bên dưới\n\nChưa chắc sản phẩm có hợp với xe của bạn không? Nhắn Lỏ Tiệm qua Zalo hoặc Facebook kèm ảnh xe để được tư vấn.",
    en: "The Exciter 155 side fender covers replace the stock side fender, tidying up the side of the bike and keeping mud off the body in the rain.\n\nEach piece is designed and handmade by Lỏ Tiệm. Every design is test-fitted on a real bike and adjusted until it fits properly before we make more.\n\nFeatures:\n• Designed around the Exciter 155 frame, mounts to the stock bolt points with little or no drilling\n• Handmade, checked for fit and finish before shipping\n• Painted in gloss black, matte black or fine matte black. Other colours on request\n• Easy to fit at home with basic tools, see the installation guide below\n\nNot sure it suits your bike? Message us on Zalo or Facebook with a photo of your bike and we'll help.",
  },
  category: "op-hong",
  bikes: ["Exciter 155"],
  featured: true,
  price: 500_000, // giá ship COD, giá khởi điểm
  // Ảnh mock. Có ảnh thật thì đổi sang: numberedImages(slug, "gallery", <số ảnh>), spinImages(slug)…
  thumbnail: mockImages(1)[0],
  spinImages: mockSpin(),
  gallery: mockImages(3),
  feedback: mockImages(6),
  installation: mockInstallation(), // TODO: thay bằng hướng dẫn thật (xem file combo-scrambler-classic-xsr155.ts)
  // Link sàn (mock). Chỉ hàng phổ biến mới bán trên sàn; bỏ 2 dòng này nếu sản phẩm chỉ bán qua tin nhắn
  shopeeUrl: "https://shopee.vn/product/SHOP_ID/ITEM_ID",
  tiktokShopUrl: "https://shop.tiktok.com/view/product/PRODUCT_ID",
  sections: ["spin360", "summary", "description", "buy", "gallery", "customCta", "feedback", "installation"],
};
