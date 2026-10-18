import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductDetail } from "@/components/product-detail/ProductDetail";
import { getProduct, products } from "@/data/products";

type Props = { params: Promise<{ slug: string }> };

// Web tĩnh: chỉ sinh trang cho các slug có trong src/data/products
export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return {
    title: product.name.vi,
    description: product.shortDescription.vi,
    openGraph: { images: [product.thumbnail] },
  };
}

export default async function ProductPage({ params }: Props) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
