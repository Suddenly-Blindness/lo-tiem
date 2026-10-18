import type { ProductInstallation } from "@/types";
import { mockImages } from "@/lib/mock-images";

/** Hướng dẫn lắp đặt mẫu cho sản phẩm chưa có hướng dẫn thật */
export const mockInstallation = (): ProductInstallation => ({
  intro: {
    vi: "Chuẩn bị tua vít và bộ lục giác. Thời gian lắp khoảng 15–30 phút.",
    en: "You will need a screwdriver and a hex key set. Fitting takes about 15–30 minutes.",
  },
  steps: [
    { image: mockImages(1)[0], text: { vi: "Tháo ốp zin.", en: "Remove the stock part." } },
    { image: mockImages(1)[0], text: { vi: "Đặt sản phẩm vào đúng vị trí.", en: "Put the new part in place." } },
    { image: mockImages(1)[0], text: { vi: "Siết ốc và kiểm tra lại.", en: "Tighten the bolts and check the fit." } },
  ],
});
