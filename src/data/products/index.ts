import type { Product } from "@/types";
import { comboScramblerXsr155 } from "./combo-scrambler-xsr155";

/** Thêm sản phẩm mới: tạo file <slug>.ts rồi thêm vào mảng này. Thứ tự mảng = thứ tự hiển thị. */
export const products: Product[] = [comboScramblerXsr155];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const featuredProducts = () => products.filter((p) => p.featured);
