import type { Product } from "@/types";
import { opHongXsr155 } from "./op-hong-xsr155";
import { opHongExciter155 } from "./op-hong-exciter155";
import { opHongMt15 } from "./op-hong-mt15";
import { opHongWinner } from "./op-hong-winner";
import { opHongFz150i } from "./op-hong-fz150i";
import { opHongSnapIn } from "./op-hong-snap-in";
import { dauDenXsr155 } from "./dau-den-xsr155";
import { opMayXsr155 } from "./op-may-xsr155";
import { opPhuocDePhuXsr155 } from "./op-phuoc-de-phu-xsr155";
import { opPhuocTruocXsr155 } from "./op-phuoc-truoc-xsr155";
import { comboScramblerClassicXsr155 } from "./combo-scrambler-classic-xsr155";

/** Thêm sản phẩm mới: tạo file <slug>.ts rồi thêm vào mảng này. Thứ tự mảng = thứ tự hiển thị. */
export const products: Product[] = [
  opHongXsr155,
  opHongExciter155,
  opHongMt15,
  opHongWinner,
  opHongFz150i,
  opHongSnapIn,
  dauDenXsr155,
  opMayXsr155,
  opPhuocDePhuXsr155,
  opPhuocTruocXsr155,
  comboScramblerClassicXsr155,
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

// TODO: chủ shop chọn sản phẩm tiêu biểu bằng field `featured`
export const featuredProducts = () => products.filter((p) => p.featured);
