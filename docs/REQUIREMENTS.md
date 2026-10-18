# Lỏ Tiệm — Yêu cầu ứng dụng

## 1. Tổng quan

**Lỏ Tiệm** chuyên thiết kế và custom handmade đồ cho xe máy. Sản phẩm tiêu biểu:

- Ốp hông / chắn bùn hông cho XSR155, Exciter 155, MT-15, Honda Winner, FZ150i
- Ốp máy, ốp phuộc cho XSR155
- Combo scrambler cho XSR155
- Nhận custom thiết kế theo ý tưởng của khách cho nhiều dòng xe khác

Màu sơn có sẵn: **đen bóng, đen nhám, đen nhám mịn**. Ngoài ra nhận sơn màu khác theo yêu cầu của khách.

Danh sách sản phẩm ban đầu xem ở mục [4.1](#41-danh-sách-sản-phẩm-ban-đầu).

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
- Lọc theo nhóm sản phẩm (Ốp hông / chắn bùn hông, Custom, Ốp máy, Ốp phuộc, Combo) và theo dòng xe (XSR155, Exciter 155, MT-15, Winner, FZ150i)
- Thứ tự nhóm trên bộ lọc giống thứ tự ở mục 4.1
- Bấm vào card → trang chi tiết

### 3.4 Chi tiết sản phẩm

Nội dung một sản phẩm:

| Nội dung | Mô tả |
|---|---|
| Tên sản phẩm | vi / en |
| Mô tả | vi / en. Gồm mô tả ngắn (1 câu, hiện trên đầu trang) và mô tả chi tiết nhiều đoạn (công dụng, đặc điểm, gợi ý liên hệ tư vấn) |
| Màu sơn | Ô màu cho từng màu có sẵn (đen bóng, đen nhám, đen nhám mịn) kèm tên màu, và ô "Màu khác theo yêu cầu" dẫn sang `/custom`. Mặc định sản phẩm có đủ 3 màu, có thể giới hạn bằng field `colors` |
| Xoay giả 3D | 8 ảnh chụp quanh sản phẩm. Kéo chuột / vuốt để xoay |
| Ảnh sản phẩm | Gallery ảnh, bấm vào để phóng to (mục 3.6) |
| Ảnh feedback | Ảnh xe khách đã lắp sản phẩm, thường nhiều ảnh. Ẩn danh: không ghi tên khách, không có lời nhận xét. Hiển thị dạng lưới ảnh, bấm vào để phóng to |
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

### 3.6 Xem ảnh phóng to

Mọi ảnh nội dung đều bấm vào được để xem phóng to: gallery sản phẩm, ảnh feedback, ảnh các bước lắp đặt, ảnh mẫu custom. Không áp dụng cho ảnh xoay 3D (đã dùng thao tác kéo để xoay) và ảnh banner.

- Bấm ảnh → mở lớp xem ảnh toàn màn hình, nền đen
- Chuyển ảnh trước / sau trong cùng nhóm: nút mũi tên, phím ← →, vuốt ngang trên mobile
- Phóng to thêm: chụm 2 ngón trên mobile, nhấp đúp hoặc cuộn chuột trên desktop
- Hiện số thứ tự ảnh (ví dụ `3 / 12`)
- Đóng: nút X, phím Esc, hoặc bấm ra ngoài ảnh
- Khi đang mở, trang phía sau không cuộn được

## 4. Mô hình dữ liệu

Mỗi sản phẩm là một file trong `src/data/products/<slug>.ts`. Ảnh của sản phẩm nằm ở `public/images/products/<slug>/`.

```ts
type Localized = { vi: string; en: string };

type PaintColor = "den-bong" | "den-nham" | "den-nham-min";

type ProductSection =
  | "spin360" | "gallery" | "description" | "feedback"
  | "installation" | "customCta" | "buy";

type Product = {
  slug: string;
  name: Localized;
  shortDescription: Localized;
  description: Localized;
  category: "op-hong" | "custom" | "op-may" | "op-phuoc" | "combo";
  bikes: string[];
  featured?: boolean;
  thumbnail: string;
  spinImages: string[];
  gallery: string[];
  feedback: string[];          // ảnh xe khách, ẩn danh, không nhận xét
  installation?: {
    intro?: Localized;
    steps: { image?: string; text: Localized }[];
    video?: { type: "youtube" | "tiktok" | "file"; src: string };
  };
  colors?: PaintColor[];       // bỏ trống = đủ 3 màu
  shopeeUrl?: string;          // link Shopee riêng, bỏ trống thì dùng link shop
  sections: ProductSection[];  // thứ tự hiển thị
  layout?: string;             // "default" | "stacked" | layout tự thêm
};
```

Kiểu dữ liệu đầy đủ ở `src/types/product.ts`. File mẫu: `src/data/products/combo-scrambler-classic-xsr155.ts`.

### 4.1 Danh sách sản phẩm ban đầu

Lấy theo danh mục trên TikTok của shop. Thứ tự nhóm và thứ tự sản phẩm trong nhóm là thứ tự hiển thị.

| Nhóm (`category`) | Sản phẩm | `slug` | Dòng xe (`bikes`) |
|---|---|---|---|
| Ốp hông / chắn bùn hông (`op-hong`) | Ốp hông XSR155 | `op-hong-xsr155` | XSR155 |
| | Ốp hông chắn bùn Exciter 155 | `op-hong-exciter155` | Exciter 155 |
| | Ốp hông MT-15 | `op-hong-mt15` | MT-15 |
| | Ốp hông chắn bùn Honda Winner | `op-hong-winner` | Winner |
| | Ốp hông chắn bùn FZ150i | `op-hong-fz150i` | FZ150i |
| Custom (`custom`) | Ốp hông snap-in (custom theo yêu cầu) | `op-hong-snap-in` | Nhiều dòng xe |
| | Đầu đèn XSR155 | `dau-den-xsr155` | XSR155 |
| Ốp máy (`op-may`) | Ốp máy XSR155 | `op-may-xsr155` | XSR155 |
| Ốp phuộc (`op-phuoc`) | Ốp phuộc kèm dè phụ XSR155 | `op-phuoc-de-phu-xsr155` | XSR155 |
| | Ốp phuộc trước XSR155 | `op-phuoc-truoc-xsr155` | XSR155 |
| Combo (`combo`) | Combo Scrambler Classic (XSR155) | `combo-scrambler-classic-xsr155` | XSR155 |

Tên tiếng Anh, mô tả, ảnh, link Shopee và sản phẩm tiêu biểu (`featured`) do chủ shop bổ sung.

Nhãn nhóm hiển thị trên web:

| `category` | vi | en |
|---|---|---|
| `op-hong` | Ốp hông / chắn bùn hông | Side covers / side fenders |
| `custom` | Custom | Custom |
| `op-may` | Ốp máy | Engine covers |
| `op-phuoc` | Ốp phuộc | Fork covers |
| `combo` | Combo | Combo kits |

"Ốp hông snap-in" là sản phẩm nhận làm theo yêu cầu cho nhiều dòng xe: trang chi tiết nên đặt block custom (`customCta`) ở vị trí nổi bật, ngay sau phần mô tả.

Dữ liệu khác:

- `src/data/site.ts`: tên shop, slogan, số điện thoại, email, địa chỉ, link nhúng Google Maps, link Zalo / Facebook / TikTok / Shopee
- `src/data/categories.ts`: nhóm sản phẩm và dòng xe dùng cho bộ lọc (XSR155, Exciter 155, MT-15, Winner, FZ150i)
- `src/data/colors.ts`: danh sách màu sơn có sẵn (tên vi / en)
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
- Ảnh dùng định dạng `.webp`. Ảnh xoay 3D đặt tên `01.webp` … `08.webp`. Ảnh feedback đặt tên theo số thứ tự `01.webp`, `02.webp`…

## 7. Ngoài phạm vi

- Giỏ hàng, thanh toán, đăng nhập
- CMS hay trang admin
- Form upload hoặc gửi yêu cầu lên server
