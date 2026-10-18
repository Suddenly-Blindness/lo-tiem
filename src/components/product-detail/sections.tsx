"use client";

import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/hooks/useLanguage";
import { useLocalized } from "@/hooks/useLocalized";
import type { Product, ProductSection } from "@/types";
import { BuyButtons } from "./BuyButtons";
import { CustomCta } from "./CustomCta";
import { Description } from "./Description";
import { Feedback } from "./Feedback";
import { Gallery } from "./Gallery";
import { Installation } from "./Installation";
import { Spin360 } from "./Spin360";
import { Summary } from "./Summary";

/** Render một section theo tên. Layout nào cũng dùng hàm này nên thêm section mới chỉ cần sửa ở đây. */
export function ProductSectionView({ name, product }: { name: ProductSection; product: Product }) {
  const l = useLocalized();
  const alt = l(product.name);

  const views: Record<ProductSection, ReactNode> = {
    spin360: <Spin360 images={product.spinImages} alt={alt} />,
    summary: <Summary product={product} />,
    description: <Description product={product} />,
    buy: <BuyButtons product={product} />,
    gallery: <Gallery images={product.gallery} alt={alt} />,
    feedback: <Feedback images={product.feedback} />,
    installation: <Installation installation={product.installation} />,
    customCta: <CustomCta />,
  };
  return views[name];
}

/** Section nhỏ (không tự có <Section>), cần bọc Container khi đứng riêng. */
export const INLINE_SECTIONS: ProductSection[] = ["spin360", "summary", "buy"];

export function StandaloneSection({ name, product }: { name: ProductSection; product: Product }) {
  const { t } = useLanguage();
  // Mua hàng đứng riêng thì thành section chuẩn (tiêu đề lớn, rộng hết khung) như các section khác
  if (name === "buy") {
    return (
      <Section title={t("product.buyTitle")} tone="muted">
        <BuyButtons product={product} wide />
      </Section>
    );
  }
  const view = <ProductSectionView name={name} product={product} />;
  return INLINE_SECTIONS.includes(name) ? <Container className="py-8">{view}</Container> : view;
}
