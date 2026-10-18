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

Khách muốn mua thì có 2 cách:

| Cách mua | Áp dụng | Ghi chú |
|---|---|---|
| Nhắn shop qua **Zalo / Facebook / TikTok**, ship **COD** (nhận hàng rồi trả tiền) | Mọi sản phẩm, kể cả hàng custom | Giá tốt nhất (rẻ hơn trên sàn, nhưng trên web chỉ ghi "giá tốt nhất", không so sánh với sàn). Là cách mua được ưu tiên trên web |
| Mua trên **Shopee / TikTok Shop** | Chỉ các sản phẩm phổ biến | Sản phẩm ít phổ biến và hàng custom không có trên sàn, khách phải nhắn shop |

Giá: web hiển thị **giá ship COD**, là giá khởi điểm ("Từ 500.000 ₫"). Giá có thể tăng theo yêu cầu custom, màu sơn…, khách nhắn shop để được tư vấn. Giá trên sàn khác giá COD và không hiển thị trên web. Mức giá hiện tại: các loại ốp hông từ 500.000 ₫; đầu đèn, ốp máy, ốp phuộc trước từ 1.500.000 ₫; ốp phuộc kèm dè phụ, combo từ 2.000.000 ₫.

Đặt cọc: một số món giá trị cao và hàng custom phải đặt cọc trước (field `deposit`). Với các món này, khung COD ghi "Đặt cọc trước, phần còn lại thanh toán khi nhận hàng." thay cho "nhận hàng rồi mới thanh toán". Trang Custom ghi rõ hàng custom cần đặt cọc trước khi làm. Hiện đánh dấu cọc: Ốp hông snap-in, Đầu đèn XSR155, Ốp phuộc kèm dè phụ, Combo Scrambler Classic.

Chính sách của shop:

- Lắp đặt miễn phí tận nơi tại Hà Nội
- Đổi trả nếu sản phẩm bị lỗi

**TikTok** và **TikTok Shop** là hai kênh khác nhau:

- **TikTok**: trang TikTok của shop, để khách xem video và nhắn tin. Một link chung cho cả shop (`src/data/site.ts`)
- **TikTok Shop**: gian hàng trên sàn, để mua sản phẩm. Mỗi sản phẩm có link riêng (`tiktokShopUrl`), như Shopee (`shopeeUrl`)

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
- Trên mobile là menu hamburger. Nút VI / EN nằm ngoài menu, cạnh nút hamburger

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

- Lưới card sản phẩm: ảnh đại diện, tên (đậm), dòng xe tương thích, giá COD ("Từ …", chữ thường cỡ nhỏ màu xám để không tranh với tên)
- Lọc theo nhóm sản phẩm (Ốp hông / chắn bùn hông, Custom, Ốp máy, Ốp phuộc, Combo) và theo dòng xe (XSR155, Exciter 155, MT-15, Winner, FZ150i)
- Thứ tự nhóm trên bộ lọc giống thứ tự ở mục 4.1
- Bấm vào card → trang chi tiết
- Cuối danh sách (kể cả khi lọc không ra sản phẩm nào) có dòng gợi ý: "Không tìm thấy sản phẩm bạn muốn?" kèm nút "Gửi yêu cầu custom" → `/custom`

### 3.4 Chi tiết sản phẩm

Nội dung một sản phẩm:

| Nội dung | Mô tả |
|---|---|
| Tên sản phẩm | vi / en |
| Giá | Giá COD dạng "Từ 500.000 ₫" dưới tên. Chưa có giá thì hiện "Liên hệ". Khung COD ở phần mua hàng nhắc lại giá, kèm ghi chú "Giá có thể thay đổi theo yêu cầu custom, màu sơn…" (không lặp ý đã có ở tiêu đề khung). Không ghi gì về giá trên sàn |
| Mô tả | vi / en. Gồm mô tả ngắn (1 câu, hiện trên đầu trang) và mô tả chi tiết nhiều đoạn (công dụng, đặc điểm, gợi ý liên hệ tư vấn) |
| Màu sơn | Ô màu cho từng màu có sẵn (đen bóng, đen nhám, đen nhám mịn) kèm tên màu, và ô "Màu khác theo yêu cầu" dẫn sang `/custom`. Mặc định sản phẩm có đủ 3 màu, có thể giới hạn bằng field `colors` |
| Xoay giả 3D | 8 ảnh chụp quanh sản phẩm. Kéo chuột / vuốt để xoay |
| Ảnh sản phẩm | Gallery ảnh, bấm vào để phóng to (mục 3.6) |
| Ảnh feedback | Ảnh xe khách đã lắp sản phẩm, thường nhiều ảnh. Ẩn danh: không ghi tên khách, không có lời nhận xét. Hiển thị dạng lưới ảnh, bấm vào để phóng to |
| Hướng dẫn lắp đặt | Section riêng gồm văn bản, ảnh theo từng bước và video |
| Custom / thiết kế cho xe khác | Block nổi bật trong trang: "Muốn làm cho xe khác hoặc thiết kế riêng?" → `/custom` |
| Mua hàng | 2 khung. Khung "Ship COD (giá tốt nhất)" nổi bật nhất (nền đen, nút trắng đặc) để khách ưu tiên chọn: giá, ghi chú giá, cách thanh toán (COD hoặc cọc trước), nút Zalo / Facebook / TikTok. Nếu có link sàn: khung "Hoặc mua trên sàn" (nền trắng, viền mảnh) với nút Shopee / TikTok Shop. Nếu không có link sàn: không có tiêu đề hay khung, chỉ một dòng "Sản phẩm này không bán trên Shopee / TikTok Shop. Nhắn shop để đặt hàng ship COD.", ngăn với chính sách bên dưới bằng đường kẻ (cả mobile và desktop). Mobile: 2 khung xếp dọc, chính sách ở dưới. Desktop: trái là khung COD, phải là phần mua trên sàn (không khung) và chính sách ngay bên dưới, cách bằng đường kẻ. Chính sách shop có icon: lắp đặt miễn phí tận nơi tại Hà Nội, đổi trả nếu sản phẩm bị lỗi |

