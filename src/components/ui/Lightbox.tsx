"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent, type PointerEvent, type WheelEvent } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { useLanguage } from "@/hooks/useLanguage";

const MAX_SCALE = 4;
const DOUBLE_CLICK_SCALE = 2.5;
/** Vuốt ngang quá số pixel này thì chuyển ảnh */
const SWIPE_PX = 50;

type View = { scale: number; x: number; y: number };
type Point = { x: number; y: number };

const RESET: View = { scale: 1, x: 0, y: 0 };

const clampScale = (s: number) => Math.min(MAX_SCALE, Math.max(1, s));
const distance = (a: Point, b: Point) => Math.hypot(a.x - b.x, a.y - b.y);

/**
 * Xem ảnh toàn màn hình: mũi tên / phím ← → / vuốt để chuyển ảnh,
 * chụm 2 ngón / nhấp đúp / cuộn chuột để phóng to, Esc / X / bấm ra ngoài để đóng.
 */
function Lightbox({
  images,
  index,
  alt,
  onIndexChange,
  onClose,
}: {
  images: string[];
  index: number;
  alt: string;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}) {
  const { t } = useLanguage();
  const [view, setViewState] = useState<View>(RESET);
  const viewRef = useRef<View>(RESET);
  const pointers = useRef(new Map<number, Point>());
  const gesture = useRef<{ start: Point; view: View; pinchDist?: number } | null>(null);
  const moved = useRef(false);
  const count = images.length;

  const setView = (v: View) => {
    viewRef.current = v;
    setViewState(v);
  };

  const go = useCallback(
    (delta: number) => {
      if (count < 2) return;
      viewRef.current = RESET;
      setViewState(RESET);
      onIndexChange((index + delta + count) % count);
    },
    [count, index, onIndexChange],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  // Khoá cuộn trang phía sau khi đang xem ảnh
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  /** Toạ độ con trỏ so với tâm vùng ảnh (gốc của transform) */
  const fromCenter = (el: HTMLElement, clientX: number, clientY: number): Point => {
    const r = el.getBoundingClientRect();
    return { x: clientX - (r.left + r.width / 2), y: clientY - (r.top + r.height / 2) };
  };

  /** Phóng to quanh điểm p, giữ điểm đó đứng yên trên màn hình */
  const zoomAt = (p: Point, nextScale: number) => {
    const v = viewRef.current;
    const s = clampScale(nextScale);
    if (s === 1) return setView(RESET);
    const k = s / v.scale;
    setView({ scale: s, x: p.x - (p.x - v.x) * k, y: p.y - (p.y - v.y) * k });
  };

  const startGesture = () => {
    const pts = [...pointers.current.values()];
    gesture.current = {
      start: pts[0],
      view: viewRef.current,
      pinchDist: pts.length === 2 ? distance(pts[0], pts[1]) : undefined,
    };
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (pointers.current.size === 0) moved.current = false;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    startGesture();
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!pointers.current.has(e.pointerId) || !gesture.current) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const g = gesture.current;
    const pts = [...pointers.current.values()];

    if (pts.length === 2 && g.pinchDist) {
      moved.current = true;
      setView({ ...g.view, scale: clampScale((g.view.scale * distance(pts[0], pts[1])) / g.pinchDist) });
      return;
    }
    const dx = pts[0].x - g.start.x;
    const dy = pts[0].y - g.start.y;
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) moved.current = true;
    // Đang phóng to thì kéo để di chuyển ảnh; chưa phóng to thì để dành cho thao tác vuốt
    if (g.view.scale > 1) setView({ ...g.view, x: g.view.x + dx, y: g.view.y + dy });
  };

  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (!pointers.current.has(e.pointerId)) return;
    const g = gesture.current;
    const wasSingle = pointers.current.size === 1;
    pointers.current.delete(e.pointerId);

    if (wasSingle && g && !g.pinchDist && g.view.scale === 1) {
      const dx = e.clientX - g.start.x;
      const dy = e.clientY - g.start.y;
      if (Math.abs(dx) > SWIPE_PX && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
    }
    if (viewRef.current.scale < 1.05) setView(RESET);

    if (pointers.current.size > 0) startGesture();
    else gesture.current = null;
  };

  const onDoubleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (viewRef.current.scale > 1) return setView(RESET);
    zoomAt(fromCenter(e.currentTarget, e.clientX, e.clientY), DOUBLE_CLICK_SCALE);
  };

  const onWheel = (e: WheelEvent<HTMLDivElement>) => {
    zoomAt(fromCenter(e.currentTarget, e.clientX, e.clientY), viewRef.current.scale * (1 - e.deltaY * 0.002));
  };

  /** Bấm vào nền (không phải ảnh, không phải vừa kéo) thì đóng */
  const onStageClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!moved.current && e.target === e.currentTarget) onClose();
  };

  const arrow = "absolute top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center bg-ink/60 hover:bg-ink md:flex";

  return createPortal(
    <div role="dialog" aria-modal="true" aria-label={alt} className="fixed inset-0 z-50 flex flex-col bg-ink/95 text-paper">
      <div className="flex h-14 shrink-0 items-center justify-between px-4">
        <span className="text-sm font-semibold tabular-nums">
          {index + 1} / {count}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label={t("lightbox.close")}
          className="flex size-10 items-center justify-center"
        >
          <X className="size-6" />
        </button>
      </div>

      <div className="relative flex-1 overflow-hidden">
        <div
          className="absolute inset-0 flex touch-none select-none items-center justify-center"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onPointerLeave={onPointerUp}
          onDoubleClick={onDoubleClick}
          onWheel={onWheel}
          onClick={onStageClick}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[index]}
            alt={`${alt} ${index + 1}`}
            draggable={false}
            className="max-h-full max-w-full object-contain"
            style={{
              transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})`,
              cursor: view.scale > 1 ? "grab" : "zoom-in",
            }}
          />
        </div>
        {count > 1 && (
          <>
            <button type="button" onClick={() => go(-1)} aria-label={t("lightbox.prev")} className={`${arrow} left-4`}>
              <ChevronLeft className="size-7" />
            </button>
            <button type="button" onClick={() => go(1)} aria-label={t("lightbox.next")} className={`${arrow} right-4`}>
              <ChevronRight className="size-7" />
            </button>
          </>
        )}
      </div>
    </div>,
    document.body,
  );
}

/**
 * Gắn lightbox cho một nhóm ảnh:
 * `const { open, lightbox } = useLightbox(images, alt)`, gọi `open(i)` khi bấm ảnh thứ i
 * và render `{lightbox}` ở đâu đó trong component.
 */
export function useLightbox(images: string[], alt: string) {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const lightbox =
    index === null ? null : (
      <Lightbox images={images} index={index} alt={alt} onIndexChange={setIndex} onClose={close} />
    );
  return { open: setIndex, lightbox };
}
