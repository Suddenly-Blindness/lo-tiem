# Lỏ Tiệm — Yêu cầu ứng dụng

## 1. Tổng quan

**Lỏ Tiệm** chuyên thiết kế và custom handmade đồ cho xe máy. Sản phẩm tiêu biểu:

- Ốp chắn bùn hông
- Ốp máy
- Combo scrambler cho Yamaha XSR 155, MT-15, Exciter, Honda Winner
- Nhận custom thiết kế theo ý tưởng của khách cho nhiều dòng xe khác

Website dùng để **giới thiệu sản phẩm và dịch vụ** (kiểu blog / catalogue). Web **không bán hàng trực tiếp**: không có giỏ hàng, thanh toán hay tài khoản.

Khách muốn mua thì:

- Nhắn qua **Zalo / Facebook / TikTok**
- Hoặc bấm **link Shopee** gắn ở từng sản phẩm

## 2. Yêu cầu chung

| Mục | Yêu cầu |
|---|---|
| Đối tượng | Người Việt |
| Ngôn ngữ | Tiếng Việt (mặc định), Tiếng Anh. Có nút chuyển ngôn ngữ trên header |
| Màu sắc | Đen, trắng, xám. Đơn giản, không dùng màu nhấn khác |
| Responsive | Dùng tốt trên cả desktop và mobile (mobile-first) |
| Kiểu web | Web tĩnh (static export). Không có backend, không có database |
| Nội dung | Ảnh sản phẩm, feedback, mô tả… lưu thẳng trong code (`src/data`, `public/images`). Chủ shop sửa code để cập nhật nội dung |
| Công nghệ | React, Next.js `output: "export"`, TypeScript, Tailwind CSS v4 (giống `timeshel-landing-page`) |

## 3. Danh sách màn hình

| Màn | Route | Ghi chú |
|---|---|---|
| Home | `/` | |
| Danh sách sản phẩm | `/san-pham` | |
| Chi tiết sản phẩm | `/san-pham/[slug]` | Sinh tĩnh từ `src/data/products` qua `generateStaticParams` |
| Custom | `/custom` | |

### 3.1 Thành phần dùng chung

**Header**
- Logo Lỏ Tiệm
- Menu: Trang chủ, Sản phẩm, Custom
- Nút chuyển ngôn ngữ VI / EN
- Trên mobile là menu hamburger

**Footer**
- Thông tin liên hệ: số điện thoại, email
- Địa chỉ
- Bản đồ (Google Maps nhúng iframe)
- Icon mạng xã hội có link: TikTok, Facebook, Zalo, Shopee

### 3.2 Home

1. Header
2. Banner giới thiệu Lỏ Tiệm (ảnh lớn kèm slogan)
3. Danh sách sản phẩm tiêu biểu (các sản phẩm có `featured: true`), kèm link "Xem tất cả" → `/san-pham`
4. Section nổi bật về dịch vụ nhận custom theo yêu cầu, có nút CTA → `/custom`
5. Footer

### 3.3 Danh sách sản phẩm

- Lưới card sản phẩm: ảnh đại diện, tên, dòng xe tương thích
- Lọc theo loại sản phẩm (ốp chắn bùn hông, ốp máy, combo scrambler…) và theo dòng xe (XSR, MT-15, Exciter, Winner…)
- Bấm vào card → trang chi tiết

### 3.4 Chi tiết sản phẩm

Nội dung một sản phẩm:

| Nội dung | Mô tả |
|---|---|
| Tên sản phẩm | vi / en |
| Mô tả | vi / en |
| Xoay giả 3D | 8 ảnh chụp quanh sản phẩm. Kéo chuột / vuốt để xoay |
| Ảnh sản phẩm | Gallery ảnh |
| Ảnh feedback | Ảnh khách đã lắp lên xe, có thể kèm lời nhận xét |
| Hướng dẫn lắp đặt | Section riêng gồm văn bản, ảnh theo từng bước và video |
| Custom / thiết kế cho xe khác | Block nổi bật trong trang: "Muốn làm cho xe khác hoặc thiết kế riêng?" → `/custom` |
| Mua hàng | Các nút Zalo / Facebook / TikTok / Shopee |

**Layout riêng cho từng sản phẩm:** có 2 mức tuỳ biến.

