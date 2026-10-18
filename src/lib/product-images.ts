const base = (slug: string) => `/images/products/${slug}`;

/** 01.webp … 08.webp trong public/images/products/<slug>/spin */
export const spinImages = (slug: string, count = 8) =>
  Array.from({ length: count }, (_, i) => `${base(slug)}/spin/${String(i + 1).padStart(2, "0")}.webp`);

export const productImage = (slug: string, folder: "gallery" | "feedback" | "install", file: string) =>
  `${base(slug)}/${folder}/${file}`;
