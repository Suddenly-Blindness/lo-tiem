"use client";

import type { Product } from "@/types";
import { productLayouts } from "./layouts";

export function ProductDetail({ product }: { product: Product }) {
  const Layout = productLayouts[product.layout ?? "default"] ?? productLayouts.default;
  return <Layout product={product} />;
}
