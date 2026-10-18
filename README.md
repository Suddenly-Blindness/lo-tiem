# Lỏ Tiệm

Web tĩnh giới thiệu sản phẩm custom handmade cho xe máy. Yêu cầu chi tiết xem ở [docs/REQUIREMENTS.md](docs/REQUIREMENTS.md).

Next.js 16 (`output: "export"`), React 19, TypeScript, Tailwind CSS v4.

## Chạy

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # xuất web tĩnh ra out/, upload thư mục này lên host
```

## Cấu trúc thư mục

```
lo-tiem/
├── docs/REQUIREMENTS.md
├── public/
│   ├── fonts/
│   ├── icons/social/
│   ├── videos/                       Video hướng dẫn (chỉ file nhỏ)
│   └── images/
│       ├── mock/                     Ảnh tạm dùng chung khi chưa có ảnh thật
│       ├── brand/                    Logo
│       ├── home/                     banner.webp, custom.webp
│       └── products/<slug>/
│           ├── spin/                 01.webp … 08.webp (xoay giả 3D)
│           ├── gallery/              Ảnh sản phẩm
│           ├── feedback/             Ảnh feedback của khách
│           └── install/              Ảnh các bước lắp đặt
└── src/
    ├── app/
    │   ├── layout.tsx                Font, LanguageProvider, Header, Footer
    │   ├── page.tsx                  Home
    │   ├── not-found.tsx
    │   ├── san-pham/page.tsx         Danh sách sản phẩm
    │   ├── san-pham/[slug]/page.tsx  Chi tiết sản phẩm (sinh tĩnh)
    │   └── custom/page.tsx           Trang custom
    ├── components/
    │   ├── layout/                   Header, Footer, LanguageToggle, SocialLinks
    │   ├── ui/                       Button, Container, Section, ImageBox, Lightbox
    │   ├── icons/                    Icon Zalo, Facebook, TikTok, Shopee
    │   ├── home/                     Banner, FeaturedProducts, CustomHighlight
    │   ├── product-list/             ProductListView, ProductFilter, ProductGrid, ProductCard
    │   ├── product-detail/
    │   │   ├── ProductDetail.tsx     Chọn layout theo product.layout
    │   │   ├── sections.tsx          Bảng tên section → component
    │   │   ├── layouts/              DefaultLayout, StackedLayout (+ layout riêng)
    │   │   └── Spin360, Description, Gallery, Feedback, Installation,
    │   │       VideoEmbed, CustomCta, BuyButtons
    │   └── custom/                   CustomIntro, CustomProcess, CustomMethods,
    │                                 CustomProducts, CustomContact
    ├── data/
    │   ├── site.ts                   Liên hệ, địa chỉ, map, link mạng xã hội
    │   ├── categories.ts             Loại sản phẩm, dòng xe (bộ lọc)
    │   ├── colors.ts                 Màu sơn
    │   └── products/                 index.ts + mỗi sản phẩm một file <slug>.ts
    ├── i18n/                         translations.ts, locales/vi.json, en.json
    ├── contexts/ providers/ hooks/   LanguageProvider, useLanguage, useLocalized
    ├── lib/                          cn(), helper đường dẫn ảnh
    ├── styles/                       colors.css, typography.css, globals.css
    └── types/                        Product, SiteConfig, Localized
```

## Sửa nội dung

| Muốn sửa | File |
|---|---|
| Số điện thoại, địa chỉ, map, link Zalo/Facebook/TikTok/Shopee | `src/data/site.ts` |
| Chữ trên giao diện (menu, tiêu đề, nút) | `src/i18n/locales/vi.json`, `en.json` |
| Sản phẩm | `src/data/products/<slug>.ts` |
| Sản phẩm trên trang Custom | Sản phẩm có `category: "custom"` trong `src/data/products/` |
| Màu | `src/styles/colors.css` |

## Thêm sản phẩm mới

1. Tạo thư mục `public/images/products/<slug>/` gồm các thư mục con `spin/`, `gallery/`, `feedback/`, `install/` rồi bỏ ảnh `.webp` vào. Trong file data, đổi ảnh mock (`mockImages`, `mockSpin`) sang `numberedImages(slug, ...)`, `spinImages(slug)`. Chưa có ảnh thì cứ để ảnh mock.
2. Copy `src/data/products/combo-scrambler-classic-xsr155.ts` thành `<slug>.ts`, sửa nội dung.
3. Thêm sản phẩm vào mảng `products` trong `src/data/products/index.ts`.
4. Sắp xếp `sections` để đổi thứ tự section; đặt `layout: "stacked"` hoặc một layout tự viết nếu cần giao diện khác.
