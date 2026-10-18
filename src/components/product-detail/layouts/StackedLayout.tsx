"use client";

import type { Product } from "@/types";
import { StandaloneSection } from "../sections";

/** Layout xếp dọc toàn bộ section, mỗi section full width. Dùng: `layout: "stacked"`. */
export function StackedLayout({ product }: { product: Product }) {
  return product.sections.map((s) => <StandaloneSection key={s} name={s} product={product} />);
}
