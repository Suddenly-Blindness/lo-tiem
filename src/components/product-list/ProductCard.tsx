"use client";

import Link from "next/link";

import { ImageBox } from "@/components/ui/ImageBox";
import { useLocalized } from "@/hooks/useLocalized";
import type { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  const l = useLocalized();
  return (
    <Link href={`/san-pham/${product.slug}/`} className="group block">
      <ImageBox
        src={product.thumbnail}
        alt={l(product.name)}
        className="transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <p className="text-caption mt-3 text-muted">{product.bikes.join(" · ")}</p>
      <h3 className="text-h3 mt-1 group-hover:underline">{l(product.name)}</h3>
    </Link>
  );
}
