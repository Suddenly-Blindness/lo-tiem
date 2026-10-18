import type { Localized } from "./common";

export type ProductCategory = "op-chan-bun-hong" | "op-may" | "combo-scrambler" | "khac";

/** Các section có thể có trong trang chi tiết. Thứ tự trong `Product.sections` = thứ tự hiển thị. */
export type ProductSection =
  | "spin360"
  | "description"
  | "gallery"
  | "feedback"
  | "installation"
  | "customCta"
  | "buy";

export type ProductFeedback = {
  image: string;
  customer?: string;
  bike?: string;
  comment?: Localized;
};

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
  /** Dòng xe tương thích, ví dụ "XSR 155", "MT-15" */
  bikes: string[];
  featured?: boolean;
  thumbnail: string;
  /** 8 ảnh chụp quanh sản phẩm, theo thứ tự xoay */
  spinImages: string[];
  gallery: string[];
  feedback: ProductFeedback[];
  installation?: ProductInstallation;
  shopeeUrl?: string;
  sections: ProductSection[];
  /** Tên layout trong components/product-detail/layouts. Bỏ trống = "default" */
  layout?: string;
};
