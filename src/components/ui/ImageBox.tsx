import { cn } from "@/lib/utils";

/**
 * Ảnh có khung tỉ lệ cố định và nền xám khi ảnh chưa tải / chưa có.
 * Truyền `onClick` để ảnh bấm được (mở lightbox).
 */
export function ImageBox({
  src,
  alt,
  ratio = "aspect-square",
  className,
  onClick,
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  onClick?: () => void;
}) {
  const box = cn("relative block w-full overflow-hidden bg-surface", ratio, className);
  /* eslint-disable-next-line @next/next/no-img-element -- web tĩnh, ảnh không qua optimizer */
  const img = <img src={src} alt={alt} loading="lazy" className="absolute inset-0 size-full object-cover" />;

  if (!onClick) return <div className={box}>{img}</div>;
  return (
    <button type="button" onClick={onClick} aria-label={alt} className={cn(box, "group/zoom cursor-zoom-in")}>
      {img}
      <span className="absolute inset-0 bg-ink/0 transition-colors group-hover/zoom:bg-ink/10" />
    </button>
  );
}
