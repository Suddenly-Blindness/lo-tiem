"use client";

import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { useLocalized } from "@/hooks/useLocalized";
import type { Product, ProductSection } from "@/types";
import { BuyButtons } from "./BuyButtons";
import { CustomCta } from "./CustomCta";
import { Description } from "./Description";
import { Feedback } from "./Feedback";
import { Gallery } from "./Gallery";
import { Installation } from "./Installation";
import { Spin360 } from "./Spin360";

/** Render một section theo tên. Layout nào cũng dùng hàm này nên thêm section mới chỉ cần sửa ở đây. */
export function ProductSectionView({ name, product }: { name: ProductSection; product: Product }) {
  const l = useLocalized();
  const alt = l(product.name);

  const views: Record<ProductSection, ReactNode> = {
    spin360: <Spin360 images={product.spinImages} alt={alt} />,
    description: <Description product={product} />,
    buy: <BuyButtons shopeeUrl={product.shopeeUrl} />,
    gallery: <Gallery images={product.gallery} alt={alt} />,
    feedback: <Feedback items={product.feedback} />,
    installation: <Installation installation={product.installation} />,
    customCta: <CustomCta />,
  };
  return views[name];
}

/** Section nhỏ (không tự có <Section>), cần bọc Container khi đứng riêng. */
export const INLINE_SECTIONS: ProductSection[] = ["spin360", "description", "buy"];

export function StandaloneSection({ name, product }: { name: ProductSection; product: Product }) {
  const view = <ProductSectionView name={name} product={product} />;
  return INLINE_SECTIONS.includes(name) ? <Container className="py-8">{view}</Container> : view;
}
