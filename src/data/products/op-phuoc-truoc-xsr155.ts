import type { Product } from "@/types";
import { mockImages, mockSpin } from "@/lib/mock-images";
import { mockInstallation } from "@/data/mock-installation";

const slug = "op-phuoc-truoc-xsr155";

// TODO: mô tả, ảnh thật, link Shopee, hướng dẫn lắp đặt
export const opPhuocTruocXsr155: Product = {
  slug,
  name: { vi: "Ốp phuộc trước XSR155", en: "XSR155 front fork covers" },
  shortDescription: {
    vi: "Ốp phuộc trước handmade cho XSR155, che ty phuộc, dáng retro.",
    en: "Handmade front fork covers for the XSR155, retro and protective.",
  },
  description: {
    vi: "Ốp phuộc trước XSR155 bọc phuộc trước, che ty phuộc khỏi bụi bẩn, đá văng và tạo dáng retro cho đầu xe.\n\nSản phẩm do Lỏ Tiệm thiết kế và làm thủ công từng chiếc. Mỗi mẫu đều được lắp thử trên xe thật để chỉnh form cho khít trước khi làm hàng loạt.\n\nĐặc điểm:\n• Thiết kế theo khung xe XSR155, bắt vào các vị trí ốc zin, hạn chế khoan cắt\n• Làm thủ công, kiểm tra độ khít và bề mặt trước khi giao\n• Sơn hoàn thiện đen bóng, đen nhám hoặc đen nhám mịn. Có thể sơn màu khác theo yêu cầu\n• Tự lắp tại nhà với dụng cụ cơ bản, xem hướng dẫn lắp đặt bên dưới\n\nChưa chắc sản phẩm có hợp với xe của bạn không? Nhắn Lỏ Tiệm qua Zalo hoặc Facebook kèm ảnh xe để được tư vấn.",
    en: "The XSR155 front fork covers cover the front forks, shielding the fork tubes from dirt and stones and giving the front a retro look.\n\nEach piece is designed and handmade by Lỏ Tiệm. Every design is test-fitted on a real bike and adjusted until it fits properly before we make more.\n\nFeatures:\n• Designed around the XSR155 frame, mounts to the stock bolt points with little or no drilling\n• Handmade, checked for fit and finish before shipping\n• Painted in gloss black, matte black or fine matte black. Other colours on request\n• Easy to fit at home with basic tools, see the installation guide below\n\nNot sure it suits your bike? Message us on Zalo or Facebook with a photo of your bike and we'll help.",
  },
  category: "op-phuoc",
  bikes: ["XSR155"],
  featured: false,
  price: 1_500_000, // giá ship COD, giá khởi điểm
  // Ảnh mock. Có ảnh thật thì đổi sang: numberedImages(slug, "gallery", <số ảnh>), spinImages(slug)…
  thumbnail: mockImages(1)[0],
  spinImages: mockSpin(),
  gallery: mockImages(3),
  feedback: mockImages(6),
  installation: mockInstallation(), // TODO: thay bằng hướng dẫn thật (xem file combo-scrambler-classic-xsr155.ts)
  // Không bán trên sàn, khách nhắn shop để đặt. Có bán thì thêm shopeeUrl / tiktokShopUrl
  sections: ["spin360", "summary", "description", "buy", "gallery", "customCta", "feedback", "installation"],
};