1. `sections`: danh sách section theo thứ tự hiển thị. Muốn bỏ hay đảo vị trí section thì chỉ sửa mảng này.
2. `layout`: chọn bố cục trang. Có sẵn:
   - `default`: đầu trang chia 2 cột (xoay 3D bên trái; mô tả và nút mua bên phải), các section còn lại xếp dọc bên dưới
   - `stacked`: mọi section xếp dọc, full width

   Sản phẩm cần giao diện khác hẳn thì tạo component mới trong `src/components/product-detail/layouts/` và đăng ký vào `layouts/index.ts`.

### 3.5 Custom

- Hướng dẫn quy trình custom: gửi ý tưởng → trao đổi và báo giá → thiết kế → chế tác → giao hàng
- Mô tả các cách gửi yêu cầu custom:
  - Khách tự vẽ phác thảo và gửi ảnh
  - Khách mô tả yêu cầu bằng văn bản
  - Khách gửi ảnh tham khảo hoặc ảnh xe hiện tại
- Gallery các mẫu custom đã làm
- CTA: nhắn Zalo / Facebook / TikTok để gửi yêu cầu. Không có form upload vì web tĩnh không có backend

## 4. Mô hình dữ liệu

Mỗi sản phẩm là một file trong `src/data/products/<slug>.ts`. Ảnh của sản phẩm nằm ở `public/images/products/<slug>/`.

```ts
type Localized = { vi: string; en: string };

type ProductSection =
  | "spin360" | "gallery" | "description" | "feedback"
  | "installation" | "customCta" | "buy";

type Product = {
  slug: string;
  name: Localized;
  shortDescription: Localized;
  description: Localized;
  category: "op-chan-bun-hong" | "op-may" | "combo-scrambler" | "khac";
  bikes: string[];
  featured?: boolean;
  thumbnail: string;
  spinImages: string[];
  gallery: string[];
  feedback: { image: string; customer?: string; bike?: string; comment?: Localized }[];
  installation?: {
    intro?: Localized;
    steps: { image?: string; text: Localized }[];
    video?: { type: "youtube" | "tiktok" | "file"; src: string };
  };
  shopeeUrl?: string;          // link Shopee riêng, bỏ trống thì dùng link shop
  sections: ProductSection[];  // thứ tự hiển thị
  layout?: string;             // "default" | "stacked" | layout tự thêm
};
```

Kiểu dữ liệu đầy đủ ở `src/types/product.ts`. File mẫu: `src/data/products/combo-scrambler-xsr155.ts`.

Dữ liệu khác:

- `src/data/site.ts`: tên shop, slogan, số điện thoại, email, địa chỉ, link nhúng Google Maps, link Zalo / Facebook / TikTok / Shopee
- `src/data/categories.ts`: loại sản phẩm và dòng xe dùng cho bộ lọc
- `src/data/custom.ts`: các mẫu custom đã làm (trang Custom)

Video hướng dẫn nên đăng lên YouTube hoặc TikTok rồi nhúng vào trang, để repo nhẹ. Chỉ đặt file video vào `public/videos` khi file nhỏ.

## 5. Đa ngôn ngữ

Làm theo cách của `myloya` (không dùng route `/en/...`):

- `src/i18n/locales/vi.json` và `en.json` chứa text giao diện
- `LanguageProvider`, `useLanguage()`, `t(key)`
- Ngôn ngữ đã chọn lưu trong `localStorage` (key `lotiem-lang`). Mặc định tiếng Việt
- Metadata SEO (title, description) viết bằng tiếng Việt
- Nội dung sản phẩm dùng field `Localized` ngay trong data

## 6. Quy ước

- Màu khai báo token trong `src/styles/colors.css`, không dùng mã hex trực tiếp trong component
- Kiểu chữ dùng utility class trong `src/styles/typography.css`
- Icon SVG đặt trong `src/components/icons/`, không viết SVG inline trong file màn hình
- Mọi text giao diện phải đi qua `t()`; field nội dung trong data dùng `useLocalized()`
- Font Be Vietnam Pro (có đủ dấu tiếng Việt), nạp bằng `next/font/google`
- Ảnh dùng định dạng `.webp`. Ảnh xoay 3D đặt tên `01.webp` … `08.webp`

## 7. Ngoài phạm vi

- Giỏ hàng, thanh toán, đăng nhập
- CMS hay trang admin
- Form upload hoặc gửi yêu cầu lên server
