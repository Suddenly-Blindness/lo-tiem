# Lỏ Tiệm

Web tĩnh giới thiệu sản phẩm custom handmade cho xe máy (ốp chắn bùn hông, ốp máy, combo scrambler cho XSR 155, MT-15, Exciter, Winner) và dịch vụ custom theo yêu cầu. Không bán hàng trên web: khách mua qua Zalo / Facebook / TikTok hoặc link Shopee.

Yêu cầu đầy đủ: [docs/REQUIREMENTS.md](docs/REQUIREMENTS.md). Cây thư mục và hướng dẫn sửa nội dung: [README.md](README.md). Đọc REQUIREMENTS trước khi thêm tính năng.

## Lệnh

```bash
npm run dev      # localhost:3000
npm run build    # xuất web tĩnh ra out/
npm run lint
npx tsc --noEmit
```

Không có test. Sau khi sửa, chạy `npx tsc --noEmit`, `npm run lint` và `npm run build`.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, lucide-react.

Next 16 khác các bản cũ: `params` của page là `Promise`, phải `await`. Khi không chắc API, đọc tài liệu trong `node_modules/next/dist/docs/` thay vì dựa vào trí nhớ.

## Ràng buộc web tĩnh

`next.config.ts` đặt `output: "export"`. Vì vậy:

- Không dùng API route, Server Action, middleware, `cookies()`, `headers()`, ISR, hay bất cứ gì cần server lúc chạy.
- Route động phải có `generateStaticParams` và `dynamicParams = false`, như `src/app/san-pham/[slug]/page.tsx`.
- Không có form gửi dữ liệu. Mọi liên hệ đi qua link mạng xã hội trong `src/data/site.ts`.
- Ảnh dùng thẻ `<img>` thường, qua component `ImageBox` (`images.unoptimized: true`). Không dùng `next/image` cho ảnh sản phẩm.
- Ảnh nội dung (gallery, feedback, bước lắp đặt) phải bấm được để phóng to: `const { open, lightbox } = useLightbox(images, alt)` từ `src/components/ui/Lightbox.tsx`, truyền `onClick={() => open(i)}` cho `ImageBox` và render `{lightbox}`.
- Feedback chỉ là danh sách ảnh xe khách (`feedback: string[]`), ẩn danh, không có tên hay nhận xét.
- `trailingSlash: true`: link nội bộ viết có dấu `/` ở cuối (`/san-pham/`, `/custom/`).
- Nội dung (sản phẩm, ảnh, feedback) nằm trong code. Không thêm CMS, database hay fetch dữ liệu từ ngoài.

## Cấu trúc

- `src/app/`: route. Page chỉ ghép các section, không chứa giao diện chi tiết.
- `src/components/<màn>/`: section theo từng màn (`home`, `product-list`, `product-detail`, `custom`). `layout/` là Header, Footer, SocialLinks. `ui/` là component dùng chung (`Section`, `Container`, `ButtonLink`, `ImageBox`). `icons/` là icon SVG.
- `src/data/`: toàn bộ nội dung. `site.ts` (liên hệ, map, link mạng xã hội), `categories.ts`, `colors.ts`, `products/`. Trang Custom tự lấy sản phẩm có `category: "custom"`.
- `src/types/`: `Product`, `SiteConfig`, `Localized`.
- `src/i18n/`, `src/providers/`, `src/contexts/`, `src/hooks/`: đa ngôn ngữ.
- `src/styles/`: `colors.css`, `typography.css`, `globals.css`.

### Trang chi tiết sản phẩm

Mỗi sản phẩm là một file `src/data/products/<slug>.ts`, đăng ký trong `src/data/products/index.ts`. Ảnh nằm ở `public/images/products/<slug>/{spin,gallery,feedback,install}/`. Sản phẩm chưa có ảnh thật dùng ảnh mock chung trong `public/images/mock/` qua `src/lib/mock-images.ts`. Không tạo thư mục ảnh rỗng hay file `.gitkeep`: chỉ tạo thư mục khi có ảnh thật.

- `product.sections`: danh sách section theo thứ tự hiển thị.
- `product.layout`: tên layout trong `src/components/product-detail/layouts/index.ts` (`default`, `stacked`).
- Bảng tên section → component nằm ở `src/components/product-detail/sections.tsx`. Section mới: thêm tên vào `ProductSection` trong `src/types/product.ts`, rồi thêm vào bảng này.
- Layout riêng cho một sản phẩm: tạo component trong `layouts/`, đăng ký vào `layouts/index.ts`. Không viết `if (slug === ...)` trong component dùng chung.

## Đa ngôn ngữ

Tiếng Việt là mặc định, có thêm tiếng Anh. Không có route `/en`: ngôn ngữ đổi ở client và lưu trong `localStorage` (`lotiem-lang`).

- Text giao diện: `const { t } = useLanguage()`. Key thêm vào **cả** `src/i18n/locales/vi.json` và `en.json`.
- Nội dung trong data dùng kiểu `Localized` (`{ vi, en }`), hiển thị qua `const l = useLocalized(); l(product.name)`.
- Component dùng `t()` hoặc `l()` phải có `"use client"`.
- Metadata SEO (`metadata`, `generateMetadata`) viết bằng tiếng Việt, vì chạy lúc build nên không biết ngôn ngữ người xem.
- Không viết text hiển thị cứng trong JSX.

## Giao diện

- Chỉ dùng đen, trắng, xám. Màu lấy từ token trong `src/styles/colors.css` (`ink`, `paper`, `surface`, `muted`, `line`, `gray-*`). Không viết mã hex hay màu khác trong component.
- Cỡ chữ dùng class trong `src/styles/typography.css` (`text-display`, `text-h1`, `text-h2`, `text-h3`, `text-body`, `text-caption`).
- Section bọc bằng `<Section tone="light" | "muted" | "dark">`.
- Footer nền đen. Section nằm ngay trên footer **không được** dùng `tone="dark"`, nếu không sẽ dính liền với footer. Dùng `muted` thay thế.
- Thiết kế mobile trước, rồi mở rộng bằng `md:` và `lg:`. Kiểm tra cả ở chiều rộng khoảng 375px.
- Icon thường lấy từ `lucide-react`. Icon thương hiệu (Zalo, Facebook, TikTok, Shopee) nằm trong `src/components/icons/`. Không viết SVG inline trong file page hay section.

## Lưu ý khác

- `allowedDevOrigins` trong `next.config.ts` cho phép mở bản dev qua ngrok. Không gửi link ngrok cho khách: hãy build rồi deploy thư mục `out/` lên host tĩnh (Netlify, Cloudflare Pages, Vercel).
- Thông tin shop trong `src/data/site.ts` và sản phẩm mẫu `combo-scrambler-classic-xsr155` hiện là dữ liệu giả. Đừng coi là thông tin thật.
- Ảnh dùng định dạng `.webp`. Ảnh xoay 3D đặt tên `01.webp` … `08.webp`.
