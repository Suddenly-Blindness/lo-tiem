import type { ComponentType } from "react";

import type { Product } from "@/types";
import { DefaultLayout } from "./DefaultLayout";
import { StackedLayout } from "./StackedLayout";

/**
 * Sản phẩm cần giao diện riêng: tạo file layout mới trong thư mục này,
 * đăng ký vào đây rồi đặt `layout: "<tên>"` trong data sản phẩm.
 */
export const productLayouts: Record<string, ComponentType<{ product: Product }>> = {
  default: DefaultLayout,
  stacked: StackedLayout,
};
