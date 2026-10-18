import type { Product } from "@/types";
import { mockImages, mockSpin } from "@/lib/mock-images";
import { mockInstallation } from "@/data/mock-installation";

const slug = "op-hong-mt15";

// TODO: mô tả, ảnh thật, link Shopee, hướng dẫn lắp đặt
export const opHongMt15: Product = {
  slug,
  name: { vi: "Ốp hông MT-15", en: "MT-15 side covers" },
  shortDescription: {
    vi: "Ốp hông handmade cho MT-15, đường nét gọn và hầm hố hơn.",
    en: "Handmade side covers for the MT-15 with a sharper, more aggressive line.",
  },
  description: {
    vi: "Ốp hông MT-15 thay cho ốp hông zin, tạo đường nét gọn gàng và hầm hố hơn cho phần hông xe.\n\nSản phẩm do Lỏ Tiệm thiết kế và làm thủ công từng chiếc. Mỗi mẫu đều được lắp thử trên xe thật để chỉnh form cho khít trước khi làm hàng loạt.\n\nĐặc điểm:\n• Thiết kế theo khung xe MT-15, bắt vào các vị trí ốc zin, hạn chế khoan cắt\n• Làm thủ công, kiểm tra độ khít và bề mặt trước khi giao\n• Sơn hoàn thiện đen bóng, đen nhám hoặc đen nhám mịn. Có thể sơn màu khác theo yêu cầu\n• Tự lắp tại nhà với dụng cụ cơ bản, xem hướng dẫn lắp đặt bên dưới\n\nChưa chắc sản phẩm có hợp với xe của bạn không? Nhắn Lỏ Tiệm qua Zalo hoặc Facebook kèm ảnh xe để được tư vấn.",
    en: "The MT-15 side covers replace the stock side covers, giving the side of the bike a sharper, more aggressive line.\n\nEach piece is designed and handmade by Lỏ Tiệm. Every design is test-fitted on a real bike and adjusted until it fits properly before we make more.\n\nFeatures:\n• Designed around the MT-15 frame, mounts to the stock bolt points with little or no drilling\n• Handmade, checked for fit and finish before shipping\n• Painted in gloss black, matte black or fine matte black. Other colours on request\n• Easy to fit at home with basic tools, see the installation guide below\n\nNot sure it suits your bike? Message us on Zalo or Facebook with a photo of your bike and we'll help.",
  },
  category: "op-hong",
  bikes: ["MT-15"],
  featured: false,
  price: 500_000, // giá ship COD, giá khởi điểm
  // Ảnh mock. Có ảnh thật thì đổi sang: numberedImages(slug, "gallery", <số ảnh>), spinImages(slug)…
  thumbnail: mockImages(1)[0],
  spinImages: mockSpin(),
  gallery: mockImages(3),
  feedback: mockImages(6),
  installation: mockInstallation(), // TODO: thay bằng hướng dẫn thật (xem file combo-scrambler-classic-xsr155.ts)
  // Không bán trên sàn, khách nhắn shop để đặt. Có bán thì thêm shopeeUrl / tiktokShopUrl
  sections: ["spin360", "summary", "description", "buy", "gallery", "customCta", "feedback", "installation"],
};
