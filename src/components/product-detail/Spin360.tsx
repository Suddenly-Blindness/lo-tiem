"use client";

import { useRef, useState, type PointerEvent } from "react";

import { useLanguage } from "@/hooks/useLanguage";

/** Số pixel kéo để chuyển sang ảnh kế tiếp */
const STEP_PX = 40;

/** Xoay giả 3D: kéo chuột / vuốt ngang để đổi qua lại giữa các ảnh chụp quanh sản phẩm. */
export function Spin360({ images, alt }: { images: string[]; alt: string }) {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const drag = useRef<{ x: number; index: number } | null>(null);

  if (!images.length) return null;

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { x: e.clientX, index };
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    const delta = Math.round((e.clientX - drag.current.x) / STEP_PX);
    const n = images.length;
    setIndex((((drag.current.index - delta) % n) + n) % n);
  };
  const onPointerUp = () => {
    drag.current = null;
  };

  return (
    <div>
      <div
        className="relative aspect-square cursor-grab touch-pan-y select-none bg-surface active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* Render sẵn mọi ảnh để khi xoay không bị nháy */}
        {images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt={i === index ? alt : ""}
            draggable={false}
            className="absolute inset-0 size-full object-contain"
            style={{ opacity: i === index ? 1 : 0 }}
          />
        ))}
      </div>
      <p className="text-caption mt-2 text-center text-muted">↔ {t("product.spinHint")}</p>
    </div>
  );
}
