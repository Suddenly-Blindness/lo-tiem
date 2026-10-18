import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "inverse";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-paper hover:bg-gray-800",
  outline: "border border-ink text-ink hover:bg-ink hover:text-paper",
  inverse: "bg-paper text-ink hover:bg-gray-200",
};

export const buttonClass = (variant: Variant = "solid", className?: string) =>
  cn(
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors",
    variants[variant],
    className,
  );

/** Link dạng nút. Link ngoài (http…) tự mở tab mới. */
export function ButtonLink({
  href,
  variant,
  className,
  ...props
}: ComponentProps<typeof Link> & { href: string; variant?: Variant }) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      className={buttonClass(variant, className)}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    />
  );
}