**Layout riêng cho từng sản phẩm:** có 2 mức tuỳ biến.

1. `sections`: danh sách section theo thứ tự hiển thị. Muốn bỏ hay đảo vị trí section thì chỉ sửa mảng này.
2. `layout`: chọn bố cục trang. Có sẵn:
   - `default`: đầu trang chia 2 cột: xoay 3D bên trái (desktop: dính màn hình khi cuộn), bên phải là tóm tắt (`summary`: dòng xe, tên, mô tả ngắn, màu sơn), căn giữa theo chiều dọc. Hàng 2 cột này gồm các section nhỏ (`spin360`, `summary`, `buy`) đứng liền nhau ở đầu `sections`. Mô tả chi tiết (`description`) là section riêng rộng hết khung như các section khác, để mô tả dài không làm cột phải dài hơn hẳn cột ảnh. Chữ một cột. Mặc định khối mua hàng và chính sách (`buy`) nằm ngay dưới mô tả, cũng là section chuẩn nền xám (tiêu đề lớn, rộng hết khung, khung COD nền trắng): desktop chia 2 cột, trái là khung nhắn shop / COD, phải là mua trên sàn và chính sách. Các section còn lại xếp dọc theo thứ tự trong `sections`
   - `stacked`: mọi section xếp dọc, full width

   Sản phẩm cần giao diện khác hẳn thì tạo component mới trong `src/components/product-detail/layouts/` và đăng ký vào `layouts/index.ts`.

### 3.5 Custom

- Hướng dẫn quy trình custom: gửi ý tưởng → trao đổi và báo giá → thiết kế → chế tác → giao hàng. Mỗi bước là một ô vuông vức nền xám nhạt: tên bước ở chính giữa, số thứ tự to màu trắng ở góc phải dưới (bị cắt bớt ở mép ô), không có mô tả. Mobile: lưới 2 cột, ô lẻ ở hàng cuối căn trái. Màn hình từ 640px là 3 cột, hàng cuối căn giữa. Không có mũi tên. Desktop: 5 ô trên một hàng, nối bằng mũi tên `>`
- Mô tả các cách gửi yêu cầu custom:
  - Khách tự vẽ phác thảo và gửi ảnh
  - Khách mô tả yêu cầu bằng văn bản
  - Khách gửi ảnh tham khảo hoặc ảnh xe hiện tại
- Danh sách sản phẩm thuộc nhóm Custom (`category: "custom"`, hiện có Ốp hông snap-in và Đầu đèn XSR155), dùng chung card với trang danh sách sản phẩm, bấm vào là sang trang chi tiết. Không có gallery ảnh rời: mẫu custom nào muốn giới thiệu thì tạo thành sản phẩm
- CTA: nhắn Zalo / Facebook / TikTok để gửi yêu cầu (hàng custom không bán trên sàn). Không có form upload vì web tĩnh không có backend

### 3.6 Xem ảnh phóng to

Mọi ảnh nội dung đều bấm vào được để xem phóng to: gallery sản phẩm, ảnh feedback, ảnh các bước lắp đặt. Không áp dụng cho ảnh xoay 3D (đã dùng thao tác kéo để xoay) và ảnh banner.

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
  | "spin360" | "summary" | "description" | "gallery" | "feedback"
  | "installation" | "customCta" | "buy";

type Product = {
  slug: string;
  name: Localized;
  shortDescription: Localized;
  description: Localized;
  category: "op-hong" | "custom" | "op-may" | "op-phuoc" | "combo";
  bikes: string[];
  featured?: boolean;
  price?: number;              // giá ship COD (VND), giá khởi điểm. Bỏ trống = "Liên hệ"
  deposit?: boolean;           // cần đặt cọc trước (hàng giá trị cao / custom)
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
  shopeeUrl?: string;          // link sản phẩm trên Shopee, bỏ trống = không bán trên Shopee
  tiktokShopUrl?: string;      // link sản phẩm trên TikTok Shop, bỏ trống = không bán trên TikTok Shop
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
