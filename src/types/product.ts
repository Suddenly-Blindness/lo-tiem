import type { Localized } from "./common";

export type PaintColor = "den-bong" | "den-nham" | "den-nham-min";

export type ProductCategory = "op-hong" | "custom" | "op-may" | "op-phuoc" | "combo";

/** Các section có thể có trong trang chi tiết. Thứ tự trong `Product.sections` = thứ tự hiển thị. */
export type ProductSection =
  | "spin360"
  | "summary"
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
  /** Giá ship COD (VND), là giá khởi điểm: có thể tăng theo yêu cầu custom, màu sơn… Giá trên sàn để riêng. Bỏ trống = "Liên hệ" */
  price?: number;
  /** Cần đặt cọc trước (hàng giá trị cao / custom). Khung COD sẽ ghi cọc trước, còn lại trả khi nhận hàng */
  deposit?: boolean;
  thumbnail: string;
  /** 8 ảnh chụp quanh sản phẩm, theo thứ tự xoay */
  spinImages: string[];
  gallery: string[];
  /** Ảnh xe khách đã lắp. Ẩn danh, không kèm nhận xét */
  feedback: string[];
  installation?: ProductInstallation;
  /** Màu sơn có sẵn cho sản phẩm. Bỏ trống = tất cả màu trong data/colors.ts */
  colors?: PaintColor[];
  /** Link sản phẩm trên Shopee. Chỉ hàng phổ biến mới có; bỏ trống = không bán trên Shopee */
  shopeeUrl?: string;
  /** Link sản phẩm trên TikTok Shop. Bỏ trống = không bán trên TikTok Shop */
  tiktokShopUrl?: string;
  sections: ProductSection[];
  /** Tên layout trong components/product-detail/layouts. Bỏ trống = "default" */
  layout?: string;
};
