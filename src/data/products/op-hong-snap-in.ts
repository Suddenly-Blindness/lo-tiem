import type { Product } from "@/types";
import { mockImages, mockSpin } from "@/lib/mock-images";
import { mockInstallation } from "@/data/mock-installation";

const slug = "op-hong-snap-in";

// TODO: mô tả, ảnh thật, link Shopee, hướng dẫn lắp đặt
export const opHongSnapIn: Product = {
  slug,
  name: { vi: "Ốp hông snap-in (custom theo yêu cầu)", en: "Snap-in side covers (made to order)" },
  shortDescription: {
    vi: "Ốp hông cài ngàm, tháo lắp nhanh, làm theo yêu cầu cho nhiều dòng xe.",
    en: "Clip-on side covers, quick to fit and remove, made to order for many bikes.",
  },
  description: {
    vi: "Ốp hông snap-in (custom theo yêu cầu) kiểu snap-in, cài vào khung bằng ngàm nên tháo lắp nhanh. Mẫu này nhận làm theo yêu cầu: Lỏ Tiệm đo theo xe của bạn rồi thiết kế form riêng.\n\nSản phẩm do Lỏ Tiệm thiết kế và làm thủ công từng chiếc. Mỗi mẫu đều được lắp thử trên xe thật để chỉnh form cho khít trước khi làm hàng loạt.\n\nĐặc điểm:\n• Đo và thiết kế theo từng xe, cài ngàm vào khung, hạn chế khoan cắt\n• Làm thủ công, kiểm tra độ khít và bề mặt trước khi giao\n• Sơn hoàn thiện đen bóng, đen nhám hoặc đen nhám mịn. Có thể sơn màu khác theo yêu cầu\n• Tự lắp tại nhà với dụng cụ cơ bản, xem hướng dẫn lắp đặt bên dưới\n\nChưa chắc sản phẩm có hợp với xe của bạn không? Nhắn Lỏ Tiệm qua Zalo hoặc Facebook kèm ảnh xe để được tư vấn.",
    en: "The Snap-in side covers (made to order) snap onto the frame with clips, so they come off and go back on quickly. They are made to order: we measure your bike and design the shape for it.\n\nEach piece is designed and handmade by Lỏ Tiệm. Every design is test-fitted on a real bike and adjusted until it fits properly before we make more.\n\nFeatures:\n• Measured and shaped for each bike, clips onto the frame with little or no drilling\n• Handmade, checked for fit and finish before shipping\n• Painted in gloss black, matte black or fine matte black. Other colours on request\n• Easy to fit at home with basic tools, see the installation guide below\n\nNot sure it suits your bike? Message us on Zalo or Facebook with a photo of your bike and we'll help.",
  },
  category: "custom",
  bikes: [], // làm theo yêu cầu cho nhiều dòng xe
  featured: true,
  price: 500_000, // giá ship COD, giá khởi điểm
  deposit: true, // hàng giá trị cao / custom: cọc trước
  // Ảnh mock. Có ảnh thật thì đổi sang: numberedImages(slug, "gallery", <số ảnh>), spinImages(slug)…
  thumbnail: mockImages(1)[0],
  spinImages: mockSpin(),
  gallery: mockImages(3),
  feedback: mockImages(6),
  installation: mockInstallation(), // TODO: thay bằng hướng dẫn thật (xem file combo-scrambler-classic-xsr155.ts)
  // Không bán trên sàn, khách nhắn shop để đặt. Có bán thì thêm shopeeUrl / tiktokShopUrl
  sections: ["spin360", "summary", "description", "buy", "customCta", "gallery", "feedback", "installation"],
};
