type Folder = "spin" | "gallery" | "feedback" | "install";

const base = (slug: string) => `/images/products/${slug}`;

export const productImage = (slug: string, folder: Folder, file: string) => `${base(slug)}/${folder}/${file}`;

/** 01.webp … <count>.webp trong public/images/products/<slug>/<folder> */
export const numberedImages = (slug: string, folder: Folder, count: number) =>
  Array.from({ length: count }, (_, i) => productImage(slug, folder, `${String(i + 1).padStart(2, "0")}.webp`));

/** 8 ảnh xoay giả 3D: spin/01.webp … spin/08.webp */
export const spinImages = (slug: string, count = 8) => numberedImages(slug, "spin", count);
