import type { Product } from "@/types";
import { mockImages, mockSpin } from "@/lib/mock-images";

const slug = "combo-scrambler-classic-xsr155";

// Sản phẩm mẫu đầy đủ các phần (kể cả hướng dẫn lắp đặt). Copy file này khi thêm sản phẩm mới.
export const comboScramblerClassicXsr155: Product = {
  slug,
  name: { vi: "Combo Scrambler Classic (XSR155)", en: "Scrambler Classic Kit (XSR155)" },
  shortDescription: {
    vi: "Bộ phụ kiện đồng bộ biến XSR155 sang phong cách scrambler classic.",
    en: "A matching parts kit that turns the XSR155 into a classic scrambler.",
  },
  description: {
    vi: "Combo Scrambler Classic (XSR155) là bộ phụ kiện đồng bộ gồm nhiều món, biến XSR155 sang phong cách scrambler classic chỉ trong một lần lắp.\n\nSản phẩm do Lỏ Tiệm thiết kế và làm thủ công từng chiếc. Mỗi mẫu đều được lắp thử trên xe thật để chỉnh form cho khít trước khi làm hàng loạt.\n\nĐặc điểm:\n• Thiết kế theo khung xe XSR155, bắt vào các vị trí ốc zin, hạn chế khoan cắt\n• Làm thủ công, kiểm tra độ khít và bề mặt trước khi giao\n• Sơn hoàn thiện đen bóng, đen nhám hoặc đen nhám mịn. Có thể sơn màu khác theo yêu cầu\n• Tự lắp tại nhà với dụng cụ cơ bản, xem hướng dẫn lắp đặt bên dưới\n\nChưa chắc sản phẩm có hợp với xe của bạn không? Nhắn Lỏ Tiệm qua Zalo hoặc Facebook kèm ảnh xe để được tư vấn.",
    en: "The Scrambler Classic Kit (XSR155) is a matching set of parts that turns your XSR155 into a classic scrambler in a single fitting.\n\nEach piece is designed and handmade by Lỏ Tiệm. Every design is test-fitted on a real bike and adjusted until it fits properly before we make more.\n\nFeatures:\n• Designed around the XSR155 frame, mounts to the stock bolt points with little or no drilling\n• Handmade, checked for fit and finish before shipping\n• Painted in gloss black, matte black or fine matte black. Other colours on request\n• Easy to fit at home with basic tools, see the installation guide below\n\nNot sure it suits your bike? Message us on Zalo or Facebook with a photo of your bike and we'll help.",
  },
  category: "combo",
  bikes: ["XSR155"],
  featured: true,
  // Ảnh mock. Có ảnh thật thì đổi sang: numberedImages(slug, "gallery", <số ảnh>), spinImages(slug)…
  thumbnail: mockImages(1)[0],
  spinImages: mockSpin(),
  gallery: mockImages(3),
  feedback: mockImages(6),
  installation: {
    intro: { vi: "Chuẩn bị tua vít và lục giác 5mm.", en: "You will need a screwdriver and a 5mm hex key." },
    steps: [
      { image: mockImages(2)[0], text: { vi: "Tháo ốp zin.", en: "Remove the stock cover." } },
      { image: mockImages(2)[1], text: { vi: "Lắp ốp mới và siết ốc.", en: "Fit the new cover and tighten the bolts." } },
    ],
    // YouTube: id video sau "v=". TikTok: dãy số cuối link video
    video: { type: "youtube", src: "YOUTUBE_VIDEO_ID" },
  },
  // shopeeUrl: "https://shopee.vn/...", // link riêng của sản phẩm, bỏ trống thì dùng link shop
  sections: ["spin360", "description", "buy", "gallery", "customCta", "feedback", "installation"],
};
