"use client";

import { Container } from "@/components/ui/Container";
import type { Product } from "@/types";
import { INLINE_SECTIONS, ProductSectionView, StandaloneSection } from "../sections";

/**
 * Layout mặc định: phần đầu trang chia 2 cột (spin360 bên trái, mô tả + nút mua bên phải),
 * các section còn lại xếp dọc theo đúng thứ tự trong `product.sections`.
 */
export function DefaultLayout({ product }: { product: Product }) {
  const { sections } = product;
  const hero = sections.filter((s) => INLINE_SECTIONS.includes(s));
  const rest = sections.filter((s) => !INLINE_SECTIONS.includes(s));
  const left = hero.includes("spin360") ? "spin360" : null;
  const right = hero.filter((s) => s !== left);

  return (
    <>
      {hero.length > 0 && (
        <Container className="grid gap-8 py-8 md:grid-cols-2 md:gap-12 md:py-12">
          <div>{left && <ProductSectionView name={left} product={product} />}</div>
          <div className="space-y-8">
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
