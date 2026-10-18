import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Container } from "./Container";

/** Khối section chuẩn: padding dọc + tiêu đề. `tone="dark"` cho section nền đen nổi bật. */
export function Section({
  id,
  title,
  tone = "light",
  className,
  children,
}: {
  id?: string;
  title?: ReactNode;
  tone?: "light" | "muted" | "dark";
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-12 md:py-20",
        tone === "muted" && "bg-surface",
        tone === "dark" && "bg-ink text-paper",
        className,
      )}
    >
      <Container>
        {title && <h2 className="text-h2 mb-6 md:mb-10">{title}</h2>}
        {children}
      </Container>
    </section>
  );
}
