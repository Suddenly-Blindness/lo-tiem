import type { Localized } from "./common";

export type PaintColor = "den-bong" | "den-nham" | "den-nham-min";

export type ProductCategory = "op-hong" | "custom" | "op-may" | "op-phuoc" | "combo";

/** Các section có thể có trong trang chi tiết. Thứ tự trong `Product.sections` = thứ tự hiển thị. */
export type ProductSection =
  | "spin360"
  | "description"
  | "gallery"
  | "feedback"
  | "installation"
  | "customCta"
  | "buy";

export type InstallVideo = {
  /** youtube: id video; tiktok: id video; file: đường dẫn trong public/videos */
  type: "youtube" | "tiktok" | "file";
  src: string;
};

export type ProductInstallation = {
  intro?: Localized;
  steps: { image?: string; text: Localized }[];
  video?: InstallVideo;
};

export type Product = {
  slug: string;
  name: Localized;
  shortDescription: Localized;
  description: Localized;
  category: ProductCategory;
  /** Dòng xe tương thích, ví dụ "XSR155", "MT-15". Để trống = làm được cho nhiều dòng xe */
  bikes: string[];
  featured?: boolean;
  thumbnail: string;
  /** 8 ảnh chụp quanh sản phẩm, theo thứ tự xoay */
  spinImages: string[];
  gallery: string[];
  /** Ảnh xe khách đã lắp. Ẩn danh, không kèm nhận xét */
  feedback: string[];
  installation?: ProductInstallation;
  /** Màu sơn có sẵn cho sản phẩm. Bỏ trống = tất cả màu trong data/colors.ts */
  colors?: PaintColor[];
  shopeeUrl?: string;
  sections: ProductSection[];
  /** Tên layout trong components/product-detail/layouts. Bỏ trống = "default" */
  layout?: string;
};
