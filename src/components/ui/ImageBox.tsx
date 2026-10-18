import { cn } from "@/lib/utils";

/** Ảnh có khung tỉ lệ cố định và nền xám khi ảnh chưa tải / chưa có. */
export function ImageBox({
  src,
  alt,
  ratio = "aspect-square",
  className,
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-surface", ratio, className)}>
      {/* eslint-disable-next-line @next/next/no-img-element -- web tĩnh, ảnh không qua optimizer */}
      <img src={src} alt={alt} loading="lazy" className="absolute inset-0 size-full object-cover" />
    </div>
  );
}
