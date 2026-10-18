import type { Metadata } from "next";

import { ProductListView } from "@/components/product-list/ProductListView";

export const metadata: Metadata = { title: "Sản phẩm" };

export default function ProductsPage() {
  return <ProductListView />;
}
