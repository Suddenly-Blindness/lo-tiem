// Ảnh tạm dùng chung (public/images/mock) khi sản phẩm chưa có ảnh thật.
// Có ảnh thật thì đổi sang numberedImages / spinImages trong lib/product-images.ts.

const EMPTY = "/images/mock/empty.svg";

/** `count` ảnh trống */
export const mockImages = (count: number) => Array.from({ length: count }, () => EMPTY);

/** 8 ảnh xoay mock */
export const mockSpin = () =>
  Array.from({ length: 8 }, (_, i) => `/images/mock/spin-${String(i + 1).padStart(2, "0")}.svg`);
