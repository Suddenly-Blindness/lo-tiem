"use client";

import { Container } from "@/components/ui/Container";
import type { Product } from "@/types";
import { INLINE_SECTIONS, ProductSectionView, StandaloneSection } from "../sections";

/**
 * Layout mặc định: các section nhỏ (INLINE_SECTIONS) đứng liền nhau ở đầu `product.sections` tạo thành
 * phần đầu trang 2 cột: spin360 bên trái (dính màn hình khi cuộn), các section còn lại của nhóm bên phải.
 * Phần sau xếp dọc đúng thứ tự, ví dụ đặt "buy" sau "description" thì khối mua hàng nằm dưới mô tả.
 */
export function DefaultLayout({ product }: { product: Product }) {
  const { sections } = product;
  const firstBlock = sections.findIndex((s) => !INLINE_SECTIONS.includes(s));
  const hero = firstBlock === -1 ? sections : sections.slice(0, firstBlock);
  const rest = sections.slice(hero.length);
  const left = hero.includes("spin360") ? "spin360" : null;
  const right = hero.filter((s) => s !== left);

  return (
    <>
      {hero.length > 0 && (
        <Container className="grid gap-8 py-8 md:grid-cols-2 md:gap-12 md:py-12">
          <div className="md:sticky md:top-24 md:self-start">
            {left && <ProductSectionView name={left} product={product} />}
          </div>
          <div className="space-y-8 md:self-center">
            {right.map((s) => (
              <ProductSectionView key={s} name={s} product={product} />
            ))}
          </div>
        </Container>
      )}
      {rest.map((s) => (
        <StandaloneSection key={s} name={s} product={product} />
      ))}
    </>
  );
}
